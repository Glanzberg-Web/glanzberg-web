// Deploy separately as a Cloudflare Worker.
// Resend secrets must live in Worker configuration and NEVER in GitHub Pages.
const maxRequestLength = 12000;
const allowedServices = new Set(["", "New website", "Redesign", "Updates", "Landing page", "Not sure"]);
const clean = (value, length) => typeof value === "string" ? value.trim().slice(0, length) : "";
const escapeHtml = (value) => value.replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[c]);

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const origins = (env.ALLOWED_ORIGINS || "").split(",").map((x) => x.trim()).filter(Boolean);
    const allowed = origins.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
      "Cache-Control": "no-store",
    };
    const respond = (data, status = 200) => new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json", ...(allowed ? cors : {}) },
    });

    if (!allowed) return respond({ error: "Origin not allowed." }, 403);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return respond({ error: "Method not allowed." }, 405);
    if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
      return respond({ error: "The inquiry form is not available yet." }, 503);
    }
    if (!(request.headers.get("Content-Type") || "").toLowerCase().includes("application/json")) {
      return respond({ error: "Invalid submission." }, 415);
    }

    try {
      const raw = await request.text();
      if (raw.length > maxRequestLength) return respond({ error: "Your message is too long." }, 413);
      const data = JSON.parse(raw);
      if (!data || Array.isArray(data) || typeof data !== "object") {
        return respond({ error: "Invalid submission." }, 400);
      }
      // Honeypot: indicate success without sending anything.
      if (clean(data.website, 200)) return respond({ success: true });
      const name = clean(data.name, 120);
      const email = clean(data.email, 180);
      const business = clean(data.business, 150);
      const service = clean(data.service, 80);
      const message = clean(data.message, 5000);
      if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10 ||
          !allowedServices.has(service) ||
          String(data.name || "").length > 120 ||
          String(data.email || "").length > 180 ||
          String(data.message || "").length > 5000) {
        return respond({ error: "Please check the required fields and try again." }, 400);
      }

      const rows = [
        ["Name", name], ["Email", email], ["Business", business || "Not provided"],
        ["Service", service || "Not specified"], ["Message", message],
      ];
      const html = '<div style="font:16px/1.6 Arial,sans-serif"><h2>New website inquiry</h2>' +
        rows.map(([key, value]) => '<p><strong>' + escapeHtml(key) + '</strong><br>' +
          escapeHtml(value).replace(/\n/g, "<br>") + "</p>").join("") + "</div>";
      const resend = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Authorization": "Bearer " + env.RESEND_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: env.CONTACT_FROM_EMAIL,
          to: [env.CONTACT_TO_EMAIL],
          reply_to: email,
          subject: "New Glanzberg Web inquiry from " + name,
          html,
          text: rows.map(([key, value]) => key + ": " + value).join("\n\n"),
        }),
      });
      if (!resend.ok) {
        console.error("Resend delivery failed:", resend.status);
        return respond({ error: "Message delivery is unavailable. Please try again later." }, 502);
      }
      return respond({ success: true });
    } catch (error) {
      console.error("Inquiry failure", error instanceof Error ? error.name : "unknown");
      return respond({ error: "Your message could not be sent right now." }, 500);
    }
  },
};

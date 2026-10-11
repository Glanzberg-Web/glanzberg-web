import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedServices = new Set(["", "New website", "Redesign", "Updates", "Landing page", "Not sure"]);

function clean(value, limit) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return NextResponse.json({ error: "The inquiry form is not available yet." }, { status: 503 });
  }

  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json({ error: "Invalid submission format." }, { status: 415 });
    }
    const raw = await request.text();
    if (raw.length > 12000) {
      return NextResponse.json({ error: "Your message is too long." }, { status: 413 });
    }

    const data = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }

    if (clean(data.website, 200)) {
      return NextResponse.json({ success: true });
    }

    const name = clean(data.name, 120);
    const email = clean(data.email, 180);
    const business = clean(data.business, 150);
    const service = clean(data.service, 80);
    const message = clean(data.message, 5000);

    if (name.length < 2 || !emailPattern.test(email) || message.length < 10 || message.length > 5000 || !allowedServices.has(service)) {
      return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
    }
    if (String(data.message || "").length > 5000 || String(data.name || "").length > 120 || String(data.email || "").length > 180) {
      return NextResponse.json({ error: "Please shorten your message and try again." }, { status: 400 });
    }

    const rows = [
      ["Name", name],
      ["Email", email],
      ["Business", business || "Not provided"],
      ["Service", service || "Not specified"],
      ["Message", message],
    ];
    const html = '<div style="font:16px/1.6 Arial,sans-serif;color:#1a1d19"><h2>New website inquiry</h2>' +
      rows.map(([key, value]) => '<p><strong>' + escapeHtml(key) + ':</strong><br>' + escapeHtml(value).replace(/\n/g, "<br>") + "</p>").join("") +
      "</div>";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: "New Glanzberg Web inquiry from " + name,
        html,
        text: rows.map(([key, value]) => key + ": " + value).join("\n\n"),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Resend contact form delivery failed with status", response.status);
      return NextResponse.json({ error: "We couldn’t send your message right now. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid submission format." }, { status: 400 });
    }
    console.error("Contact form error:", error instanceof Error ? error.name : "Unknown error");
    return NextResponse.json({ error: "We couldn’t send your message. Please try again." }, { status: 500 });
  }
}

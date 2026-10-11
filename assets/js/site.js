(() => {
  "use strict";
  const menu = document.querySelector(".menu-toggle");
  const mobile = document.getElementById("mobile-navigation");
  function toggleMenu(open) {
    if (!menu || !mobile) return;
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobile.classList.toggle("open", open);
    mobile.inert = !open;
    document.querySelector(".menu-bars")?.classList.toggle("open", open);
  }
  if (menu && mobile) {
    menu.addEventListener("click", () => toggleMenu(menu.getAttribute("aria-expanded") !== "true"));
    document.addEventListener("keydown", e => { if (e.key === "Escape") toggleMenu(false); });
    document.addEventListener("click", e => {
      if (menu.getAttribute("aria-expanded") === "true" && !e.target.closest(".site-header")) toggleMenu(false);
    });
    mobile.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggleMenu(false)));
  }
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  // Fit a real, noninteractive demo viewport into each portfolio frame.
  let resizeScheduled = false;
  function sizePreviews() {
    resizeScheduled = false;
    document.querySelectorAll(".live-preview").forEach(box => {
      const frame = box.querySelector(".site-preview-frame");
      if (!frame) return;
      const width = Math.max(1, box.clientWidth);
      const scale = width / 1440;
      frame.style.transform = "scale(" + scale + ")";
      frame.style.height = Math.ceil(box.clientHeight / scale) + "px";
    });
  }
  const schedulePreviewResize = () => {
    if (resizeScheduled) return;
    resizeScheduled = true;
    requestAnimationFrame(sizePreviews);
  };
  schedulePreviewResize();
  window.addEventListener("resize", schedulePreviewResize, { passive: true });
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(schedulePreviewResize);
    document.querySelectorAll(".live-preview").forEach(box => observer.observe(box));
  }

  // No offscreen element is hidden: users can navigate before JavaScript loads.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".service-card, .project-card, .process-card, .pricing-card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .06 });
    targets.forEach(el => observer.observe(el));
  }

  const form = document.getElementById("inquiry-form");
  if (!form) return;
  const endpoint = (window.GL_STUDIO_CONFIG?.contactEndpoint || "").trim();
  const submit = document.getElementById("submit-inquiry");
  const notice = document.getElementById("form-notice");
  const feedback = document.getElementById("form-feedback");
  if (!/^https:\/\//i.test(endpoint)) return;
  submit.disabled = false;
  notice.hidden = true;
  const showFeedback = (message, success) => {
    feedback.hidden = false;
    feedback.textContent = message;
    feedback.className = "form-feedback " + (success ? "success" : "error");
    feedback.setAttribute("role", success ? "status" : "alert");
  };
  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form).entries());
    submit.disabled = true;
    submit.textContent = "Sending…";
    feedback.hidden = true;
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      let response;
      try {
        response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
          signal: controller.signal
        });
      } finally { clearTimeout(timeout); }
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success !== true) throw Error(data.error || "Message delivery failed. Please try again.");
      form.reset();
      showFeedback("Your inquiry has been sent. Thank you for reaching out.", true);
    } catch(error) {
      showFeedback(error.name === "AbortError" ? "The request timed out. Please try again." : (error.message || "Unable to send your inquiry."), false);
    } finally {
      submit.disabled = false;
      submit.innerHTML = 'Send your inquiry <span aria-hidden="true">↗</span>';
    }
  });
})();

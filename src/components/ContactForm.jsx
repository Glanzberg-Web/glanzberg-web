"use client";

import { useState } from "react";
import Link from "next/link";

const initial = { name: "", email: "", business: "", service: "", message: "", website: "" };

export default function ContactForm({ endpoint }) {
  const enabled = Boolean(endpoint);
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status === "error") { setStatus("idle"); setFeedback(""); }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!enabled || status === "sending") return;
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Your message could not be sent. Please try again.");
      setForm(initial);
      setStatus("success");
      setFeedback("Thanks for reaching out. Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      {!enabled && (
        <div className="form-notice" role="status">
          Online inquiries are not active yet. This website’s contact service is being configured.
        </div>
      )}
      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">Your name <span>*</span></label>
          <input id="contact-name" name="name" type="text" required maxLength={120} autoComplete="name" placeholder="Your full name" value={form.name} onChange={update} disabled={!enabled || status === "sending"} />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email address <span>*</span></label>
          <input id="contact-email" name="email" type="email" required maxLength={180} autoComplete="email" placeholder="you@business.com" value={form.email} onChange={update} disabled={!enabled || status === "sending"} />
        </div>
        <div className="field">
          <label htmlFor="contact-business">Business name</label>
          <input id="contact-business" name="business" type="text" maxLength={150} autoComplete="organization" placeholder="Your company (optional)" value={form.business} onChange={update} disabled={!enabled || status === "sending"} />
        </div>
        <div className="field">
          <label htmlFor="contact-service">What can we help with?</label>
          <select id="contact-service" name="service" value={form.service} onChange={update} disabled={!enabled || status === "sending"}>
            <option value="">Select a service</option>
            <option value="New website">A new website</option>
            <option value="Redesign">Redesigning my site</option>
            <option value="Updates">Updates or maintenance</option>
            <option value="Landing page">A landing page</option>
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-message">Tell us about your project <span>*</span></label>
        <textarea id="contact-message" name="message" rows={6} required maxLength={5000} placeholder="What does your business do, and what would you like your website to do better?" value={form.message} onChange={update} disabled={!enabled || status === "sending"} />
      </div>
      <div className="honey-field" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
      </div>
      <div className="form-bottom">
        <button type="submit" className="button button-dark" disabled={!enabled || status === "sending"}>
          {status === "sending" ? "Sending…" : "Send your inquiry"} <span aria-hidden="true">↗</span>
        </button>
        <p>By sending this form, you agree to our <Link href="/privacy">privacy information</Link>.</p>
      </div>
      {feedback && <p className={status === "success" ? "form-feedback success" : "form-feedback error"} role={status === "error" ? "alert" : "status"} aria-live="polite">{feedback}</p>}
    </form>
  );
}

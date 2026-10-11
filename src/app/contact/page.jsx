import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/Shared";

export const metadata = {
  title: "Contact & Project Inquiry",
  description: "Tell Glanzberg Web about your website project. Request a quote for a new site, redesign, landing page, or ongoing updates.",
  alternates: { canonical: "/contact" },
};

export const dynamic = "force-dynamic";

export default function ContactPage() {
  const enabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL);
  return (
    <section className="contact-page section">
      <div className="shell">
        <div className="contact-page-heading">
          <Eyebrow>LET’S TALK ABOUT YOUR WEBSITE</Eyebrow>
          <h1>Big idea? Small update?<br /><em>We’re all ears.</em></h1>
          <p>Tell us a little about your business and what you’re looking for. A good project starts with a simple conversation.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-card">
            <div className="contact-card-index">01 / NEW INQUIRY</div>
            <h2>Start here.</h2>
            <p>Share as much or as little detail as you have right now. We can figure out the specifics together.</p>
            <div className="contact-card-art" aria-hidden="true"><span>LET’S MAKE<br />SOMETHING<br /><em>BETTER.</em></span><span className="contact-card-star">✳</span></div>
            <div className="contact-card-bottom">WHAT’S NEXT IS A CONVERSATION ↗</div>
          </div>
          <div className="contact-form-panel">
            <div className="contact-form-header"><span>PROJECT DETAILS</span><span>FIELDS MARKED * ARE REQUIRED</span></div>
            <ContactForm enabled={enabled} />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { pricingOptions } from "@/lib/site";
import FAQ from "@/components/FAQ";
import { Arrow, ContactStrip, Eyebrow } from "@/components/Shared";

export const metadata = {
  title: "Website Pricing & Project Scopes",
  description: "Explore Glanzberg Web's project scopes, from streamlined business websites to tailored digital experiences. Request a personalized quote.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="page-hero light-page-hero">
        <div className="shell page-hero-inner">
          <Eyebrow>STRAIGHTFORWARD SCOPING</Eyebrow>
          <h1>The right website.<br /><em>The right scope.</em></h1>
          <p>We quote based on what your business actually needs — not a one-size-fits-all template or an arbitrary page count.</p>
        </div>
      </section>
      <section className="section section-warm">
        <div className="shell">
          <div className="pricing-headline"><span>COMMON PROJECT DIRECTIONS</span><p>These are starting points for a conversation, not fixed-price packages. A written quote follows a review of the scope.</p></div>
          <div className="pricing-grid">
            {pricingOptions.map((option, index) => (
              <article className={"pricing-card" + (option.featured ? " featured" : "")} key={option.label}>
                <div className="pricing-card-top"><span>0{index + 1} / OPTION</span>{option.featured && <span className="popular-tag">FLEXIBLE START</span>}</div>
                <h2>{option.label}</h2>
                <span className="pricing-subtitle">{option.subtitle}</span>
                <p>{option.detail}</p>
                <div className="pricing-divider" />
                <span className="pricing-included">TYPICAL FOCUS</span>
                <ul>{option.includes.map((entry) => <li key={entry}>{entry}</li>)}</ul>
                <Link className={option.featured ? "button button-lime" : "button button-outline"} href="/contact">Request a quote <Arrow diagonal /></Link>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">Final deliverables, timelines, ongoing service, and price are agreed individually before work begins.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell faq-grid"><div><Eyebrow>BEFORE YOU REACH OUT</Eyebrow><h2 className="section-title">Questions?<br /><em>We’ve got answers.</em></h2></div><FAQ /></div>
      </section>
      <ContactStrip title="Tell us what you have in mind." description="A short description of your business and goals is enough to start the conversation." />
    </>
  );
}

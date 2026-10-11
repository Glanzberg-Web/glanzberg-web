import Link from "next/link";
import { serviceItems } from "@/lib/site";
import { Arrow, ContactStrip, Eyebrow } from "@/components/Shared";

export const metadata = {
  title: "Web Design Services",
  description: "New websites, web redesigns, landing pages, and website maintenance. Explore Glanzberg Web's business website services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero light-page-hero">
        <div className="shell page-hero-inner">
          <Eyebrow>WHAT WE CAN BUILD TOGETHER</Eyebrow>
          <h1>Good-looking websites.<br /><em>Better business tools.</em></h1>
          <p>Whether you need a new presence or your current site needs attention, the goal stays the same: make it easier for customers to choose you.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell service-detail-list">
          {serviceItems.map((service) => (
            <article className="service-detail" key={service.number}>
              <div className="detail-number">{service.number} / 04</div>
              <div><h2>{service.title}</h2><p>{service.summary}</p></div>
              <div><ul className="detail-list">{service.points.map((point) => <li key={point}>{point}</li>)}</ul><Link href="/contact" className="underlined-link">Ask about this service <Arrow /></Link></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-warm">
        <div className="shell split-copy">
          <div><Eyebrow>BUILT WITH INTENTION</Eyebrow><h2 className="section-title">The details are<br /><em>the difference.</em></h2></div>
          <div><p className="lead-copy">A polished visual is only part of the picture. We think about how someone reads your pages, finds your services, and takes the next step.</p><div className="feature-lines"><span>Responsive by design <b>↗</b></span><span>Clear content hierarchy <b>↗</b></span><span>Accessible-minded decisions <b>↗</b></span><span>Search-friendly foundations <b>↗</b></span></div></div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}

import Link from "next/link";
import { Arrow, ContactStrip, Eyebrow } from "@/components/Shared";

export const metadata = {
  title: "About",
  description: "Get to know Glanzberg Web's approach to thoughtful, useful business websites and practical ongoing improvements.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero dark-page-hero about-hero">
        <div className="shell page-hero-inner">
          <Eyebrow light>A LITTLE ABOUT US</Eyebrow>
          <h1>Design that looks good.<br /><em>Thinking that goes deeper.</em></h1>
          <p>Glanzberg Web focuses on websites that feel considered, work intuitively, and make life easier for the businesses behind them.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell about-story">
          <div><Eyebrow>WHAT DRIVES THE WORK</Eyebrow><div className="about-mark" aria-hidden="true">G<span>✳</span>W</div></div>
          <div><h2 className="section-title">Your business has a story. <em>Your website should tell it well.</em></h2><p className="lead-copy">A strong digital presence doesn’t have to be complicated. It needs to answer the right questions, feel like your brand, and make the next step obvious. That’s the thinking behind our work.</p><p className="lead-copy">We balance expressive design with the practical things that matter: navigation, legibility, performance, and a clear path to getting in touch.</p></div>
        </div>
      </section>
      <section className="section section-warm">
        <div className="shell">
          <Eyebrow>OUR GUIDING PRINCIPLES</Eyebrow>
          <div className="principles-grid">
            <div><span>01 /</span><h3>Clarity first.</h3><p>A visitor should quickly understand who you are and what you offer.</p></div>
            <div><span>02 /</span><h3>Character matters.</h3><p>Your site should feel specific to your business, not like everyone else’s.</p></div>
            <div><span>03 /</span><h3>Practical always.</h3><p>Beautiful details are useful only when the experience still works smoothly.</p></div>
          </div>
          <div className="about-final"><p>Want a feel for the work?</p><Link href="/work" className="underlined-link">Explore the design concepts <Arrow /></Link></div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}

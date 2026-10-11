import Link from "next/link";

export function Arrow({ diagonal = false }) {
  return <span className="link-arrow" aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function Eyebrow({ children, light = false }) {
  return <span className={light ? "eyebrow eyebrow-light" : "eyebrow"}><span className="eyebrow-dot" aria-hidden="true" />{children}</span>;
}

export function ContactStrip({ title = "Ready to put your best site forward?", description = "Tell us what you have in mind. We’ll help figure out the right next step." }) {
  return (
    <section className="contact-strip">
      <div className="shell contact-strip-inner">
        <div>
          <Eyebrow light>YOUR NEXT STEP</Eyebrow>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link className="button button-lime" href="/contact">Let’s talk <Arrow diagonal /></Link>
      </div>
    </section>
  );
}

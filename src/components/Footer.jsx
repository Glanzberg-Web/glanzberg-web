import Link from "next/link";
import { navItems } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <span className="eyebrow muted">A website should work as hard as you do.</span>
          <p className="footer-line">Make the next impression <em>count.</em></p>
          <Link className="text-link footer-cta" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="footer-link-columns">
          <div>
            <span className="footer-label">Explore</span>
            <Link href="/">Home</Link>
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <span className="footer-label">Get in touch</span>
            <Link href="/contact">Request a quote</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span className="footer-brand">GLANZBERG <strong>STUDIO</strong><span className="brand-dot">✳</span></span>
        <span>© {new Date().getFullYear()} Glanzberg Studio. Thoughtfully built.</span>
      </div>
    </footer>
  );
}

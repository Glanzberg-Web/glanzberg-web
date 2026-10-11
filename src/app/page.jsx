import Link from "next/link";
import { serviceItems, processSteps } from "@/lib/site";
import { featuredProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import FAQ from "@/components/FAQ";
import { Arrow, ContactStrip, Eyebrow } from "@/components/Shared";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>WEB DESIGN WITH A PURPOSE</Eyebrow>
            <h1>Look sharp.<br />Work smarter.<br /><em>Grow online.</em></h1>
            <p className="hero-description">Your website is often your first handshake. We build modern, easy-to-use websites that help businesses make a lasting impression — and turn interest into action.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/contact">Let’s build something <Arrow diagonal /></Link>
              <Link className="underlined-link" href="/work">Explore our work <Arrow /></Link>
            </div>
            <div className="hero-footnote"><span className="hero-sparkle">✳</span> Design-led. Business-minded. Built for the real world.</div>
          </div>
          <div className="hero-art" aria-label="Illustrative website design composition" role="img">
            <div className="hero-art-grid" />
            <div className="hero-art-orbit orbit-one" /><div className="hero-art-orbit orbit-two" />
            <div className="hero-art-window hero-window-main">
              <div className="mock-toolbar"><span className="browser-dots"><i /><i /><i /></span><span>your-next-website.com</span><b>↗</b></div>
              <div className="mock-main">
                <div className="mock-top"><strong>made to<br />stand out.</strong><span>01 / 03</span></div>
                <div className="mock-graphic"><div className="mock-ring" /><div className="mock-shape" /><div className="mock-label">BIG IDEAS<br />WELCOME HERE.</div></div>
                <div className="mock-bottom"><span>GOOD DESIGN. BETTER BUSINESS.</span><span>EXPLORE ↗</span></div>
              </div>
            </div>
            <div className="hero-art-window hero-window-small">
              <div className="mini-brand">gw<span>✳</span></div>
              <div className="mini-graph"><span /><span /><span /><span /><span /></div>
              <p>Designed to<br /><strong>move you forward.</strong></p>
              <div className="mini-progress"><span /></div>
            </div>
            <div className="hero-art-sticker"><span>THE WEB,<br />DONE BETTER</span><b>↗</b></div>
          </div>
        </div>
        <div className="shell hero-bottom-line"><span>INDEPENDENT THINKING. CONSIDERED EXECUTION.</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-section section">
        <div className="shell intro-grid">
          <Eyebrow>WHY IT MATTERS</Eyebrow>
          <div>
            <h2 className="section-title">A great website isn’t just nice to look at. <em>It has a job to do.</em></h2>
            <p className="lead-copy">Customers want to understand what you offer, trust your business, and know what to do next. We bring clear messaging, thoughtful design, and practical functionality together in one place.</p>
            <div className="value-pills"><span>Clearer first impressions</span><span>Easier customer journeys</span><span>Built for every screen</span></div>
          </div>
        </div>
      </section>

      <section className="section services-preview section-warm">
        <div className="shell">
          <div className="section-header">
            <div><Eyebrow>WHAT WE DO</Eyebrow><h2 className="section-title">A better web presence.<br /><em>However you need it.</em></h2></div>
            <Link href="/services" className="underlined-link">All services <Arrow /></Link>
          </div>
          <div className="service-grid">
            {serviceItems.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top"><span>{service.number} / SERVICE</span><span aria-hidden="true">↗</span></div>
                <h3>{service.title}</h3><p>{service.summary}</p>
                <Link className="service-card-link" href="/contact">Talk about your project <Arrow /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-preview">
        <div className="shell">
          <div className="section-header">
            <div><Eyebrow>SELECTED CONCEPTS</Eyebrow><h2 className="section-title">Different businesses.<br /><em>Different stories.</em></h2></div>
            <div className="section-side-text"><p>No cookie-cutter formula. Explore visual directions created to show what’s possible.</p><Link className="underlined-link" href="/work">View all concepts <Arrow /></Link></div>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
          <p className="work-disclaimer">Portfolio items shown are fictional demonstration projects, not commissioned client engagements.</p>
        </div>
      </section>

      <section className="approach-section section">
        <div className="shell approach-grid">
          <div className="approach-visual">
            <span className="approach-label">OUR APPROACH / 001</span>
            <div className="approach-big-shape"><span>LESS<br />NOISE.</span><span>MORE<br />IMPACT.</span></div>
            <span className="approach-bottom">PURPOSE BEFORE PIXELS. ✳</span>
          </div>
          <div className="approach-copy">
            <Eyebrow>THE WAY WE WORK</Eyebrow>
            <h2 className="section-title">No fluff.<br />No unnecessary <em>complexity.</em></h2>
            <p className="lead-copy">We care about the small details, but never lose sight of the bigger picture: a website that makes sense for your business and the people visiting it.</p>
            <ul className="check-list">
              <li>Thoughtful design with a clear purpose</li>
              <li>Mobile-friendly, easy-to-navigate experiences</li>
              <li>Practical recommendations, not trendy extras</li>
              <li>Clear communication about what’s being built</li>
            </ul>
            <Link href="/about" className="underlined-link">More about our approach <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section process-section section-warm">
        <div className="shell">
          <div className="section-header"><div><Eyebrow>THE PROCESS</Eyebrow><h2 className="section-title">A simple path from<br /><em>“what if” to what’s next.</em></h2></div></div>
          <div className="process-grid">
            {processSteps.map((step) => <article className="process-card" key={step.number}><span className="process-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid"><div><Eyebrow>GOOD QUESTIONS</Eyebrow><h2 className="section-title">A few things<br /><em>worth knowing.</em></h2><p className="lead-copy">Every project is different. Here are a few useful answers to get started.</p></div><FAQ /></div>
      </section>
      <ContactStrip />
    </>
  );
}

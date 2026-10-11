import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { ContactStrip, Eyebrow } from "@/components/Shared";

export const metadata = {
  title: "Work & Website Concepts",
  description: "Explore website design concepts by Glanzberg Web for local services, hospitality, wellness, landscaping, construction and more.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero dark-page-hero">
        <div className="shell page-hero-inner">
          <Eyebrow light>DESIGN DIRECTIONS / PORTFOLIO</Eyebrow>
          <h1>Good work starts with<br /><em>good imagination.</em></h1>
          <p>There’s more than one way to stand out. These exploratory website concepts show different approaches to brand personality, page structure, and customer experience.</p>
          <span className="page-hero-index">01 — 06 / CONCEPT COLLECTION</span>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="portfolio-explainer"><strong>What you’re looking at</strong><p>These are self-initiated demonstration websites using fictional businesses. They are design samples, not client case studies or claims of commercial results. Select any project to explore its live website in a new tab.</p></div>
          <div className="project-grid full-project-grid">
            {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
          </div>
        </div>
      </section>
      <ContactStrip title="See a direction that feels right?" description="Let’s take what resonates and shape something original for your business." />
    </>
  );
}

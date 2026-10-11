import { Arrow } from "@/components/Shared";

export function ProjectArt({ project }) {
  return (
    <div className={"project-art art-" + project.art} aria-hidden="true">
      <div className="art-browser-bar">
        <span className="browser-dots"><i /><i /><i /></span>
        <span className="browser-address">{project.slug}.studio</span>
        <span className="browser-line" />
      </div>
      <div className="art-brand-top">
        <span className="art-brand-name">{project.name}</span>
        <span className="art-menu">MENU ≡</span>
      </div>
      <div className="art-stage">
        {project.art === "harborline" && <>
          <div className="auto-corner">BUILT TO KEEP<br />YOU MOVING.</div>
          <div className="auto-road"><span /><span /><span /></div>
          <div className="auto-label">TRUST YOUR DRIVE. <b>↗</b></div>
        </>}
        {project.art === "verdant" && <>
          <span className="verdant-heading">Spaces for<br /><i>living.</i></span>
          <div className="verdant-leaf leaf-one" /><div className="verdant-leaf leaf-two" /><div className="verdant-leaf leaf-three" />
          <span className="verdant-side">LANDSCAPE / CULTURE / FORM</span>
        </>}
        {project.art === "solara" && <>
          <div className="solara-dish"><span /><span /></div>
          <span className="solara-heading">Good mornings<br /><em>start here.</em></span>
          <span className="solara-sun">✳</span>
        </>}
        {project.art === "tideline" && <>
          <div className="tideline-window"><span /><span /><span /></div>
          <span className="tideline-heading">A little more<br /><em>room to breathe.</em></span>
          <div className="tideline-bubble bubble-one" /><div className="tideline-bubble bubble-two" />
        </>}
        {project.art === "ironwood" && <>
          <div className="ironwood-structure"><span /><span /><span /></div>
          <span className="ironwood-heading">Built with<br />purpose.</span>
          <span className="ironwood-measure">01 / 04 — SELECTED WORK</span>
        </>}
        {project.art === "luma" && <>
          <div className="luma-orb" /><div className="luma-orb-small" />
          <span className="luma-heading">Feel good<br /><em>in your skin.</em></span>
          <span className="luma-side">DISCOVER YOUR GLOW —</span>
        </>}
      </div>
      <div className="art-brand-bottom"><span>EXPLORE THE EXPERIENCE</span><span>↗</span></div>
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <a className="project-visual-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={"View " + project.name + " source repository (opens in a new tab)"}>
        <ProjectArt project={project} />
      </a>
      <div className="project-card-meta">
        <span>0{index + 1} / {project.sector}</span>
        <span className="concept-label">DEMONSTRATION CONCEPT</span>
      </div>
      <div className="project-card-info">
        <div>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
        </div>
        <a className="project-open" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={"Explore " + project.name + " repository in new tab"}><Arrow diagonal /></a>
      </div>
    </article>
  );
}

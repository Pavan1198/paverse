import { useEffect, useState } from "react";

import { getProjects } from "../api";
import { SectionHeading } from "../components/SectionHeading";
import type { Project } from "../types";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="page detail-page">
      <section className="detail-hero projects-hero">
        <span className="eyebrow">Projects Template</span>
        <h1>Selected DevOps initiatives with platform, automation, and delivery impact.</h1>
        <p>
          This view translates your resume achievements into portfolio-style case studies,
          showing enterprise work through systems, tooling, and outcomes.
        </p>
      </section>

      <section className="panel">
        <SectionHeading
          eyebrow="Experience Highlights"
          title="Featured work"
          description="Real enterprise initiatives derived from your resume, presented in a stronger project-showcase format."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span>{project.category}</span>
                <h2>{project.name}</h2>
              </div>

              <p>{project.description}</p>

              <div className="chip-group">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="impact-box">
                <strong>Impact</strong>
                <p>{project.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

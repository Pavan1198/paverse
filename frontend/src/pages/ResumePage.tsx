import { useEffect, useState } from "react";

import { getResume } from "../api";
import { SectionHeading } from "../components/SectionHeading";
import type { ResumePayload } from "../types";

export function ResumePage() {
  const [resume, setResume] = useState<ResumePayload | null>(null);

  useEffect(() => {
    getResume().then(setResume);
  }, []);

  if (!resume) {
    return <div className="loading-state">Loading resume experience...</div>;
  }

  const { hero, profile } = resume;

  return (
    <div className="page detail-page">
      <section className="detail-hero">
        <span className="eyebrow">Resume Template</span>
        <h1>{hero.headline}</h1>
        <p>{hero.subheadline}</p>
      </section>

      <section className="resume-grid">
        <article className="panel profile-summary">
          <div className="profile-head">
            <div>
              <h2>{profile.name}</h2>
              <p>{profile.title}</p>
            </div>
            <span className="badge">{profile.location}</span>
          </div>

          <p className="lead-copy">{profile.summary}</p>

          <div className="contact-strip">
            <span>{profile.email}</span>
            <span>{profile.website}</span>
          </div>
        </article>

        <article className="panel">
          <SectionHeading
            eyebrow="Highlights"
            title="Core strengths"
            description="A concise snapshot of what you bring to product and engineering work."
          />
          <div className="bullet-stack">
            {profile.highlights.map((item) => (
              <div className="bullet-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <SectionHeading
            eyebrow="Experience"
            title="Professional journey"
            description="Experience is arranged to feel more like an executive profile than a plain CV."
          />
          <div className="timeline">
            {profile.experience.map((item) => (
              <div className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-top">
                  <h3>{item.role}</h3>
                  <span>{item.period}</span>
                </div>
                <strong>{item.company}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <SectionHeading
            eyebrow="Skills"
            title="Technology stack"
            description="Core tools and technologies that support modern product delivery."
          />
          <div className="chip-group">
            {profile.skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="panel metrics-panel">
          <SectionHeading
            eyebrow="Positioning"
            title="How this profile reads"
            description="A compact view of your working style and strengths."
          />
          <div className="metric-grid">
            {profile.metrics.map((metric) => (
              <div className="metric-tile" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

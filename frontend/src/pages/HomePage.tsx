import { Link } from "react-router-dom";

const templates = [
  {
    title: "Resume Experience",
    subtitle: "Structured executive profile",
    description:
      "A polished presentation of experience, strengths, certifications, and delivery credibility.",
    href: "/resume",
    accent: "accent-sand",
    stats: "4 years"
  },
  {
    title: "Project Showcase",
    subtitle: "Platform and delivery work",
    description:
      "A case-study style showcase of CI/CD systems, cloud deployments, and enterprise impact.",
    href: "/projects",
    accent: "accent-slate",
    stats: "3 focus areas"
  }
];

export function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero-panel luxe-hero">
        <div className="hero-copy">
          <span className="eyebrow">Premium Portfolio Experience</span>
          <h1>Elegant delivery stories for modern DevOps work.</h1>
          <p>
            Inspired by high-end commerce interfaces, this homepage introduces
            your profile through layered cards, rich typography, and a more
            editorial presentation that feels premium instead of generic.
          </p>

          <div className="hero-actions">
            <Link className="primary-link" to="/resume">
              Explore Resume
            </Link>
            <Link className="secondary-link" to="/projects">
              Browse Work
            </Link>
          </div>
        </div>

        <div className="hero-feature">
          <div className="feature-card feature-card-main">
            <div className="feature-card-copy">
              <span>Signature Profile</span>
              <strong>Pavankumar Yadav</strong>
              <p>CI/CD systems, cloud delivery, and enterprise automation.</p>
            </div>
            <div className="feature-orb" />
          </div>

          <div className="hero-micro-grid">
            <div className="stat-card">
              <strong>4</strong>
              <span>years experience</span>
            </div>
            <div className="stat-card">
              <strong>5G</strong>
              <span>product delivery</span>
            </div>
            <div className="stat-card stat-card-wide">
              <strong>Jenkins • AKS • AWS</strong>
              <span>core enterprise toolchain</span>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-strip">
        <div className="section-heading home-heading">
          <span>Choose your lens</span>
          <h2>Two tailored ways to experience the portfolio.</h2>
          <p>
            Start with a clean executive resume, or move directly into platform
            work and delivery case studies.
          </p>
        </div>

        <div className="editorial-badges">
          <span>Enterprise Styling</span>
          <span>Editorial Layout</span>
          <span>Premium Motion</span>
        </div>
      </section>

      <section className="template-grid luxe-grid">
        {templates.map((template) => (
          <article className={`template-card ${template.accent}`} key={template.title}>
            <div className="template-card-top">
              <span className="template-kicker">{template.subtitle}</span>
              <div className="template-stat">{template.stats}</div>
              <h2>{template.title}</h2>
              <p>{template.description}</p>
            </div>

            <div className="template-preview template-preview-rich">
              <div className="preview-bar" />
              <div className="preview-stack">
                <span className="preview-large" />
                <div className="preview-duo">
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <Link className="primary-link" to={template.href}>
              Open experience
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

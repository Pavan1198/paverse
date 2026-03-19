import { Link } from "react-router-dom";

const templates = [
  {
    title: "Resume Experience",
    subtitle: "Structured, executive-friendly profile",
    description:
      "A polished career overview with summary, strengths, experience, skills, and positioning.",
    href: "/resume",
    accent: "accent-gold"
  },
  {
    title: "Project Showcase",
    subtitle: "Product and build portfolio",
    description:
      "A high-clarity showcase of personal projects, engineering strengths, and delivery outcomes.",
    href: "/projects",
    accent: "accent-emerald"
  }
];

export function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Professional Digital Presence</span>
          <h1>Enterprise-style portfolio design for `paverse.in`.</h1>
          <p>
            Built to feel sharp, credible, and modern. The homepage acts as a
            selection layer that routes visitors into either your resume profile
            or your personal project portfolio.
          </p>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <strong>2</strong>
            <span>portfolio paths</span>
          </div>
          <div className="stat-card">
            <strong>Python</strong>
            <span>backend foundation</span>
          </div>
          <div className="stat-card">
            <strong>React + TS</strong>
            <span>enterprise frontend</span>
          </div>
        </div>
      </section>

      <section className="template-grid">
        {templates.map((template) => (
          <article className={`template-card ${template.accent}`} key={template.title}>
            <div className="template-card-top">
              <span className="template-kicker">{template.subtitle}</span>
              <h2>{template.title}</h2>
              <p>{template.description}</p>
            </div>

            <div className="template-preview">
              <div className="preview-bar" />
              <div className="preview-blocks">
                <span />
                <span />
                <span />
              </div>
            </div>

            <Link className="primary-link" to={template.href}>
              Open template
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

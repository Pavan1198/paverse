import type { Profile, Project, ResumePayload } from "../types";

export const fallbackProfile: Profile = {
  name: "Pavan Yadav",
  title: "Software Engineer | AI Builder | Full-Stack Developer",
  location: "India",
  summary:
    "I build business-ready software experiences with strong engineering structure, elegant UI, and clear product thinking.",
  email: "hello@paverse.in",
  website: "https://paverse.in",
  highlights: [
    "Crafts full-stack products from concept to deployment",
    "Works across AI, backend APIs, and modern frontend systems",
    "Focuses on polished interfaces that feel credible and premium"
  ],
  experience: [
    {
      role: "Founder / Product Engineer",
      company: "Paverse",
      period: "2024 - Present",
      description:
        "Shaping products, prototypes, and digital experiences with a delivery style built around clarity, velocity, and quality."
    },
    {
      role: "Full-Stack Developer",
      company: "Independent Projects",
      period: "2022 - Present",
      description:
        "Designed and shipped full-stack applications using Python, APIs, databases, and modern web frameworks."
    }
  ],
  skills: [
    "Python",
    "FastAPI",
    "React",
    "TypeScript",
    "API Design",
    "Product UI",
    "Deployment",
    "AI Integration"
  ],
  metrics: [
    { label: "Primary Lens", value: "Product + Engineering" },
    { label: "Execution", value: "Production-minded" },
    { label: "Experience", value: "Modern web systems" }
  ]
};

export const fallbackProjects: Project[] = [
  {
    name: "Portfolio Command Center",
    category: "Brand Experience",
    description:
      "A modular personal platform that presents resume content and projects with a refined design system and structured information architecture.",
    stack: ["React", "TypeScript", "FastAPI", "CSS"],
    impact: "Established a professional online presence ready for clients, recruiters, and collaborators."
  },
  {
    name: "AI Workflow Assistant",
    category: "AI Systems",
    description:
      "A product concept for managing prompt flows, AI-assisted tasks, and streamlined repeatable workflows.",
    stack: ["Python", "REST API", "Automation"],
    impact: "Improved speed and consistency across routine digital operations."
  },
  {
    name: "Business Analytics Dashboard",
    category: "Data Product",
    description:
      "A high-clarity dashboard concept designed to turn operational metrics into executive-ready reports and actionable signals.",
    stack: ["React", "Visualization", "API Integration"],
    impact: "Made complex information easier to consume and act on."
  }
];

export const fallbackResume: ResumePayload = {
  hero: {
    headline: "Building products that look sharp and work hard.",
    subheadline:
      "A resume-style experience focused on professional credibility, clear strengths, and execution quality."
  },
  profile: fallbackProfile
};

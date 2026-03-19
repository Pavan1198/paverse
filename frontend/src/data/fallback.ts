import type { Profile, Project, ResumePayload } from "../types";

export const fallbackProfile: Profile = {
  name: "Pavankumar Yadav",
  title: "DevOps Engineer | CI/CD | Cloud-Native Delivery",
  location: "Mumbai, India",
  summary:
    "DevOps Engineer with 4 years of experience in CI/CD pipeline development, infrastructure automation, and cloud-native deployments. Hands-on with Jenkins, Azure DevOps, Groovy, Python, Docker, Kubernetes, Git, monitoring, code quality tooling, and artifact management.",
  email: "pavanyadav641@gmail.com",
  website: "https://linkedin.com/in/pavankumar01/",
  highlights: [
    "Built and maintained CI/CD pipelines for 5G product verification and deployment",
    "Automated Docker image build and deployment flows for Azure Container Registry and AKS",
    "Worked across Jenkins, Azure DevOps, Gerrit, Nexus, SonarQube, Elasticsearch, and Grafana"
  ],
  experience: [
    {
      role: "Systems Engineer",
      company: "Tata Consultancy Services Ltd.",
      period: "Oct 2023 - Present",
      description:
        "Designed and implemented multiple end-to-end CI/CD pipelines using Jenkins, Groovy, Shell script, and Git for the verification and deployment of 5G products."
    },
    {
      role: "Assistant Systems Engineer",
      company: "Tata Consultancy Services Ltd.",
      period: "Oct 2021 - Oct 2023",
      description:
        "Automated Docker image workflows, deployed enterprise client applications through Azure DevOps, integrated SonarQube, managed AKS upgrades with Helm, and supported cloud access control with AWS IAM."
    }
  ],
  skills: [
    "Python",
    "Shell Script",
    "Groovy",
    "Jenkins",
    "Git",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Linux",
    "AWS",
    "Grafana",
    "Elasticsearch",
    "SonarQube",
    "Nexus"
  ],
  metrics: [
    { label: "Experience", value: "4 Years" },
    { label: "Current Focus", value: "DevOps + CI/CD" },
    { label: "Domain", value: "5G Products" }
  ],
  education: [
    {
      institution: "Pune University",
      degree: "Bachelor of Engineering",
      period: "2016 - 2020",
      detail: "CGPA: 7.69/10"
    },
    {
      institution: "Higher Secondary",
      degree: "12th Standard",
      period: "2016",
      detail: "Score: 71.85%"
    }
  ],
  certifications: ["AWS Cloud Practitioner", "GitHub Actions"],
  awards: [
    "On The Spot Award for outstanding contribution to the organization",
    "Star of the Month Award for issue resolution and ownership"
  ],
  contact: {
    phone: "+91-8652466403",
    linkedin: "linkedin.com/in/pavankumar01/"
  }
};

export const fallbackProjects: Project[] = [
  {
    name: "5G CI/CD Pipeline Engineering",
    category: "Enterprise Delivery",
    description:
      "Designed and implemented end-to-end CI/CD pipelines for verification and deployment of 5G products using Jenkins, Groovy, Shell scripting, and Git.",
    stack: ["Jenkins", "Groovy", "Shell Script", "Git"],
    impact: "Strengthened release reliability and streamlined enterprise deployment workflows."
  },
  {
    name: "AKS Deployment Automation",
    category: "Cloud-Native Operations",
    description:
      "Automated Docker image build and push to ACR, container deployment to AKS, application upgrades with Helm, and production-grade rollout workflows.",
    stack: ["Azure DevOps", "Docker", "AKS", "Helm"],
    impact: "Enabled faster and more consistent delivery for enterprise client applications."
  },
  {
    name: "Developer Platform Tooling",
    category: "Platform Reliability",
    description:
      "Maintained SonarQube integrations, managed Nexus artifacts, configured Gerrit-triggered sequential pipelines, and improved Jenkins job monitoring.",
    stack: ["SonarQube", "Nexus", "Gerrit", "Elasticsearch", "Grafana"],
    impact: "Improved code quality enforcement, traceability, and operational feedback loops."
  }
];

export const fallbackResume: ResumePayload = {
  hero: {
    headline: "Designing reliable delivery systems for enterprise software.",
    subheadline:
      "A resume-style view of DevOps experience, automation strengths, and cloud-native delivery capability."
  },
  profile: fallbackProfile
};

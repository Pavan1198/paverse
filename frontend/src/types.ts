export type Metric = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  detail: string;
};

export type ContactInfo = {
  phone: string;
  linkedin: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  website: string;
  highlights: string[];
  experience: ExperienceItem[];
  skills: string[];
  metrics: Metric[];
  education: EducationItem[];
  certifications: string[];
  awards: string[];
  contact: ContactInfo;
};

export type ResumePayload = {
  hero: {
    headline: string;
    subheadline: string;
  };
  profile: Profile;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  impact: string;
};

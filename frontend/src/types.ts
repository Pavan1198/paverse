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

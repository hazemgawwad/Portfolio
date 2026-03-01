export interface SkillItem {
  name: string;
  level: number;
  colorClass: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    subtitle: string;
    intro: string;
    image: string;
    cvUrl?: string;
  };
  about: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    stats: Array<{ value: string; label: string }>;
  };
  skills: {
    heading: string;
    subtitle: string;
    items: SkillItem[];
  };
  projects: {
    heading: string;
    subtitle: string;
    items: ProjectItem[];
  };
  contact: {
    heading: string;
    subtitle: string;
    info: ContactInfo;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  status: 'Live Production' | 'Under Active Development' | 'Prototype Completed';
  statusColor: 'emerald' | 'amber' | 'cyan';
  featured: boolean;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  keyFeatures: string[];
  aiAssistedDetails: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    iconName?: string;
    detail?: string;
  }[];
  badgeNote?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  yearTrack: string;
  specialization: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  status: 'Verified Credential' | 'In Progress';
  description: string;
}

export interface JourneyMilestone {
  stage: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  status: 'completed' | 'current' | 'future';
}

export interface PersonalInfo {
  name: string;
  title: string;
  bioHeadline: string;
  shortBio: string;
  college: string;
  degree: string;
  academicYear: string;
  email: string;
  github: string;
  internshipTarget: string;
  portraitUrl: string;
  resumePdfUrl: string;
  resumeDocxUrl: string;
}

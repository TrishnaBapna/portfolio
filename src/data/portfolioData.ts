import { PersonalInfo, Project, SkillCategory, Education, Certification, JourneyMilestone } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Trishna Bapna",
  title: "Aspiring Software Developer | AI & DS Student",
  bioHeadline: "Hi, I'm Trishna Bapna.",
  shortBio: "I'm passionate about exploring technology, building meaningful digital experiences and learning how software can solve real-world problems.",
  college: "Pillai University, New Panvel",
  degree: "B.Tech – Artificial Intelligence and Data Science",
  academicYear: "2026–27 (First Year)",
  email: "trishna26ai@student.pillai.edu.in",
  github: "https://github.com/TrishnaBapna",
  internshipTarget: "MES Department of Computer Engineering • Winter Internship Programme 2026",
  portraitUrl: "/images/trishna_portrait.jpg",
  resumePdfUrl: "/documents/Trishna_Bapna_Resume.pdf",
  resumeDocxUrl: "/documents/Trishna_Bapna_Resume.docx"
};

export const aboutNarrative = {
  intro: "I am a first-year B.Tech student specializing in Artificial Intelligence and Data Science at Pillai University, New Panvel.",
  focus: "I am deeply interested in software engineering, artificial intelligence, full-stack development, and creating software applications that address genuine, practical challenges.",
  aiWorkflow: "I enjoy exploring emerging technologies and developing end-to-end applications through an AI-assisted development workflow (leveraging tools like Google Antigravity). This methodology allows me to explore modern architectures, troubleshoot complex implementations, and rapidly iterate on functional prototypes.",
  currentStatus: "I am actively strengthening my core programming fundamentals, studying algorithms and data structures, and mastering how modern full-stack web architectures operate under the hood."
};

export const projects: Project[] = [
  {
    id: "saksham-3",
    title: "Saksham 3.0",
    category: "Healthcare Technology / Assistive Software",
    tagline: "Tremor-resilient, voice-first daily care ecosystem for Parkinson's patients, caregivers, and doctors",
    description: "A software-based assistive healthcare ecosystem designed to address the motor and cognitive challenges faced by Parkinson's and Alzheimer's patients. Provides high-contrast, tremor-compensated interactive targets, multilingual voice commands, and direct telemetric synchronization between patient routines and attending doctors.",
    status: "Live Production",
    statusColor: "emerald",
    featured: true,
    image: "/images/saksham_preview.png",
    githubUrl: "https://github.com/TrishnaBapna/Saksham",
    liveUrl: "https://saksham-rho-six.vercel.app/",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "PWA", "Web Speech API", "MediaPipe", "WebAuthn"],
    keyFeatures: [
      "Patient-Focused Digital Support: Voice-first interface with hands-free routine confirmations and speech acoustic (dB) monitoring.",
      "Tremor-Friendly Design: 48px+ touch targets and multi-frame dampening algorithms tailored for Parkinson's motor impairments.",
      "Role-Isolated Architecture: Dedicated secure portals for Patients (routines & SOS), Caregivers (monitoring), and Neurologists (clinical directives).",
      "Offline-First Resilience: Instant optimistic client interactions backed by Supabase PostgreSQL and local sync engine.",
      "Emergency SOS Dispatch: Single-tap caregiver broadcast with WhatsApp notification and automated priority call triggers."
    ],
    aiAssistedDetails: "Developed through an AI-assisted workflow: iterated on accessibility patterns, PostgreSQL schema normalization, and Web Speech API event handling with Google Antigravity."
  },
  {
    id: "focusmate",
    title: "FocusMate",
    category: "Student Productivity / EdTech",
    tagline: "Intelligent study workspace with Pomodoro focus sessions, subject tracking, and AI-assisted revision",
    description: "A student productivity application designed to help engineering and college students organize coursework, manage focused study sessions with deep analytics, and eliminate academic weak spots through structured revision tools.",
    status: "Under Active Development",
    statusColor: "amber",
    featured: true,
    image: "/images/focusmate_preview.png",
    githubUrl: "https://github.com/TrishnaBapna/focus-mate",
    liveUrl: "https://focus-mate-seven.vercel.app",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Cloud Firestore", "Vite"],
    keyFeatures: [
      "Dual Focus Timer: Integrated Pomodoro technique and continuous stopwatch with automatic session logging and daily analytics.",
      "Subject Goals & Milestones: Course-level progress tracking with daily hour targets and semester exam countdown timers.",
      "Multi-Format Notes: Course notes linked to individual subjects supporting typed markdown, voice transcriptions, and scanned lecture slides.",
      "Weak-Topic Diagnostics: Targeted review queues that flag difficult concepts (e.g. Recursion, Matrix transforms) for prioritized study.",
      "AI-Assisted Learning Tools: Generates instant lecture summaries, customized flashcards, and rapid self-assessment diagnostic quizzes."
    ],
    aiAssistedDetails: "Built using React & TypeScript with an AI-assisted coding workflow; integrated Firebase authentication, Firestore realtime listeners, and study analytics modules."
  },
  {
    id: "kaushal-setu",
    title: "Kaushal-Setu",
    category: "Social Impact / Skill Bridge",
    tagline: "Accessible skill development and employment pathway portal",
    description: "A web platform designed to bridge the gap between vocational learners and regional micro-internships, focusing on clear accessibility and simplified user journeys.",
    status: "Prototype Completed",
    statusColor: "cyan",
    featured: false,
    image: "/images/saksham_preview.png",
    githubUrl: "https://github.com/TrishnaBapna/Kaushal-Setu",
    liveUrl: "https://kaushal-setu-eta.vercel.app",
    techStack: ["HTML5", "Modern CSS", "JavaScript", "Responsive UI"],
    keyFeatures: [
      "Lightweight, low-bandwidth optimized interface for regional connectivity.",
      "Curated skill categories and step-by-step career pathway guides.",
      "Direct employer contact cards and verification checklists."
    ],
    aiAssistedDetails: "Exploration of responsive web fundamentals and semantic layouts."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Technologies Explored",
    description: "Technologies applied in real-world application prototypes with AI-assisted workflows.",
    skills: [
      { name: "React", detail: "Component hierarchy, hooks, state" },
      { name: "TypeScript", detail: "Type interfaces, safety" },
      { name: "JavaScript", detail: "ES6+, DOM, asynchronous flow" },
      { name: "HTML5 & CSS3", detail: "Semantic web, responsive layouts" },
      { name: "Tailwind CSS", detail: "Utility-first design, mobile layouts" },
      { name: "Firebase & Firestore", detail: "NoSQL document storage, auth" },
      { name: "Supabase (PostgreSQL)", detail: "Relational data, offline sync" }
    ],
    badgeNote: "Applied in Saksham & FocusMate"
  },
  {
    title: "Development Tools",
    description: "Modern developer environments and AI-augmented programming toolchains.",
    skills: [
      { name: "Google Antigravity", detail: "AI-assisted coding, architecture & debugging" },
      { name: "Visual Studio Code", detail: "Primary IDE, extensions, terminal workflow" },
      { name: "Git", detail: "Branching, committing, merge hygiene" },
      { name: "GitHub", detail: "Repositories, open source, documentation" },
      { name: "Vite", detail: "Modern ESM build tool and bundling" },
      { name: "Vercel", detail: "Continuous deployment & hosting" }
    ],
    badgeNote: "Active Daily Workflow"
  },
  {
    title: "Currently Learning",
    description: "Foundations actively studied in B.Tech coursework and independent learning.",
    skills: [
      { name: "Python Programming", detail: "Core syntax, data structures, scripting" },
      { name: "Programming Fundamentals", detail: "Algorithm design, time complexity basics" },
      { name: "React & TypeScript Mastery", detail: "Strengthening independent proficiency" },
      { name: "Backend Architecture", detail: "REST APIs, Node.js, database indexing" },
      { name: "AI & LLM Concepts", detail: "Embeddings, prompt engineering, agentic systems" },
      { name: "Data Science Tools", detail: "NumPy, Pandas basics, statistical analysis" }
    ],
    badgeNote: "First Year B.Tech Track"
  }
];

export const educationData: Education = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "Pillai University",
  location: "New Panvel, Maharashtra",
  period: "2026 – Present",
  yearTrack: "First Year (Academic Year 2026–27)",
  specialization: "Artificial Intelligence and Data Science",
  highlights: [
    "Core Coursework: Engineering Mathematics, Programming Fundamentals, Digital Systems, Problem Solving Methodologies.",
    "Targeting: MES Winter Internship Programme 2026 (Department of Computer Engineering).",
    "Focus: Practical software development paired with fundamental theoretical mastery."
  ]
};

export const certifications: Certification[] = [
  {
    title: "KLiC Python Certification",
    issuer: "MKCL / KLiC Academy",
    date: "Certified",
    skills: ["Python Core Syntax", "Control Structures", "Data Types & Collections", "Functional Scripting"],
    status: "Verified Credential",
    description: "Comprehensive foundational certification covering core Python syntax, logical constructs, modular programming, and basic data processing."
  }
];

export const learningJourney: JourneyMilestone[] = [
  {
    stage: "01",
    title: "Programming Fundamentals",
    period: "Early Exploration",
    description: "Began by understanding core programming logic, algorithms, and computational thinking. Learned syntax, variables, conditionals, and loops through Python and basic web concepts.",
    tags: ["Python Syntax", "Logical Flow", "Algorithms"],
    status: "completed"
  },
  {
    stage: "02",
    title: "Modern Web Foundations",
    period: "Mid 2026",
    description: "Explored HTML5, CSS3, JavaScript, and responsive layouts. Built initial interactive web pages and deployed live prototypes to Vercel and GitHub Pages.",
    tags: ["HTML5", "Modern CSS", "JavaScript DOM", "Vercel"],
    status: "completed"
  },
  {
    stage: "03",
    title: "AI-Assisted Development & Prototypes",
    period: "Late 2026",
    description: "Adopted AI-assisted development tools like Google Antigravity. Architected Saksham 3.0 (assistive Parkinson's platform) and FocusMate (student study workspace), integrating React, TypeScript, and cloud databases.",
    tags: ["Google Antigravity", "React", "TypeScript", "Firebase", "Supabase"],
    status: "completed"
  },
  {
    stage: "04",
    title: "Deepening Independent Proficiency",
    period: "Current Focus (First Year B.Tech)",
    description: "Actively solidifying independent programming skills, data structures, and backend systems while applying for the MES Winter Internship Programme 2026 to gain structured mentorship.",
    tags: ["B.Tech Coursework", "Data Structures", "Independent Coding", "Backend APIs"],
    status: "current"
  },
  {
    stage: "05",
    title: "Full-Stack Engineering & Applied AI",
    period: "Future Horizon",
    description: "Targeting scalable full-stack applications, intelligent agentic workflows, and deploying machine learning models to solve meaningful human problems.",
    tags: ["Applied GenAI", "Distributed Systems", "Full-Stack Engineering"],
    status: "future"
  }
];

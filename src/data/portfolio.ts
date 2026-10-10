/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };


export const profile = {
  fullName: 'Sai Chandu',
  displayName: 'Sai Chandu',
  firstName: 'CHANDU',
  seriesTag: 'MY PORTFOLIO',
  originalLabel: 'SAI CHANDU ORIGINAL',
  role: 'Aspiring Software Developer',
  tagline: ['Software Developer', 'Web Development', 'AI / ML'],
  intro:
    'Aspiring Software Developer with a foundation in programming, web development and AI/ML, currently pursuing a Degree in AI & ML. Hands-on exposure through web projects and a 3-month Embedded Systems internship.',
    location: 'Hyderabad, Telangana',
  email: 'mogilicharlachandu99@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mogilicharla-chandu-887a48386/',
    github: 'https://github.com/Saichandu63',
  },
  resumePdf: '/assets/chandu-resume.pdf',
  
portrait: {
  src: '/assets/chandu.jpg',
  alt: 'Portrait of Sai Chandu',
},

  interests: [
    'Web Development',
    'AI / ML',
    'AI Prompt Engineering',
    'Video Editing',
    'Tech Content Creation',
  ],
};



export const education = [
  {
    school: 'Siddhartha Degree College',
    place: 'Chinthal, Hyderabad',
    degree: 'B.Sc. Artificial Intelligence & Machine Learning',
    period: '2025 – Present',
    score: 'Currently Pursuing',
  },
  {
    school: 'Khammam Public School',
    place: 'Khammam',
    degree: 'SSC',
    period: '2022 – 2023',
    score: 'CGPA 8.3',
  },
  {
    school: 'Intermediate (MPC)',
    place: 'Khammam',
    degree: 'Mathematics, Physics & Chemistry',
    period: '2023 – 2025',
    score: '658 Marks',
  },
];


export const experience = [
  {
    company: 'JYESTA CORPORATE ENTITY Pvt LTD',
    role: 'Trainee',
    place: 'HYDERABAD, TELANGANA',
    period: 'JULY 2026 – DECEMBER 2026',
    points: [
      'Completed one year of intensive Full-Stack Development (FSD) training covering frontend, backend, database integration, and deployment workflows.',
      'Developed responsive and functional web applications by implementing user interfaces, server-side logic, and database connectivity.',
      'Deployed and managed web applications while applying version control, debugging, and end-to-end development practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'policyguard-ai',
    title: 'PolicyGuard AI',
    year: '2026',
    genre: 'AI • NLP • LLM',
    logline: 'An AI-powered policy analysis platform across web, browser extension, mobile and desktop applications.',
    stack: ['Python', 'NLP', 'LLM', 'REST API'],
    build: [
      'Built an AI-powered policy analysis platform across web, browser extension, mobile, and desktop applications, processing 500+ policy documents with 92% accuracy and reducing manual review time by 60% across 8 policy categories.',
      'Engineered LLM-based Q&A, key-information extraction, and REST API integration for 10+ document types, enabling real-time policy insights and reducing decision turnaround time by 45%.',
    ],
    features: [
      'LLM-based Q&A over policy documents',
      'Key-information extraction',
      'REST API integration for 10+ document types',
      'Web, browser extension, mobile & desktop apps',
      'Real-time policy insights',
    ],
    metrics: [
      { value: '500+', label: 'policy documents processed' },
      { value: '92%', label: 'accuracy' },
      { value: '60%', label: 'less manual review time' },
      { value: '45%', label: 'faster decision turnaround' },
      { value: '8', label: 'policy categories' },
    ],
    // The resume links to https://github.com/Sushmitadasari/PolicyGuard-AI, which is not public yet (404).
    // Add `github: 'https://github.com/Sushmitadasari/PolicyGuard-AI',` back once the repo is public.
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway System',
    year: '2026',
    genre: 'Full-Stack • Fintech • Microservices',
    logline: 'A full-stack UPI & card payment gateway built around a strict payment state machine.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Docker'],
    build: [
      'Built full-stack UPI & card payment gateway processing 1,000+ transactions at 99.8% uptime with a strict payment state machine (processing → success/failed).',
      'Dockerized microservice architecture cut deployment setup by 70%; backend optimizations reduced API response time by 40% and tripled throughput under load.',
    ],
    features: [
      'UPI & card payments',
      'Strict payment state machine (processing → success / failed)',
      'Dockerized microservice architecture',
      'Backend optimizations for load',
    ],
    metrics: [
      { value: '1,000+', label: 'transactions processed' },
      { value: '99.8%', label: 'uptime' },
      { value: '70%', label: 'less deployment setup' },
      { value: '40%', label: 'faster API response' },
      { value: '3×', label: 'throughput under load' },
    ],
    github: 'https://github.com/Sushmitadasari/Payment-gateway-system-Project',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    year: '2026',
    genre: 'SaaS • Security • DevOps',
    logline: 'Shared-database multi-tenancy with strict tenant isolation and 4-level JWT/RBAC.',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Docker Compose'],
    build: [
      'Architected shared-database multi-tenancy for 50+ concurrent tenants with strict tenant_id isolation and 4-level JWT/RBAC, achieving zero unauthorized-access incidents across 200+ users.',
      'Implemented Docker Compose one-command deployment, reducing environment setup time from 45 minutes to under 2 minutes.',
    ],
    features: [
      'Shared-database multi-tenancy',
      'Strict tenant_id isolation',
      '4-level JWT / RBAC',
      'One-command Docker Compose deployment',
    ],
    metrics: [
      { value: '50+', label: 'concurrent tenants' },
      { value: '200+', label: 'users' },
      { value: '0', label: 'unauthorized-access incidents' },
      { value: '45m → <2m', label: 'environment setup time' },
    ],
    github: 'https://github.com/Sushmitadasari/Multi-Tenant-SaaS-Platform',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'cisco-networking',
    title: 'Cisco Networking',
    org: 'Cisco',
    detail: 'Networking certification and foundational knowledge of computer networks.',
    laurel: 'Certification',
  },
  {
    id: 'oracle',
    title: 'Oracle Certification',
    org: 'Oracle',
    detail: 'Technical learning and certification through Oracle.',
    laurel: 'Certification',
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    org: 'Embedded Systems Internship',
    detail: 'Completed a 3-month internship with hands-on exposure to embedded systems.',
    laurel: 'Internship',
  },
  {
    id: 'nasscom',
    title: 'NASSCOM Certification',
    org: 'NASSCOM',
    detail: 'Professional learning and certification.',
    laurel: 'Certification',
  },
];

export type Certification = {
  issuer: string;
  name: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'Cisco',
    name: 'Cisco Networking',
    link: '',
  },
  {
    issuer: 'Oracle',
    name: 'Oracle',
    link: '',
  },
  {
    issuer: 'Embedded Systems',
    name: 'Embedded Systems Internship',
    link: '',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };


export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Programming fundamentals',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Building responsive web interfaces',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Server-side development',
    skills: [
      { name: 'Node.js', mono: 'No' },
    ],
  },
  {
    id: 'interests',
    title: 'Areas of Interest',
    subtitle: 'Technologies I enjoy exploring',
    skills: [
      { name: 'Web Development', mono: 'Web' },
      { name: 'AI / ML', mono: 'AI' },
      { name: 'AI Prompt Engineering', mono: 'AI+' },
    ],
  },
  {
    id: 'creative',
    title: 'Creative Skills',
    subtitle: 'Content and visual storytelling',
    skills: [
      { name: 'Video Editing', mono: 'Vid' },
      { name: 'Tech Content Creation', mono: 'Tech' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 5-star'],
  C: ['HackerRank 5-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['AlgoUniversity Tech Fellow', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Sc AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'My Education',
    period: '2022 – Present',
    synopsis: 'My academic journey and educational background.',
    episodes: [
      {
        code: 'S01E01',
        title: 'School Education',
        description: 'SSC at Khammam Public School.',
        tags: ['SSC', 'CGPA 8.3'],
        runtime: '2022 – 2023',
        palette: ocean,
      },
      {
        code: 'S01E02',
        title: 'Intermediate',
        description: 'Intermediate MPC studies.',
        tags: ['Mathematics', 'Physics', 'Chemistry'],
        runtime: '2023 – 2025',
        palette: amber,
      },
      {
        code: 'S01E03',
        title: 'Degree',
        description: 'Currently pursuing B.Sc. in Artificial Intelligence and Machine Learning.',
        tags: ['B.Sc.', 'AI & ML'],
        runtime: '2025 – Present',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Technical Skills',
    period: 'Learning Journey',
    synopsis: 'Programming, web development and AI/ML interests.',
    episodes: [
      {
        code: 'S02E01',
        title: 'Web Development',
        description: 'Learning to build web interfaces and applications.',
        tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        runtime: 'Learning',
        palette: ocean,
      },
      {
        code: 'S02E02',
        title: 'Programming',
        description: 'Developing programming skills.',
        tags: ['Python', 'JavaScript', 'Node.js'],
        runtime: 'Learning',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Internship',
    period: '3 Months',
    synopsis: 'Practical exposure to Embedded Systems.',
    episodes: [
      {
        code: 'S03E01',
        title: 'Embedded Systems',
        description: 'Three-month Embedded Systems internship experience.',
        tags: ['Embedded Systems'],
        runtime: '3 Months',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Project Highlights',
    period: 'Projects',
    synopsis: 'Software projects and creative work.',
    episodes: [
      {
        code: 'S04E01',
        title: 'AutoCare AI',
        description: 'Vehicle diagnosis project.',
        tags: ['AI', 'Web Development'],
        runtime: 'Project',
        palette: crimson,
      },
      {
        code: 'S04E02',
        title: 'FASHIONOID',
        description: 'Online fashion store project.',
        tags: ['E-commerce', 'Web Development'],
        runtime: 'Project',
        palette: ocean,
      },
      {
        code: 'S04E03',
        title: 'BITESHOOTS',
        description: 'Creative video and editing brand.',
        tags: ['Video Editing', 'Content Creation'],
        runtime: 'Project',
        palette: violet,
      },
      {
        code: 'S04E04',
        title: 'SREE BHANU INTERIOR DESIGNs',
        description: 'Interior design project highlight.',
        tags: ['Interior Design'],
        runtime: 'Project',
        palette: jade,
      },
    ],
  },
];


export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'AI Project',
    title: 'AutoCare AI',
    detail: 'Vehicle diagnosis website project',
    palette: crimson,
  },
  {
    label: 'E-commerce',
    title: 'FASHIONOID',
    detail: 'Online fashion store project',
    palette: ocean,
  },
  {
    label: 'Creative Brand',
    title: 'BITESHOOTS',
    detail: 'Video editing and cinematic shoots',
    palette: violet,
  },
  {
    label: 'Interior Design',
    title: 'SREE BHANU INTERIOR DESIGNs',
    detail: 'Interior design brand',
    palette: jade,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Degree B.sc · AI & ML',
    lines: ['New Siddhartha degree college', 'October 2026 – Present'],
    chips: ['pursuing'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Python, C, C++ · React, Node.js, Express.js', ' REST, JWT'],
    chips: ['Java', 'Python', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Training',
    title: 'JYESTA CORPORATE ENTITY',
    lines: ['3 months of EMBEDDED SYSTEMS training', 'Trainee · JYESTA CORPOFRATE ENTITY Pvt Ltd · JULY 2026 – AUGUST 2026', 'Frontend · Backend · Databases · Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['AUTOCARE-AI — 500+ documents, 92% accuracy', 'Payment Gateway — 1,000+ transactions, 99.8% uptime', 'Multi-Tenant SaaS — 50+ tenants, zero unauthorized access'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Tech RITHYM — IT HUB', 'Semi-Finalist — Flipkart GRiD 7.0', 'AIML (PURSUING)'],
  },
  {
    kicker: 'Certified',
    title: '8 Certifications',
    lines: ['AWS, · MongoDB · Oracle · GitHub · Pearson', 'NPTEL · Cisco · Udemy'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Machine Learning'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Sai Chandu',
    blurb: 'My portfolio — explore my journey',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

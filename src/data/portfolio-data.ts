import { SkillItem, ProjectItem } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Muhammad Rifqi Fadhlillah',
  shortName: 'Murefa',
  role: 'Fullstack & Backend Software Engineer',
  tagline: 'Membangun aplikasi web interaktif, performan tinggi, dan solusi backend terukur.',
  bio: 'Seorang Software Developer yang berfokus pada pengembangan aplikasi web modern dan sistem backend terukur. Berpengalaman dalam merancang arsitektur RESTful API, integrasi cloud database, serta antarmuka pengguna yang responsif dan estetis menggunakan ekosistem TypeScript, Python, dan React.',
  location: 'Indonesia',
  email: 'murefa.dev@gmail.com',
  githubUsername: 'mrezafdllah', // default fallback username
  cvUrl: '/cv.pdf',
  availability: 'Available for Opportunities',
  experienceYears: '3+',
  completedProjects: '25+',
  techStackCount: '15+',
  socialLinks: {
    github: 'https://github.com/mrezafdllah',
    linkedin: 'https://linkedin.com/in/murefa',
    email: 'mailto:murefa.dev@gmail.com',
    whatsapp: 'https://wa.me/6281234567890',
  },
};

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  { name: 'TypeScript', iconName: 'FileCode2', category: 'Languages', level: 'Advanced', color: '#3178C6' },
  { name: 'Python', iconName: 'Terminal', category: 'Languages', level: 'Advanced', color: '#3776AB' },
  { name: 'JavaScript', iconName: 'Code', category: 'Languages', level: 'Advanced', color: '#F7DF1E' },
  { name: 'SQL', iconName: 'Database', category: 'Languages', level: 'Proficient', color: '#00BCF2' },
  { name: 'HTML5 & CSS3', iconName: 'Layout', category: 'Languages', level: 'Advanced', color: '#E34F26' },

  // Frontend
  { name: 'React.js', iconName: 'Atom', category: 'Frontend', level: 'Advanced', color: '#61DAFB' },
  { name: 'Next.js', iconName: 'Flame', category: 'Frontend', level: 'Advanced', color: '#FFFFFF' },
  { name: 'Tailwind CSS', iconName: 'Palette', category: 'Frontend', level: 'Advanced', color: '#38BDF8' },
  { name: 'Framer Motion', iconName: 'Sparkles', category: 'Frontend', level: 'Proficient', color: '#FF0055' },

  // Backend & API
  { name: 'Node.js', iconName: 'Server', category: 'Backend & API', level: 'Advanced', color: '#339933' },
  { name: 'Express.js', iconName: 'Cpu', category: 'Backend & API', level: 'Advanced', color: '#A3E635' },
  { name: 'FastAPI / Flask', iconName: 'Zap', category: 'Backend & API', level: 'Proficient', color: '#009688' },
  { name: 'RESTful API Dev', iconName: 'Globe', category: 'Backend & API', level: 'Advanced', color: '#38BDF8' },

  // Database & Cloud
  { name: 'PostgreSQL', iconName: 'Database', category: 'Database & Cloud', level: 'Advanced', color: '#336791' },
  { name: 'Supabase', iconName: 'Cloud', category: 'Database & Cloud', level: 'Advanced', color: '#3ECF8E' },
  { name: 'Redis', iconName: 'Layers', category: 'Database & Cloud', level: 'Proficient', color: '#DC382D' },
  { name: 'Vercel & Cloud Hosting', iconName: 'CloudRain', category: 'Database & Cloud', level: 'Advanced', color: '#FFFFFF' },

  // Tools & Workflow
  { name: 'Git & GitHub', iconName: 'GitBranch', category: 'Tools & Workflow', level: 'Advanced', color: '#F05032' },
  { name: 'Docker', iconName: 'Box', category: 'Tools & Workflow', level: 'Proficient', color: '#2496ED' },
  { name: 'Postman / Insomnia', iconName: 'Send', category: 'Tools & Workflow', level: 'Advanced', color: '#FF6C37' },
  { name: 'Linux / CLI', iconName: 'Command', category: 'Tools & Workflow', level: 'Proficient', color: '#FCC624' },
];

export const FALLBACK_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Interactive Cloud Portfolio',
    description: 'Modern portfolio website built with Next.js App Router, Tailwind CSS, Framer Motion, GitHub REST API, and Supabase Cloud PostgreSQL integration.',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 18,
    forks: 4,
    githubUrl: 'https://github.com/Murefa/interactive-portfolio',
    liveUrl: 'https://murefa-portfolio.vercel.app',
    topics: ['nextjs', 'typescript', 'tailwind-css', 'supabase', 'framer-motion'],
    featured: true,
  },
  {
    id: 2,
    title: 'FastAPI Enterprise Microservices',
    description: 'High-performance asynchronous REST API boilerplate with automated JWT auth, PostgreSQL database migrations, Redis caching, and Docker Compose.',
    primaryLanguage: 'Python',
    languageColor: '#3776AB',
    stars: 32,
    forks: 9,
    githubUrl: 'https://github.com/Murefa/fastapi-enterprise-boilerplate',
    liveUrl: '',
    topics: ['python', 'fastapi', 'postgresql', 'redis', 'docker'],
    featured: true,
  },
  {
    id: 3,
    title: 'SaaS Analytics Dashboard',
    description: 'Comprehensive business metrics dashboard featuring real-time data visualization, dark/light themes, role-based access control, and PDF export reports.',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 24,
    forks: 6,
    githubUrl: 'https://github.com/Murefa/saas-analytics-platform',
    liveUrl: 'https://saas-metrics-demo.vercel.app',
    topics: ['react', 'nextjs', 'recharts', 'tailwind-css', 'prisma'],
    featured: true,
  },
  {
    id: 4,
    title: 'E-Commerce Backend Engine',
    description: 'Scalable backend API system with payment gateway integration (Stripe & Midtrans), inventory concurrency handling, and automated order fulfillment emails.',
    primaryLanguage: 'JavaScript',
    languageColor: '#F7DF1E',
    stars: 15,
    forks: 3,
    githubUrl: 'https://github.com/Murefa/ecommerce-backend-engine',
    liveUrl: '',
    topics: ['nodejs', 'express', 'mongodb', 'stripe', 'midtrans'],
    featured: false,
  },
  {
    id: 5,
    title: 'AI Prompt & Knowledge Assistant',
    description: 'Intelligent workflow assistant that indexes documents into vector embeddings and answers questions with context-aware semantic retrieval.',
    primaryLanguage: 'Python',
    languageColor: '#3776AB',
    stars: 41,
    forks: 12,
    githubUrl: 'https://github.com/Murefa/ai-knowledge-assistant',
    liveUrl: '',
    topics: ['python', 'langchain', 'chromadb', 'openai', 'streamlit'],
    featured: false,
  },
  {
    id: 6,
    title: 'Real-time Chat & Collaboration Hub',
    description: 'Multi-room real-time messaging application with WebSocket channels, typing indicators, read receipts, and encrypted media attachment uploads.',
    primaryLanguage: 'TypeScript',
    languageColor: '#3178C6',
    stars: 20,
    forks: 5,
    githubUrl: 'https://github.com/Murefa/realtime-chat-hub',
    liveUrl: 'https://realtime-chat-demo.vercel.app',
    topics: ['websocket', 'socket-io', 'react', 'tailwind', 'postgresql'],
    featured: false,
  },
];

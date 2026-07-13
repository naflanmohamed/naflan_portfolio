import { Github, Linkedin, Mail, Twitter, Instagram, Layout, Server, Wrench, BrainCircuit } from 'lucide-react';
import { NavItem, Project, SkillCategory, SocialLink, Testimonial, ExperienceItem, EducationItem, CertificationItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Skills', id: 'skills' },
  { label: 'Resume', id: 'resume' },
  { label: 'Projects', id: 'projects' },
];

export const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: "Naflan Mohamed",
  title: "AI Engineer - Full Stack",
  description: "I build accessible, pixel-perfect, secure, and performant web applications with a focus on exceptional user experiences using modern AI and full-stack technologies.",
};

export const ABOUT_CONTENT = {
  title: "About Me",
  text: `I'm a Full Stack AI Engineer who enjoys turning messy, real-world problems into clean, working systems.

On the frontend, I build with React, focusing on interfaces that feel intuitive rather than just functional. On the backend, I work across Node.js/Express and Python (FastAPI), often building AI-powered features like RAG pipelines and LLM integrations rather than just standard CRUD APIs.

Outside of coding, I like studying design systems and refining the small details that make a product feel polished instead of generic.`,
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "6+" },
    // { label: "Happy Clients", value: "15+" },
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "Fluxxion",
    period: "Jun 2025 — Aug 2025",
    description: "Built responsive React UIs improving page performance by 40% and reducing UI bugs by 30%, including high performance modules such as a scalable Daily Goals Tracker.",
    technologies: ["React", "Node.js", "Git/GitHub"]
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "CArtificial Intelligence Community of Pakistan (AICP)",
    period: "Mar 2024 — Jun 2024",
    description: "Delivered 5+ production ready web apps, increasing form submission accuracy by 60%. Refactored frontend codebases to ensure mobile responsiveness, significantly improving the user experience across varying device sizes.",
    technologies: ["HTML", "CSS", "JavaScript", "Git/GitHub"]
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "BS(Hons) in Computer Science",
    institution: "Government College University - Lahore.",
    year: "2022 - 2026"
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    name: "Meta Full Stack Developer: Front-End & Back-End from Scratch Specialization",
    issuer: "Meta",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/MQKDSLXN5C11"
  },
  {
    id: 2,
    name: "MERN Stack Front to Back: Full Stack React, Redux & Node.js",
    issuer: "Packt",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/KQ2UTL8PQ196"
  },
  {
    id: 5,
    name: "MERN eCommerce from Scratch",
    issuer: "Packt",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/P8J2CNWSF76M"
  },
  {
    id: 6,
    name: "AWS - Solutions Architecture Job Simulation",
    issuer: "Forage",
    year: "2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_n7jdNaPtow7ms6SKf_1752095486618_completion_certificate.pdf"
  },
  {
    id: 10,
    name: "Introduction to Generative AI",
    issuer: "Google",
    year: "2023",
    link: "https://www.coursera.org/account/accomplishments/records/UENMYBCJBD5J"
  }

];

export const SKILLS: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Python", "FastAPI", "LangChain", "OpenAI API", "RAG Pipelines", "Pinecone", "ChromaDB"]
  },
  {
    
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML", "CSS"]
  },
  
  {
    name: "Backend Architecture",
    icon: Server,
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Passport.js"]
  },
  {
    name: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git/GitHub", "Docker", "CI/CD", "GCP Cloud Run", "Postman"]
  }
];

export const PROJECTS: Project[] = [
  
  {
    id: 1,
    title: "DocChat - Chat with Documents",
    description: "An AI-powered document chatbot that lets users upload files and ask natural language questions about their content. Uses RAG (Retrieval-Augmented Generation) to fetch relevant context before generating accurate, source-grounded answers instead of hallucinated responses.",
    tech: ["Next.js", "FastAPI", "LangChain", "OpenAI API", "Gemini API", "GrokAPI" , "Pinecone", "Tailwind CSS"],
    link: "https://docchats.vercel.app/",
    github: "https://github.com/naflanmohamed/DocChat",
    image: "/assets/images/DocChat.png",
    category: "AI/ML",
    year: "2026"
  },
  {
  id: 2,
  title: "Yaloo",
  description: "An AI-powered community-based tourism platform that connects solo and budget tourists with verified local guides and village hosts for authentic cultural immersion. Uses AI matching to recommend guides and experiences based on tourist preferences, computer vision for ID verification, and NLP-driven review analysis, all while supporting local economies through homestays and off-the-beaten-path experiences.",
  tech: ["Flutter", "Django REST Framework", "Supabase", "PostgreSQL", "Redis", "Celery", "Gemini API", "scikit-learn", "spaCy", "OpenCV", "Stripe"],
  link: "https://github.com/yaloolk/yaloo",
  github: "https://github.com/yaloolk/yaloo",
  image: "/assets/images/tourist-interface-1.jpg",
  category: "Mobile APP / AI/ML",
  year: "2026"
  },
  {
    id: 3,
    title: "Vehicle Rental Platform",
    description: "A vehicle rental platform that allows users to browse available vehicles, view detailed information, and book easily. and includes admin features to manage fleet inventory, and update vehicle data.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "GitHub", "Vercel"],
    link: "https://autofleetrentals.vercel.app/",
    github: "https://github.com/naflanmohamed/AutoFleet-Rentals",
    image: "/assets/images/autofleetrentals.webp",
    category: "Website",
    year: "2025"
  },
  {
    id: 4,
    title: "AI Study Hub",
    description: "AI Study Hub helps students save time by using AI tools for summarizing, note generation, and quick learning support all in one simple interface.",
    tech: ["React.js", "Tailwind", "Gemini API",],
    link: "https://aistudyhub-pi.vercel.app/",
    github: "https://github.com/naflanmohamed/ai-study-hub",
    image: "/assets/images/aistudyhub.webp",
    category: "AI / Website",
    year: "2025"
  },
  {
    id: 5,
    title: "Expense Tracker",
    description: "Expense Tracker is a web application that allows users to track their expenses and manage their budgets.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
    link: "https://naflanmohamed.github.io/expense-tracker/",
    github: "https://github.com/naflanmohamed/expense-tracker",
    image: "/assets/images/ExpenseTracker.webp",
    category: "Website",
    year: "2025"
  },
  {
    id: 6,
    title: "Interstellar Link",
    description: "Interstellar Link is an single-page concept website for a futuristic space travel agency. It features a high-performance HTML5 Canvas starfield, interactive particle effects, and a CSS-only 3D planet simulation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Canvas API 2D"],
    link: "https://naflanmohamed.github.io/Interstellar-Link/#",
    github: "https://github.com/naflanmohamed/Interstellar-Link",
    image: "/assets/images/interstellarlink.webp",
    category: "Website",
    year: "2025"
  },
  {
    id: 7,
    title: "SkyCast Weather App",
    description: "SkyCast is a responsive and user-friendly weather application. It fetches real-time weather data and displays it with a clean, modern interface.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    link: "https://naflanmohamed.github.io/SkyCast-Weather-App/",
    github: "https://github.com/naflanmohamed/SkyCast-Weather-App",
    image: "/assets/images/skycastweatherapp.webp",
    category: "Website",
    year: "2024"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/naflanmohamed', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/naflan-mohamed', icon: Linkedin },
  { name: 'Email', href: 'mailto:mnnaflanmohamed@gmail.com', icon: Mail }
];
// Real data for Utkarsh Singh Rajawat's portfolio

export const personalInfo = {
  name: "Utkarsh Singh",
  fullName: "Utkarsh Singh Rajawat",
  role: "Full Stack Developer",
  location: "Jaipur, Rajasthan",
  status: "Available for freelance & internships",
  tagline: "I build fast, responsive, and slightly opinionated web experiences.",
  bio: "I'm a frontend-focused full-stack developer who loves turning Figma files into pixel-perfect, accessible, and performant web apps. Currently a B.Tech student at AIET Jaipur, I work with React, Next.js, and TypeScript day-to-day — and care a lot about clean code, Core Web Vitals, and the tiny details that make a product feel good.",
  email: "utkarshsinghrajawat12@gmail.com",
  phone: "+91 9351571387",
  resumeUrl:
    "https://drive.google.com/file/d/1y_QQzzycKH2TZ4chIy-Bx-F60Wga2mjv/view?usp=sharing",
  avatar: "/utkarsh.jpg",
  socials: {
    github: "https://github.com/Utkarshsingh112",
    linkedin: "https://www.linkedin.com/in/utkarsh-singh10",
    email: "mailto:utkarshsinghrajawat12@gmail.com",
  },
};

export const stats = [
  { label: "Years coding", value: "2" },
  { label: "Projects shipped", value: "5" },
  { label: "Internships", value: "3" },
  { label: "CGPA", value: "8.0" },
];

export const skills = [
  {
    category: "Frontend Core",
    color: "coral",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Styling & State",
    color: "ink",
    items: ["Tailwind CSS", "Bootstrap", "Styled Components", "Redux Toolkit", "Zustand", "Context API"],
  },
  {
    category: "Backend & Data",
    color: "mustard",
    items: ["Node.js", "Express.js", "MongoDB", "Supabase", "REST APIs"],
  },
  {
    category: "Tools & Workflow",
    color: "sage",
    items: ["Git", "GitHub Actions", "Vercel", "Cloudinary", "EmailJS", "Jest"],
  },
];

export const projects = [
  {
    id: 1,
    title: "LMS AI",
    year: "2025",
    type: "AI Voice Assistant",
    description:
      "A full-stack Learning Management System with an AI-powered voice assistant for hands-free course navigation and instant answers. Built with Context API for auth + course tracking, and NLP APIs for voice interaction.",
    tech: ["Next.js", "TypeScript", "Supabase", "VAPI"],
    image: "/lms-ai.jpg",
    link: "https://lms-ai-ten.vercel.app/",
    github: "https://github.com/Utkarshsingh112",
    accent: "coral",
  },
  {
    id: 2,
    title: "SwapWise",
    year: "2025",
    type: "Marketplace Platform",
    description:
      "An online platform to swap old clothes for new ones, token points, or instant cash via online payment. A real reward loop for sustainable fashion.",
    tech: ["React", "Express", "MongoDB", "Stripe", "Tailwind"],
    image: "/swap-wise.jpg",
    link: "https://rewear-community-clothing-exchange.vercel.app/",
    github: "https://github.com/Utkarshsingh112",
    accent: "sage",
  },
  {
    id: 3,
    title: "DevConnect",
    year: "2024",
    type: "Community Platform",
    description:
      "A networking platform where developers sign up to follow tech news, events & happenings worldwide. Optimized image handling with Cloudinary CDN cut initial load time by 40%.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Zustand", "Cloudinary"],
    image: "/devconnect.jpg",
    link: "https://devconnect-rluw.vercel.app/",
    github: "https://github.com/Utkarshsingh112",
    accent: "blue",
  },
  {
    id: 4,
    title: "Personal Portfolio v0",
    year: "2024",
    type: "Web Experience",
    description:
      "A fully responsive personal portfolio with mobile-first design. Hit a 75 Lighthouse score via image optimization, code-splitting, and Core Web Vitals tuning.",
    tech: ["React", "Next.js", "Tailwind", "EmailJS"],
    image: "/previous-portfolio.jpg",
    link: "https://utkarsh-portfolio-utkarsh-singhs-projects-4e5eda89.vercel.app/",
    github: "https://github.com/Utkarshsingh112",
    accent: "mustard",
  },
];

export const experience = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Webonus",
    period: "May 2025 — Jul 2025",
    description:
      "Built responsive UI components in React/Next/TS, translated Figma → pixel-perfect interfaces, integrated REST APIs with caching & error handling.",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Upflairs",
    period: "Jul 2024 — Aug 2024",
    description:
      "Built modular React + TypeScript components with Tailwind & Bootstrap. Enhanced CI/CD workflows via GitHub Actions, cutting manual testing overhead.",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "SingleTap",
    period: "Feb 2024 — May 2024",
    description:
      "Implemented accessible UI components following WCAG. Built secure auth flows with input validation, did bug triage with browser DevTools.",
  },
  {
    id: 4,
    role: "B.Tech, Computer Science",
    company: "Arya Institute of Engineering & Technology",
    period: "Sep 2022 — Present",
    description: "CGPA: 8.0. Won AIET-Hackathon 2023 & Shankara Global Hackathon.",
  },
];

export const bento = {
  achievements: [
    { title: "AIET-Hackathon 2023", subtitle: "Winner" },
    { title: "Shankara Global Hackathon", subtitle: "Finalist" },
  ],
  currentlyBuilding: {
    name: "SwapWise v2",
    note: "Adding token-based wallet & Stripe payouts.",
  },
  learning: ["Rust", "WebGL", "System Design", "LLM apps", "Three.js"],
  github: {
    handle: "@Utkarshsingh112",
    commits: "1.2k+",
    repos: "20+",
  },
  nowPlaying: {
    track: "Lo-fi & Arijit Singh",
    label: "while shipping",
  },
  availability: {
    status: "Open to internships & freelance",
    cta: "Let's talk",
  },
};

export const navLinks = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "currently", href: "#currently" },
  { label: "contact", href: "#contact" },
];

// ─── PORTFOLIO DATA — Updated from Resume ──────────────────────────────────

export const personal = {
  name: "Krish Tyagi",
  role: "Full-Stack Developer",
  tagline:
    "Building digital experiences that live at the intersection of performance and design.",
  bio: "Full-Stack Developer and B.Tech CSE student with hands-on experience architecting and deploying production-grade web applications using React, Next.js, Node.js, and MongoDB. Demonstrated ability to deliver end-to-end solutions — from RESTful API design and JWT authentication to responsive UI development and CI/CD deployment — with a strong foundation in Data Structures & Algorithms (200+ LeetCode problems) and a proven record of academic excellence (96.6%, UP Board Rank 7th in Uttar Pradesh).",
  email: "krishtyagi0125@gmail.com",
  phone: "+91 9927807094",
  location: "Hapur, UP, India",
  university: "Ajay Kumar Garg Engineering College",
  degree: "B.Tech Computer Science & Engineering",
  year: "Sep 2024 – May 2028",
  profileImage: "/profile.jpg", // ← Place your photo at /public/profile.jpg
  resumeUrl: "/resume.pdf",

  socials: {
    github: "https://github.com/KrishTyagi25",
    linkedin: "https://linkedin.com/in/KrishTyagi25",
    leetcode: "https://leetcode.com/KrishTyagi25",
    codeforces: "https://codeforces.com/profile/KrishTyagi25",
  },

  codingStats: {
    leetcode: {
      username: "KrishTyagi25",
      solved: 226,
      easy: 95,
      medium: 105,
      hard: 26,
      rating: 1450,
    },
    codeforces: {
      username: "krishtyagi0125",
      rating: 1200,
      maxRating: 1350,
      rank: "Pupil",
      problemsSolved: 3,
    },
    github: {
      username: "KrishTyagi25",
      repos: 9,
      stars: 80,
      contributions: 100,
    },
  },
};

export const education = [
  {
    institution: "Ajay Kumar Garg Engineering College",
    degree: "B.Tech in Computer Science Engineering",
    location: "Ghaziabad, U.P.",
    duration: "Sep 2024 – May 2028",
    color: "#6366f1",
  },
  {
    institution: "V.I.P. Inter College",
    degree:
      "Senior Secondary (96.6%, Class XII) | Secondary (91.5%, Class X) — UP Board",
    location: "Hapur, U.P.",
    duration: "Apr 2020 – Apr 2024",
    color: "#06b6d4",
  },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Next.js 14", level: 85, icon: "▲" },
    { name: "TypeScript", level: 80, icon: "🔷" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "Framer Motion", level: 75, icon: "✨" },
    { name: "Vite", level: 80, icon: "⚡" },
    { name: "Recharts", level: 70, icon: "📊" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 80, icon: "🚂" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "Mongoose", level: 78, icon: "📦" },
    { name: "REST APIs", level: 85, icon: "🔗" },
    { name: "JWT Auth", level: 82, icon: "🔐" },
  ],
  languages: [
    { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
    { name: "TypeScript", level: 80, icon: "🔷" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "Java", level: 90, icon: "☕" },
    { name: "C", level: 70, icon: "⚡" },
    { name: "HTML5 & CSS3", level: 92, icon: "🌐" },
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "🐙" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Vercel", level: 85, icon: "▲" },
    { name: "Render", level: 75, icon: "🚀" },
    { name: "IntelliJ IDEA", level: 70, icon: "🧠" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "The Multiverse Classes",
    description:
      "Full-stack coaching institute management portal built as a freelance project, serving as the sole developer across frontend, backend, and deployment.",
    longDescription:
      "Designed and developed a full-stack coaching institute management portal from scratch as a freelance project. Built a role-based authentication system with separate Admin and Student portals using NextAuth v5 with JWT strategy, protecting 10+ API routes with server-side session validation. Developed an automated fee tracking system with monthly cron jobs (Vercel Cron) that auto-generates fee records, triggers email notifications via Resend API, and produces downloadable PDF receipts using pdf-lib. Implemented a mobile-first responsive UI with separate navigation for mobile and desktop; architected a multi-model MongoDB schema with four collections and compound indexes.",
    image: "/projects/multiverse.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "NextAuth",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "Role-based auth with Admin & Student portals",
      "Automated fee tracking with Vercel Cron",
      "Email notifications via Resend API",
      "PDF receipt generation with pdf-lib",
      "Mobile-first responsive UI",
    ],
    github: "https://github.com/KrishTyagi25/the-multiverse-classes",
    live: "https://themultiverseclasses-tan.vercel.app",
    featured: true,
    color: "#6366f1",
    duration: "Freelance Project",
  },
  {
    id: 2,
    title: "PrepVerse",
    description:
      "Production-grade full-stack interview prep platform with 20+ pages featuring DSA practice, AI mock interviews, resume builder, and analytics.",
    longDescription:
      "Architected a production-grade full-stack platform (20+ pages) featuring DSA practice, AI mock interviews, recruiter connect, resume builder, roadmap tracker, leaderboard, and a social feed. Developed RESTful APIs with Node.js + Express.js, MongoDB, and JWT auth; deployed frontend on Vercel and backend on Render with GitHub CI/CD. Built an AI mock interview module with a rule-based scoring engine (answer depth + difficulty weighting) and an analytics dashboard powered by Recharts and Framer Motion.",
    image: "/projects/prepverse.png",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "DSA practice with difficulty-based scoring",
      "AI mock interview with scoring engine",
      "Resume builder & recruiter connect",
      "Analytics dashboard with Recharts",
      "Social feed & leaderboard",
    ],
    github: "https://github.com/KrishTyagi25/prepverse",
    live: "https://prepverse-seven.vercel.app",
    featured: true,
    color: "#06b6d4",
    duration: "Jan 2026 – Present",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "Type-safe, SSR portfolio with Next.js 14 App Router achieving 98+ Lighthouse score with 3D animations and serverless contact form.",
    longDescription:
      "Built a type-safe, SSR portfolio with Next.js 14 App Router and TypeScript, achieving 98+ Lighthouse performance score via image optimization and code splitting. Implemented SEO best practices (Open Graph, sitemap, structured data) and a serverless contact form via Next.js API Routes — zero backend dependency, deployed on Vercel.",
    image: "/projects/portfolio.png",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Vercel",
    ],
    features: [
      "98+ Lighthouse performance score",
      "SEO optimized with Open Graph & sitemap",
      "Serverless contact form via API Routes",
      "Interactive 3D animations with Three.js",
    ],
    github: "https://github.com/KrishTyagi25/portfolio",
    live: "https://portfolio-jet-beta-0fuogetmv1.vercel.app",
    featured: true,
    color: "#8b5cf6",
    duration: "Mar 2026 – Present",
  },
];

export const achievements = [
  {
    title: "UP Board Rank 7th",
    description:
      "Ranked 7th in Uttar Pradesh in Class XII (96.6%) among ~2.5 million students; 1st in Hapur district (~17,000 students).",
    icon: "🏆",
    color: "#f59e0b",
  },
  {
    title: "JEE Mains 93.75 Percentile",
    description:
      "Qualified JEE Mains — above the national cutoff for top engineering institutions.",
    icon: "🎯",
    color: "#6366f1",
  },
  {
    title: "200+ DSA Problems",
    description:
      "Solved 200+ DSA problems on LeetCode across arrays, trees, graphs, and dynamic programming.",
    icon: "💡",
    color: "#06b6d4",
  },
  {
    title: "Hackathon 2026",
    description:
      "Frontend Developer — Built JanSahayak at Build With Trae Hackathon 2026.",
    icon: "🏗️",
    color: "#8b5cf6",
  },
  {
    title: "AI & ML Certification",
    description:
      "Completed Data AI & Machine Learning with Python — Froyo Technologies.",
    icon: "🤖",
    color: "#10b981",
  },
];
// ─── EDIT THIS FILE WITH YOUR REAL DETAILS ───────────────────────────────────

export const personal = {
  name: "Krish Tyagi",           // ← Your name
  role: "Full-Stack Developer",   // ← Your role
  tagline: "Building digital experiences that live at the intersection of performance and design.",
  bio: "B.Tech CSE student passionate about full-stack development, DSA, and crafting interactive UIs that make people feel something.",
  email: "krishtyagi0125@gmail.com",     
  location: "Hapur, UP, India",
  university: "Ajay Kumar Garg Engineering College",
  degree: "B.Tech Computer Science & Engineering",
  year: "2024 – 2028",
  gpa: "8.6 / 10",               // optional
  resumeUrl: "/resume.pdf",       // ← Place resume.pdf in /public/

  socials: {
    github: "https://github.com/KrishTyagi25",
    linkedin: "https://linkedin.com/in/KrishTyagi25",
    // twitter: "https://twitter.com/yourusername",  // optional
    leetcode: "https://leetcode.com/KrishTyagi25",
    codeforces: "https://codeforces.com/profile/KrishTyagi25",
  },

  codingStats: {
    leetcode: {
      username: "KrishTyagi25",
      solved: 226,          // ← Update these
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

export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "TypeScript", level: 80, icon: "🔷" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "Framer Motion", level: 75, icon: "✨" },
    { name: "Three.js", level: 65, icon: "🌐" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 80, icon: "🚂" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "REST APIs", level: 85, icon: "🔗" },
  ],
  languages: [
    { name: "C", level: 70, icon: "⚡" },
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "TypeScript", level: 80, icon: "🔷" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "Java", level: 90, icon: "☕" },
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "🐙" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Figma", level: 70, icon: "🎭" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "PrepVerse",
    description: "A full-stack developer networking platform with real-time chat, project collaboration, and code sharing capabilities.",
    longDescription: "Built with Next.js and Node.js, DevConnect enables developers to showcase projects, collaborate in real-time, and build meaningful professional connections. Features include live code editors, video calls, and AI-powered project recommendations.",
    image: "/projects/devconnect.png",  // ← Add image to /public/projects/
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Redis", "Tailwind CSS"],
    features: [
      "Real-time chat with code sharing",
      "Live collaborative code editor",
      "AI-powered developer matching",
      "GitHub OAuth integration",
    ],
    github: "https://github.com/KrishTyagi25/prepverse",
    // live: "https://devconnect.vercel.app",
    featured: true,
    color: "#6366f1",
  },
  {
    id: 2,
    title: "DevMind AI",
    description: "An intelligent resume builder that uses AI to craft ATS-optimized resumes with real-time preview and export to PDF.",
    longDescription: "Leverages GPT-4 to generate tailored resume content based on job descriptions. Features a drag-and-drop builder, multiple templates, ATS score checker, and one-click PDF export.",
    image: "/projects/resumebuilder.png",
    techStack: ["React", "OpenAI API", "Node.js", "MongoDB", "Puppeteer"],
    features: [
      "AI-powered content generation",
      "ATS score optimization",
      "Drag & drop builder",
      "PDF export with custom styling",
    ],
    // github: "https://github.com/yourusername/ai-resume-builder",
    // live: "https://airesume.vercel.app",
    featured: true,
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A comprehensive admin dashboard for e-commerce with real-time analytics, inventory management, and order tracking.",
    longDescription: "A feature-rich dashboard with beautiful data visualizations, real-time order updates via WebSockets, inventory alerts, customer analytics, and a mobile-responsive design.",
    image: "/projects/dashboard.png",
    techStack: ["React", "Express.js", "MongoDB", "Chart.js", "Socket.io", "JWT"],
    features: [
      "Real-time sales analytics",
      "Inventory management system",
      "Order tracking & management",
      "Role-based access control",
    ],
    github: "https://github.com/KrishTyagi25/portfolio",
    // live: "https://ecommdash.vercel.app",
    featured: true,
    color: "#8b5cf6",
  },
];
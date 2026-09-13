export const profile = {
  name: "Mohammad Fazal",
  brand: "Sairéla",
  role: "Software Engineer · Full-Stack Developer",
  location: "Uttar Pradesh, India",
  college: "ABES Engineering College",
  graduation: "2027",
  tagline:
    "B.Tech student and aspiring full-stack developer building practical, real-world software — and a women's apparel brand on the side.",
  email: "fazalmohammad231@gmail.com",
  phone: "+91 8318275471",
  github: "https://github.com/MFazal231",
  linkedin: "https://www.linkedin.com/in/mohammad-fazal/",
  codechef: "https://www.codechef.com/users/mohammad_fazal",
  resumeUrl: "/resume/Mohammad_Fazal_Resume.pdf",
};

export const skills = {
  "Programming Languages": ["Python", "JavaScript (ES6+)", "Java", "C", "C++", "SQL"],
  "Web Development": ["HTML5", "CSS3", "Bootstrap", "Flask", "Jinja2", "REST API", "Responsive Design"],
  "Databases & Tools": ["SQLite", "PostgreSQL", "Git", "GitHub", "VS Code", "Shopify"],
  "Currently Learning": [
    "React",
    "Next.js",
    "Express.js",
    "Databases",
    "Operating Systems",
    "Cybersecurity",
  ],
};

export const interests = [
  "Full-Stack Development",
  "Backend Development",
  "Game Development",
  "AI Applications",
  "Entrepreneurship & E-commerce",
  "Competitive Programming",
];

export const languages = ["English", "Hindi", "Spanish"];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "EngineerOS",
    description:
      "A learning platform that helps engineers track DSA practice and project work in one place — 159 problems across 19 topics, AI-powered daily missions built from your actual progress, and a unified dashboard with an AI chat assistant.",
    stack: ["Next.js", "Express.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://engineeros-app.vercel.app",
    highlight: true,
  },
  {
    title: "AgriFarm — Crop Disease Detection",
    description:
      "A platform enabling farmers to list and sell crops directly to consumers, with an AI-powered crop disease detection feature to help identify issues early. Built with usability for non-technical users in mind.",
    stack: ["React", "TensorFlow.js", "Flask", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/MFazal231/AgriFarm-Crop-Disease-Detection",
    liveUrl: "https://crop-disease-detection-woad.vercel.app",
  },
  {
    title: "ABES Digital Notice Board",
    description:
      "A secure notice management system for educational institutions with admin authentication and session-based access control. Full CRUD for creating, editing, and archiving notices, plus a responsive dashboard with engagement analytics.",
    stack: ["Flask", "Python", "Bootstrap", "PostgreSQL", "Jinja2"],
    githubUrl: "https://github.com/MFazal231/ABES-Notice-Board",
    liveUrl: "https://abes-notice-board.onrender.com",
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Founder & Web Manager",
    org: "Sairéla — E-Commerce Brand",
    period: "Mid 2024 — 2025",
    points: [
      "Built and managed a Shopify-based e-commerce storefront end-to-end, owning all technical and operational functions.",
      "Delivered 120+ customer orders within 2–3 months, managing the process from product listing to order fulfillment.",
      "Planned and executed digital marketing campaigns on Instagram and Meta Ads to drive customer acquisition.",
      "Applied SEO best practices to product titles and descriptions to improve organic discoverability.",
    ],
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "Oct 2023",
    title: "Started B.Tech at ABES Engineering College",
    description: "Began formal CS education and started learning to code.",
  },
  {
    year: "Early 2024",
    title: "Started Learning Flask & Web Dev",
    description: "Picked up HTML, CSS, JavaScript, and Flask — alongside CS50x and freeCodeCamp coursework.",
  },
  {
    year: "Mid 2024",
    title: "Founded Sairéla",
    description: "Launched a women's apparel and jewelry brand on Shopify, learning e-commerce and marketing hands-on.",
  },
  {
    year: "Early 2025",
    title: "Started 100+ Day CodeChef Streak",
    description: "Built a daily problem-solving habit, strengthening DSA and competitive programming skills.",
  },
  {
    year: "Nov 2025",
    title: "Built AgriFarm",
    description: "Built and deployed an AI-powered crop disease detection platform for farmers.",
  },
  {
    year: "Mid 2026",
    title: "Built ABES Digital Notice Board",
    description: "Built a secure, full-stack notice management system for ABES Engineering College.",
  },
  {
    year: "2027",
    title: "Expected Graduation",
    description: "Aiming to graduate with a strong full-stack portfolio and internship experience.",
  },
];

export const education = {
  degree: "Bachelor of Technology, Computer Science and Engineering",
  college: "ABES Engineering College, Ghaziabad",
  graduation: "Expected 2027",
  location: "Uttar Pradesh, India",
  cgpa: "CGPA: 7.10 / 10.00 (through 6th semester)",
};

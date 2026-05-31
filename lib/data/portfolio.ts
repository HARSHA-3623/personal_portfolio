export const RESUME_URL =
  "https://drive.google.com/file/d/1R_VhlmHYl8EMEfBnLTDn0TPmgHAfbtFn/view?usp=sharing";

export const CONTACT = {
  email: "harshavardan3623@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshavardan-naidu/",
  github: "https://github.com/HARSHA-3623",
};

export const heroTechStack = [
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Express.js",
];

export const impactStats = [
  { value: "400K+", label: "Users Migration Support" },
  { value: "6000+", label: "Concurrent User Validation" },
  { value: "Payment", label: "Gateway Integrations" },
  { value: "Casino & Affiliate", label: "Integrations" },
];

export const experienceMeta = {
  company: "GAMMASTACK",
  role: "Backend Engineer (Solution Engineer)",
  duration: "Aug 2025 – Present",
  industry: "iGaming",
};

export const experienceHighlights = [
  "REST APIs for platform, admin, and client customization",
  "Payment gateway integrations (N1CO, Virtual Pay, XGate)",
  "Casino provider webhooks — bets, wins, and wallet flows",
  "KYC onboarding and affiliate tracking integrations",
  "Background jobs for affiliate and transaction events",
  "Migration support for 400K+ user accounts",
  "Load testing and callback optimization (~6000 concurrent users)",
  "Customer.io email and backoffice service APIs",
];

export type Project = {
  title: string;
  description: string;
  contributions: string[];
  technologies: string[];
  paymentProviders?: string[];
  image?: string;
  liveDemo?: string;
  github?: string;
};

export const professionalProjects: Project[] = [
  {
    title: "iGaming Platform Project 1",
    description:
      "RESTful APIs for frontend applications, admin backoffice, and client platform configuration.",
    contributions: [
      "Developed backend APIs using Node.js and Express.js",
      "Integrated payment gateway services",
      "Integrated Customer.io email services",
      "Built admin backoffice APIs",
      "Banner and game management APIs",
      "Website customization APIs for clients",
      "Client-specific platform configurations",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Customer.io"],
  },
  {
    title: "iGaming Platform Project 2",
    description:
      "Gaming integrations, transactions, migration support, KYC, affiliates, and payment services.",
    contributions: [
      "Integrated casino providers with webhook handling",
      "Processed wallet mutations and transaction flows",
      "Payment callbacks and balance updates",
      "Third-party KYC and onboarding workflows",
      "Affiliate tracking with background job processing",
      "Migration support for 400K+ users",
      "Load testing and webhook optimization (~6000 concurrent users)",
      "Admin backoffice APIs",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Bull Queue",
    ],
    paymentProviders: ["N1CO", "Virtual Pay", "XGate"],
  },
];

export const personalProjects: Project[] = [
  {
    title: "E-Commerce App (Swing)",
    description: "GUI-based shopping cart with cart, billing, and inventory modules.",
    contributions: [
      "Modular desktop UI flows and state handling for e-commerce features.",
    ],
    technologies: ["Java", "Swing"],
    image:
      "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60",
    github: "#",
  },
  {
    title: "Course Management System",
    description: "Swing app for professor–student course and user management.",
    contributions: [
      "Role-based workflows with persistent data modeling.",
    ],
    technologies: ["Java", "Swing"],
    image: "https://sprout24.com/wp-content/uploads/2021/06/lms-.png",
    github: "https://github.com/HARSHA-3623/Course-Management-System",
  },
  {
    title: "Quiz App (Swing)",
    description: "Interactive quiz application with timer and score tracking.",
    contributions: [
      "Timed sessions, scoring logic, and dynamic question delivery.",
    ],
    technologies: ["Java", "Swing"],
    image:
      "https://projectgurukul.org/wp-content/uploads/2023/06/quiz-application.webp",
    github: "https://github.com/HARSHA-3623/SwingQuizApp",
  },
  {
    title: "Inventory Management System",
    description: "Spring Boot web app for inventory and stock management.",
    contributions: [
      "REST API design, relational modeling, and full-stack delivery.",
    ],
    technologies: ["Spring Boot", "MySQL", "Java"],
    github: "https://github.com/HARSHA-3623/Ecom-proj",
    image:
      "https://spherewms.com/wp-content/uploads/2024/01/SPH-Whse-Inv-Mgmt-Blog-shutterstock_1930996376-1.webp",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather using the OpenWeather API.",
    contributions: [
      "Third-party API integration and responsive UI.",
    ],
    technologies: ["OpenWeather API", "CSS", "JavaScript"],
    liveDemo: "https://weather-app-mu-azure.vercel.app/",
    github: "https://github.com/HARSHA-3623/Weather_app",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Netflix Clone",
    description: "Responsive Netflix-style UI built with Tailwind CSS.",
    contributions: [
      "Layout systems, responsive design, and component structure.",
    ],
    technologies: ["Tailwind CSS", "HTML"],
    liveDemo: "https://netflix-clone-by-harsha.vercel.app/",
    github: "https://github.com/HARSHA-3623/Netflix-Clone",
    image:
      "https://www.codewithrandom.com/wp-content/uploads/2022/08/Snapshot_22-08-11_14-06-52.png",
  },
];

export const skillGroups = [
  {
    name: "Backend",
    icon: "backend" as const,
    items: ["Node.js", "Express.js", "REST APIs", "Webhooks"],
  },
  {
    name: "Database",
    icon: "database" as const,
    items: ["PostgreSQL", "Redis"],
  },
  {
    name: "Integrations",
    icon: "integrations" as const,
    items: [
      "Payment Gateways",
      "Affiliate Systems",
      "Casino Providers",
      "KYC Services",
      "Email Providers",
    ],
  },
  {
    name: "Tools",
    icon: "tools" as const,
    items: ["Git", "Postman", "Linux", "AWS"],
  },
];

export const currentLearning = [
  "System Design",
  "Cloud Infrastructure",
  "API Design",
  "Performance Optimization",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

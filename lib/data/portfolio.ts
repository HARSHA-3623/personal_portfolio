export const RESUME_URL =
  "https://drive.google.com/file/d/1R_VhlmHYl8EMEfBnLTDn0TPmgHAfbtFn/view?usp=sharing";

export const CONTACT = {
  email: "harshavardan3623@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshavardan-naidu/",
  github: "https://github.com/HARSHA-3623",
};

export const heroSkills = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Redis",
  "Socket.IO",
  "REST APIs",
  "Webhooks",
  "Payment Integrations",
  "Affiliate Systems",
  "KYC",
];

export const experienceMeta = {
  company: "GAMMASTACK",
  role: "Backend Engineer (Solution Engineer)",
  duration: "Aug 2025 – Present",
  industry: "iGaming",
  summary:
    "Building backend services for iGaming platforms — REST APIs, payment and affiliate integrations, transaction processing, and third-party connectivity.",
};

export type Project = {
  title: string;
  description: string;
  contributions: string[];
  technologies: string[];
  challenges?: string[];
  learnings?: string[];
  image?: string;
  liveDemo?: string;
  github?: string;
};

export const professionalProjects: Project[] = [
  {
    title: "iGaming Platform Project 1",
    description:
      "Worked on backend API development and platform management services for an iGaming platform.",
    contributions: [
      "Developed REST APIs",
      "Integrated payment gateway services",
      "Integrated Customer.io",
      "Built admin backoffice APIs",
      "Banner management APIs",
      "Game management APIs",
      "Website customization APIs",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Customer.io"],
    challenges: [
      "Supporting multiple client-specific platform configurations through a shared API layer",
      "Maintaining consistent patterns across admin, frontend, and customization endpoints",
    ],
    learnings: [
      "Designing modular REST APIs for multi-tenant platform features",
      "Integrating third-party services with structured error handling and logging",
    ],
  },
  {
    title: "iGaming Platform Project 2",
    description:
      "Worked on gaming integrations, transaction processing, onboarding systems, affiliate tracking, and platform migration support.",
    contributions: [
      "Casino provider integrations",
      "Bet and win processing",
      "Wallet transaction handling",
      "Payment gateway integrations",
      "KYC integration",
      "Affiliate platform integration",
      "Background job processing",
      "Socket.IO real-time wallet updates",
      "User migration participation",
      "Load testing participation",
      "Admin backoffice API development",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Bull Queue",
      "N1CO",
      "Virtual Pay",
      "XGate",
    ],
    challenges: [
      "Handling wallet updates across webhooks, background jobs, and real-time channels",
      "Integrating diverse payment and casino provider callback formats into unified flows",
    ],
    learnings: [
      "Transaction flow design with Redis, queues, and idempotent webhook handling",
      "Delivering real-time wallet updates with Socket.IO alongside REST services",
    ],
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
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "Webhooks"],
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
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

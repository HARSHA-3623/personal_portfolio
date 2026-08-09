export const RESUME_URL =
  "https://drive.google.com/file/d/1F-AH4I2drnOLE2t5QOSWYEjD8fwGhZua/view?usp=sharing";

export const CONTACT = {
  email: "harshavardan3623@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshavardan-naidu/",
  github: "https://github.com/HARSHA-3623",
};

export const heroIntro = [
  "Backend Engineer with experience building scalable backend services for iGaming platforms.",
  "Worked on payment gateway integrations, casino provider integrations, KYC onboarding systems, affiliate tracking, real-time wallet updates using Socket.IO, and transaction processing workflows using Node.js, PostgreSQL, Redis, and Express.js.",
  "Focused on building reliable APIs, integration-driven systems, and backend solutions for modern web platforms.",
];

export const heroTechRotator = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Redis",
  "Socket.IO",
  "Webhooks",
  "REST APIs",
  "AWS",
  "Bull Queue",
];

export const heroHighlights = [
  "Payment Gateway Integrations",
  "Casino Provider Integrations",
  "KYC Systems",
  "Affiliate Tracking",
  "Real-time Wallet Updates",
  "REST APIs & Webhooks",
];

export const heroMetrics = [
  { value: "3×", label: "webhook latency reduction" },
  { value: "4×", label: "API response-time improvement" },
  { value: "300K+", label: "users migrated to production" },
  { value: "400K+", label: "accounts supported in legacy migration" },
  { value: "10+", label: "third-party integrations" },
];

export const experienceMeta = {
  company: "GAMMASTACK",
  role: "Backend Engineer (Solution Engineer)",
  duration: "Aug 2025 – Present",
  location: "Bengaluru, India",
  industry: "iGaming",
  summary:
    "Building backend services for iGaming platforms — REST APIs, payment and affiliate integrations, transaction processing, and third-party connectivity.",
  achievements: [
    "Developed and shipped production REST APIs, transaction workflows, Admin Backoffice systems, and third-party integrations using Node.js, Express.js, PostgreSQL, and Redis.",
    "Reduced webhook callback latency approximately 3×, from around 2500ms to under 800ms, through Redis caching improvements and PostgreSQL indexing.",
    "Reduced API response time approximately 4×, from around 800ms to under 200ms, through query optimization and Redis caching.",
    "Supported migration of 400K+ user accounts and transaction histories from a legacy platform, including data validation, transfer workflows, and production verification.",
    "Integrated 10+ third-party services across payment gateways, casino providers, KYC, affiliate tracking, and email platforms.",
    "Implemented idempotency and retry handling for production callbacks and webhooks.",
    "Maintained zero duplicate transaction errors for the relevant callback and integration workflows.",
  ],
};

export type Project = {
  title: string;
  description: string;
  contributions: string[];
  technologies: string[];
  highlight?: string;
  challenges?: string[];
  learnings?: string[];
  image?: string;
  liveDemo?: string;
  github?: string;
};

export const professionalProjects: Project[] = [
  {
    title: "Lukx Link",
    description:
      "Worked on backend API development and platform management services for an iGaming platform — production REST APIs for the player application and Admin Backoffice.",
    contributions: [
      "Developed REST APIs",
      "Integrated payment gateway services",
      "Integrated Customer.io",
      "Built admin backoffice APIs",
      "Banner management APIs",
      "Game management APIs",
      "Website customization APIs",
      "Used PostgreSQL for persistence and Redis for caching and session management.",
      "Integrated 3 payment gateways: N1CO, Virtual Pay, and XGate.",
      "Implemented idempotent payment callback handling and retry mechanisms.",
      "Integrated multiple casino providers with idempotent bet and win callback processing.",
      "Maintained accurate wallet debit/credit state under concurrent transactions.",
      "Delivered real-time wallet balance updates using Socket.IO — connected players received updates within approximately 200ms of transaction events.",
      "Implemented RBAC for Operator, Agent, and Super-admin roles.",
      "Integrated affiliate tracking and KYC verification into Admin Backoffice workflows.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Payments",
      "Socket.IO",
      "Customer.io",
      "N1CO",
      "Virtual Pay",
      "XGate",
    ],
    challenges: [
      "Supporting multiple client-specific platform configurations through a shared API layer",
      "Maintaining consistent patterns across admin, frontend, and customization endpoints",
      "Maintaining wallet consistency across concurrent payment and casino callbacks.",
    ],
    learnings: [
      "Designing modular REST APIs for multi-tenant platform features",
      "Integrating third-party services with structured error handling and logging",
      "Designing idempotent webhook handlers with retry logic for production payment systems.",
    ],
  },
  {
    title: "Candy Coins",
    description:
      "Worked on gaming integrations, transaction processing, onboarding systems, affiliate tracking, and platform migration support — including VIP rewards and production-scale user migration from SweetSweep.",
    highlight:
      "Owned and executed migration of 300K+ user accounts from SweetSweep to Candy Coins with zero data loss and zero failures during the live migration run.",
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
      "Developed backend APIs for player-facing and Admin Backoffice applications.",
      "Implemented the VIP Tier rewards system.",
      "Configured Customer.io transactional emails for registration, deposit alerts, and KYC updates.",
      "Owned and executed migration of 300K+ user accounts and associated data from SweetSweep to Candy Coins.",
      "Built migration pipeline with paginated fetching, parallel processing, deduplication, and controlled worker concurrency.",
      "Designed Bull Queue workers to process large batches in parallel.",
      "Tuned worker concurrency and database configuration to prevent database overload.",
      "Load tested the migration pipeline at production scale on staging.",
      "Achieved zero failures during the live migration run.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Bull Queue",
      "AWS",
      "Customer.io",
    ],
    challenges: [
      "Handling wallet updates across webhooks, background jobs, and real-time channels",
      "Integrating diverse payment and casino provider callback formats into unified flows",
      "Processing hundreds of thousands of records without overloading PostgreSQL during parallel migration.",
    ],
    learnings: [
      "Transaction flow design with Redis, queues, and idempotent webhook handling",
      "Delivering real-time wallet updates with Socket.IO alongside REST services",
      "Designing Bull Queue worker pipelines with controlled concurrency for large-scale data migrations.",
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
    liveDemo: "https://netflix-clone-react-rust-eight.vercel.app/",
    github: "https://github.com/HARSHA-3623/Netflix-Clone",
    image:
      "https://www.codewithrandom.com/wp-content/uploads/2022/08/Snapshot_22-08-11_14-06-52.png",
  },
];

export const skillGroups = [
  {
    name: "Languages",
    icon: "languages" as const,
    items: ["JavaScript", "Java", "SQL"],
  },
  {
    name: "Backend",
    icon: "backend" as const,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "Webhooks",
    ],
  },
  {
    name: "Databases & Caching",
    icon: "database" as const,
    items: ["PostgreSQL", "Redis", "MySQL"],
  },
  {
    name: "Async Processing & Reliability",
    icon: "reliability" as const,
    items: [
      "Bull Queue",
      "Job Queues",
      "Idempotency",
      "Retry Mechanisms",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud" as const,
    items: [
      "Git",
      "Linux",
      "AWS",
      "ECS",
      "EC2",
      "RDS",
      "Aurora",
      "S3",
      "CloudWatch",
      "Docker",
      "GitHub",
      "GitLab",
      "Agile / Scrum",
    ],
  },
  {
    name: "Integrations & Security",
    icon: "integrations" as const,
    items: [
      "Payment Gateways",
      "Affiliate Systems",
      "Casino Providers",
      "KYC Services",
      "Customer.io",
      "Third-party APIs",
      "RBAC",
    ],
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

export const RESUME_URL =
  "https://drive.google.com/file/d/1R_VhlmHYl8EMEfBnLTDn0TPmgHAfbtFn/view?usp=sharing";

export const CONTACT = {
  email: "harshavardan3623@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshavardan-naidu/",
  github: "https://github.com/HARSHA-3623",
};

export const heroStats = [
  { value: "400K+", label: "Users Migration Support" },
  { value: "6000+", label: "Concurrent Users Validation" },
  { value: "Multiple", label: "Payment Gateway Integrations" },
  { value: "Multi", label: "Casino & Affiliate Integrations" },
];

export const experienceMeta = {
  company: "GAMMASTACK",
  role: "Backend Engineer (Solution Engineer)",
  duration: "Aug 2025 – Present",
  industry: "iGaming",
};

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
      "Worked on creating RESTful APIs for frontend applications and platform services.",
    contributions: [
      "Developed backend APIs using Node.js and Express.js.",
      "Integrated payment gateway services.",
      "Integrated Customer.io email services.",
      "Built admin backoffice APIs.",
      "Worked on banner management APIs.",
      "Worked on game management APIs.",
      "Developed website customization APIs for clients.",
      "Supported client-specific platform configurations.",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Customer.io"],
  },
  {
    title: "iGaming Platform Project 2",
    description:
      "Worked on gaming integrations, transaction processing systems, migration support, KYC onboarding, affiliate systems, and payment services.",
    contributions: [
      "Integrated casino providers.",
      "Handled bets and wins requests through webhooks.",
      "Processed wallet mutations and transaction flows.",
      "Integrated payment gateway services.",
      "Handled payment callbacks and balance updates.",
      "Integrated third-party KYC services.",
      "Built onboarding verification workflows.",
      "Integrated affiliate tracking platforms.",
      "Processed affiliate activity events through background jobs.",
      "Participated in migration support for 400K+ users.",
      "Participated in load testing activities.",
      "Optimized casino webhook services.",
      "Supported traffic requirements of approximately 6000 concurrent users.",
      "Developed admin backoffice APIs.",
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
    description: "A GUI-based shopping cart system in Java Swing.",
    contributions: [
      "Built modular UI flows for cart, billing, and inventory in a desktop application.",
    ],
    technologies: ["Java", "Swing"],
    github: "#",
  },
  {
    title: "Course Management System (Swing)",
    description: "Java Swing app for managing courses and users.",
    contributions: [
      "Designed role-based workflows for professors and students with persistent data modeling.",
    ],
    technologies: ["Java", "Swing"],
    github: "https://github.com/HARSHA-3623/Course-Management-System",
  },
  {
    title: "Quiz App (Swing)",
    description: "Interactive quiz app using Java Swing with timer and score.",
    contributions: [
      "Implemented timed sessions, scoring logic, and dynamic question delivery.",
    ],
    technologies: ["Java", "Swing"],
    github: "https://github.com/HARSHA-3623/SwingQuizApp",
  },
  {
    title: "Inventory Management System",
    description:
      "A web app using Spring Boot for inventory and stock management.",
    contributions: [
      "Practiced REST API design, relational data modeling, and full-stack delivery.",
    ],
    technologies: ["Spring Boot", "MySQL", "Java"],
    github: "https://github.com/HARSHA-3623/Ecom-proj",
    image:
      "https://spherewms.com/wp-content/uploads/2024/01/SPH-Whse-Inv-Mgmt-Blog-shutterstock_1930996376-1.webp",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather data using OpenWeather API.",
    contributions: [
      "Integrated third-party APIs and built a responsive consumer-facing UI.",
    ],
    technologies: ["OpenWeather API", "CSS", "JavaScript"],
    liveDemo: "https://weather-app-mu-azure.vercel.app/",
    github: "https://github.com/HARSHA-3623/Weather_app",
  },
  {
    title: "Netflix Clone Website",
    description: "Netflix UI clone with Tailwind CSS and responsive design.",
    contributions: [
      "Focused on layout systems, responsive design, and component-driven structure.",
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
    items: ["Node.js", "Express.js", "REST APIs", "Webhooks"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "Redis"],
  },
  {
    name: "Integrations",
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
    items: ["Git", "Postman", "Linux", "AWS"],
  },
];

export const currentLearning = [
  "System Design",
  "Distributed Systems",
  "Scalable Architectures",
  "Cloud Infrastructure",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

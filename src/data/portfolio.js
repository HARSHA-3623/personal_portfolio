export const RESUME_URL =
  "https://drive.google.com/file/d/1R_VhlmHYl8EMEfBnLTDn0TPmgHAfbtFn/view?usp=sharing";

export const CONTACT = {
  email: "harshavardan3623@gmail.com",
  phone: "+91-9391571693",
  linkedin: "https://www.linkedin.com/in/harshavardan-naidu/",
  github: "https://github.com/HARSHA-3623",
};

export const heroStats = [
  { value: "400K+", label: "Users Migration Support" },
  { value: "6000+", label: "Concurrent User Traffic Validation" },
  { value: "Multiple", label: "Payment Gateway Integrations" },
  { value: "Production", label: "Systems & Integrations" },
];

export const productionImpact = [
  {
    title: "400K+ Users",
    description:
      "Contributed to migration validation and support activities for over 400,000 user accounts during platform modernization.",
  },
  {
    title: "6000+ Concurrent Users",
    description:
      "Participated in load testing and performance validation for callback services supporting expected production traffic requirements.",
  },
  {
    title: "Production Reliability",
    description:
      "Resolved production issues involving queue processing, affiliate synchronization, transaction validation, and migration-related workflows.",
  },
  {
    title: "Integrations",
    description:
      "Successfully delivered payment, affiliate, casino, KYC, and communication service integrations.",
  },
];

export const caseStudies = [
  {
    title: "Affiliate Tracking for Migrated Users",
    problem:
      "Affiliate activity tracking was not functioning correctly for migrated users.",
    investigation:
      "Analyzed migration flows and affiliate synchronization logic.",
    solution:
      "Implemented synchronization improvements during first login.",
    outcome:
      "Accurate affiliate attribution and activity tracking restored.",
  },
  {
    title: "Production Queue Processing Issue",
    problem: "Jobs remained stuck in waiting state.",
    investigation: "Analyzed queue configuration and worker processing.",
    solution:
      "Fixed queue processing flow and worker registration issues.",
    outcome: "Background jobs resumed normal execution.",
  },
  {
    title: "Large Scale User Migration Support",
    problem:
      "Legacy platform users required migration to new infrastructure.",
    investigation: "Validated migration states and user consistency.",
    solution: "Supported migration verification and issue resolution.",
    outcome: "Successful migration support for 400K+ users.",
  },
  {
    title: "Payment Gateway Integrations",
    problem: "Platform required reliable deposit and withdrawal flows across multiple payment providers.",
    investigation:
      "Mapped provider APIs, webhook contracts, and transaction state machines against platform requirements.",
    solution:
      "Integrated N1CO, Virtual Pay, and XGate with transaction processing, webhook handling, provider communication, and validation logic.",
    outcome:
      "Production-ready payment flows with consistent validation and webhook-driven state updates.",
    providers: ["N1CO", "Virtual Pay", "XGate"],
  },
  {
    title: "KYC Integration",
    problem: "Platform required user verification workflows.",
    investigation: "Evaluated KYC provider APIs and onboarding touchpoints.",
    solution: "Integrated third-party KYC provider APIs.",
    outcome: "Improved onboarding and verification process.",
  },
];

export const professionalWork = [
  "Affiliate Integrations",
  "Casino Provider Integrations",
  "Payment Gateway Integrations",
  "KYC Integrations",
  "Migration Support",
  "Production Support",
  "Queue Processing",
  "Load Testing",
];

export const personalProjects = [
  {
    title: "E-Commerce App (Swing)",
    description: "A GUI-based shopping cart system in Java Swing.",
    image:
      "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60",
    techStack: ["Java", "Swing"],
    liveDemo: "#",
    github: "#",
    learnings:
      "Built modular UI flows and state handling for cart, billing, and inventory in a desktop application.",
  },
  {
    title: "Course Management System (Swing)",
    description: "Java Swing app for managing courses and users.",
    image: "https://sprout24.com/wp-content/uploads/2021/06/lms-.png",
    techStack: ["Java", "Swing"],
    liveDemo: "#",
    github: "https://github.com/HARSHA-3623/Course-Management-System",
    learnings:
      "Designed role-based workflows for professors and students with persistent data modeling.",
  },
  {
    title: "Quiz App (Swing)",
    description: "Interactive quiz app using Java Swing with timer and score.",
    image:
      "https://projectgurukul.org/wp-content/uploads/2023/06/quiz-application.webp",
    techStack: ["Java", "Swing"],
    liveDemo: "#",
    github: "https://github.com/HARSHA-3623/SwingQuizApp",
    learnings:
      "Implemented timed sessions, scoring logic, and dynamic question delivery in a desktop UI.",
  },
  {
    title: "Inventory Management System",
    description:
      "A web app using Spring Boot for inventory and stock management.",
    image:
      "https://spherewms.com/wp-content/uploads/2024/01/SPH-Whse-Inv-Mgmt-Blog-shutterstock_1930996376-1.webp",
    techStack: ["Spring Boot", "MySQL", "Java"],
    liveDemo: "#",
    github: "https://github.com/HARSHA-3623/Ecom-proj",
    learnings:
      "Practiced REST API design, relational data modeling, and full-stack delivery with Spring Boot.",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather data using OpenWeather API.",
    image: "/assets/weather.webp",
    techStack: ["OpenWeather API", "CSS"],
    liveDemo: "https://weather-app-mu-azure.vercel.app/",
    github: "https://github.com/HARSHA-3623/Weather_app",
    learnings:
      "Integrated third-party APIs, handled async data fetching, and built a responsive consumer-facing UI.",
  },
  {
    title: "Netflix Clone Website",
    description: "Netflix UI clone with Tailwind CSS and responsive design.",
    image:
      "https://www.codewithrandom.com/wp-content/uploads/2022/08/Snapshot_22-08-11_14-06-52.png",
    techStack: ["Tailwind CSS", "HTML"],
    liveDemo: "https://netflix-clone-by-harsha.vercel.app/",
    github: "https://github.com/HARSHA-3623/Netflix-Clone",
    learnings:
      "Focused on layout systems, responsive design, and component-driven frontend structure.",
  },
];

export const integrationCategories = [
  {
    name: "Affiliate Platforms",
    flow: ["Client Application", "Backend Service", "Affiliate Provider", "Webhook Response", "Database Update"],
  },
  {
    name: "Casino Providers",
    flow: ["Gaming Client", "Backend Service", "Casino Provider", "Bet/Win Callback", "Transaction Store"],
  },
  {
    name: "Payment Gateways",
    flow: ["Client Application", "Backend Service", "Payment Gateway", "Webhook Response", "Database Update"],
  },
  {
    name: "KYC Providers",
    flow: ["Onboarding Flow", "Backend Service", "KYC Provider", "Verification Callback", "User Profile Update"],
  },
  {
    name: "Email Providers",
    flow: ["Platform Event", "Backend Service", "Email Provider", "Delivery Status", "Audit Log"],
  },
];

export const skillGroups = [
  {
    name: "Backend Development",
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
      "Casino Providers",
      "Affiliate Systems",
      "KYC Providers",
      "Email Providers",
    ],
  },
  {
    name: "Infrastructure",
    items: ["AWS", "Linux"],
  },
  {
    name: "Tools",
    items: ["Git", "Postman"],
  },
];

export const aiWorkflow = {
  tools: ["ChatGPT", "GitHub Copilot", "Cursor"],
  usage: [
    "Code Generation",
    "Debugging",
    "Documentation",
    "Rapid Prototyping",
    "Technical Research",
  ],
};

export const currentLearning = [
  "System Design",
  "Distributed Systems",
  "Cloud Infrastructure",
  "Performance Optimization",
  "Scalable Architectures",
];

export const experience = {
  company: "GAMMASTACK",
  industry: "iGaming",
  duration: "Aug 2025 – Present",
  role: "Backend Engineer (Solution Engineer)",
  responsibilities: [
    "Design and develop scalable REST APIs.",
    "Build backend services for gaming and transaction systems.",
    "Handle bet and win processing from external providers.",
    "Develop integration workflows.",
    "Work on payment gateway integrations.",
    "Integrate KYC providers.",
    "Integrate affiliate platforms.",
    "Integrate email providers.",
    "Perform production debugging and issue resolution.",
    "Participate in migration support and validation activities.",
    "Validate business workflows and transaction consistency.",
  ],
};

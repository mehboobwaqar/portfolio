// ============================================
// CV DATA — Authentic, Production-Verified Data
// ============================================

export interface Project {
  name: string;
  category: string;
  subtitle: string;
  platforms: string[];
  description: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Award {
  title: string;
  award: string;
  date: string;
  institution?: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export const personalInfo = {
  name: "Mehboob Waqar",
  title: "Flutter & Mobile Software Engineer",
  location: "Lahore, Pakistan",
  workPreference: "Available for Full-time & Remote Roles",
  phone: "+92-304-2292019",
  email: "mehboobwaqar444@gmail.com",
  linkedin: "https://linkedin.com/in/mehboobwaqar",
  github: "https://github.com/mehboobwaqar",
};

export const summary =
  "Mobile software engineer specializing in Flutter, cross-platform architecture, and native integrations. Currently building production mobile applications at Orax Technologies, with experience delivering 5+ apps to the App Store and Google Play Store spanning large-scale sports management, IoT smart device telemetry, and on-device machine learning.";

export const education = {
  institution: "Riphah International University",
  location: "Lahore, Pakistan",
  degree: "Bachelor of Science in Computer Science",
  shortDegree: "BS Computer Science",
  start: "Aug 2021",
  end: "June 2025",
  highlights: [
    "Core focus on Data Structures & Algorithms, Object-Oriented Architecture, and Distributed Systems.",
    "Winner of Speed Programming Competition at ITCN Asia (2024)."
  ]
};

export const experiences: Experience[] = [
  {
    company: "Orax Technologies",
    role: "Flutter Developer",
    type: "Full-time • On-site",
    location: "Lahore, Pakistan",
    period: "July 2025 – Present",
    description: "Developing scalable cross-platform mobile applications for international clients with strict requirements for 60fps performance and responsive UI.",
    highlights: [
      "Engineered core modules across 5+ client and internal production Flutter projects for iOS and Android.",
      "Collaborated with senior engineering leads to architect scalable MVVM patterns and predictable state management solutions.",
      "Optimized API networking and local caching pipelines to ensure seamless offline functionality and fast render times."
    ],
  },
  {
    company: "Headstarter",
    role: "Software Engineering Fellow",
    type: "Fellowship • Remote",
    location: "Remote",
    period: "July 2024 – Sept 2024",
    description: "Participated in an intensive software engineering fellowship focused on collaborative systems development and rapid iteration.",
    highlights: [
      "Completed hands-on software development sprints under senior engineering mentorship.",
      "Participated in rigorous code reviews, agile rituals, and best practices in version control and modular software design."
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Court Pro",
    category: "Sports Management & Booking",
    subtitle: "Global Sports Platform with Live Matchmaking",
    platforms: ["App Store", "Google Play"],
    description: "A comprehensive sports ecosystem enabling court booking, automated tournament matchmaking, and real-time team communication across 50+ modular screens.",
    highlights: [
      "Architected a modular Flutter app using Provider and GetIt service locator, managing 150+ REST endpoints.",
      "Engineered type-safe networking layer using Dio and Freezed immutable models with code generation.",
      "Integrated Stripe SDK for multi-currency payments and CometChat for 1-on-1 and group team messaging.",
      "Implemented location-based proximity court search utilizing Google Maps & Geolocator APIs."
    ],
    techStack: ["Flutter", "Dart", "Provider", "GetIt", "Dio", "Freezed", "Stripe", "CometChat", "Firebase FCM"],
    metrics: [
      { label: "Custom Screens", value: "50+" },
      { label: "API Endpoints", value: "150+" },
      { label: "Architecture", value: "Modular MVVM" }
    ],
    appStoreUrl: "https://apps.apple.com/pk/app/courtpro/id6747027287",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.courtpro.app",
  },
  {
    name: "Trusted Air",
    category: "IoT Hardware & Telemetry",
    subtitle: "Smart Air Purifier Control & PM2.5 Live Telemetry",
    platforms: ["App Store", "Google Play"],
    description: "An Internet of Things mobile application connecting directly with smart air purifiers for real-time hardware control and particulate matter monitoring.",
    highlights: [
      "Integrated Tuya Smart SDK to establish bidirectional telemetry and remote command dispatch.",
      "Architected custom native bridges using MethodChannel & EventChannel (Swift/Kotlin) for uninterrupted sensor data streaming.",
      "Utilized iOS BGTaskScheduler for reliable background device synchronization and real-time Home Screen widget updates.",
      "Implemented automated scheduling scenes and dynamic weather integration through Google Cloud APIs."
    ],
    techStack: ["Flutter", "Tuya Smart SDK", "MethodChannel", "EventChannel", "BGTaskScheduler", "GCP"],
    metrics: [
      { label: "Live Telemetry", value: "PM2.5 Stream" },
      { label: "Background Sync", value: "BGTaskScheduler" },
      { label: "Native Bridges", value: "Swift / Kotlin" }
    ],
    appStoreUrl: "https://apps.apple.com/pk/app/trustedair/id6745402737",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.trusted.air",
  },
  {
    name: "Calorie Tracker",
    category: "AI & Computer Vision",
    subtitle: "On-Device Food Recognition & Nutrition Assistant",
    platforms: ["App Store", "Google Play"],
    description: "An AI-powered nutritional tracking app that uses on-device computer vision to detect meals through the camera and compute macro breakdowns in real-time.",
    highlights: [
      "Integrated Google ML Kit image labeling for low-latency, zero-cost on-device food recognition.",
      "Engineered an offline-first storage pipeline using Hive NoSQL for instant sub-millisecond local reads.",
      "Implemented Google Mobile Ads, StoreKit / Google Play Billing in-app purchases, and Firebase Performance Monitoring."
    ],
    techStack: ["Flutter", "Google ML Kit", "Hive NoSQL", "Google Mobile Ads", "In-App Purchases", "Firebase"],
    metrics: [
      { label: "Inference", value: "On-Device (ML Kit)" },
      { label: "Storage", value: "Hive NoSQL" },
      { label: "Availability", value: "Offline-First" }
    ],
    appStoreUrl: "https://apps.apple.com/pk/app/calorie-counter-app-caloryx/id6756643160",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.gpa.calorietracker.android",
  },
  {
    name: "Plant Identifier",
    category: "AI Botanical Diagnosis",
    subtitle: "Species Classification & Plant Care Engine",
    platforms: ["App Store", "Google Play"],
    description: "Combines computer vision with large language models to identify plant species and diagnose botanical ailments with tailored treatment plans.",
    highlights: [
      "Built a dual-AI pipeline combining Google ML Kit for visual classification and OpenAI API for botanical disease diagnosis.",
      "Implemented multi-tier subscription engine with trial logic and server-side receipt validation.",
      "Leveraged Firebase Remote Config for zero-downtime A/B testing and dynamic feature flag rollouts."
    ],
    techStack: ["Flutter", "Google ML Kit", "OpenAI API", "In-App Subscriptions", "Firebase Remote Config"],
    metrics: [
      { label: "AI Engine", value: "ML Kit + OpenAI" },
      { label: "Monetization", value: "Subscriptions" },
      { label: "Feature Control", value: "Remote Config" }
    ],
    appStoreUrl: "https://apps.apple.com/pk/app/plant-identifier-protectgreen/id6740023283",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.gps.plantidentifier.diseasesdiagnosis",
  },
  {
    name: "Harvest Hub",
    category: "AgriTech & Rural Commerce",
    subtitle: "Agricultural Marketplace & Equipment Sharing",
    platforms: ["Mobile App"],
    description: "A specialized rural commerce app designed for low-bandwidth environments, connecting farmers with machinery leasing and verified labor.",
    highlights: [
      "Designed an accessible, high-contrast UX tailored for low-literacy users with clear visual hierarchies.",
      "Built resilient offline-first syncing capabilities that automatically queue actions when connection drops.",
      "Integrated live localized agricultural weather intelligence and encrypted in-app communication."
    ],
    techStack: ["Flutter", "Offline-First Sync", "Weather API", "In-App Chat", "Accessible UX"],
    metrics: [
      { label: "UX Design", value: "Low-Literacy Friendly" },
      { label: "Connectivity", value: "Offline-First" },
      { label: "Domain", value: "AgriTech" }
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Engineering",
    items: ["Flutter", "Dart", "Provider", "GetX", "GoRouter", "MethodChannels", "EventChannels", "Hive NoSQL", "REST APIs"],
  },
  {
    title: "Software Architecture",
    items: ["MVVM Architecture", "Repository Pattern", "Modular Codebases", "GetIt Service Locator", "Dio + Freezed", "Clean Code"],
  },
  {
    title: "Cloud & Backend Services",
    items: ["Firebase Auth", "Cloud Firestore", "Cloud Functions", "Firebase FCM", "Remote Config", "Node.js", "Google Cloud Platform"],
  },
  {
    title: "Hardware & AI Integrations",
    items: ["Tuya Smart IoT SDK", "Google ML Kit Vision", "OpenAI API", "Stripe SDK", "In-App Purchases (IAP)", "Google Mobile Ads"],
  },
];

export const awards: Award[] = [
  {
    title: "Innovate 4.0 Pitching Hackathon",
    award: "Winner — Most Innovative Idea",
    date: "December 2024",
    description: "Awarded 1st place among participating teams for architecting and pitching a viable, tech-driven product evaluated on engineering feasibility and product market fit."
  },
  {
    title: "Speed Programming Competition — ITCN Asia",
    award: "1st Place Winner",
    date: "2024",
    institution: "Riphah International University",
    description: "Won first place in competitive algorithmic problem solving, timed logic challenges, and optimized execution."
  },
];

export const certifications: Certification[] = [
  { title: "Web Design for Everybody Specialization", issuer: "Coursera / University of Michigan" },
  { title: "Developing Innovative Ideas for New Companies", issuer: "Coursera / University of Maryland" },
  { title: "Object Oriented Programming in Java", issuer: "Academic Certification" },
];

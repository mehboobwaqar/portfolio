// ============================================================
// AI KNOWLEDGE BASE — Verified & Scoped to Mehboob Waqar's CV
// ============================================================

export interface KnowledgeEntry {
  id: string;
  category: "about" | "projects" | "skills" | "experience" | "education" | "awards" | "contact" | "availability" | "meta";
  phrases: string[];
  keywords: string[];
  urduPhrases: string[];
  response: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. ABOUT & BIO
  // ─────────────────────────────────────────────────────────────
  {
    id: "about",
    category: "about",
    phrases: [
      "who is mehboob",
      "tell me about mehboob",
      "about mehboob waqar",
      "introduce mehboob",
      "who are you",
      "tell me about yourself",
      "bio of mehboob",
      "summary of mehboob",
      "developer profile",
      "background summary"
    ],
    keywords: ["mehboob", "waqar", "developer", "engineer", "profile", "bio", "summary", "background"],
    urduPhrases: [
      "mehboob kon hai",
      "mehboob kaun hai",
      "apna intro dain",
      "apna introduction do",
      "mehboob k bare me btao",
      "mehboob ke baray mein batao",
      "kya karta hai",
      "kaun hai yeh"
    ],
    response: `**Mehboob Waqar** is a performance-driven **Flutter Developer & Mobile Software Engineer** based in Lahore, Pakistan 🇵🇰.

Key Highlights:
• **Core Specialization**: Architecting high-scale, cross-platform Android & iOS applications using Flutter and Dart.
• **Advanced Integrations**: On-device AI/ML (Google ML Kit, OpenAI API) and IoT ecosystems (Tuya Smart SDK, native MethodChannels).
• **Track Record**: **5+ production apps** published on the App Store and Google Play Store.
• **Current Role**: Flutter Developer at **Orax Technologies** (Lahore), delivering scalable enterprise-grade mobile solutions.
• **Education**: Bachelor of Science in Computer Science (BSCS) from **Riphah International University** (2021–2025).

💡 *What would you like to explore next? Try asking about Court Pro, his IoT experience, technical skills, or contact info!*`
  },

  // ─────────────────────────────────────────────────────────────
  // 2. ASSISTANT META / IDENTITY
  // ─────────────────────────────────────────────────────────────
  {
    id: "assistant_meta",
    category: "meta",
    phrases: [
      "who made you",
      "what can you do",
      "what do you know",
      "how can you help me",
      "what is your purpose",
      "what are you",
      "ai assistant capabilities"
    ],
    keywords: ["capabilities", "purpose", "help", "assistant", "bot"],
    urduPhrases: [
      "tum kon ho",
      "ap kon ho",
      "tum kya kar sakte ho",
      "kya madad kar sakte ho",
      "tumhara kya kaam hai"
    ],
    response: `I am **Mehboob Waqar's Portfolio AI Assistant** ⚡ — built specifically to help recruiters, engineering managers, and clients discover Mehboob's work.

Here is what I can tell you about:
• 📱 **Production Apps**: Court Pro, Trusted Air (IoT), Calorie Tracker, Plant Identifier, Harvest Hub
• 🛠️ **Tech Stack & Architecture**: Flutter, Dart, MVVM, Provider, GetX, Hive, Dio, Freezed, Firebase
• 💼 **Work History**: Orax Technologies, Headstarter Software Fellowship
• 🎓 **Education & Certifications**: BSCS from Riphah, Coursera specializations
• 🏆 **Awards**: 2x Hackathon & Speed Programming Winner
• 📬 **Contact & Hiring**: Email, Phone, WhatsApp, LinkedIn, GitHub, and availability

*Ask me any question regarding Mehboob's professional portfolio!*`
  },

  // ─────────────────────────────────────────────────────────────
  // 3. COURT PRO (FLAGSHIP PROJECT)
  // ─────────────────────────────────────────────────────────────
  {
    id: "court_pro",
    category: "projects",
    phrases: [
      "court pro",
      "court pro app",
      "court pro project",
      "tell me about court pro",
      "sports app",
      "sports management platform",
      "court booking app",
      "tournament matchmaking app"
    ],
    keywords: ["court", "courtpro", "sports", "booking", "tournament", "matchmaking"],
    urduPhrases: [
      "court pro kya hai",
      "court pro project kaisa hai",
      "sports application k baray me btao"
    ],
    response: `🏟️ **Court Pro — Global Sports Management Platform**
*Published on Apple App Store & Google Play Store*

• **Scale & Architecture**: Modular Flutter application managing **50+ custom screens** and **150+ REST API endpoints** using **Provider** and **GetIt** dependency injection.
• **Type-Safe Networking**: High-performance HTTP client layer with **Dio** and immutable model code-generation via **Freezed**.
• **Real-Time & Communications**: Integrated **CometChat SDK** for instant 1-on-1 and group team messaging.
• **Payments**: Seamless checkout & subscription processing via **Stripe SDK**.
• **Firebase Suite**: Firebase Auth for user management, **FCM** for targeted push notifications, and **Remote Config** for live app updates.
• **Geo-Services**: Integrated Google Maps API and Geolocator for proximity search of sports courts.`
  },

  // ─────────────────────────────────────────────────────────────
  // 4. TRUSTED AIR (IOT & AIR PURIFIER)
  // ─────────────────────────────────────────────────────────────
  {
    id: "trusted_air",
    category: "projects",
    phrases: [
      "trusted air",
      "trusted air project",
      "air purifier app",
      "iot project",
      "tuya smart app",
      "pm2.5 project",
      "smart air purifier"
    ],
    keywords: ["trusted", "air", "purifier", "tuya", "pm2.5", "bgtaskscheduler", "smart home"],
    urduPhrases: [
      "trusted air kya hai",
      "iot wala project konsa hai",
      "air purifier wali app"
    ],
    response: `🌿 **Trusted Air — IoT Smart Air Purifier Application**
*Published on Apple App Store & Google Play Store*

• **IoT Device Communication**: Integrated **Tuya Smart SDK** to deliver real-time remote control of air purifiers and live **PM2.5** particulate matter monitoring.
• **Native Platform Bridges**: Architected custom **MethodChannels** and **EventChannels** (Swift/Kotlin) for bidirectional communication between Flutter and native hardware SDKs.
• **Background Synchronization**: Leveraged iOS **BGTaskScheduler** to sustain background device sync and keep Apple Home Screen widgets continuously updated.
• **Smart Automation**: Built automated scheduling triggers, custom scenes, and dynamic atmospheric data fetching via Google Cloud weather endpoints.`
  },

  // ─────────────────────────────────────────────────────────────
  // 5. CALORIE TRACKER (AI/ML NUTRITION)
  // ─────────────────────────────────────────────────────────────
  {
    id: "calorie_tracker",
    category: "projects",
    phrases: [
      "calorie tracker",
      "calorie app",
      "nutrition app",
      "food recognition app",
      "diet tracker",
      "calorie tracker project"
    ],
    keywords: ["calorie", "nutrition", "food recognition", "hive", "diet"],
    urduPhrases: [
      "calorie tracker kya hai",
      "food recognition app k baray me btao",
      "khana peena track karne wali app"
    ],
    response: `🍎 **Calorie Tracker — AI-Powered Nutrition Assistant**
*Published on Apple App Store & Google Play Store*

• **On-Device Computer Vision**: Integrated **Google ML Kit** for real-time camera food identification and automated nutritional breakdown extraction.
• **High-Performance Storage**: Engineered an offline-first data layer with **Hive NoSQL database** for sub-millisecond local queries.
• **Monetization & Analytics**: Integrated Google Mobile Ads and in-app purchase funnels alongside **Firebase Performance Monitoring** to measure rendering performance and screen transitions.`
  },

  // ─────────────────────────────────────────────────────────────
  // 6. PLANT IDENTIFIER (AI & BOTANICAL DIAGNOSIS)
  // ─────────────────────────────────────────────────────────────
  {
    id: "plant_identifier",
    category: "projects",
    phrases: [
      "plant identifier",
      "plant diagnosis",
      "plant app",
      "botanical app",
      "plant identifier project"
    ],
    keywords: ["plant", "plants", "botanical", "diagnosis", "botany"],
    urduPhrases: [
      "plant identifier kya hai",
      "podon wali app konsi hai",
      "plant disease wali app"
    ],
    response: `🌱 **Plant Identifier — AI-Driven Diagnosis Engine**
*Published on Apple App Store & Google Play Store*

• **Dual AI Pipeline**: Combined **Google ML Kit** for fast on-device plant visual classification with **OpenAI API** for deep botanical disease diagnosis and tailored treatment regimens.
• **In-App Subscriptions**: Designed multi-tier subscription architecture across Apple App Store and Google Play Billing with free-trial tracking and real-time receipt validation.
• **Over-The-Air Control**: Controlled feature flags and promotional flows remotely via Firebase Remote Config without requiring new store releases.`
  },

  // ─────────────────────────────────────────────────────────────
  // 7. HARVEST HUB (AGRITECH MARKETPLACE)
  // ─────────────────────────────────────────────────────────────
  {
    id: "harvest_hub",
    category: "projects",
    phrases: [
      "harvest hub",
      "harvest hub project",
      "agriculture app",
      "farming app",
      "agritech project",
      "kisan app"
    ],
    keywords: ["harvest", "hub", "agriculture", "farming", "agritech", "machinery"],
    urduPhrases: [
      "harvest hub kya hai",
      "kisan wali app k baray me btao",
      "agriculture marketplace app"
    ],
    response: `🌾 **Harvest Hub — Agriculture Marketplace**
*Mobile Application*

• **Agri Marketplace**: Enables farmers to book heavy agricultural machinery, list crop tools/seeds, and connect with verified local labor.
• **Accessible UX for Low-Literacy Users**: Designed an intuitive, high-contrast, icon-driven interface with offline fallback for rural environments.
• **Weather & Chat**: Includes live agricultural weather intelligence and encrypted peer-to-peer real-time messaging.`
  },

  // ─────────────────────────────────────────────────────────────
  // 8. ALL PROJECTS SUMMARY
  // ─────────────────────────────────────────────────────────────
  {
    id: "projects_overview",
    category: "projects",
    phrases: [
      "all projects",
      "what projects has he done",
      "projects list",
      "what apps has he built",
      "portfolio projects",
      "show me his work",
      "production apps"
    ],
    keywords: ["projects", "apps", "applications", "portfolio", "built", "developed"],
    urduPhrases: [
      "konsi apps banaye hain",
      "kya kya project banaye hain",
      "konse project hain",
      "tamam projects dikhao",
      "mehboob k projects"
    ],
    response: `Mehboob has architected and delivered **5 major production mobile applications**:

1. 🏟️ **Court Pro** — Global Sports Management (50+ screens, 150+ APIs, Stripe, CometChat)
2. 🌿 **Trusted Air** — IoT Air Purifier Control (Tuya Smart SDK, PM2.5, iOS BGTaskScheduler)
3. 🍎 **Calorie Tracker** — AI Nutrition Assistant (Google ML Kit vision, Hive NoSQL)
4. 🌱 **Plant Identifier** — AI Botanical Diagnosis (Google ML Kit + OpenAI API, Subscriptions)
5. 🌾 **Harvest Hub** — Agriculture Marketplace & Offline Farm Services

All 5 are available on or designed for the App Store & Google Play Store. Which one would you like more details on?`
  },

  // ─────────────────────────────────────────────────────────────
  // 9. TECHNICAL SKILLS & TECH STACK
  // ─────────────────────────────────────────────────────────────
  {
    id: "skills",
    category: "skills",
    phrases: [
      "what are his skills",
      "technical skills",
      "tech stack",
      "technologies",
      "programming languages",
      "what does he know",
      "technical stack"
    ],
    keywords: ["skills", "technologies", "stack", "languages", "tools", "competencies"],
    urduPhrases: [
      "skills kya hain",
      "konsi technologies aati hain",
      "mehboob ki maharat kya hai",
      "kon kon si languages aati hain"
    ],
    response: `💻 **Mehboob Waqar's Technical Skills Matrix**:

• **Mobile**: Flutter (Android & iOS), Dart, GetX, Provider, MVVM, GoRouter, Hive (NoSQL)
• **Languages**: Dart, JavaScript, C++, SQL, Java, HTML, CSS
• **Architectural Patterns**: MVVM, Repository Pattern, Modular Clean Architecture, GetIt DI, Dio + Freezed
• **Cloud & Backend**: Firebase (Auth, Cloud Firestore, Cloud Functions, FCM, Remote Config, Performance Monitoring), Node.js, REST APIs, Google Cloud Platform (GCP)
• **AI & IoT**: Google ML Kit (on-device vision), OpenAI API, Tuya Smart SDK, MethodChannel & EventChannel bridges
• **Payment & Monetization**: Stripe SDK, Apple In-App Purchases (IAP), Google Play Billing, Google Mobile Ads
• **Dev Tools**: Git, Android Studio, VS Code, Postman`
  },

  // ─────────────────────────────────────────────────────────────
  // 10. FLUTTER & DART EXPERTISE
  // ─────────────────────────────────────────────────────────────
  {
    id: "flutter_stack",
    category: "skills",
    phrases: [
      "flutter experience",
      "flutter skills",
      "why flutter",
      "dart experience",
      "flutter developer experience",
      "mobile development skills"
    ],
    keywords: ["flutter", "dart", "state management", "cross-platform"],
    urduPhrases: [
      "flutter ka kitna tajurba hai",
      "flutter me kya kya aata hai",
      "flutter developer kaisa hai"
    ],
    response: `🚀 **Flutter & Dart Expertise**:

Flutter is Mehboob's primary engineering discipline:
• **Production Delivery**: 5+ production-grade apps deployed on both Apple App Store and Google Play Store.
• **Large-Scale Complexity**: Successfully built apps with **50+ screens** and **150+ REST endpoints** (Court Pro).
• **State Management**: Expert with both **Provider** and **GetX**, selecting the optimal pattern for maintainability and scalability.
• **Clean Architecture**: Strong adherence to MVVM, Repository Pattern, and modular code splitting.
• **Native Interop**: Deep experience writing Swift and Kotlin platform channels (**MethodChannel**, **EventChannel**) for hardware SDKs.`
  },

  // ─────────────────────────────────────────────────────────────
  // 11. AI / ML EXPERIENCE
  // ─────────────────────────────────────────────────────────────
  {
    id: "ai_ml",
    category: "skills",
    phrases: [
      "ai experience",
      "ml experience",
      "machine learning skills",
      "artificial intelligence work",
      "google ml kit",
      "openai integration",
      "ai projects"
    ],
    keywords: ["ai", "ml", "machine learning", "ml kit", "openai", "computer vision"],
    urduPhrases: [
      "ai me kya kaam kia hai",
      "machine learning ka tajurba",
      "ai wale kon se projects hain"
    ],
    response: `🧠 **AI/ML Experience**:

Mehboob specializes in bringing practical AI features directly into mobile apps:
• **Google ML Kit (On-Device Vision)**:
  - Real-time food recognition and image labeling in **Calorie Tracker**.
  - Plant species detection and feature extraction in **Plant Identifier**.
  - Zero-latency local inference with no server cost.
• **OpenAI API Integration**:
  - Complex botanical disease diagnosis and organic treatment recommendations in **Plant Identifier**.
  - Prompt engineering for structured JSON outputs consumable by mobile frontends.`
  },

  // ─────────────────────────────────────────────────────────────
  // 12. IOT & TUYA SMART
  // ─────────────────────────────────────────────────────────────
  {
    id: "iot",
    category: "skills",
    phrases: [
      "iot experience",
      "internet of things",
      "tuya smart",
      "hardware integration",
      "smart device integration",
      "iot work"
    ],
    keywords: ["iot", "tuya", "hardware", "purifier", "sensor", "methodchannel", "eventchannel"],
    urduPhrases: [
      "iot ka kaam kia hai",
      "internet of things ka tajurba",
      "devices integrate ki hain"
    ],
    response: `📡 **IoT (Internet of Things) Expertise**:

Through the **Trusted Air** production project, Mehboob mastered:
• **Tuya Smart SDK**: Direct device pairing, telemetry reading, and bidirectional command dispatch for smart air purifiers.
• **Native Channel Bridges**: Custom **MethodChannels** (for one-off commands) and **EventChannels** (for streaming live PM2.5 air quality sensor data).
• **iOS Background Systems**: Utilized **BGTaskScheduler** to maintain connectivity and update iOS widgets even when the app is suspended.`
  },

  // ─────────────────────────────────────────────────────────────
  // 13. WORK EXPERIENCE — CURRENT ROLE AT ORAX TECHNOLOGIES
  // ─────────────────────────────────────────────────────────────
  {
    id: "experience_orax",
    category: "experience",
    phrases: [
      "orax technologies",
      "orax",
      "current company",
      "current job",
      "where does he work",
      "current employer",
      "job at orax"
    ],
    keywords: ["orax", "current job", "current company", "employed", "employer"],
    urduPhrases: [
      "orax technologies me kya karta hai",
      "aaj kal kahan job kar raha hai",
      "orax me kab se hai",
      "current company konsi hai"
    ],
    response: `💼 **Current Role: Flutter Developer at Orax Technologies**
*Lahore, Pakistan • On-site • July 2025 – Present*

• Contributing to multiple high-performance production Flutter applications across iOS and Android.
• Collaborating closely with senior engineering leads to build scalable architecture and modular state management systems.
• Active contributor to **5+ client and internal projects**, driving performance optimizations, smooth 60fps UI/UX, and robust API networking.`
  },

  // ─────────────────────────────────────────────────────────────
  // 14. WORK EXPERIENCE — HEADSTARTER FELLOWSHIP
  // ─────────────────────────────────────────────────────────────
  {
    id: "experience_headstarter",
    category: "experience",
    phrases: [
      "headstarter",
      "headstarter fellowship",
      "software engineering fellow",
      "fellowship experience"
    ],
    keywords: ["headstarter", "fellowship", "fellow"],
    urduPhrases: [
      "headstarter kya hai",
      "headstarter fellowship me kya kia"
    ],
    response: `🚀 **Software Engineering Fellow at Headstarter**
*Remote • July 2024 – September 2024*

• Selected for an intensive software engineering fellowship program.
• Focused on production-grade engineering practices, collaborative agile sprints, code reviews, and shipping rapid software iterations.`
  },

  // ─────────────────────────────────────────────────────────────
  // 15. OVERALL WORK EXPERIENCE SUMMARY
  // ─────────────────────────────────────────────────────────────
  {
    id: "experience_overview",
    category: "experience",
    phrases: [
      "work experience",
      "career history",
      "professional experience",
      "past companies",
      "how much experience",
      "total experience"
    ],
    keywords: ["experience", "career", "employment", "history", "companies"],
    urduPhrases: [
      "kitna tajurba hai",
      "total experience kitna hai",
      "kahan kahan kaam kia hai",
      "career history kya hai"
    ],
    response: `📋 **Mehboob Waqar's Professional Journey**:

1. 🏢 **Orax Technologies** (July 2025 – Present)
   *Flutter Developer (On-site, Lahore)* — Built and optimized 5+ production mobile applications.
2. 🌐 **Headstarter** (July 2024 – Sept 2024)
   *Software Engineering Fellow (Remote)* — Intensive engineering fellowship with real-world development practices.
3. 📱 **Independent App Publisher**
   *Architected and released 5+ complete apps* on App Store & Google Play Store (Court Pro, Trusted Air, Calorie Tracker, Plant Identifier, Harvest Hub).`
  },

  // ─────────────────────────────────────────────────────────────
  // 16. EDUCATION & UNIVERSITY
  // ─────────────────────────────────────────────────────────────
  {
    id: "education",
    category: "education",
    phrases: [
      "education",
      "university",
      "degree",
      "riphah",
      "riphah international university",
      "bscs",
      "computer science degree",
      "where did he study",
      "qualification"
    ],
    keywords: ["education", "degree", "university", "riphah", "bscs", "study", "qualification"],
    urduPhrases: [
      "taleem kya hai",
      "parhai kahan se ki",
      "konsi university se parha",
      "riphah me kab parha",
      "degree konsi hai"
    ],
    response: `🎓 **Education**:

• **Degree**: Bachelor of Science in Computer Science (**BSCS**)
• **Institution**: **Riphah International University**, Lahore, Pakistan
• **Duration**: August 2021 – June 2025
• **Foundation**: Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering Architecture, and Mobile Application Development.`
  },

  // ─────────────────────────────────────────────────────────────
  // 17. AWARDS & ACHIEVEMENTS
  // ─────────────────────────────────────────────────────────────
  {
    id: "awards",
    category: "awards",
    phrases: [
      "awards",
      "achievements",
      "hackathon",
      "competitions",
      "speed programming",
      "innovate 4.0",
      "itcn asia",
      "winner"
    ],
    keywords: ["awards", "achievements", "hackathon", "winner", "competition", "trophy"],
    urduPhrases: [
      "inam konsa mila",
      "awards kya hain",
      "hackathon jeeta hai",
      "kya kya achievements hain"
    ],
    response: `🏆 **Awards & Competitions**:

1. 🥇 **Winner — Most Innovative Idea**
   *Innovate 4.0 Pitching Hackathon (December 2024)*
   Awarded 1st place for conceiving and pitching a high-impact technological solution evaluated on market viability and engineering merit.

2. 🥇 **Winner — Speed Programming Competition**
   *ITCN Asia 2024 (Riphah International University)*
   Secured top rank in high-pressure algorithmic problem-solving and rapid code execution.`
  },

  // ─────────────────────────────────────────────────────────────
  // 18. CERTIFICATIONS
  // ─────────────────────────────────────────────────────────────
  {
    id: "certifications",
    category: "education",
    phrases: [
      "certifications",
      "certificates",
      "courses",
      "coursera",
      "credentials",
      "licenses"
    ],
    keywords: ["certifications", "certificates", "courses", "coursera", "credentials"],
    urduPhrases: [
      "certifications konsi hain",
      "certificates kya hain",
      "konsay courses kiye hain"
    ],
    response: `📜 **Professional Certifications**:

1. **Web Design for Everybody** — Coursera Specialization (Responsive UI, CSS3, DOM)
2. **Developing Innovative Ideas** — Coursera (Product Ideation & Market Validation)
3. **Object Oriented Programming in Java** — Academic Certification (Design Principles & OOP Architecture)`
  },

  // ─────────────────────────────────────────────────────────────
  // 19. WHY HIRE MEHBOOB
  // ─────────────────────────────────────────────────────────────
  {
    id: "why_hire",
    category: "about",
    phrases: [
      "why should i hire him",
      "why hire mehboob",
      "reasons to hire",
      "what makes him special",
      "strengths of mehboob",
      "why should we hire you",
      "why choose mehboob"
    ],
    keywords: ["why hire", "hire him", "hire mehboob", "strengths", "advantages", "value"],
    urduPhrases: [
      "mehboob ko kyun hire karein",
      "kyun select karein",
      "iski khasiyat kya hai",
      "kyun rakhein"
    ],
    response: `⭐ **Top Reasons to Hire Mehboob Waqar**:

✅ **Proven Production Track Record**: 5+ apps published on the App Store & Google Play Store, handling thousands of real-world interactions.
✅ **Enterprise Scalability**: Proven experience building 50+ screen applications with 150+ REST endpoints (Court Pro).
✅ **Modern Flutter Architecture**: Clean MVVM, Repository Pattern, GetIt DI, and immutable models via Freezed + Dio.
✅ **Cutting-Edge Tech**: Production expertise in IoT (Tuya Smart SDK, native MethodChannels) and AI/ML (Google ML Kit, OpenAI).
✅ **Proven Problem Solver**: 2x Hackathon and Speed Programming winner.
✅ **Full-Lifecycle Ownership**: From UI design translation and architecture to store submission and post-launch monitoring.`
  },

  // ─────────────────────────────────────────────────────────────
  // 20. CONTACT INFO & REACH OUT
  // ─────────────────────────────────────────────────────────────
  {
    id: "contact",
    category: "contact",
    phrases: [
      "how to contact",
      "contact details",
      "email address",
      "phone number",
      "whatsapp number",
      "linkedin profile",
      "github profile",
      "how to reach him",
      "connect with mehboob"
    ],
    keywords: ["contact", "email", "phone", "whatsapp", "linkedin", "github", "reach", "message", "call"],
    urduPhrases: [
      "rabta kaise karein",
      "contact details kya hain",
      "phone number do",
      "email kya hai",
      "kahan contact karein",
      "rabta kaisay hoga"
    ],
    response: `📬 **Contact Mehboob Waqar Directly**:

• 📧 **Email**: [mehboobwaqar444@gmail.com](mailto:mehboobwaqar444@gmail.com)
• 📱 **Phone / WhatsApp**: [+92-304-2292019](tel:+923042292019)
• 💼 **LinkedIn**: [linkedin.com/in/mehboobwaqar](https://linkedin.com/in/mehboobwaqar)
• 🐙 **GitHub**: [github.com/mehboobwaqar](https://github.com/mehboobwaqar)
• 🌐 **Portfolio**: [mehboobwaqar.vercel.app](https://mehboobwaqar.vercel.app)

He is responsive via Email and WhatsApp for new opportunities, freelance contracts, or technical consultations!`
  },

  // ─────────────────────────────────────────────────────────────
  // 21. LOCATION & AVAILABILITY
  // ─────────────────────────────────────────────────────────────
  {
    id: "location_availability",
    category: "availability",
    phrases: [
      "where is he located",
      "where do you live",
      "where is mehboob based",
      "is he available for work",
      "remote or onsite",
      "relocation",
      "work preference"
    ],
    keywords: ["location", "located", "city", "lahore", "pakistan", "remote", "onsite", "availability", "available"],
    urduPhrases: [
      "kahan rehta hai",
      "sheher konsa hai",
      "kahan ka rehne wala hai",
      "remote kaam karta hai",
      "available hai kaam k liye"
    ],
    response: `📍 **Location & Availability**:

• **Base Location**: Lahore, Punjab, Pakistan 🇵🇰
• **Work Preference**: Available for both **Remote** and **On-site** opportunities worldwide.
• **Timezone Flexibility**: Experienced working in international timezones (US, UK, UAE, Europe, PKT).
• **Current Status**: Open to full-time roles, freelance projects, and contract engagements.`
  },

  // ─────────────────────────────────────────────────────────────
  // 22. RESUME / CV DOWNLOAD
  // ─────────────────────────────────────────────────────────────
  {
    id: "resume_cv",
    category: "about",
    phrases: [
      "download resume",
      "download cv",
      "get cv",
      "get resume",
      "can i see his cv",
      "curriculum vitae",
      "pdf resume"
    ],
    keywords: ["resume", "cv", "pdf", "curriculum vitae"],
    urduPhrases: [
      "cv chahye",
      "resume mil sakta hai",
      "cv download kahan se karein",
      "mehboob ki cv"
    ],
    response: `📄 **Mehboob Waqar's Resume / CV**:

You can review his complete credentials directly on this portfolio or download his CV:
• 📥 Click the **"Download CV"** button in the hero section at the top of the page.
• 📧 Or request the latest PDF directly via email at [mehboobwaqar444@gmail.com](mailto:mehboobwaqar444@gmail.com).`
  },

  // ─────────────────────────────────────────────────────────────
  // 23. RATES, PRICING & HIRING MODELS
  // ─────────────────────────────────────────────────────────────
  {
    id: "rates_pricing",
    category: "availability",
    phrases: [
      "what are his rates",
      "hourly rate",
      "how much does he charge",
      "pricing",
      "hiring cost",
      "freelance rate",
      "salary expectation"
    ],
    keywords: ["rates", "pricing", "cost", "salary", "charge", "hourly"],
    urduPhrases: [
      "kitne paise leta hai",
      "rate kya hai",
      "salary kitni mangta hai",
      "charges kya hain"
    ],
    response: `💼 **Rates & Compensation**:

Mehboob's rates depend on the engagement model:
• **Full-Time Roles**: Market-competitive compensation based on role scope and benefits.
• **Contract & Freelance**: Available on milestone-based fixed price or hourly contracts depending on project requirements.

To discuss specific project scope, timeline, and quotes:
💬 Reach out on WhatsApp / Call: **+92-304-2292019** or Email: **mehboobwaqar444@gmail.com**.`
  }
];

// ─────────────────────────────────────────────────────────────
// POLITE, CONTEXT-AWARE REFUSAL RESPONSES
// ─────────────────────────────────────────────────────────────
export const refusalResponses: string[] = [
  "I'm **Mehboob Waqar's Portfolio AI Assistant**. I only answer questions regarding Mehboob's Flutter development, mobile apps, technical skills, and professional background. 🚀",
  "That's outside my domain! 🎯 I'm specifically dedicated to answering questions about Mehboob Waqar's projects, experience, and portfolio.",
  "I appreciate your curiosity, but I'm focused exclusively on Mehboob Waqar's career, mobile engineering work, and portfolio! 💻",
  "I'm only equipped to answer questions related to Mehboob Waqar's Flutter development, production apps, and background. ⚡"
];

// ─────────────────────────────────────────────────────────────
// SUGGESTED QUICK CHIP QUESTIONS
// ─────────────────────────────────────────────────────────────
export const suggestedChips: string[] = [
  "Who is Mehboob?",
  "Tell me about Court Pro",
  "What IoT work has he done?",
  "AI/ML projects?",
  "Why hire Mehboob?",
  "Technical skills & stack",
  "Awards & achievements",
  "How to contact him?",
];

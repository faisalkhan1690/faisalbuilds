export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  badges?: string[];
  featured?: boolean;
  category: "ai" | "mobile" | "web" | "enterprise";
}

export const projects: Project[] = [
  {
    id: "saral-ai",
    name: "Saral AI",
    description:
      "GlobalLogic internal AI platform integrating databases and UI to generate dynamic, context-aware reports — reducing manual reporting and enabling data-driven decisions across teams.",
    tech: ["AI Integration", "Dynamic Reporting", "Database Integration", "React", "LLM"],
    badges: ["GlobalLogic Internal", "Featured"],
    featured: true,
    category: "ai",
  },
  {
    id: "partnersoup-ai",
    name: "Partnersoup — AI Integration",
    description:
      "Integrated AI-powered file and record access into Partnersoup, enabling faster retrieval, smarter search, and improved handling of private markets documentation for global clients.",
    tech: ["Generative AI", "Document AI", "React Native", "React", "Capacitor"],
    badges: ["Partners Group", "Featured"],
    featured: true,
    category: "ai",
  },
  {
    id: "pg-alpha",
    name: "PG Alpha App & Web",
    description:
      "Partners Group's cross-platform private markets investment platform — React Native for mobile (iOS & Android) and React for web. Delivers bespoke solutions to global clients with offline/online capabilities and comprehensive analytics.",
    tech: ["React Native", "React", "Capacitor", "Redux", "Firebase Analytics", "Sentry"],
    badges: ["Partners Group", "Mobile & Web", "Featured"],
    featured: true,
    category: "enterprise",
  },
  {
    id: "canopy",
    name: "Canopy App & Web",
    description:
      "Digital rental and financial profile solution with open banking integration, producing comprehensive reports for renters including payment and affordability verification.",
    tech: ["React Native", "React Native Web", "Redux", "Firebase", "Custom Animation"],
    badges: ["Onsite UK"],
    featured: true,
    category: "web",
  },
  {
    id: "emirates-nbd",
    name: "Emirates NBD Mobile Banking",
    description:
      "Mobile banking app for Emirates National Bank of Dubai with account opening, loan applications, mobile payments, and encrypted data storage.",
    tech: ["Android", "Kotlin", "Realm", "Push Notifications", "DB Encryption", "Google Analytics"],
    badges: ["Onsite Dubai"],
    featured: true,
    category: "mobile",
  },
  {
    id: "zoylo",
    name: "Zoylo Healthcare",
    description:
      "India's first map-based healthcare app connecting users to doctor appointments, diagnostic bookings, and online medicine orders.",
    tech: ["React Native", "Google Maps", "AppsFlyer", "Push Notifications", "Google Analytics"],
    badges: ["Healthcare"],
    category: "mobile",
  },
  {
    id: "club-mahindra",
    name: "Club Mahindra Member App",
    description:
      "Resort booking and membership management app for Mahindra Holidays & Resorts with map integration and offline capabilities.",
    tech: ["Android SDK", "SQLite", "Google Maps", "Push Notifications", "Google Analytics"],
    badges: ["Award Winning"],
    category: "mobile",
  },
  {
    id: "access-health",
    name: "Access Health CT",
    description:
      "Connecticut's official health insurance marketplace app enabling plan enrollment, professional consultations via video/audio calls, and in-app chat.",
    tech: ["Android SDK", "JSON Parsing", "Google Maps", "Video/Audio Call", "Chat"],
    badges: ["Healthcare", "US Market"],
    category: "mobile",
  },
  {
    id: "golearn",
    name: "GoLearn Learning App",
    description:
      "Education app aiming to enhance equal opportunities and social mobility through improved education delivery with offline-first architecture.",
    tech: ["Android", "Kotlin", "Realm DB", "Push Notifications", "Offline/Online"],
    category: "mobile",
  },
  {
    id: "dwidayatour",
    name: "Dwidayatour",
    description:
      "One-stop travel app for tickets, hotel bookings, group tours, individual tours, and travel document management.",
    tech: ["Android", "Mobile App", "Travel"],
    category: "mobile",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI" },
  { id: "enterprise", label: "Enterprise" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
] as const;

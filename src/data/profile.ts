export const profile = {
  name: "Faisal Khan",
  fullName: "Mohd Faisal Khan",
  title: "Mobility & AI Engineering Lead",
  tagline:
    "12+ years in software development: AI, mobile & web engineering with 5+ years leading core teams, project management, and client handling.",
  location: "Noida, Uttar Pradesh, India",
  email: "faisalkhan1690@gmail.com",
  phone: "+91 9717991893",
  photo: "/photo.png",
  links: {
    linkedin: "https://www.linkedin.com/in/faisal-khan-9613b648",
    github: "https://github.com/faisalkhan1690",
    stackoverflow: "https://stackoverflow.com/users/4183013/faisal-khan",
  },
  about: [
    "Over 12+ years of experience delivering high-quality software across mobile, web, and desktop platforms, from fast-paced startups to multinational corporations.",
    "Currently bridging the gap between traditional software engineering and advanced AI integration. I specialize in developing native and agentic AI applications, leveraging generative AI for rapid development, and optimizing workflows using modern AI tools like Claude, Gemini, and Cursor.",
    "As a Software Consultant at GlobalLogic, I have spent 5+ years managing a core development team while handling client relationships directly, including onsite work across the UK and Dubai. I combine deep technical expertise with project management and team leadership to drive products from concept to deployment.",
  ],
  keywords: [
    "AI Agent Development",
    "Generative AI Integration",
    "LLM Tooling (Claude, Gemini, Cursor)",
    "React Native",
    "Android",
    "Flutter",
    "React",
    "Capacitor",
    "Java",
    "JavaScript",
    "SQLite",
    "MongoDB",
    "Project Management",
    "Team Management",
    "Client Handling",
    "Project Planning",
    "Software Development",
  ],
};

export const aiCapabilities = {
  title: "AI & Modern Development",
  subtitle:
    "Building the bridge between traditional engineering and AI-enhanced development pipelines.",
  tooling: [
    { name: "Cursor", description: "AI-driven IDE for rapid, context-aware development" },
    { name: "Claude", description: "LLM-powered code generation, review & architecture" },
    { name: "Gemini", description: "Multi-modal AI for prototyping & integration" },
  ],
  practices: [
    "Agentic AI application development",
    "Generative AI integration in enterprise products",
    "AI-driven coding & rapid prototyping",
    "LLM-assisted architecture & code review",
    "AI-enhanced CI/CD & development workflows",
    "Database-to-UI dynamic report generation",
  ],
};

export const education = [
  {
    degree: "Master of Computer Application (MCA)",
    school: "Amity University, Lucknow",
    period: "2011 – 2014",
    detail: "CGPA: 7.73",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "MJP Rohilkhand University, Bareilly",
    period: "2008 – 2011",
    detail: "68.30%",
  },
];

export interface Award {
  title: string;
  org: string;
  year: string;
  detail?: string;
  citation?: string;
  featured?: boolean;
  image?: string;
}

export const awards: Award[] = [
  {
    title: "The League Extraordinaire",
    org: "GlobalLogic (A Hitachi Group Company)",
    year: "2025–26",
    detail: "Technology Lead for Client",
    citation:
      "Demonstrated exceptional technical ownership and built strong client relationships, driving project excellence, trust and consistent delivery success through effective communication.",
    featured: true,
  },
  {
    title: "Eminence Award Q4 FY'23",
    org: "GlobalLogic",
    year: "2023",
  },
  {
    title: "Spot Award Apr'22",
    org: "GlobalLogic",
    year: "2022",
  },
  {
    title: "Role Model of the Year",
    org: "KelltonTech",
    year: "2018",
  },
  {
    title: "Star of the Quarter",
    org: "KelltonTech",
    year: "2017",
  },
  {
    title: "Valuable Work Contribution",
    org: "Club Mahindra",
    year: "2016",
    detail: "For Club Mahindra mobile app",
  },
];

export const languages = [
  { name: "English", level: "Full Professional" },
  { name: "Hindi", level: "Native or Bilingual" },
  { name: "German", level: "Elementary" },
];

export const leadershipSkills = [
  "Project Management",
  "Team Management",
  "Client Handling",
  "Cross-functional Leadership",
  "Agile Delivery",
] as const;

export const techStack = [
  { id: "react-native", name: "React Native", label: "RN" },
  { id: "react", name: "React", label: "React" },
  { id: "nextjs", name: "Next.js", label: "Next" },
  { id: "android", name: "Android", label: "And" },
  { id: "flutter", name: "Flutter", label: "Flu" },
  { id: "javascript", name: "JavaScript", label: "JS" },
  { id: "java", name: "Java", label: "Java" },
  { id: "mongodb", name: "MongoDB", label: "MDB" },
  { id: "ai", name: "AI / LLM", label: "AI" },
] as const;

export const companyBrands: Record<string, { color: string; abbr: string }> = {
  GlobalLogic: { color: "#0066CC", abbr: "GL" },
  "Studio Graphene": { color: "#7C3AED", abbr: "SG" },
  "Kellton Tech Solutions": { color: "#F97316", abbr: "KT" },
  HyTechPro: { color: "#10B981", abbr: "HT" },
  "SparkGrow Technologies": { color: "#06B6D4", abbr: "SP" },
};

export const projectGradients: Record<string, string> = {
  "saral-ai": "from-violet-600 via-purple-700 to-indigo-900",
  "partnersoup-ai": "from-fuchsia-600 via-pink-700 to-rose-900",
  "pg-alpha": "from-amber-500 via-orange-600 to-red-800",
  canopy: "from-blue-500 via-indigo-600 to-purple-900",
  "emirates-nbd": "from-emerald-600 via-teal-700 to-cyan-900",
  zoylo: "from-green-500 via-lime-600 to-emerald-900",
  "club-mahindra": "from-red-500 via-rose-600 to-pink-900",
  "access-health": "from-sky-500 via-blue-600 to-indigo-900",
  golearn: "from-yellow-500 via-amber-600 to-orange-900",
  dwidayatour: "from-cyan-500 via-teal-600 to-blue-900",
};

export const projectDisplayTitles: Record<string, string> = {
  "saral-ai": "SARAL AI",
  "partnersoup-ai": "PARTNERSOUP AI",
  "pg-alpha": "PG ALPHA",
  canopy: "CANOPY",
  "emirates-nbd": "EMIRATES NBD",
  zoylo: "ZOYLO HEALTH",
  "club-mahindra": "CLUB MAHINDRA",
  "access-health": "ACCESS HEALTH CT",
  golearn: "GOLEARN",
  dwidayatour: "DWIDAYATOUR",
};

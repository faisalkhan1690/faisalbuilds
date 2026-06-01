export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "GlobalLogic",
    role: "Software Consultant",
    period: "Nov 2021 – Present",
    location: "Noida, Uttar Pradesh",
    highlights: [
      "5+ years managing a core development team alongside direct client handling",
      "Project management across React Native, React, Flutter, Android, iOS, and Capacitor deliveries",
      "Building AI-integrated solutions including Saral AI and Partnersoup AI tooling",
      "Leading cross-functional teams including QA, backend, and web developers",
    ],
  },
  {
    company: "Studio Graphene",
    role: "Lead Engineer",
    period: "Jun 2019 – Sep 2021",
    location: "Gurugram, Haryana & London, UK",
    highlights: [
      "Led engineering projects using React Native, Flutter, Android, React, and Capacitor",
      "Acted as product owner with direct client handling on behalf of the company",
      "Onsite client work in London (Emirates) and UK (Frolo, Canopy)",
      "Delivered joint venture projects and provided solutions to complex problems",
    ],
  },
  {
    company: "Kellton Tech Solutions",
    role: "Lead Engineer → Senior Software Engineer",
    period: "Feb 2016 – Jun 2019",
    location: "Gurugram, Haryana",
    highlights: [
      "Led projects using React Native, Flutter, Android, Java, and JavaScript",
      "Delivered Zoylo healthcare app and Club Mahindra member app",
      "Coordinated with development, testing, and design teams",
      "Awarded Role Model of the Year 2018 and Star of the Quarter",
    ],
  },
  {
    company: "HyTechPro",
    role: "Software Engineer",
    period: "Jan 2015 – Feb 2016",
    location: "Noida, U.P.",
    highlights: [
      "Developed Android applications with Java, SQLite, and REST API integrations",
      "Worked individually and collaboratively within agile teams",
    ],
  },
  {
    company: "SparkGrow Technologies",
    role: "Software Developer",
    period: "Dec 2013 – Dec 2014",
    location: "Ghaziabad, U.P.",
    highlights: [
      "Android development with Java and JavaScript in a fast-paced startup environment",
      "Managed projects independently and within a team",
    ],
  },
];

export const onsiteExperience = [
  {
    client: "Emirates National Bank of Dubai",
    location: "Dubai, UAE",
    period: "Feb 2020",
    detail: "Designed mobile app architecture, built SDK boilerplates, refined UX for minimal-click banking",
  },
  {
    client: "Frolo",
    location: "London, UK",
    period: "Dec 2019 – Jan 2020",
    detail: "Planned beta release, provided technology solutions, product design and development",
  },
  {
    client: "Emirates / Canopy",
    location: "London, UK",
    period: "Aug 2019 – Oct 2020",
    detail: "Digital rental and financial profile solution with open banking integration",
  },
];

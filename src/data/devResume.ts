export type SkillTrack = {
  id: string;
  name: string;
  progress: number;
  level: string;
  color: string;
  description: string;
  repoUrl?: string;
  externalUrl?: string;
  topics: string[];
  highlights: string[];
  currentFocus: string;
};

export type SkillCategory = {
  category: string;
  items: { name: string; level: "Expert" | "Advanced" | "Intermediate" | "Learning" }[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  status: "Completed" | "In Progress";
  credentialUrl?: string;
  detail?: string;
};

export type LearningCommit = {
  sha: string;
  message: string;
  repo: string;
  repoUrl: string;
  commitUrl: string;
  date: string;
  track: "csharp" | "cpp" | "dsa" | "python" | "other";
  language: string;
};

export type PinnedRepo = {
  name: string;
  description: string;
  url: string;
  language: string;
  languageColor: string;
  stars?: number;
  track: "csharp" | "cpp" | "dsa" | "python" | "other";
};

export type CvExperience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Freelance" | "Client Work" | "Academic" | "Leadership" | "Volunteering";
  bullets: string[];
  tech: string[];
  url?: string;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  detail: string;
  coursework: string[];
};

export const GITHUB_USERNAME = "BlessedOfficial";

export const PROFILE = {
  name: "Blessed Nyathi",
  username: GITHUB_USERNAME,
  title: "Software Engineering Student · Full-Stack Developer",
  headline: "Backend-focused software engineer building production web platforms",
  bio: "BSc Software Engineering student at Tomsk State University with hands-on experience shipping client-facing products across events, logistics, housing, and fintech. Primary focus: C#, C++, ASP.NET Core, React, and system design.",
  location: "Tomsk, Russia",
  nationality: "Zimbabwe",
  email: "dev@bcodes.co.za",
  phone: "+263 77 118 2657",
  website: "https://bcodes.co.za",
  linkedin: "https://www.linkedin.com/in/blessed-nyathi/",
  leetcode: "https://leetcode.com/u/BlessedOfficial/",
  github: "https://github.com/BlessedOfficial",
  joined: "March 2026",
  education: "BSc Software Engineering — Tomsk State University (Class of 2028)",
  availability: "Open to internships, freelance, and remote roles",
};

export const CV_SUMMARY = `Software engineering student and full-stack developer with a strong backend orientation in C#, C++, and .NET, complemented by production experience in React, TypeScript, and cloud-backed deployments. I have shipped live platforms for event ticketing, customs logistics, student housing, election systems, and photo galleries — handling everything from UI polish to API design, auth flows, and third-party integrations (Stripe, Supabase, Railway, Cloudflare R2). Currently deepening systems skills through C++ simulation work, structured DSA practice on LeetCode, and ASP.NET Core coursework.`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "C#", level: "Intermediate" },
      { name: "C++", level: "Learning" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript / TypeScript", level: "Advanced" },
      { name: "HTML / CSS", level: "Advanced" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "ASP.NET Core / .NET", level: "Intermediate" },
      { name: "React", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "MedusaJS", level: "Learning" },
      { name: "WordPress", level: "Intermediate" },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "REST API design", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MariaDB", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Vercel", level: "Advanced" },
      { name: "Railway", level: "Intermediate" },
      { name: "Cloudflare R2", level: "Intermediate" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Resend (email)", level: "Intermediate" },
    ],
  },
  {
    category: "Engineering Practices",
    items: [
      { name: "Simulation modelling", level: "Intermediate" },
      { name: "Cybersecurity awareness", level: "Intermediate" },
      { name: "System architecture", level: "Learning" },
      { name: "Testing & QA", level: "Learning" },
    ],
  },
];

export const SKILL_TRACKS: SkillTrack[] = [
  {
    id: "csharp",
    name: "C#",
    progress: 68,
    level: "Intermediate",
    color: "#178600",
    description: "Coursework and assignment-driven .NET development with ASP.NET Core fundamentals.",
    repoUrl: "https://github.com/BlessedOfficial/Assign12",
    topics: ["ASP.NET Core", ".NET 8", "OOP", "LINQ", "MVC patterns", "Entity modelling"],
    highlights: [
      "Assignment 12 & 13 — structured ASP.NET Core backend projects",
      "Simulation modelling coursework in C# (Assign12/13 submodules)",
      "Building toward production API patterns and clean architecture",
    ],
    currentFocus: "Web APIs, dependency injection, and middleware pipelines",
  },
  {
    id: "cpp",
    name: "C++",
    progress: 44,
    level: "Learning",
    color: "#f34b7d",
    description: "Systems-oriented learning with simulation engines, CMake, and tracked mastery paths.",
    repoUrl: "https://github.com/BlessedOfficial/cpp-projects",
    topics: ["Preprocessor basics", "CMake", "STL fundamentals", "Pointers & memory", "Unit testing"],
    highlights: [
      "cpp-projects — mastery plan with folder-based learning tracks",
      "LithiSim-Alpha — simulation engine with terminal logging and tests",
      "PreprocessorBasics module and reorganised study repository",
    ],
    currentFocus: "Memory management, testing discipline, and simulation engine internals",
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    progress: 36,
    level: "Building",
    color: "#ffa657",
    description: "Pattern-based LeetCode practice targeting interview readiness and problem decomposition.",
    externalUrl: PROFILE.leetcode,
    topics: ["Arrays & hashing", "Two pointers", "Stacks & queues", "Trees", "Graphs", "Dynamic programming"],
    highlights: [
      "Active LeetCode profile — pattern-first approach to problems",
      "Focus on explaining time/space complexity for each solution",
      "Connecting DSA practice to backend and systems coursework",
    ],
    currentFocus: "Hash maps, stack patterns, and tree traversals",
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: "BSc Software Engineering",
    institution: "Tomsk State University",
    period: "2024 — 2028 (expected)",
    location: "Tomsk, Russia",
    detail: "Undergraduate programme covering software design, backend systems, simulation modelling, cybersecurity, and applied engineering projects.",
    coursework: [
      "Simulation Modelling",
      "Cybersecurity",
      "Object-Oriented Programming (C#)",
      "Systems Architecture",
      "Machine Learning assignments",
    ],
  },
];

export const CV_EXPERIENCE: CvExperience[] = [
  {
    role: "Full-Stack Developer",
    company: "AmpEx",
    period: "2026 — Present",
    location: "Remote",
    type: "Client Work",
    url: "https://www.ampex.store/",
    tech: ["React", "Vite", "Tailwind CSS", "Stripe", "Framer Motion", "Vercel"],
    bullets: [
      "Built a production event ticketing platform with category browsing, live streaming entry points, and organiser checkout flows.",
      "Implemented Stripe-powered payments and a refined bag/checkout experience across hosted and organiser-branded journeys.",
      "Designed warm stone UI system with glass panels, grain textures, and responsive event discovery.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Macrobands Pvt Ltd",
    period: "2026",
    location: "Beitbridge, Zimbabwe",
    type: "Client Work",
    url: "https://www.macrobands.co.za/",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
    bullets: [
      "Delivered a customs clearing and border logistics website covering the SA–Zimbabwe trade corridor.",
      "Structured service pages for brokering, road freight, supply chain strategy, and route visibility.",
      "Shipped a client-ready marketing site with motion-driven UX and mobile-first layout.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "You & Me Africa",
    period: "2026",
    location: "Johannesburg, South Africa",
    type: "Client Work",
    url: "https://you-me-lake.vercel.app/",
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"],
    bullets: [
      "Built event landing pages for cultural gatherings with countdown timers, venue details, and experience sections.",
      "Developed gallery.youandmeafrica.com — guest photo uploads, likes, moderation, and Cloudflare R2 delivery via Railway API.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Accolink",
    period: "2026",
    location: "Zimbabwe",
    type: "Client Work",
    url: "https://accolink.co.zw/",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase"],
    bullets: [
      "Created a student accommodation platform for Zimbabwean universities with search, booking flows, and landlord listings.",
      "Integrated Supabase for auth and data persistence across student and landlord user journeys.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "ZISAR Elections",
    period: "2026",
    location: "Remote",
    type: "Client Work",
    url: "https://www.zisar-elections.ru/",
    tech: ["React", "Vite", "Supabase", "Framer Motion"],
    bullets: [
      "Built a secure election portal with authentication-backed voting workflows and branded participant experience.",
      "Focused on clarity, trust signals, and structured access control for election participation.",
    ],
  },
  {
    role: "Volunteer — Foreign Student Support",
    company: "TSU Online",
    period: "2024 — Present",
    location: "Tomsk, Russia",
    type: "Volunteering",
    bullets: [
      "Help foreign students with translation, documentation guidance, orientation, and navigating essential services in Tomsk.",
      "Support integration into university life through in-person assistance and community onboarding.",
    ],
    tech: [],
  },
  {
    role: "Interact Project Director",
    company: "High School Leadership Programme",
    period: "2022 — 2023",
    location: "Zimbabwe",
    type: "Leadership",
    bullets: [
      "Coordinated service projects and team execution for school-wide leadership initiatives.",
      "Managed timelines, delegated tasks, and delivered community-facing service outcomes.",
    ],
    tech: [],
  },
];

export const SPOKEN_LANGUAGES = [
  { language: "English", level: "Native / Fluent" },
  { language: "Shona", level: "Native" },
  { language: "Ndebele", level: "Fluent" },
  { language: "Venda", level: "Conversational" },
  { language: "Russian", level: "Intermediate (B1)" },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "BSc Software Engineering",
    issuer: "Tomsk State University",
    year: "2028",
    status: "In Progress",
    detail: "Core programme — software design, backend systems, simulation, cybersecurity",
  },
  {
    title: "Simulation Modelling",
    issuer: "Tomsk State University — Coursework",
    year: "2026",
    status: "In Progress",
    credentialUrl: "https://github.com/BlessedOfficial/Simulations",
    detail: "Assign12/13 submodules, LithiSim-Alpha engine work",
  },
  {
    title: "Cybersecurity Awareness",
    issuer: "Academic Programme",
    year: "2026",
    status: "In Progress",
    detail: "Secure development practices and threat awareness",
  },
];

export const PINNED_REPOS: PinnedRepo[] = [
  {
    name: "Assign12",
    description: "ASP.NET Core coursework — first structured backend assignment.",
    url: "https://github.com/BlessedOfficial/Assign12",
    language: "C#",
    languageColor: "#178600",
    track: "csharp",
  },
  {
    name: "Assign13",
    description: "Advanced C# assignment building on .NET fundamentals.",
    url: "https://github.com/BlessedOfficial/Assign13",
    language: "C#",
    languageColor: "#178600",
    track: "csharp",
  },
  {
    name: "cpp-projects",
    description: "C++ mastery plan, preprocessor basics, and tracked learning paths.",
    url: "https://github.com/BlessedOfficial/cpp-projects",
    language: "C++",
    languageColor: "#f34b7d",
    track: "cpp",
  },
  {
    name: "LithiSim-Alpha",
    description: "Practical simulation engine implementation with tests and terminal logging.",
    url: "https://github.com/BlessedOfficial/LithiSim-Alpha",
    language: "C++",
    languageColor: "#f34b7d",
    track: "cpp",
  },
  {
    name: "Simulations",
    description: "Simulation modelling assignments and course repository.",
    url: "https://github.com/BlessedOfficial/Simulations",
    language: "C#",
    languageColor: "#178600",
    track: "csharp",
  },
  {
    name: "machine-learning-assignments",
    description: "ML workflows, guardrails, evaluation pipelines, and agent strategies.",
    url: "https://github.com/BlessedOfficial/machine-learning-assignments",
    language: "Python",
    languageColor: "#3572A5",
    track: "python",
  },
];

export const CURATED_COMMITS: LearningCommit[] = [
  {
    sha: "b8c630b",
    message: "ASP.NET Core first project — Assignment 12 foundation",
    repo: "Assign12",
    repoUrl: "https://github.com/BlessedOfficial/Assign12",
    commitUrl: "https://github.com/BlessedOfficial/Assign12/commit/b8c630b",
    date: "2026-05-22T08:11:51Z",
    track: "csharp",
    language: "C#",
  },
  {
    sha: "3912c5e",
    message: "Extended .NET assignment — Assignment 13",
    repo: "Assign13",
    repoUrl: "https://github.com/BlessedOfficial/Assign13",
    commitUrl: "https://github.com/BlessedOfficial/Assign13/commit/3912c5e",
    date: "2026-05-22T08:11:52Z",
    track: "csharp",
    language: "C#",
  },
  {
    sha: "d6e425a",
    message: "Add mastery plan tracker, track folders, and PreprocessorBasics",
    repo: "cpp-projects",
    repoUrl: "https://github.com/BlessedOfficial/cpp-projects",
    commitUrl: "https://github.com/BlessedOfficial/cpp-projects/commit/d6e425a",
    date: "2026-05-29T17:51:25Z",
    track: "cpp",
    language: "C++",
  },
  {
    sha: "72f012d",
    message: "Added tests to simulation engine",
    repo: "LithiSim-Alpha",
    repoUrl: "https://github.com/BlessedOfficial/LithiSim-Alpha",
    commitUrl: "https://github.com/BlessedOfficial/LithiSim-Alpha/commit/72f012d",
    date: "2026-05-08T11:08:14Z",
    track: "cpp",
    language: "C++",
  },
  {
    sha: "a2b256d",
    message: "Implement necessary units to have terminal logging",
    repo: "LithiSim-Alpha",
    repoUrl: "https://github.com/BlessedOfficial/LithiSim-Alpha",
    commitUrl: "https://github.com/BlessedOfficial/LithiSim-Alpha/commit/a2b256d",
    date: "2026-05-08T09:33:31Z",
    track: "cpp",
    language: "C++",
  },
  {
    sha: "lc0001a",
    message: "LeetCode — Two Sum (pattern: hashing)",
    repo: "leetcode",
    repoUrl: PROFILE.leetcode,
    commitUrl: PROFILE.leetcode,
    date: "2026-04-10T10:00:00Z",
    track: "dsa",
    language: "DSA",
  },
  {
    sha: "lc0002b",
    message: "LeetCode — Valid Parentheses (pattern: stack)",
    repo: "leetcode",
    repoUrl: PROFILE.leetcode,
    commitUrl: PROFILE.leetcode,
    date: "2026-04-18T14:30:00Z",
    track: "dsa",
    language: "DSA",
  },
  {
    sha: "5552bc8",
    message: "Add hybrid input guardrails, request traces, and Task 4 eval improvements",
    repo: "machine-learning-assignments",
    repoUrl: "https://github.com/BlessedOfficial/machine-learning-assignments",
    commitUrl: "https://github.com/BlessedOfficial/machine-learning-assignments/commit/5552bc8",
    date: "2026-06-18T11:24:48Z",
    track: "python",
    language: "Python",
  },
];

export const REPOS_TO_SYNC = [
  "cpp-projects",
  "LithiSim-Alpha",
  "Assign12",
  "Assign13",
  "frontend",
  "machine-learning-assignments",
  "Simulations",
];

export function inferTrack(repo: string, language: string): LearningCommit["track"] {
  if (repo === "Assign12" || repo === "Assign13" || language === "C#") return "csharp";
  if (repo === "cpp-projects" || repo === "LithiSim-Alpha" || language === "C++") return "cpp";
  if (language === "Python") return "python";
  return "other";
}

export function levelColor(level: string) {
  if (level === "Expert" || level === "Advanced") return "#3fb950";
  if (level === "Intermediate") return "#d29922";
  return "#f85149";
}

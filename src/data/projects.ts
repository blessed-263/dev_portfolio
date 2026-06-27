export type Project = {
  title: string;
  category: string;
  year: string;
  status: "LIVE" | "PROPOSAL";
  image: string;
  link: string;
  description: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "AMPEX",
    category: "Events / Ticketing",
    year: "2026",
    status: "LIVE",
    image: "/projects/ampex.png",
    link: "https://www.ampex.store/",
    description:
      "A refined event ticketing platform for discovering and purchasing tickets across music, sports, arts, social, corporate, workshops, and parties. AmpEx supports live streaming, curated host discovery, and a polished checkout experience — whether guests buy on ampex. or on an organiser's own site.",
    tech: ["React", "Vite", "Tailwind CSS", "Stripe", "Framer Motion", "Vercel"],
  },
  {
    title: "MACROBANDS",
    category: "Customs / Logistics",
    year: "2026",
    status: "LIVE",
    image: "/projects/macrobands.webp",
    link: "https://www.macrobands.co.za/",
    description:
      "A customs clearing and border logistics website for Macrobands Pvt Ltd, headquartered in Beitbridge. The site positions the company across the SA-Zimbabwe corridor, covering customs brokering, road freight, supply chain strategy, and route visibility from Musina through Beitbridge to Harare, Mutare, Chirundu, and Nyamapanda.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
  },
  {
    title: "ELTIAR WELLNESS",
    category: "Wellness Proposal",
    year: "2026",
    status: "PROPOSAL",
    image: "/projects/eltiar.jpg",
    link: "https://eltiar.vercel.app/",
    description:
      "A polished website proposal for Eltiar Wellness, a holistic movement brand centered on Pilates, breathwork, sound baths, community, and embodied living. This concept was presented as a client proposal and was not used by the client.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide"],
  },
  {
    title: "YOU & ME AFRICA",
    category: "Culture / Events",
    year: "2026",
    status: "LIVE",
    image: "/projects/you-me-africa.jpg",
    link: "https://you-me-lake.vercel.app/",
    description:
      "A warm event landing page for a cultural gathering built around music, food, conversation, and community. The page presents The Harvest Table Experience, The After Lunch Gathering, event details for Rosebank, Johannesburg, and a countdown to doors opening.",
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"],
  },
  {
    title: "YOU & ME GALLERY",
    category: "Photo Gallery",
    year: "2026",
    status: "LIVE",
    image: "/projects/you-me-gallery.jpeg",
    link: "https://gallery.youandmeafrica.com/",
    description:
      "A live event memory gallery at gallery.youandmeafrica.com for You & Me Africa gatherings. Guests browse a curated photo feed, upload memories, like approved shots, and interact through moderation tooling — with image delivery via a Railway API backed by Cloudflare R2.",
    tech: ["React", "Vite", "Tailwind CSS", "Railway", "Cloudflare R2"],
  },
  {
    title: "ACCOLINK",
    category: "Student Housing",
    year: "2026",
    status: "LIVE",
    image: "/projects/accolink.jpeg",
    link: "https://accolink.co.zw/",
    description:
      "A student accommodation platform for Zimbabwean universities. Accolink helps students discover verified housing, search by city or university, view trending spaces, book securely, and gives landlords a channel to list properties for reliable student tenants.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase"],
  },
  {
    title: "ZISAR ELECTIONS",
    category: "Election Portal",
    year: "2026",
    status: "LIVE",
    image: "/projects/zisar.jpg",
    link: "https://www.zisar-elections.ru/",
    description:
      "A secure election portal for ZISAR focused on fair and transparent voting. The platform presents election access, authentication-backed workflows, and a branded voting experience for managing participation with clarity and trust.",
    tech: ["React", "Vite", "Supabase", "Framer Motion", "Lucide"],
  },
  {
    title: "MALACHI",
    category: "Private Finance",
    year: "2026",
    status: "LIVE",
    image: "/projects/malachi.png",
    link: "https://malachi-iota.vercel.app/",
    description:
      "A privacy-first personal wealth dashboard for managing wallets, ventures, invoices, and loan agreements. Malachi is positioned as a private command node for personal finance, combining local-first data control with structured documents and institutional-grade financial workflows.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Redux Toolkit"],
  },
];

export const PROJECT_CATEGORIES = [...new Set(PROJECTS.map((p) => p.category))];

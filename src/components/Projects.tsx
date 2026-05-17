import { ArrowUpRight, Search, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const PROJECTS = [
  {
    title: "MACROBANDS",
    category: "Customs / Logistics",
    year: "2026",
    status: "LIVE",
    image: "https://www.macrobands.co.za/images/hero-logistics.webp",
    link: "https://www.macrobands.co.za/",
    description: "A customs clearing and border logistics website for Macrobands Pvt Ltd, headquartered in Beitbridge. The site positions the company across the SA-Zimbabwe corridor, covering customs brokering, road freight, supply chain strategy, and route visibility from Musina through Beitbridge to Harare, Mutare, Chirundu, and Nyamapanda.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion"]
  },
  {
    title: "ELTIAR WELLNESS",
    category: "Wellness Proposal",
    year: "2026",
    status: "PROPOSAL",
    image: "https://eltiar.vercel.app/images/photo-1603988363607.jpg",
    link: "https://eltiar.vercel.app/",
    description: "A polished website proposal for Eltiar Wellness, a holistic movement brand centered on Pilates, breathwork, sound baths, community, and embodied living. This concept was presented as a client proposal and was not used by the client.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide"]
  },
  {
    title: "YOU & ME AFRICA",
    category: "Culture / Events",
    year: "2026",
    status: "LIVE",
    image: "https://you-me-lake.vercel.app/images/hero-martell-conversation.jpg",
    link: "https://you-me-lake.vercel.app/",
    description: "A warm event landing page for a cultural gathering built around music, food, conversation, and community. The page presents The Harvest Table Experience, The After Lunch Gathering, event details for Rosebank, Johannesburg, and a countdown to doors opening.",
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"]
  },
  {
    title: "YOU & ME GALLERY",
    category: "Photo Gallery",
    year: "2026",
    status: "LIVE",
    image: "https://gallery.youandmeafrica.com/site-icon/you-me.jpeg",
    link: "https://gallery.youandmeafrica.com/",
    description: "An event memory gallery for You & Me Africa. The experience opens into a curated photo feed for the April 26th gathering, with approved guest uploads, likes, moderation tooling, and image delivery through a Railway API backed by Cloudflare R2.",
    tech: ["React", "Vite", "Tailwind CSS", "Railway", "Cloudflare R2"]
  },
  {
    title: "ACCOLINK",
    category: "Student Housing",
    year: "2026",
    status: "LIVE",
    image: "https://accolink.co.zw/assets/hero.jpeg",
    link: "https://accolink.co.zw/",
    description: "A student accommodation platform for Zimbabwean universities. Accolink helps students discover verified housing, search by city or university, view trending spaces, book securely, and gives landlords a channel to list properties for reliable student tenants.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase"]
  },
  {
    title: "ZISAR ELECTIONS",
    category: "Election Portal",
    year: "2026",
    status: "LIVE",
    image: "https://www.zisar-elections.ru/assets/images/zisar.jpg",
    link: "https://www.zisar-elections.ru/",
    description: "A secure election portal for ZISAR focused on fair and transparent voting. The platform presents election access, authentication-backed workflows, and a branded voting experience for managing participation with clarity and trust.",
    tech: ["React", "Vite", "Supabase", "Framer Motion", "Lucide"]
  },
  {
    title: "MALACHI",
    category: "Private Finance",
    year: "2026",
    status: "LIVE",
    image: "https://malachi-iota.vercel.app/icon.png",
    link: "https://malachi-iota.vercel.app/",
    description: "A privacy-first personal wealth dashboard for managing wallets, ventures, invoices, and loan agreements. Malachi is positioned as a private command node for personal finance, combining local-first data control with structured documents and institutional-grade financial workflows.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Redux Toolkit"]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 border-t border-[var(--color-border)] relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Controls */}
        <div className="flex justify-between items-center mb-16 font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          <button className="flex items-center gap-2 hover:text-[var(--color-text-primary)] transition-colors">
            SELECT <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-2 hover:text-[var(--color-text-primary)] transition-colors">
            <Search size={14} /> PROJECTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 gap-y-16">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(PROJECTS[0])} 
            className="flex flex-col group cursor-pointer block"
          >
            <div className="bg-[var(--color-surface)] p-6 md:p-8 flex-grow relative overflow-hidden border border-[var(--color-border)] flex flex-col justify-between h-[450px]">
              <div className="flex justify-between items-start font-sans text-sm md:text-base italic text-[var(--color-text-primary)] z-10">
                <span>{PROJECTS[0].status}</span>
                <span>{PROJECTS[0].year}</span>
              </div>
              <div className="absolute inset-0 top-16 bottom-16 left-6 right-6 flex items-center justify-center">
                 <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={PROJECTS[0].image} alt={`Detailed view of ${PROJECTS[0].title} project showing aesthetic design`} className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" />
                 </div>
              </div>
              <div className="z-10 mt-auto">
                 <button className="inline-flex items-center gap-2 font-sans text-xs pb-1 border-b border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:opacity-70 transition-opacity">
                    See Now <ArrowUpRight size={14} />
                 </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <h3 className="font-sans text-2xl uppercase tracking-wider text-[var(--color-text-primary)] mb-1">
                {PROJECTS[0].title}
              </h3>
              <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">
                {PROJECTS[0].category}
              </p>
            </div>
          </motion.div>

          {/* Center Text block */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
             <div className="flex items-center w-full my-auto">
               <span className="flex-1 h-[1px] bg-[var(--color-border)]"></span>
               <span className="px-6 font-serif italic text-2xl md:text-3xl text-[var(--color-text-primary)]">
                 "NEW IN 2026"
               </span>
               <span className="flex-1 h-[1px] bg-[var(--color-border)]"></span>
             </div>
          </div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setSelectedProject(PROJECTS[1])} 
            className="flex flex-col group cursor-pointer block"
          >
            <div className="bg-[var(--color-surface)] p-6 md:p-8 flex-grow relative overflow-hidden border border-[var(--color-border)] flex flex-col justify-between h-[450px]">
              <div className="flex justify-between items-start font-sans text-sm md:text-base italic text-[var(--color-text-primary)] z-10">
                <span>{PROJECTS[1].status}</span>
                <span>{PROJECTS[1].year}</span>
              </div>
              <div className="absolute inset-x-0 bottom-16 top-16 scale-90">
                 <img src={PROJECTS[1].image} alt={`Preview of the ${PROJECTS[1].title} featuring modern geometric shapes`} className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out object-top" />
              </div>
              <div className="z-10 mt-auto">
                 <button className="inline-flex items-center gap-2 font-sans text-xs pb-1 border-b border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:opacity-70 transition-opacity">
                    See Now <ArrowUpRight size={14} />
                 </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <h3 className="font-sans text-2xl uppercase tracking-wider text-[var(--color-text-primary)] mb-1">
                {PROJECTS[1].title}
              </h3>
              <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">
                {PROJECTS[1].category}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
          {PROJECTS.slice(2).map((project, idx) => (
             <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)} 
              key={idx} 
              className="flex flex-col group cursor-pointer block"
             >
              <div className="bg-[var(--color-surface)] p-6 relative overflow-hidden border border-[var(--color-border)] flex flex-col justify-between h-[300px]">
                <div className="font-sans text-2xl text-[var(--color-text-primary)] z-10">
                  {project.status}
                </div>
                <div className="absolute inset-x-0 bottom-0 top-16 translate-x-12">
                   <img src={project.image} alt={`Abstract visual representation for the ${project.title} software engineering project`} className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out object-left-top" />
                </div>
              </div>
              <div className="mt-4 flex flex-col">
                <h3 className="font-sans text-lg uppercase tracking-wider text-[var(--color-text-primary)] mb-1">
                  {project.title}
                </h3>
                <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 text-[var(--color-text-primary)]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)} />
          <div className="relative w-full max-w-4xl bg-[var(--color-surface)] border border-[var(--color-border)] h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-[var(--color-border)] hover:bg-black hover:text-white transition-colors"
            >
              <X size={20} className="mix-blend-difference text-white md:mix-blend-normal md:text-black hover:md:text-white" />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
               <img 
                 src={selectedProject.image} 
                 alt={selectedProject.title} 
                 className="w-full h-full object-cover object-center absolute inset-0"
               />
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-4">
                {selectedProject.status} — {selectedProject.year}
              </div>
              
              <h2 className="font-serif text-3xl md:text-5xl tracking-tighter mb-2">
                {selectedProject.title}
              </h2>
              
              <p className="font-sans text-sm md:text-base italic text-[var(--color-text-primary)] mb-8">
                {selectedProject.category}
              </p>

              <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-sm">
                {selectedProject.description}
              </p>

              <div className="mt-auto">
                 <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-primary)] mb-4 border-b border-[var(--color-border)] pb-2">Technologies Used</h4>
                 <div className="flex flex-wrap gap-2">
                   {selectedProject.tech.map((tech, idx) => (
                     <span key={idx} className="font-sans text-xs px-3 py-1 border border-[var(--color-border)] rounded-full text-[var(--color-text-secondary)] bg-black/5">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>

              <div className="mt-12">
                 <a href={selectedProject.link} className="inline-flex items-center gap-2 font-sans text-sm pb-1 border-b border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:opacity-70 transition-opacity">
                    View Live Project <ArrowUpRight size={16} />
                 </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

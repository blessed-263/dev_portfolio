import { Activity, Globe2, HandHeart, Mail, Network, ShieldCheck, ShoppingBag, ServerCog, Users } from "lucide-react";
import { SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss, SiReact, SiDotnet, SiWordpress, SiPostgresql, SiMariadb, SiGithub } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "motion/react";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 border-t border-[var(--color-border)]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="w-full lg:w-1/3 flex flex-col"
         >
             <h2 className="font-serif text-5xl md:text-6xl tracking-tight leading-none mb-6">Expertise.</h2>
             <span className="w-12 h-[1px] bg-black block mb-6"></span>
             <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm mb-16">
               A comprehensive software engineering stack spanning secure backend systems, dynamic frontend experiences, cybersecurity awareness, and simulation-driven problem solving.
             </p>
             
             <div>
                <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[var(--color-border)]"></span>
                  Education
                </h3>
                <h4 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] tracking-tight mb-2">BSc Software Engineering</h4>
                <p className="font-sans text-sm text-[var(--color-text-primary)] mb-1">Tomsk State University</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">Class of Summer 2028</p>
             </div>
         </motion.div>
         <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-4 mb-6">Languages</h3>
              <ul className="flex flex-col gap-4 font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                <li className="flex items-center gap-4"><span className="text-xl shrink-0 opacity-80"><SiPython /></span> <span>Python</span></li>
                <li className="flex items-center gap-4">
                  <div className="flex gap-1 text-xl shrink-0 opacity-80 items-center">
                    <TbBrandCSharp />
                    <SiCplusplus />
                  </div>
                  <span>C# / C++</span>
                </li>
                <li className="flex items-center gap-4"><span className="text-xl shrink-0 opacity-80"><SiJavascript /></span> <span>JavaScript</span></li>
                <li className="flex items-center gap-4">
                  <div className="flex gap-1 text-xl shrink-0 opacity-80 items-center">
                    <SiHtml5 />
                    <SiCss />
                  </div>
                  <span>HTML / CSS</span>
                </li>
              </ul>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.4 }}
           >
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-4 mb-6">Frameworks</h3>
              <ul className="flex flex-col gap-4 font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                <li className="flex items-center gap-4"><span className="text-xl shrink-0 opacity-80"><SiReact /></span> <span>React</span></li>
                <li className="flex items-center gap-4"><span className="text-xl shrink-0 opacity-80"><SiDotnet /></span> <span>.NET</span></li>
                <li className="flex items-center gap-4"><ShoppingBag className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>MedusaJS</span></li>
                <li className="flex items-center gap-4"><span className="text-xl shrink-0 opacity-80"><SiWordpress /></span> <span>WordPress</span></li>
              </ul>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.6 }}
           >
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-4 mb-6">Systems</h3>
              <ul className="flex flex-col gap-4 font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                <li className="flex items-center gap-4"><ServerCog className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>Backend Services</span></li>
                <li className="flex items-center gap-4"><span className="text-xl shrink-0 opacity-80"><SiPostgresql /></span> <span>PostgreSQL</span></li>
                <li className="flex items-center gap-4"><span className="text-xl shrink-0 opacity-80"><SiMariadb /></span> <span>MariaDB</span></li>
                <li className="flex items-center gap-4"><Mail className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>Resend</span></li>
              </ul>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.8 }}
           >
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-4 mb-6">Software Dev</h3>
              <ul className="flex flex-col gap-4 font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                <li className="flex items-center gap-4"><ShieldCheck className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>Cybersecurity</span></li>
                <li className="flex items-center gap-4"><Activity className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>Simulation Modelling</span></li>
                <li className="flex items-center gap-4"><span className="text-xl shrink-0 opacity-80"><SiGithub /></span> <span>GitHub Workflow</span></li>
                <li className="flex items-center gap-4"><Network className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>System Architecture</span></li>
              </ul>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 1.0 }}
           >
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-4 mb-6">Leadership</h3>
              <ul className="flex flex-col gap-4 font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                <li className="flex items-start gap-4">
                  <Users className="w-5 h-5 shrink-0 opacity-80 mt-1" strokeWidth={1.5} />
                  <span>Interact Project Director</span>
                </li>
                <li className="font-sans text-xs leading-relaxed text-[var(--color-text-secondary)] pl-9">
                  High school leadership role coordinating service projects and team execution.
                </li>
              </ul>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 1.2 }}
           >
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-4 mb-6">Volunteering</h3>
              <ul className="flex flex-col gap-4 font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                <li className="flex items-start gap-4">
                  <HandHeart className="w-5 h-5 shrink-0 opacity-80 mt-1" strokeWidth={1.5} />
                  <span>TSU Online</span>
                </li>
                <li className="font-sans text-xs leading-relaxed text-[var(--color-text-secondary)] pl-9">
                  In-person support helping foreign students integrate through translation, documentation guidance, orientation, and finding essential places.
                </li>
              </ul>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 1.4 }}
           >
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-4 mb-6">Languages</h3>
              <ul className="flex flex-col gap-4 font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
                <li className="flex items-center gap-4"><Globe2 className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>English</span></li>
                <li className="flex items-center gap-4"><Globe2 className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>Shona</span></li>
                <li className="flex items-center gap-4"><Globe2 className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>Ndebele</span></li>
                <li className="flex items-center gap-4"><Globe2 className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>Venda</span></li>
                <li className="flex items-center gap-4"><Globe2 className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} /> <span>Russian <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">(Intermediate)</span></span></li>
              </ul>
           </motion.div>
         </div>
      </div>
    </section>
  );
}

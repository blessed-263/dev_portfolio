import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const WhatsappIcon = ({ size = 24, strokeWidth = 1.5, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 lg:gap-24 items-start">
        
        {/* Left Col - Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
           <h2 className="font-serif text-6xl md:text-8xl tracking-tighter leading-[0.9]">
             Let's talk <br/>
             <span className="italic text-[var(--color-text-secondary)]">business.</span>
           </h2>
           <p className="mt-12 text-lg text-[var(--color-text-secondary)] max-w-sm font-sans leading-relaxed">
             Available for internships, freelance opportunities, and remote roles. Let's build something robust, elegant, and impactful.
           </p>
           
           <div className="mt-24 font-sans text-sm tracking-[0.1em] uppercase">
              <div className="mb-4 text-[var(--color-text-secondary)] text-xs">Direct</div>
              <a href="mailto:dev@bcodes.co.za" className="text-2xl md:text-3xl font-serif lowercase tracking-tight hover:italic transition-all inline-block mb-12">
                dev@bcodes.co.za
              </a>
              <div className="flex flex-col gap-2 mb-12 text-sm tracking-normal normal-case text-[var(--color-text-secondary)]">
                <a href="tel:+263771182657" className="hover:text-[var(--color-text-primary)] transition-colors">
                  +263 77 118 2657
                </a>
                <a href="tel:+79962058047" className="hover:text-[var(--color-text-primary)] transition-colors">
                  +7 (996) 205 8047
                </a>
              </div>
              
              <div className="flex items-center gap-6">
                 <a href="https://github.com/BlessedOfficial" target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors" aria-label="GitHub">
                   <Github size={24} strokeWidth={1.5} />
                 </a>
                 <a href="https://www.linkedin.com/in/blessed-nyathi/" target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors" aria-label="LinkedIn">
                   <Linkedin size={24} strokeWidth={1.5} />
                 </a>
                 <a href="https://www.instagram.com/blessed_panashe/" target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors" aria-label="Instagram">
                   <Instagram size={24} strokeWidth={1.5} />
                 </a>
                 <a href="https://wa.me/263771182657" target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors" aria-label="WhatsApp">
                   <WhatsappIcon size={24} strokeWidth={1.5} />
                 </a>
              </div>
           </div>
        </motion.div>

        {/* Right Col - Direct Links */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="relative border-t border-[var(--color-text-primary)] pt-8 md:pt-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
              <div>
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-5">
                  Start Here
                </div>
                <h3 className="font-serif text-4xl md:text-6xl tracking-tight leading-none text-[var(--color-text-primary)]">
                  Ready when<br className="hidden md:block" /> you are.
                </h3>
              </div>
              <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs md:pt-2">
                Skip the form. Reach me directly through the channel that works best for your project.
              </p>
            </div>

            <div className="flex flex-col border-y border-[var(--color-border)]">
              <a
                href="mailto:dev@bcodes.co.za?subject=Project%20Inquiry%20for%20Blessed&body=Hi%20Blessed%2C%0A%0AI'd%20like%20to%20talk%20about%20a%20project.%0A"
                className="group flex items-center justify-between py-6 text-[var(--color-text-primary)] border-b border-[var(--color-border)] hover:px-3 transition-all"
              >
                <span className="flex items-center gap-4 font-serif text-2xl md:text-3xl tracking-tight">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  Email Me
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
              </a>

              <a
                href="https://wa.me/263771182657"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-6 text-[var(--color-text-primary)] border-b border-[var(--color-border)] hover:px-3 transition-all"
              >
                <span className="flex items-center gap-4 font-serif text-2xl md:text-3xl tracking-tight">
                  <WhatsappIcon size={20} />
                  WhatsApp
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
              </a>

              <a
                href="https://www.linkedin.com/in/blessed-nyathi/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-6 text-[var(--color-text-primary)] border-b border-[var(--color-border)] hover:px-3 transition-all"
              >
                <span className="flex items-center gap-4 font-serif text-2xl md:text-3xl tracking-tight">
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                  LinkedIn
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
              </a>

              <a
                href="https://github.com/BlessedOfficial"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-6 text-[var(--color-text-primary)] hover:px-3 transition-all"
              >
                <span className="flex items-center gap-4 font-serif text-2xl md:text-3xl tracking-tight">
                  <Github className="w-5 h-5" strokeWidth={1.5} />
                  GitHub
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

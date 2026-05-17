import { motion } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSlide = () => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    const slides = Array.from(container.children) as HTMLElement[];
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (currentScroll >= maxScroll - 8) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    const nextSlidePosition = slides
      .map((slide) => {
        const slideRect = slide.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const centeredPosition =
          currentScroll + slideRect.left - containerRect.left - (container.clientWidth - slideRect.width) / 2;

        return Math.max(0, Math.min(centeredPosition, maxScroll));
      })
      .find((position) => position > currentScroll + 24);

    container.scrollTo({
      left: nextSlidePosition ?? 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row pt-32 pb-4 overflow-hidden px-6 md:px-12 bg-transparent">
      {/* Left Column */}
      <div className="w-full lg:w-[45%] relative flex flex-col justify-between z-10 pt-12 md:pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex absolute -left-10 top-[45%] -rotate-90 origin-left items-center gap-4 text-[10px] font-sans tracking-[0.2em] uppercase text-[var(--color-text-secondary)]"
        >
          Capabilities <span className="text-xl leading-none font-light text-black">+</span>
        </motion.div>
        
        <div className="mt-auto pb-12 lg:pb-0 z-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-[clamp(6rem,18vw,22rem)] font-black leading-[0.7] tracking-tighter text-[var(--color-text-primary)] -ml-4 md:-ml-8 lg:-ml-12 drop-shadow-sm"
          >
            dev.
          </motion.h1>
        </div>
      </div>

      {/* Floating Slide Button */}
      <motion.button
        type="button"
        aria-label="Show next project"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={handleSlide}
        className="hidden lg:flex absolute left-[45%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center w-[100px] h-[100px] rounded-full border border-black/20 backdrop-blur-md bg-white/30 hover:bg-white/50 transition-colors cursor-pointer text-[10px] uppercase tracking-[0.2em]"
      >
        Slide
      </motion.button>

      {/* Right Column - Slider */}
      <div 
        ref={scrollContainerRef}
        className="w-full lg:w-[55%] flex gap-8 lg:pl-16 h-full items-end pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pointer-events-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        {/* Project 1 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-w-[280px] md:min-w-[340px] flex flex-col gap-6 snap-center group cursor-pointer pb-2"
        >
          <div className="aspect-[3/4] w-full border border-[var(--color-border)] overflow-hidden">
             <img src="https://www.macrobands.co.za/images/hero-logistics.webp" alt="Macrobands customs clearing and border logistics" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" />
          </div>
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-2">Customs / Logistics</h4>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-1">Macrobands</h3>
            <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">— BORDER TRADE</p>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="min-w-[280px] md:min-w-[340px] flex flex-col gap-6 snap-center group cursor-pointer pb-2"
        >
          <div className="aspect-[3/4] w-full border border-[var(--color-border)] overflow-hidden">
             <img src="https://you-me-lake.vercel.app/images/hero-martell-conversation.jpg" alt="Guests at the You & Me Africa cultural gathering" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" />
          </div>
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-2">Culture / Events</h4>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-1">You & Me Africa</h3>
            <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">— EVENT LANDING</p>
          </div>
        </motion.div>

         {/* Project 3 */}
         <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="min-w-[280px] md:min-w-[340px] flex flex-col gap-6 snap-center group cursor-pointer pr-12 pb-2"
         >
          <div className="aspect-[3/4] w-full border border-[var(--color-border)] overflow-hidden">
             <img src="https://gallery.youandmeafrica.com/site-icon/you-me.jpeg" alt="You & Me Africa gallery identity" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" />
          </div>
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-2">Gallery / Cloud</h4>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-1">You & Me Gallery</h3>
            <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">— PHOTO FEED</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

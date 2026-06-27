import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "../data/projects";

type HeroSlideButtonProps = {
  activeIndex: number;
  total: number;
  nextProject: Project;
  onSlide: () => void;
};

export function HeroSlideButton({ activeIndex, total, nextProject, onSlide }: HeroSlideButtonProps) {
  const currentLabel = String(activeIndex + 1).padStart(2, "0");
  const nextLabel = String(((activeIndex + 1) % total) + 1).padStart(2, "0");

  return (
    <div className="hidden lg:block absolute left-[45%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-30">
      <motion.button
        type="button"
        onClick={onSlide}
        aria-label={`Next project: ${nextProject.title}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="hero-slide-btn group relative flex h-[120px] w-[120px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-black/15 bg-white/40 px-3 text-center backdrop-blur-md transition-colors hover:bg-white/60"
      >
        <span className="hero-slide-ring" aria-hidden />
        <span className="relative z-10 font-sans text-[9px] uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
          Next
        </span>

        <span className="relative z-10 h-[2.5rem] w-[88px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={nextProject.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center font-serif text-sm leading-tight tracking-tight text-[var(--color-text-primary)]"
            >
              {nextProject.title}
            </motion.span>
          </AnimatePresence>
        </span>

        <span className="relative z-10 h-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${currentLabel}-${nextLabel}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-1 font-mono text-[10px] text-[var(--color-text-secondary)]"
            >
              <span>{currentLabel}</span>
              <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              <span>{nextLabel}</span>
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.button>
    </div>
  );
}

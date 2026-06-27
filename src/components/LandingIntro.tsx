import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const slideEase = [0.65, 0, 0.35, 1] as const;

const dividerReveal = {
  initial: { scaleX: 0, opacity: 0 },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.45, ease, delay: 0.42 },
  },
};

const labelReveal = {
  initial: { y: "100%", opacity: 0, filter: "blur(6px)" },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: 0.3, ease },
  },
};

const titleReveal = {
  initial: { y: "115%", filter: "blur(10px)" },
  animate: {
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay: 0.42, ease },
  },
};

const brandReveal = {
  initial: { y: "100%", opacity: 0, filter: "blur(6px)" },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: 0.82, ease },
  },
};

export const INTRO_SLIDE_DURATION_S = 0.72;
export const INTRO_HANDOFF_DELAY_S = 1.95;
export const INTRO_DURATION_MS = Math.round((INTRO_HANDOFF_DELAY_S + INTRO_SLIDE_DURATION_S) * 1000);

const corners = [
  { className: "top-5 left-5 md:top-8 md:left-8 border-t border-l", delay: 0.05 },
  { className: "top-5 right-5 md:top-8 md:right-8 border-t border-r", delay: 0.1 },
  { className: "bottom-5 left-5 md:bottom-8 md:left-8 border-b border-l", delay: 0.15 },
  { className: "bottom-5 right-5 md:bottom-8 md:right-8 border-b border-r", delay: 0.2 },
] as const;

function CornerFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20" aria-hidden>
      {corners.map((corner) => (
        <motion.span
          key={corner.className}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: corner.delay, ease }}
          className={`absolute h-5 w-5 border-[var(--color-text-primary)] md:h-6 md:w-6 ${corner.className}`}
        />
      ))}
      <motion.span
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.28, ease }}
        className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-text-secondary)] md:top-9"
      >
        init
      </motion.span>
    </div>
  );
}

export function LandingIntro() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: INTRO_SLIDE_DURATION_S, ease: slideEase },
      }}
      className="landing-intro-shell fixed inset-0 z-[999] overflow-hidden bg-[#e5e5e5] p-2 md:p-4 lg:p-6"
      aria-hidden
    >
      <motion.div
        initial={{
          clipPath: "inset(46% 22% 46% 22% round 1.25rem)",
          scale: 1.03,
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0% round 1rem)",
          scale: 1,
        }}
        transition={{ duration: 0.82, ease }}
        className="landing-intro-card relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1rem] border border-white/50 bg-[var(--color-bg)] bg-noise shadow-2xl md:rounded-[2rem]"
      >
        <CornerFrame />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-6 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-[var(--color-border)] md:block" />
          <div className="absolute right-6 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-[var(--color-border)] md:block" />
        </motion.div>

        <div className="relative flex flex-col items-center px-6 text-center">
          <div className="overflow-hidden pb-1">
            <motion.p
              variants={labelReveal}
              initial="initial"
              animate="animate"
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-[var(--color-text-secondary)]"
            >
              Blessed Nyathi
            </motion.p>
          </div>

          <motion.div
            variants={dividerReveal}
            initial="initial"
            animate="animate"
            className="my-4 h-px w-10 origin-center bg-[var(--color-text-primary)]/15 md:my-5 md:w-12"
          />

          <div className="overflow-hidden pb-1">
            <motion.h1
              variants={titleReveal}
              initial="initial"
              animate="animate"
              className="font-serif text-[clamp(5rem,22vw,14rem)] font-black leading-[0.75] tracking-tighter text-[var(--color-text-primary)]"
            >
              dev.
            </motion.h1>
          </div>

          <div className="overflow-hidden pt-6 md:pt-8">
            <motion.p
              variants={brandReveal}
              initial="initial"
              animate="animate"
              className="font-serif text-2xl tracking-tighter lowercase text-[var(--color-text-secondary)] md:text-3xl"
            >
              bcodes.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.05, ease }}
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">
            Portfolio · 2026
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 1.15, ease }}
            className="h-px w-8 origin-center bg-[var(--color-border)]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

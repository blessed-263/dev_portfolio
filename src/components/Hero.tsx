import { motion } from "motion/react";
import { useRef, useState, type PointerEvent } from "react";
import { PROJECTS } from "../data/projects";
import { CountUp } from "./CountUp";

const HERO_TITLES = ["AMPEX", "YOU & ME AFRICA", "YOU & ME GALLERY"] as const;
const HERO_PROJECTS = HERO_TITLES.map((title) => PROJECTS.find((p) => p.title === title)).filter(
  (project): project is (typeof PROJECTS)[number] => Boolean(project),
);

export function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const handleSlide = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

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
          currentScroll +
          slideRect.left -
          containerRect.left -
          (container.clientWidth - slideRect.width) / 2;

        return Math.max(0, Math.min(centeredPosition, maxScroll));
      })
      .find((position) => position > currentScroll + 24);

    container.scrollTo({
      left: nextSlidePosition ?? 0,
      behavior: "smooth",
    });
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    dragState.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: container.scrollLeft,
    };
    setIsDragging(true);
    container.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const delta = e.clientX - dragState.current.startX;
    container.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    dragState.current.active = false;
    setIsDragging(false);
    scrollContainerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row pt-32 pb-4 overflow-hidden px-6 md:px-12 bg-transparent">
      <div className="w-full lg:w-[45%] relative flex flex-col justify-between z-10 pt-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 text-[10px] font-sans tracking-[0.2em] uppercase text-[var(--color-text-secondary)]"
        >
          <span>
            <CountUp value={PROJECTS.length} pad={2} className="font-mono text-[var(--color-text-primary)]" />{" "}
            Projects
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
          <span>2026 Collection</span>
        </motion.div>

        <div className="hidden lg:flex absolute -left-10 top-[45%] -rotate-90 origin-left items-center gap-4 text-[10px] font-sans tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
          Drag to explore <span className="text-xl leading-none font-light text-black">+</span>
        </div>

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

      <motion.button
        type="button"
        aria-label="Show next project"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={handleSlide}
        className="hidden lg:flex absolute left-[45%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center w-[100px] h-[100px] rounded-full border border-black/20 backdrop-blur-md bg-white/30 hover:bg-white/50 transition-colors cursor-pointer text-[10px] uppercase tracking-[0.2em]"
      >
        Slide
      </motion.button>

      <div
        ref={scrollContainerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`w-full lg:w-[55%] flex gap-8 lg:pl-16 h-full items-end pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {HERO_PROJECTS.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            className={`min-w-[280px] md:min-w-[340px] flex flex-col gap-6 snap-center group pb-2 ${
              index === HERO_PROJECTS.length - 1 ? "pr-12" : ""
            }`}
            draggable={false}
          >
            <div className="aspect-[3/4] w-full border border-[var(--color-border)] overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out pointer-events-none"
              />
              <span className="absolute top-3 left-3 font-sans text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-white/80 backdrop-blur-sm border border-[var(--color-border)]">
                {project.status}
              </span>
            </div>
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-2">
                {project.category}
              </h4>
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-1">
                {project.title}
              </h3>
              <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">— {project.year}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

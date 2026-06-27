import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { PROJECTS, formatProjectStatus } from "../data/projects";
import { CountUp } from "./CountUp";
import { HeroSlideButton } from "./HeroSlideButton";

const HERO_TITLES = ["AMPEX", "YOU & ME AFRICA", "YOU & ME GALLERY"] as const;
const HERO_PROJECTS = HERO_TITLES.map((title) => PROJECTS.find((p) => p.title === title)).filter(
  (project): project is (typeof PROJECTS)[number] => Boolean(project),
);

export function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const updateActiveIndex = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const slides = Array.from(container.children) as HTMLElement[];
    if (!slides.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(containerCenter - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const slide = container.children[index] as HTMLElement | undefined;
    if (!slide) return;

    setActiveIndex(index);
    slide.scrollIntoView({ behavior, block: "nearest", inline: "center" });

    if (!("onscrollend" in container)) {
      window.setTimeout(updateActiveIndex, behavior === "smooth" ? 450 : 0);
    }
  }, [updateActiveIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      if (dragState.current.active) updateActiveIndex();
    };

    updateActiveIndex();
    container.addEventListener("scroll", onScroll, { passive: true });
    container.addEventListener("scrollend", updateActiveIndex);
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      container.removeEventListener("scroll", onScroll);
      container.removeEventListener("scrollend", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const handleSlide = () => {
    const nextIndex = (activeIndex + 1) % HERO_PROJECTS.length;
    scrollToIndex(nextIndex);
  };

  const nextIndex = (activeIndex + 1) % HERO_PROJECTS.length;
  const nextProject = HERO_PROJECTS[nextIndex];

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
    updateActiveIndex();
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

      <HeroSlideButton
        activeIndex={activeIndex}
        total={HERO_PROJECTS.length}
        nextProject={nextProject}
        onSlide={handleSlide}
      />

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
        {HERO_PROJECTS.map((project, index) => {
          const isActive = index === activeIndex;

          return (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: isActive ? 1.05 : 0.96,
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 + index * 0.2 },
              x: { duration: 0.8, delay: 0.2 + index * 0.2 },
              scale: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            }}
            className={`min-w-[280px] md:min-w-[340px] flex flex-col gap-6 snap-center group pb-2 origin-bottom ${
              index === HERO_PROJECTS.length - 1 ? "pr-12" : ""
            } ${isActive ? "z-10" : "z-0"}`}
            draggable={false}
          >
            <div
              className={`aspect-[3/4] w-full border overflow-hidden relative transition-[border-color,box-shadow] duration-500 ${
                isActive
                  ? "border-[var(--color-text-primary)] shadow-[0_24px_48px_rgba(0,0,0,0.12)]"
                  : "border-[var(--color-border)]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 ease-out pointer-events-none ${
                  isActive
                    ? "grayscale-0 opacity-100 scale-105"
                    : "grayscale opacity-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-90"
                }`}
              />
              <span
                className={`absolute top-3 left-3 font-sans text-[10px] tracking-[0.15em] px-2 py-1 bg-white/80 backdrop-blur-sm border border-[var(--color-border)] ${
                  project.status === "CONCEPT" ? "normal-case" : "uppercase"
                }`}
              >
                {formatProjectStatus(project.status)}
              </span>
            </div>
            <div>
              <h4
                className={`font-sans text-[10px] uppercase tracking-[0.2em] mb-2 transition-colors duration-300 ${
                  isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"
                }`}
              >
                {project.category}
              </h4>
              <h3
                className={`font-serif text-2xl md:text-3xl mb-1 transition-colors duration-300 ${
                  isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-primary)]/70"
                }`}
              >
                {project.title}
              </h3>
              <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">— {project.year}</p>
            </div>
          </motion.a>
          );
        })}
      </div>
    </section>
  );
}

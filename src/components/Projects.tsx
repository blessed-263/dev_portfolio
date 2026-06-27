import { ArrowUpRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PROJECTS, PROJECT_CATEGORIES, formatProjectStatus, type Project } from "../data/projects";
import { CountUp } from "./CountUp";

const STATUS_FILTERS = ["ALL", "LIVE", "CONCEPT", "PROPOSAL"] as const;

function statusBadgeClass(status: Project["status"]) {
  if (status === "LIVE") {
    return "bg-[var(--color-text-primary)] text-[var(--color-bg)]";
  }
  if (status === "CONCEPT") {
    return "border border-dashed border-[var(--color-text-primary)] text-[var(--color-text-primary)] bg-black/[0.03]";
  }
  return "border border-[var(--color-border)] text-[var(--color-text-secondary)]";
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof STATUS_FILTERS)[number]>("ALL");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((project) => {
      const matchesStatus = statusFilter === "ALL" || project.status === statusFilter;
      const matchesCategory = categoryFilter === "ALL" || project.category === categoryFilter;
      const matchesQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tech.some((t) => t.toLowerCase().includes(q));
      return matchesStatus && matchesCategory && matchesQuery;
    });
  }, [query, statusFilter, categoryFilter]);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 border-t border-[var(--color-border)] relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-4">
              Selected Work — 2026
            </p>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none">
              Collection
            </h2>
            <p className="mt-4 font-sans text-sm text-[var(--color-text-secondary)] max-w-md">
              <CountUp value={filtered.length} pad={2} className="font-mono text-[var(--color-text-primary)]" />
              {" "}of{" "}
              <CountUp value={PROJECTS.length} pad={2} className="font-mono text-[var(--color-text-primary)]" />
              {" "}projects in view
            </p>
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search
              size={14}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech..."
              className="w-full bg-transparent border-b border-[var(--color-border)] py-3 pl-6 font-sans text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {STATUS_FILTERS.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={`font-sans text-[10px] tracking-[0.15em] px-4 py-2 border transition-colors ${
                status === "CONCEPT" ? "normal-case" : "uppercase"
              } ${
                statusFilter === status
                  ? "bg-[var(--color-text-primary)] text-[var(--color-bg)] border-[var(--color-text-primary)]"
                  : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {status === "CONCEPT" ? "concept" : status}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-16 pb-4 border-b border-[var(--color-border)]">
          <button
            type="button"
            onClick={() => setCategoryFilter("ALL")}
            className={`font-sans text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border transition-colors ${
              categoryFilter === "ALL"
                ? "bg-black/5 border-[var(--color-text-primary)] text-[var(--color-text-primary)]"
                : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            All Categories
          </button>
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setCategoryFilter(category)}
              className={`font-sans text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border transition-colors ${
                categoryFilter === category
                  ? "bg-black/5 border-[var(--color-text-primary)] text-[var(--color-text-primary)]"
                  : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="bg-[var(--color-surface)] p-5 md:p-6 relative overflow-hidden border border-[var(--color-border)] flex flex-col justify-between h-[340px] md:h-[380px]">
                  <div className="flex justify-between items-start z-10">
                    <span className="font-sans text-[10px] uppercase tracking-[0.15em] px-2 py-1 border border-[var(--color-border)] text-[var(--color-text-secondary)]">
                      {project.category}
                    </span>
                    <span
                      className={`font-sans text-[10px] tracking-[0.15em] px-2 py-1 ${statusBadgeClass(project.status)} ${
                        project.status === "CONCEPT" ? "normal-case" : "uppercase"
                      }`}
                    >
                      {formatProjectStatus(project.status)}
                    </span>
                  </div>

                  <div className="absolute inset-x-5 md:inset-x-6 top-16 bottom-16 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  </div>

                  <div className="z-10 mt-auto flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-sans text-lg md:text-xl uppercase tracking-wider text-[var(--color-text-primary)]">
                        {project.title}
                      </h3>
                      <p className="font-serif italic text-sm text-[var(--color-text-secondary)]">
                        {project.year}
                      </p>
                    </div>
                    <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-border)] group-hover:bg-[var(--color-text-primary)] group-hover:text-[var(--color-bg)] group-hover:border-[var(--color-text-primary)] transition-colors">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="font-sans text-sm text-[var(--color-text-secondary)] py-16 text-center">
            No projects match your filters.
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 text-[var(--color-text-primary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative w-full max-w-4xl bg-[var(--color-surface)] border border-[var(--color-border)] h-[90vh] md:h-auto md:max-h-[85vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
              initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, y: 24, clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-[var(--color-border)] hover:bg-black hover:text-white transition-colors"
                aria-label="Close project details"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[240px] relative shrink-0 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div
                  className={`font-sans text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] mb-4 ${
                    selectedProject.status === "CONCEPT" ? "normal-case" : "uppercase"
                  }`}
                >
                  {formatProjectStatus(selectedProject.status)} — {selectedProject.year}
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
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-primary)] mb-4 border-b border-[var(--color-border)] pb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-sans text-xs px-3 py-1 border border-[var(--color-border)] rounded-full text-[var(--color-text-secondary)] bg-black/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="directional-link inline-flex items-center gap-2 font-sans text-sm pb-1 border-b border-[var(--color-text-primary)] text-[var(--color-text-primary)]"
                  >
                    View Live Project <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

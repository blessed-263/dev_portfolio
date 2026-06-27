/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { ScrollProgress } from "../components/ScrollProgress";
import { LandingIntro, INTRO_DURATION_MS, INTRO_HANDOFF_DELAY_S } from "../components/LandingIntro";
import { useLenis } from "../hooks/useLenis";

export default function PortfolioPage() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : true;
  });

  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useLenis(!reduceMotion && !showIntro);

  useEffect(() => {
    if (!showIntro) return;
    const timeout = window.setTimeout(() => setShowIntro(false), INTRO_DURATION_MS);
    return () => window.clearTimeout(timeout);
  }, [showIntro]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div className="min-h-screen bg-[#e5e5e5] p-2 md:p-4 lg:p-6">
      {!showIntro && <ScrollProgress />}
      <AnimatePresence mode="wait">{showIntro && <LandingIntro />}</AnimatePresence>
      <motion.div
        initial={showIntro ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.35,
          delay: showIntro ? INTRO_HANDOFF_DELAY_S : 0,
          ease,
        }}
        className="relative w-full bg-[var(--color-bg)] rounded-[1rem] md:rounded-[2rem] overflow-hidden bg-noise shadow-2xl border border-white/50 max-w-[1800px] mx-auto"
      >
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="w-full flex-col mt-32">
          <div className="bg-black text-[var(--color-bg)] py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 h-auto md:h-[300px]">
            <h2 className="font-serif text-5xl md:text-8xl tracking-tighter mix-blend-difference lowercase">
              bcodes.
            </h2>
            <div className="flex flex-col items-center md:items-end gap-2 text-sm font-sans uppercase tracking-[0.2em] text-[var(--color-bg)]/50">
              <a href="#top" className="directional-link hover:text-white transition-colors mb-4">
                Back to Top ↑
              </a>
              <p>© {new Date().getFullYear()} — BLESSED NYATHI</p>
              <p>ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
}

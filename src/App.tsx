/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function LandingIntro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
      className="fixed inset-0 z-[999] bg-black text-[#f4f4f4] overflow-hidden"
    >
      <motion.div
        initial={{ scaleX: 1 }}
        exit={{ scaleX: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        className="absolute inset-y-0 left-0 w-1/2 origin-left bg-black"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        exit={{ scaleX: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        className="absolute inset-y-0 right-0 w-1/2 origin-right bg-black"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/45 mb-8"
        >
          Blessed Nyathi
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.03] shadow-2xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-[1.5rem] border border-dashed border-white/15"
          />
          <span className="font-mono text-5xl md:text-6xl font-bold tracking-tighter">&lt;/&gt;</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center font-serif text-5xl md:text-8xl tracking-tighter leading-none"
        >
          dev portfolio
        </motion.h1>

        <div className="mt-10 h-[1px] w-64 overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.05, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="h-full w-1/2 bg-[#f4f4f4]"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : true;
  });

  useEffect(() => {
    if (!showIntro) return;
    const timeout = window.setTimeout(() => setShowIntro(false), 1900);
    return () => window.clearTimeout(timeout);
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-[#e5e5e5] p-2 md:p-4 lg:p-6 transition-all duration-500">
      <AnimatePresence>{showIntro && <LandingIntro />}</AnimatePresence>
      <div className="relative w-full bg-[var(--color-bg)] rounded-[1rem] md:rounded-[2rem] overflow-hidden bg-noise shadow-2xl border border-white/50 max-w-[1800px] mx-auto">
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
                <a href="#top" className="hover:text-white transition-colors mb-4">Back to Top ↑</a>
                <p>© {new Date().getFullYear()} — BLESSED NYATHI</p>
                <p>ALL RIGHTS RESERVED.</p>
             </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

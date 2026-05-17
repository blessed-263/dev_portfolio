/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#e5e5e5] p-2 md:p-4 lg:p-6 transition-all duration-500">
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

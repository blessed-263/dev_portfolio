import { useEffect, useState } from "react";
import { DirectionalLink } from "./DirectionalLink";
import { InfoQuote } from "./InfoQuote";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 pointer-events-auto text-[var(--color-text-primary)] transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]/60"
          : "bg-transparent"
      }`}
    >
      <div className="font-serif font-bold text-2xl tracking-tighter lowercase">
        <DirectionalLink href="#">blessed</DirectionalLink>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <div className="hidden md:flex gap-12 font-sans text-[10px] uppercase tracking-[0.1em] font-medium">
          <DirectionalLink href="#projects" className="hover:opacity-60 transition-opacity">
            Work
          </DirectionalLink>
          <DirectionalLink href="#skills" className="hover:opacity-60 transition-opacity">
            Expertise
          </DirectionalLink>
          <DirectionalLink href="#contact" className="hover:opacity-60 transition-opacity">
            Contact
          </DirectionalLink>
        </div>

        <InfoQuote />

        <DirectionalLink
          href="#projects"
          className="md:hidden font-sans text-[10px] uppercase tracking-[0.15em] border border-[var(--color-border)] px-3 py-2"
        >
          Work
        </DirectionalLink>
      </div>
    </nav>
  );
}

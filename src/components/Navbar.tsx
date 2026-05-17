export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 md:py-10 pointer-events-auto text-[var(--color-text-primary)]">
      <div className="font-serif font-bold text-2xl tracking-tighter lowercase">
        <a href="#">blessed</a>
      </div>
      
      <div className="hidden md:flex gap-12 font-sans text-[10px] uppercase tracking-[0.1em] font-medium">
        <a href="#projects" className="hover:opacity-60 transition-opacity">Work</a>
        <a href="#skills" className="hover:opacity-60 transition-opacity">Expertise</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
      </div>

      <button className="flex flex-col gap-1.5 hover:opacity-60 transition-opacity cursor-pointer p-2">
        <span className="w-8 h-[1.5px] bg-current block" />
        <span className="w-8 h-[1.5px] bg-current block" />
      </button>
    </nav>
  );
}

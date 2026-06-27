import { Info, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const QUOTE = {
  line: "In every gold rush, the greatest fortunes rarely belong to those chasing gold — they belong to the one who sells the tools.",
  context:
    "During the California Gold Rush, thousands rushed to dig. Many left empty-handed. The merchants who sold picks, shovels, denim, and supplies built the lasting wealth. The lesson is timeless: when everyone is chasing the prize, build what makes the chase possible.",
  attribution: "Gold Rush wisdom",
};

export function InfoQuote() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Read philosophy quote"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] hover:bg-black/[0.03] cursor-pointer"
      >
        <Info size={16} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="philosophy-quote-title"
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-8 md:p-10 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close quote"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors hover:bg-black hover:text-white cursor-pointer"
              >
                <X size={16} />
              </button>

              <p
                id="philosophy-quote-title"
                className="font-sans text-[10px] uppercase tracking-[0.28em] text-[var(--color-text-secondary)] mb-6"
              >
                {QUOTE.attribution}
              </p>

              <blockquote className="font-serif text-2xl md:text-3xl leading-snug tracking-tight text-[var(--color-text-primary)]">
                &ldquo;{QUOTE.line}&rdquo;
              </blockquote>

              <p className="mt-6 font-sans text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {QUOTE.context}
              </p>

              <div className="mt-8 h-px w-12 bg-[var(--color-text-primary)]/20" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

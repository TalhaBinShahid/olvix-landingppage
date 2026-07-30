import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic, ScrollProgress } from "./motion";

const links = [
  { href: "#products", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#team", label: "Team" },
  { href: "#cases", label: "Case studies" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="group font-display text-lg font-semibold tracking-tight">
            Olvix
            <span className="text-primary transition-all duration-300 group-hover:tracking-widest">
              AI
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <Magnetic strength={0.25}>
              <a href="#contact" className="btn-primary text-sm">
                <span className="relative z-10">Book a call</span>
              </a>
            </Magnetic>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border px-3 py-2 text-sm transition-colors hover:border-primary hover:text-primary md:hidden"
          >
            Menu
          </button>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-3 px-5 pb-5 pt-4">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="text-sm text-muted-foreground"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary justify-center text-center"
                >
                  <span className="relative z-10">Book a call</span>
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

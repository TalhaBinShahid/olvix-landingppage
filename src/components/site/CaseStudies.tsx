import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { caseStudies } from "@/data/site";
import { SectionHeading } from "./Reveal";
import { Reveal } from "./motion";

export function CaseStudies() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="cases" className="section-shell">
      <SectionHeading
        eyebrow="Case studies"
        title="Problems, approach, outcomes."
        subtitle="Real client work — some details anonymized while packaging is in progress."
      />

      <div className="flex flex-col gap-4">
        {caseStudies.map((c, i) => {
          const expanded = open === i;
          return (
            <Reveal key={c.title} delay={i * 0.07} direction="blur">
              <motion.article
                layout
                className={`glow-border overflow-hidden rounded-2xl bg-card ${
                  expanded ? "ring-1 ring-primary/40" : ""
                }`}
                transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
              >
                <motion.button
                  type="button"
                  onClick={() => setOpen(expanded ? null : i)}
                  aria-expanded={expanded}
                  className="group flex w-full items-center justify-between gap-4 p-6 text-left"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <span>
                    <span className="tag-mono">{c.client}</span>
                    <h3 className="mt-3 text-lg font-semibold transition-colors duration-300 group-hover:text-primary sm:text-xl">
                      {c.title}
                    </h3>
                  </span>
                  <motion.span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-xl text-primary"
                    animate={{ rotate: expanded ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    +
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 border-t border-border p-6 md:grid-cols-3">
                        {[
                          ["Problem", c.problem],
                          ["Approach", c.approach],
                          ["Outcome", c.outcome],
                        ].map(([label, body], k) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12 + k * 0.09, duration: 0.5 }}
                          >
                            <span className="tag-mono">{label}</span>
                            <p className="mt-3 text-sm text-muted-foreground">{body}</p>
                          </motion.div>
                        ))}
                        <motion.blockquote
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.42, duration: 0.5 }}
                          className="border-l-2 border-primary pl-4 text-sm italic text-foreground/90 md:col-span-3"
                        >
                          {c.quote}
                        </motion.blockquote>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

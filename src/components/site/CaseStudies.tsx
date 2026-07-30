import { useState } from "react";
import { caseStudies } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

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
            <Reveal key={c.title} delay={i * 0.06}>
              <article className="glow-border rounded-2xl bg-card transition-all duration-300">
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : i)}
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span>
                    <span className="tag-mono">{c.client}</span>
                    <h3 className="mt-3 text-lg font-semibold sm:text-xl">{c.title}</h3>
                  </span>
                  <span className="text-xl text-primary">{expanded ? "−" : "+"}</span>
                </button>

                {expanded ? (
                  <div className="grid gap-6 border-t border-border p-6 md:grid-cols-3">
                    {[
                      ["Problem", c.problem],
                      ["Approach", c.approach],
                      ["Outcome", c.outcome],
                    ].map(([label, body]) => (
                      <div key={label}>
                        <span className="tag-mono">{label}</span>
                        <p className="mt-3 text-sm text-muted-foreground">{body}</p>
                      </div>
                    ))}
                    <blockquote className="md:col-span-3 border-l-2 border-primary pl-4 text-sm italic text-foreground/90">
                      {c.quote}
                    </blockquote>
                  </div>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

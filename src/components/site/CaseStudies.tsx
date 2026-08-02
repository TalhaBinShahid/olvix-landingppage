import { Link } from "@tanstack/react-router";
import { caseStudies } from "@/data/site";
import { SectionHeading } from "./Reveal";
import { Reveal, SpotlightCard } from "./motion";

export function CaseStudies() {
  return (
    <section id="cases" className="section-shell">
      <SectionHeading
        eyebrow="Featured outcomes"
        title="Results that speak for themselves."
        subtitle="Selected highlights from recent client work — full case studies linked below."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.07} direction="blur">
            <SpotlightCard className="glow-border flex h-full flex-col rounded-2xl bg-card p-6">
              <span className="tag-mono">{c.eyebrow}</span>
              <h3 className="mt-3 text-lg font-semibold sm:text-xl">{c.outcomeHeadline}</h3>
              <p className="mt-4 font-display text-2xl font-semibold text-primary">
                {c.metrics[0].value}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  {c.metrics[0].detail}
                </span>
              </p>
              <Link
                to="/work/$slug"
                params={{ slug: c.slug }}
                className="link-arrow mt-auto pt-6"
              >
                Read case study
                <span className="arrow">→</span>
              </Link>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

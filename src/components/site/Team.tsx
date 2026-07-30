import { team } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Team() {
  return (
    <section id="team" className="border-y border-border bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Team"
          title="Engineers who ship."
          subtitle="Small senior team — the people you meet are the people who build."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <article className="glow-border h-full rounded-2xl bg-card p-6 transition-all duration-300">
                <div
                  className="dot-bg mb-5 aspect-square w-full rounded-xl border border-border bg-surface"
                  aria-hidden
                />
                <h3 className="text-base font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span key={t} className="tag-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm">
                  <a href="#" className="text-primary hover:text-accent">
                    LinkedIn
                  </a>
                  <a href="#" className="text-primary hover:text-accent">
                    X
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

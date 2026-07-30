import { services } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Productized packages, fixed price."
          subtitle="Scoped engagements with a clear timeline and a working product at the end."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article
                className={`glow-border flex h-full flex-col rounded-2xl bg-card p-7 transition-all duration-300 ${
                  s.featured ? "ring-1 ring-primary/50" : ""
                }`}
              >
                {s.featured ? (
                  <span className="tag-mono mb-3 self-start border-primary/60 text-primary">
                    most popular
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.pitch}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-lg font-semibold">{s.price}</span>
                  <span className="text-sm text-muted-foreground">· {s.timeline}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-7 rounded-full border border-border px-5 py-2.5 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  Start a conversation
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

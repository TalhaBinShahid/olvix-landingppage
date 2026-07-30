import { services } from "@/data/site";
import { SectionHeading } from "./Reveal";
import { Stagger, StaggerItem, SpotlightCard, Magnetic } from "./motion";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-y border-border bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Productized packages, fixed price."
          subtitle="Scoped engagements with a clear timeline and a working product at the end."
        />

        <Stagger className="grid gap-6 md:grid-cols-3" gap={0.12}>
          {services.map((s) => (
            <StaggerItem key={s.name} className="h-full">
              <SpotlightCard
                as="article"
                className={`glow-border flex h-full flex-col rounded-2xl bg-card p-7 ${
                  s.featured ? "ring-1 ring-primary/50" : ""
                }`}
              >
                <div className="flex h-full flex-col">
                  {s.featured ? (
                    <span className="tag-mono shimmer-tag mb-3 self-start border-primary/60 text-primary">
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
                      <li
                        key={item}
                        className="flex gap-2 transition-colors duration-300 hover:text-foreground"
                      >
                        <span className="text-accent">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Magnetic strength={0.18} className="mt-7 w-full">
                    <a href="#contact" className="btn-ghost w-full justify-center">
                      Start a conversation
                    </a>
                  </Magnetic>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

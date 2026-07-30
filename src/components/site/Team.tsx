import { motion } from "framer-motion";
import { team } from "@/data/site";
import { SectionHeading } from "./Reveal";
import { SpotlightCard, Stagger, StaggerItem } from "./motion";

export function Team() {
  return (
    <section id="team" className="border-y border-border bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Team"
          title="Engineers who ship."
          subtitle="Small senior team — the people you meet are the people who build."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.09}>
          {team.map((m) => (
            <StaggerItem key={m.name} className="h-full">
              <SpotlightCard
                as="article"
                className="glow-border h-full overflow-hidden rounded-2xl bg-card p-6"
              >
                <div>
                  <motion.div
                    className="dot-bg relative mb-5 aspect-square w-full overflow-hidden rounded-xl border border-border bg-surface"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    aria-hidden
                  >
                    <span className="sheen" />
                  </motion.div>
                  <h3 className="text-base font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="tag-mono transition-colors duration-300 hover:border-primary hover:text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4 text-sm">
                    <a href="#" className="link-arrow">
                      LinkedIn
                    </a>
                    <a href="#" className="link-arrow">
                      X
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

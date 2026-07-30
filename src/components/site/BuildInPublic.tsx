import { posts } from "@/data/site";
import { SectionHeading } from "./Reveal";
import { SpotlightCard, Stagger, StaggerItem } from "./motion";

export function BuildInPublic() {
  return (
    <section id="blog" className="border-y border-border bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Build in public"
          title="What we're shipping this week."
          subtitle="Hackathon logs, engineering notes, and posts from the team."
        />

        <Stagger className="grid gap-6 md:grid-cols-3" gap={0.1}>
          {posts.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <SpotlightCard className="h-full">
                <a
                  href="#"
                  className="glow-border group flex h-full flex-col rounded-2xl bg-card p-6"
                >
                  <span className="tag-mono self-start">{p.tag}</span>
                  <h3 className="mt-4 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    {p.date}
                    <span className="translate-x-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                </a>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

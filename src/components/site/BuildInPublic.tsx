import { posts } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function BuildInPublic() {
  return (
    <section id="blog" className="border-y border-border bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Build in public"
          title="What we're shipping this week."
          subtitle="Hackathon logs, engineering notes, and posts from the team."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <a
                href="#"
                className="glow-border flex h-full flex-col rounded-2xl bg-card p-6 transition-all duration-300"
              >
                <span className="tag-mono self-start">{p.tag}</span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-6 text-xs text-muted-foreground">{p.date}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { products } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Products() {
  return (
    <section id="products" className="section-shell">
      <SectionHeading
        eyebrow="Products"
        title="Five builds, shipped end to end."
        subtitle="Placeholder demos below — real screenshots and case studies land as they're ready."
      />

      <div className="flex flex-col gap-6">
        {products.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article
              className={`glow-border grid gap-6 rounded-2xl bg-card p-6 transition-all duration-300 md:grid-cols-2 md:items-center md:p-8 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="dot-bg flex aspect-video items-center justify-center rounded-xl border border-border bg-surface"
                aria-hidden
              >
                <span className="tag-mono">demo placeholder</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#cases"
                  className="mt-6 inline-block text-sm font-medium text-primary hover:text-accent"
                >
                  View case study →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import type { CaseStudy } from "@/data/site";
import { BOOKING_PATH } from "@/lib/calendly";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal, SpotlightCard } from "./motion";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-24">
        <article className="section-shell">
          <Reveal direction="blur">
            <Link
              to="/"
              hash="products"
              className="link-arrow mb-10 inline-flex text-sm text-muted-foreground"
            >
              <span className="arrow rotate-180">→</span>
              Back to work
            </Link>
          </Reveal>

          <Reveal direction="blur">
            <div className="flex flex-wrap gap-2">
              <span className="tag-mono">{study.eyebrow}</span>
              {study.stack.slice(0, 4).map((t) => (
                <span key={t} className="tag-mono">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {study.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {study.summary}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {(
              [
                ["Problem", study.problem],
                ["Approach", study.approach],
                ["Solution", study.solution],
              ] as const
            ).map(([label, body], i) => (
              <Reveal key={label} delay={0.12 + i * 0.06} direction="blur">
                <SpotlightCard className="glow-border h-full rounded-2xl bg-card p-6">
                  <span className="tag-mono">{label}</span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-16">
            <h2 className="text-xl font-semibold sm:text-2xl">Results</h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {study.metrics.map((m, i) => (
              <Reveal key={m.label} delay={0.35 + i * 0.05} direction="blur">
                <SpotlightCard className="glow-border rounded-2xl bg-card p-6 text-center">
                  <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-2 text-sm font-medium">{m.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.detail}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5} className="mt-16">
            <SpotlightCard className="glow-border rounded-2xl bg-card p-8 text-center md:p-12">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Ready to build something similar?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                Tell us about your project — we ship production AI products on fixed timelines.
              </p>
              <Link to={BOOKING_PATH} className="btn-primary mt-6 inline-flex">
                <span className="relative z-10">Book a call</span>
              </Link>
            </SpotlightCard>
          </Reveal>
        </article>
      </main>
      <Footer />
    </div>
  );
}

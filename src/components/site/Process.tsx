import { Compass, PenTool, Hammer, Rocket } from "lucide-react";
import { processSteps } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

const icons = [Compass, PenTool, Hammer, Rocket];

export function Process() {
  return (
    <section id="process" className="section-shell">
      <SectionHeading
        eyebrow="Process"
        title="How we work."
        subtitle="Four stages, weekly shippable output, no black boxes."
      />

      <div className="relative grid gap-6 md:grid-cols-4">
        <div
          className="absolute left-0 right-0 top-9 hidden h-px bg-border md:block"
          aria-hidden
        />
        {processSteps.map((s, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={s.step} delay={i * 0.08} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <span className="tag-mono mt-4 inline-block">{s.step}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

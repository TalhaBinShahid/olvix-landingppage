import { useRef } from "react";
import { Compass, PenTool, Hammer, Rocket } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeading } from "./Reveal";

const icons = [Compass, PenTool, Hammer, Rocket];

export function Process() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 26, restDelta: 0.001 });
  const x = useTransform(smooth, [0, 1], ["2%", "-64%"]);
  const lineScale = useTransform(smooth, [0, 1], [0, 1]);

  if (reduce) {
    return (
      <section id="process" className="section-shell">
        <SectionHeading eyebrow="Process" title="How we work." />
        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.step}>
                <Icon className="h-5 w-5 text-primary" aria-hidden />
                <span className="tag-mono mt-4 inline-block">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section id="process" ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-5">
          <SectionHeading
            eyebrow="Process"
            title="How we work."
            subtitle="Four stages, weekly shippable output, no black boxes."
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="absolute left-5 right-5 top-[3.25rem] h-px bg-border" aria-hidden />
          <motion.div
            className="absolute left-5 right-5 top-[3.25rem] h-px origin-left bg-gradient-to-r from-primary to-accent"
            style={{ scaleX: lineScale }}
            aria-hidden
          />
        </div>

        <motion.div className="mt-8 flex gap-8 px-5 will-change-transform" style={{ x }}>
          {processSteps.map((s, i) => {
            const Icon = icons[i];
            const start = i / processSteps.length;
            const active = useTransform(
              smooth,
              [start - 0.18, start, start + 0.28],
              [0.45, 1, 0.45],
            );
            return (
              <motion.article
                key={s.step}
                style={{ opacity: active }}
                className="glow-border relative w-[78vw] shrink-0 rounded-2xl bg-card p-8 sm:w-[52vw] lg:w-[34vw]"
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface text-primary"
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </motion.div>
                <span className="tag-mono mt-5 inline-block">{s.step}</span>
                <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                <span className="pointer-events-none absolute bottom-4 right-6 font-display text-6xl font-semibold text-foreground/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

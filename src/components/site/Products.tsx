import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { products } from "@/data/site";
import { SectionHeading } from "./Reveal";
import { SpotlightCard } from "./motion";

function StackCard({ p, i, total }: { p: (typeof products)[number]; i: number; total: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? 2.5 : -2.5, 0]);

  const media = (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border bg-surface dot-bg">
      <motion.span
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, color-mix(in oklch, var(--color-primary) 22%, transparent), transparent 70%)",
        }}
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="tag-mono relative">demo placeholder</span>
      <span className="scanline" aria-hidden />
    </div>
  );

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `calc(6rem + ${i * 1.25}rem)`, zIndex: i + 1 }}
    >
      <motion.div style={reduce ? undefined : { scale, opacity, rotate }}>
        <SpotlightCard
          as="article"
          className="glow-border overflow-hidden rounded-2xl bg-card p-6 md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className={`media ${i % 2 === 1 ? "md:order-2" : ""}`}>{media}</div>
            <div>
              <span className="tag-mono">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold sm:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="tag-mono transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a href="#cases" className="link-arrow mt-6">
                View case study
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="section-shell">
      <SectionHeading
        eyebrow="Products"
        title="Five builds, shipped end to end."
        subtitle="Placeholder demos below — real screenshots and case studies land as they're ready."
      />

      <div className="flex flex-col gap-10 pb-24">
        {products.map((p, i) => (
          <StackCard key={p.title} p={p} i={i} total={products.length} />
        ))}
      </div>
    </section>
  );
}

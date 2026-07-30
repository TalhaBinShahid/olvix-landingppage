import { Suspense, lazy } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ClientOnly } from "@tanstack/react-router";

const HeroScene = lazy(() => import("./HeroScene"));

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden grid-bg"
    >
      <div className="orb -left-24 top-10 h-[26rem] w-[26rem] bg-primary" aria-hidden />
      <div className="orb -right-20 bottom-0 h-[22rem] w-[22rem] bg-accent opacity-30" aria-hidden />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 left-0 opacity-70 lg:left-[42%] lg:opacity-100"
        aria-hidden
      >
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </ClientOnly>
      </div>


      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span className="tag-mono" {...rise(0)}>
            AI product studio
          </motion.span>
          <motion.h1
            className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
            {...rise(0.08)}
          >
            We build AI products &amp; platforms —{" "}
            <span className="text-gradient">not just promises.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
            {...rise(0.16)}
          >
            A team of engineers who&apos;ve shipped voice agents, ML automation, and
            AI-native tools from scratch. See the proof below.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" {...rise(0.24)}>
            <a
              href="#products"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

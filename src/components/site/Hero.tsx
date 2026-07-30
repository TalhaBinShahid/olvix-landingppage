import { Suspense, lazy, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ClientOnly } from "@tanstack/react-router";
import { Magnetic, WordsReveal } from "./motion";

const HeroScene = lazy(() => import("./HeroScene"));

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useSpring(useTransform(scrollYProgress, [0, 1], [0, -140]), {
    stiffness: 90,
    damping: 24,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: "blur(10px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden grid-bg"
    >
      <motion.div
        className="orb -left-24 top-10 h-[26rem] w-[26rem] bg-primary"
        aria-hidden
        animate={reduce ? undefined : { scale: [1, 1.18, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb -right-20 bottom-0 h-[22rem] w-[22rem] bg-accent opacity-30"
        aria-hidden
        animate={reduce ? undefined : { scale: [1.1, 0.9, 1.1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={reduce ? undefined : { y: sceneY, opacity }}
        className="pointer-events-none absolute inset-y-0 left-0 right-0 opacity-40 lg:left-[42%] lg:opacity-100 [&>canvas]:!relative"
        aria-hidden
      >
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </ClientOnly>
      </motion.div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-3/5 bg-gradient-to-r from-background via-background/85 to-transparent lg:block"
        aria-hidden
      />

      <motion.div
        style={reduce ? undefined : { y: yText, opacity, scale, filter: blur }}
        className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <motion.span className="tag-mono shimmer-tag" {...rise(0)}>
            AI product studio
          </motion.span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            <WordsReveal text="We build AI products & platforms —" delay={0.15} />{" "}
            <WordsReveal
              text="not just promises."
              delay={0.55}
              highlight={["not", "just", "promises."]}
            />
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
            {...rise(0.85)}
          >
            A team of engineers who&apos;ve shipped voice agents, ML automation, and
            AI-native tools from scratch. See the proof below.
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap items-center gap-3" {...rise(1)}>
            <Magnetic>
              <a href="#products" className="btn-primary">
                <span className="relative z-10">See Our Work</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href="#contact" className="btn-ghost">
                Book a Call
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {!reduce ? (
        <motion.div
          className="absolute inset-x-0 bottom-8 flex justify-center"
          style={{ opacity }}
          aria-hidden
        >
          <motion.span
            className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.span>
        </motion.div>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

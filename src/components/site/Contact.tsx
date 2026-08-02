import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { LinesReveal, Magnetic, Reveal } from "./motion";
import { BOOKING_PATH, CALENDLY_FALLBACK_EMAIL } from "@/lib/calendly";

export function Contact() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.25, 0.8]);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden grid-bg">
      <motion.div
        className="orb left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 bg-primary"
        style={reduce ? undefined : { y: orbY, scale: orbScale }}
        aria-hidden
      />
      <div className="section-shell relative text-center">
        <Reveal direction="blur">
          <span className="tag-mono shimmer-tag">Contact</span>
        </Reveal>
        <LinesReveal className="mx-auto mt-4 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Tell us what you&apos;re building.
          </h2>
        </LinesReveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a 30-minute call and we&apos;ll tell you honestly whether AI is the
            right answer — and what it would take to ship.
          </p>
        </Reveal>

        <Reveal delay={0.2} direction="scale">
          <Magnetic strength={0.25}>
            <Link to={BOOKING_PATH} className="btn-primary mt-10 inline-flex">
              <span className="relative z-10">Book a call</span>
            </Link>
          </Magnetic>
          <p className="mt-6 text-sm text-muted-foreground">
            Scheduler not loading?{" "}
            <Magnetic strength={0.2}>
              <a
                href={`mailto:${CALENDLY_FALLBACK_EMAIL}`}
                className="link-arrow"
                aria-label={`Email ${CALENDLY_FALLBACK_EMAIL}`}
              >
                {CALENDLY_FALLBACK_EMAIL}
              </a>
            </Magnetic>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

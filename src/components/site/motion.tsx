import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------------------------------------------------------------- progress */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
    />
  );
}

/* ------------------------------------------------------------ text reveals */

export function WordsReveal({
  text,
  className,
  delay = 0,
  highlight = [],
}: {
  text: string;
  className?: string;
  delay?: number;
  highlight?: string[];
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden py-[0.1em] align-bottom">
          <motion.span
            className={`inline-block ${highlight.includes(w) ? "text-gradient" : ""}`}
            variants={{
              hidden: { y: "110%", opacity: 0, rotate: 4 },
              show: {
                y: "0%",
                opacity: 1,
                rotate: 0,
                transition: { duration: 0.85, ease: EASE },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Line-by-line mask reveal triggered on scroll. */
export function LinesReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  // Observe the mask (not the translated child, which its own clip hides).
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ y: "105%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}


/* --------------------------------------------------------------- reveal fx */

type RevealDir = "up" | "down" | "left" | "right" | "scale" | "blur";

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  distance = 40,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: RevealDir;
  distance?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const initial: Record<string, number | string> = { opacity: 0 };
  if (direction === "up") initial.y = distance;
  if (direction === "down") initial.y = -distance;
  if (direction === "left") initial.x = distance;
  if (direction === "right") initial.x = -distance;
  if (direction === "scale") initial.scale = 0.9;
  if (direction === "blur") initial.filter = "blur(14px)";

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Wrap a list; children fade+rise in sequence. */
export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- parallax */

export function useParallax(range = 80) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return { ref, y: useSpring(y, { stiffness: 90, damping: 24 }) as MotionValue<number> };
}

export function Parallax({
  children,
  range = 60,
  className,
}: {
  children: ReactNode;
  range?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const { ref, y } = useParallax(range);
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* --------------------------------------------------------------- magnetic */

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  if (reduce) return <span className={className}>{children}</span>;

  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------- spotlight / tilt cards */

export function SpotlightCard({
  children,
  className,
  tilt = true,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  as?: "div" | "article";
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, color-mix(in oklch, var(--color-primary) 16%, transparent), transparent 65%)`;

  const MotionAs = As === "article" ? motion.article : motion.div;

  if (reduce) return <As className={className}>{children}</As>;

  return (
    <MotionAs
      className={`group/spot relative ${className ?? ""}`}
      style={{ rotateX: tilt ? rx : 0, rotateY: tilt ? ry : 0, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        mx.set(px * 100);
        my.set(py * 100);
        if (tilt) {
          rx.set((0.5 - py) * 9);
          ry.set((px - 0.5) * 9);
        }
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
    >
      <motion.span
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
      />
      <div className="relative">{children}</div>
    </MotionAs>
  );
}

/* ---------------------------------------------------------------- marquee */

export function Marquee({
  items,
  speed = 38,
  reverse = false,
}: {
  items: string[];
  speed?: number;
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask relative flex overflow-hidden">
      <div
        className="flex shrink-0 items-center gap-10 whitespace-nowrap py-1 will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm text-muted-foreground">
            {t}
            <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-10 whitespace-nowrap py-1 will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm text-muted-foreground">
            {t}
            <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- counters */

export function useSectionScroll(offset: ["start end", "end start"] | ["start start", "end end"]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return { ref, scrollYProgress };
}

export { motion, useScroll, useTransform, useSpring, useReducedMotion, EASE };

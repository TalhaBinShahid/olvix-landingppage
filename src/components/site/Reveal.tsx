import { LinesReveal, Reveal } from "./motion";

export { Reveal };

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Reveal direction="blur">
        <span className="tag-mono shimmer-tag">{eyebrow}</span>
      </Reveal>
      <LinesReveal className="mt-4" delay={0.05}>
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h2>
      </LinesReveal>
      {subtitle ? (
        <Reveal delay={0.15} className="mt-4">
          <p className="text-base text-muted-foreground">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

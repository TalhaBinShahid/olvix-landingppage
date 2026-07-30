import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden grid-bg">
      <div className="orb left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 bg-primary" aria-hidden />
      <div className="section-shell relative text-center">
        <Reveal>
          <span className="tag-mono">Contact</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Tell us what you&apos;re building.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Book a 30-minute call and we&apos;ll tell you honestly whether AI is the
            right answer — and what it would take to ship.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Book a call with OlvixAI"
              src="https://calendly.com/olvixai/intro"
              className="h-[640px] w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Scheduler not loading?{" "}
            <a href="mailto:hello@olvix.ai" className="text-primary hover:text-accent">
              hello@olvix.ai
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import {
  SiCloudflare,
  SiDocker,
  SiKubernetes,
  SiLivekit,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { LogoLoop } from "./LogoLoop";

const techLogos = [
  { node: <SiReact aria-hidden />, title: "React", ariaLabel: "React" },
  { node: <SiTypescript aria-hidden />, title: "TypeScript", ariaLabel: "TypeScript" },
  { node: <TbBrandOpenai aria-hidden />, title: "OpenAI", ariaLabel: "OpenAI" },
  { node: <SiCloudflare aria-hidden />, title: "Cloudflare", ariaLabel: "Cloudflare" },
  { node: <SiPython aria-hidden />, title: "Python", ariaLabel: "Python" },
  { node: <SiDocker aria-hidden />, title: "Docker", ariaLabel: "Docker" },
  { node: <SiKubernetes aria-hidden />, title: "Kubernetes", ariaLabel: "Kubernetes" },
  { node: <SiPostgresql aria-hidden />, title: "PostgreSQL", ariaLabel: "PostgreSQL" },
  { node: <SiLivekit aria-hidden />, title: "LiveKit", ariaLabel: "LiveKit" },
  { node: <SiNextdotjs aria-hidden />, title: "Next.js", ariaLabel: "Next.js" },
];

export function ProofBar() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-8">
      <div className="mx-auto max-w-6xl px-5">
        <p className="tag-mono mb-6 text-center md:text-left">
          Built with production-grade tooling
        </p>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={40}
        fadeOut
        scaleOnHover
        logoHeight={32}
        gap={48}
        fadeOutColor="oklch(0.218 0 0)"
        ariaLabel="Technologies we build with"
        className="text-muted-foreground"
      />
    </section>
  );
}

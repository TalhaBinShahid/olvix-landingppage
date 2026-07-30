import { Reveal } from "./motion";

const navLinks = [
  { href: "#products", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#blog", label: "Build in public" },
  { href: "mailto:hello@olvix.ai", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <Reveal direction="blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#top" className="group font-display text-lg font-semibold">
              Olvix
              <span className="text-primary transition-all duration-300 group-hover:tracking-widest">
                AI
              </span>
            </a>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              An engineering studio building AI products, platforms, and agents.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </Reveal>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} OlvixAI. All rights reserved.
      </div>
    </footer>
  );
}

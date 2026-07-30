export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="font-display text-lg font-semibold">
            Olvix<span className="text-primary">AI</span>
          </a>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            An engineering studio building AI products, platforms, and agents.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#products" className="hover:text-foreground">Work</a>
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#team" className="hover:text-foreground">Team</a>
          <a href="#blog" className="hover:text-foreground">Build in public</a>
          <a href="mailto:hello@olvix.ai" className="hover:text-foreground">Email</a>
        </nav>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} OlvixAI. All rights reserved.
      </div>
    </footer>
  );
}

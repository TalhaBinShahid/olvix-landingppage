import { useEffect, useState } from "react";
import { testimonialSnippets } from "@/data/site";

export function ProofBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % testimonialSnippets.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="tag-mono">Trusted by teams building the next generation of AI products</p>
        <p
          key={i}
          className="animate-fade-in text-sm text-muted-foreground md:max-w-md"
        >
          {testimonialSnippets[i]}
        </p>
      </div>
    </section>
  );
}

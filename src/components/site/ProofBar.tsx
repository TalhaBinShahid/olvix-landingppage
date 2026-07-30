import { testimonialSnippets } from "@/data/site";
import { Marquee } from "./motion";

export function ProofBar() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-6">
      <div className="mx-auto max-w-6xl px-5">
        <p className="tag-mono mb-4">
          Trusted by teams building the next generation of AI products
        </p>
      </div>
      <Marquee items={[...testimonialSnippets]} speed={44} />
      <Marquee
        items={["Voice agents", "RAG systems", "ML pipelines", "LLM tooling", "Agent infra", "Edge AI"]}
        speed={32}
        reverse
      />
    </section>
  );
}

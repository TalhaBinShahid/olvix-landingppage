import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ProofBar } from "@/components/site/ProofBar";
import { Products } from "@/components/site/Products";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Team } from "@/components/site/Team";
import { CaseStudies } from "@/components/site/CaseStudies";
import { BuildInPublic } from "@/components/site/BuildInPublic";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "OlvixAI — AI products, platforms & voice agents, shipped";
const description =
  "OlvixAI is an engineering studio shipping AI products: voice agents, ML automation, and LLM/RAG apps. Fixed-price sprints, production-ready builds.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <Products />
        <Services />
        <Process />
        <Team />
        <CaseStudies />
        <BuildInPublic />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

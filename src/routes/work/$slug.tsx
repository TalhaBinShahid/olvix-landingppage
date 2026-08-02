import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/site/CaseStudyPage";
import { getCaseStudyBySlug } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = `${loaderData.title} — Olvix`;
    const description = loaderData.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: WorkCaseStudy,
});

function WorkCaseStudy() {
  const study = Route.useLoaderData();
  return <CaseStudyPage study={study} />;
}

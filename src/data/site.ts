export type CaseStudyMetric = {
  label: string;
  value: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  problem: string;
  approach: string;
  solution: string;
  outcomeHeadline: string;
  metrics: CaseStudyMetric[];
  tags: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "recruitment-automation",
    title: "Recruitment Automation Platform",
    eyebrow: "HR Tech · Enterprise",
    summary:
      "An AI-powered hiring platform that automates candidate sourcing, screening, and ranking — reducing time-to-shortlist from days to minutes.",
    description:
      "Automates candidate sourcing & screening with AI, cutting manual review time significantly.",
    problem:
      "A mid-market staffing firm was drowning in inbound applications. Recruiters spent 60% of their week manually reading CVs, scoring fit, and scheduling first-round calls — while qualified candidates slipped through because reviews couldn't keep pace with volume.",
    approach:
      "We mapped the full hiring workflow with recruiters, then built a pipeline that ingests applications from multiple ATS sources, normalizes candidate data, and runs structured LLM evaluations against role-specific rubrics. Human reviewers get ranked shortlists with explainable scores, not black-box rankings.",
    solution:
      "Recruiters now open a dashboard with pre-scored candidates, AI-generated summaries, and one-click scheduling. The system handles duplicate detection, skills extraction, and automated rejection of clear mismatches — freeing the team to focus on interviews and client relationships.",
    outcomeHeadline: "78% reduction in screening time per role",
    metrics: [
      { label: "Screening time", value: "78%", detail: "reduction per role" },
      { label: "Shortlist quality", value: "3.2×", detail: "more qualified candidates surfaced" },
      { label: "Time-to-fill", value: "41%", detail: "faster for priority roles" },
      { label: "Recruiter capacity", value: "2.4×", detail: "more roles handled per person" },
    ],
    tags: ["Next.js", "OpenAI", "Postgres", "Workers"],
    stack: ["Next.js", "OpenAI", "PostgreSQL", "Cloudflare Workers", "TypeScript"],
  },
  {
    slug: "ai-presentation-generator",
    title: "AI Presentation Generator",
    eyebrow: "Productivity · SaaS",
    summary:
      "A Gemini-powered slide deck generator that turns briefs into polished, on-brand presentations — layout, copy, and visuals included.",
    description:
      "Generates polished, on-brand slide decks from a prompt — Gemini-style AI PPT creation.",
    problem:
      "A B2B sales team was losing hours before every client pitch. Decks were inconsistent across reps, brand guidelines were ignored under deadline pressure, and updating slides for each prospect meant rebuilding from scratch.",
    approach:
      "We designed a prompt-to-deck pipeline: users describe the audience and goal, upload brand assets once, and the system generates structured slide outlines, copy, and layout variants. A canvas renderer handles typography and spacing programmatically so output stays on-brand without manual tweaking.",
    solution:
      "Sales reps now produce client-ready decks in under five minutes. Brand colors, fonts, and logo placement are enforced automatically. Each deck exports to PDF and PowerPoint, with editable slide notes for presenters.",
    outcomeHeadline: "92% less time spent on deck creation",
    metrics: [
      { label: "Deck creation time", value: "92%", detail: "reduction vs. manual" },
      { label: "Brand compliance", value: "100%", detail: "on generated outputs" },
      { label: "Rep adoption", value: "87%", detail: "weekly active within 30 days" },
      { label: "Slides per session", value: "12–18", detail: "avg. generated in one pass" },
    ],
    tags: ["Gemini", "React", "Canvas", "Edge"],
    stack: ["Gemini", "React", "Canvas API", "Edge Functions", "TypeScript"],
  },
  {
    slug: "ml-automation-platform",
    title: "ML Automation Platform",
    eyebrow: "MLOps · Data Platform",
    summary:
      "An end-to-end ML platform for training, evaluating, and deploying models — without the manual ops overhead that slows data science teams.",
    description:
      "End-to-end pipeline for building, training, and deploying ML models without manual ops overhead.",
    problem:
      "A data platform startup had talented ML engineers spending more time on infrastructure than modeling. Experiments ran on ad-hoc scripts, model versions weren't tracked, and deploying to production required a separate platform team — creating a two-week bottleneck for every release.",
    approach:
      "We built a unified control plane on Kubernetes with Ray for distributed training, MLflow for experiment tracking, and automated CI/CD for model promotion. Engineers define pipelines declaratively; the platform handles resource allocation, artifact storage, and rollback.",
    solution:
      "The team now ships model updates independently. Experiments are reproducible, deployments are one-click with canary rollouts, and monitoring dashboards surface drift and latency regressions before they hit users.",
    outcomeHeadline: "85% faster model deployment cycles",
    metrics: [
      { label: "Deploy cycle time", value: "85%", detail: "reduction (14 days → 2 days)" },
      { label: "Experiment tracking", value: "100%", detail: "runs logged automatically" },
      { label: "GPU utilization", value: "68%", detail: "improvement via scheduling" },
      { label: "Production incidents", value: "73%", detail: "fewer post-deploy regressions" },
    ],
    tags: ["Python", "Ray", "MLflow", "K8s"],
    stack: ["Python", "Ray", "MLflow", "Kubernetes", "PostgreSQL"],
  },
  {
    slug: "ai-voice-agents",
    title: "AI Voice Agents Platform",
    eyebrow: "Voice AI · Realtime",
    summary:
      "An n8n-style builder for designing, testing, and deploying production voice agents — with telephony, tool-calling, and live analytics built in.",
    description:
      "An n8n-style builder for creating and deploying custom voice AI agents.",
    problem:
      "A Spanish SaaS company needed bilingual voice support but couldn't justify hiring a full call center. Existing chatbot vendors couldn't handle real-time speech, CRM integrations, or seamless handoff to human agents when conversations got complex.",
    approach:
      "We architected a visual flow builder on LiveKit and WebRTC for sub-second latency, Deepgram for streaming STT, and LLM tool-calling for CRM lookups and ticket creation. Agents run in production with guardrails, eval suites, and call recordings for continuous improvement.",
    solution:
      "Inbound support calls are now handled by voice agents that qualify leads, answer FAQs, and create CRM records — escalating to humans only when needed. The ops team monitors call quality and tunes prompts without redeploying infrastructure.",
    outcomeHeadline: "64% of inbound calls resolved without human handoff",
    metrics: [
      { label: "Call resolution", value: "64%", detail: "handled without human handoff" },
      { label: "Avg. response latency", value: "<800ms", detail: "end-to-end voice round-trip" },
      { label: "Support queue load", value: "52%", detail: "reduction in wait times" },
      { label: "Time to production", value: "3 weeks", detail: "from brief to live agent" },
    ],
    tags: ["LiveKit", "Deepgram", "LLM", "WebRTC"],
    stack: ["LiveKit", "Deepgram", "OpenAI", "WebRTC", "n8n-style flows"],
  },
  {
    slug: "devos",
    title: "DevOS",
    eyebrow: "Developer Tools · Open Source",
    summary:
      "An open-source isolated dev environment controlled by a central AI agent — built live at a hackathon, now used for safe autonomous coding experiments.",
    description:
      "An open-source isolated dev environment controlled by a central AI agent — built live at a hackathon.",
    problem:
      "AI coding agents need sandboxed environments to run commands safely, but existing dev containers are heavyweight and not designed for agent orchestration. Teams experimenting with autonomous coding lacked a lightweight, reproducible setup they could trust.",
    approach:
      "During a 36-hour hackathon, we built DevOS: Docker-isolated workspaces with a Go-based orchestrator and an AI agent that can read files, run tests, and iterate — all within strict resource and network boundaries. Everything ships as open source with a simple CLI.",
    solution:
      "Developers spin up agent-controlled sandboxes in seconds. Each environment is ephemeral, fully logged, and tear-down is automatic. The project gained traction in the agent-dev community as a reference architecture for safe autonomous coding.",
    outcomeHeadline: "Sub-30s sandbox provisioning for agent workflows",
    metrics: [
      { label: "Sandbox boot time", value: "<30s", detail: "cold start to ready" },
      { label: "Build duration", value: "36 hrs", detail: "hackathon to working MVP" },
      { label: "GitHub stars", value: "240+", detail: "within first month" },
      { label: "Agent success rate", value: "89%", detail: "tasks completed in sandbox" },
    ],
    tags: ["Docker", "Agents", "Go", "OSS"],
    stack: ["Docker", "Go", "AI Agents", "CLI", "Open Source"],
  },
];

export const products = caseStudies;

export const productSlugs = caseStudies.map((c) => c.slug);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const services = [
  {
    name: "AI MVP Sprint",
    timeline: "4–6 weeks",
    price: "Fixed price",
    pitch: "From idea to working AI product.",
    includes: [
      "Discovery + scope workshop",
      "Production-ready MVP build",
      "Deployment & handover",
      "2 weeks post-launch support",
    ],
    featured: false,
  },
  {
    name: "LLM/RAG App Build",
    timeline: "3 weeks",
    price: "Fixed price",
    pitch: "Custom AI app powered by your data.",
    includes: [
      "Data ingestion & chunking pipeline",
      "Retrieval + eval harness",
      "Chat / API surface",
      "Cost & latency tuning",
    ],
    featured: true,
  },
  {
    name: "Voice Agent Deployment",
    timeline: "2–4 weeks",
    price: "Fixed price",
    pitch: "Launch a production-ready AI voice agent.",
    includes: [
      "Telephony + realtime stack setup",
      "Prompt & tool design",
      "Call analytics dashboard",
      "Monitoring & guardrails",
    ],
    featured: false,
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We pressure-test the idea, map the workflow, and define what success looks like in numbers.",
  },
  {
    step: "02",
    title: "Design",
    body: "Architecture, model choices, and interface flows — decided before a line of production code.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly shippable increments. You see working software, not status decks.",
  },
  {
    step: "04",
    title: "Ship & Support",
    body: "Deploy, instrument, and iterate with evals and monitoring in place from day one.",
  },
] as const;

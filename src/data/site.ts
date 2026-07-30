export const products = [
  {
    title: "Recruitment Automation Platform",
    description:
      "Automates candidate sourcing & screening with AI, cutting manual review time significantly.",
    tags: ["Next.js", "OpenAI", "Postgres", "Workers"],
  },
  {
    title: "AI Presentation Generator",
    description:
      "Generates polished, on-brand slide decks from a prompt — Gemini-style AI PPT creation.",
    tags: ["Gemini", "React", "Canvas", "Edge"],
  },
  {
    title: "ML Automation Platform",
    description:
      "End-to-end pipeline for building, training, and deploying ML models without manual ops overhead.",
    tags: ["Python", "Ray", "MLflow", "K8s"],
  },
  {
    title: "AI Voice Agents Platform",
    description:
      "An n8n-style builder for creating and deploying custom voice AI agents.",
    tags: ["LiveKit", "Deepgram", "LLM", "WebRTC"],
  },
  {
    title: "DevOS (hackathon build)",
    description:
      "An open-source isolated dev environment controlled by a central AI agent — built live at [Hackathon Name].",
    tags: ["Docker", "Agents", "Go", "OSS"],
  },
] as const;

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

export const team = [
  { name: "Team Member One", role: "Founder / AI Engineer", tags: ["LLMs", "RAG", "Evals"] },
  { name: "Team Member Two", role: "ML Engineer", tags: ["Training", "MLOps", "Vision"] },
  { name: "Team Member Three", role: "Product Engineer", tags: ["Next.js", "DX", "Design"] },
  { name: "Team Member Four", role: "Platform Engineer", tags: ["Infra", "K8s", "Latency"] },
] as const;

export const caseStudies = [
  {
    client: "Spanish SaaS client",
    title: "Voice agent for inbound support",
    problem: "Support queue overloaded with repetitive qualification calls.",
    approach: "Deployed a bilingual voice agent with CRM tool-calling and live handoff.",
    outcome: "Majority of inbound calls resolved without a human touchpoint.",
    quote:
      "Entregaron un agente de voz en producción en semanas, no meses. El equipo entiende el producto, no solo el modelo.",
  },
  {
    client: "Data platform startup",
    title: "Large-scale data scraping pipeline",
    problem: "Manual collection couldn't keep up with source volume or schema drift.",
    approach: "Built a resilient distributed scraper with LLM-assisted schema normalization.",
    outcome: "Continuous ingestion across hundreds of sources with automated QA.",
    quote: "They turned a fragile weekend script into infrastructure we now rely on daily.",
  },
  {
    client: "Vertical AI company",
    title: "Domain model finetuning",
    problem: "Generic models missed industry-specific terminology and formats.",
    approach: "Curated a labelled dataset, finetuned and benchmarked against an eval suite.",
    outcome: "Meaningful accuracy lift on domain tasks at a fraction of frontier-model cost.",
    quote: "The eval harness they left behind is as valuable as the model itself.",
  },
] as const;

export const posts = [
  {
    tag: "Build log",
    title: "Shipping DevOS in 36 hours",
    excerpt: "What we cut, what we kept, and why an agent-controlled dev box is harder than it looks.",
    date: "Placeholder date",
  },
  {
    tag: "Engineering",
    title: "Evals before prompts",
    excerpt: "How we stop LLM features from silently regressing between releases.",
    date: "Placeholder date",
  },
  {
    tag: "Voice",
    title: "Sub-second voice agents",
    excerpt: "The latency budget breakdown we use on every realtime build.",
    date: "Placeholder date",
  },
];

export const testimonialSnippets = [
  "\u201cShipped a production voice agent in weeks, not months.\u201d",
  "\u201cThey build like a product team, not an agency.\u201d",
  "\u201cNuestro mejor partner t\u00e9cnico hasta ahora.\u201d",
  "\u201cThe eval harness alone paid for the project.\u201d",
];

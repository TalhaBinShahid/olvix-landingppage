# OlvixAI Launchpad

Build the OlvixAI marketing website using the attached spec doc. Follow the build order in section 5 — scaffold Next.js + Tailwind first, build all sections with placeholder copy and no animation, get the full static layout working and responsive, then add the Three.js hero scene last, then layer in Framer Motion scroll animations. Use the tech stack in section 4 exactly. Keep performance in mind throughout — dynamic-import the 3D hero so it doesn't block page load.

OlvixAI — Website Build Spec

Use this doc as the build brief when prompting Claude Code. It covers brand direction, sitemap, section-by-section content (placeholder copy included), animation spec, and tech stack.

1. Brand Direction (placeholder — refine before final build)

Since there's no brand kit yet, here's a starting direction consistent with an AI product/platform agency:

Theme: Dark mode primary (tech-forward, high contrast)

Base colors: Near-black background (#0A0A0F or #0B0E14), off-white text (#F5F5F7)

Accent colors: Pick ONE primary accent + one secondary:

Primary: Electric violet/indigo (#7C5CFF or #6366F1) — signals "AI"

Secondary: Cyan/teal glow (#22D3EE) — used sparingly for highlights, hover states, glow effects

Fonts:

Headings: Space Grotesk or General Sans (modern, techy, geometric)

Body: Inter or IBM Plex Sans (clean, readable)

Visual motifs: Subtle grid/dot background patterns, glowing gradient orbs, thin glowing borders on cards, monospace tags for tech stack labels

Note: Treat this as v1. Once the site skeleton is built, do a quick pass with actual team input before final polish.

2. Sitemap (single-page scroll site, v1)

Hero

Proof Bar (logos/testimonials strip)

Products Showcase (5 builds)

Services / Offers (productized packages)

Process / How We Work

Team

Case Studies / Testimonials (detailed)

Build-in-Public / Blog feed (can be simple for v1 — even just hackathon posts embedded)

Contact / Book a Call

Footer

Keep it a single scrolling page for v1 — faster to build, faster to ship, easier to iterate. Split into routes later only if content grows too long (e.g., dedicated /case-studies/[slug] pages in v2).

3. Section-by-Section Spec

Hero

Layout: Full viewport height. 3D scene (AI agent/network visual) as background or right-side element, headline + subhead + CTA on left/center.

Placeholder copy:

Headline: We build AI products & platforms — not just promises.

Subhead: A team of engineers who've shipped voice agents, ML automation, and AI-native tools from scratch. See the proof below.

CTA buttons: [ See Our Work ] [ Book a Call ]

Animation spec: Three.js/React Three Fiber scene — floating nodes connected by glowing lines (neural network / agent graph aesthetic), slow auto-rotation, subtle mouse-parallax. Keep polygon count low + use React.lazy/dynamic import so it doesn't block initial page load. Fallback: static gradient/blur orb image on mobile or low-power devices.

Proof Bar

Layout: Thin horizontal strip right under hero. Logos (if usable) or short testimonial quote carousel.

Placeholder copy: Trusted by teams building the next generation of AI products + testimonial snippet rotator (Spanish client quote, etc.)

Products Showcase

Layout: Grid or alternating left-right rows, one per product. Each row: short video/GIF demo, title, 2-line description, tech stack tags, "View Case Study" link.

Placeholder entries:

Recruitment Automation Platform — "Automates candidate sourcing & screening with AI, cutting manual review time significantly."

AI Presentation Generator — "Generates polished, on-brand slide decks from a prompt — Gemini-style AI PPT creation."

ML Automation Platform — "End-to-end pipeline for building, training, and deploying ML models without manual ops overhead."

AI Voice Agents Platform — "An n8n-style builder for creating and deploying custom voice AI agents."

DevOS (hackathon build) — "An open-source isolated dev environment controlled by a central AI agent — built live at [Hackathon Name]."

(Replace with real screenshots/GIFs and finalized descriptions as they're ready — placeholders can go live first.)

Services / Offers

Layout: 2-3 pricing/package cards, side by side.

Placeholder packages:

AI MVP Sprint — Fixed price, 4-6 weeks — "From idea to working AI product."

LLM/RAG App Build — Fixed price, 3 weeks — "Custom AI app powered by your data."

Voice Agent Deployment — Fixed price, 2-4 weeks — "Launch a production-ready AI voice agent."

Process / How We Work

Layout: Horizontal 4-step timeline with icons.

Placeholder steps: Discover → Design → Build → Ship & Support One line each explaining what happens at that stage.

Team

Layout: 4 cards, photo, name, role/expertise tags, LinkedIn/X link.

Case Studies / Testimonials

Layout: Expandable cards or dedicated blocks — problem, approach, outcome/metrics, quote.

Use real testimonials you have now (Spanish client, data scraping, ML finetuning, LLM apps) even if products aren't fully packaged as case studies yet.

Build-in-Public / Blog Feed

Layout: Simple card grid, can literally embed/link LinkedIn or X posts for v1 rather than building a full CMS blog.

Contact / Book a Call

Layout: Centered, minimal. Calendly embed + fallback email link.

4. Tech Stack Recommendation (for Claude Code prompt)

Framework: Next.js 14+ (App Router)

Styling: Tailwind CSS

3D/Animation: React Three Fiber + drei (for hero scene), Framer Motion (for scroll-triggered micro-animations elsewhere)

Performance: Dynamic import the 3D hero component (next/dynamic, ssr: false), lazy-load below-fold images, use next/image

Deployment target: Vercel (pairs natively with Next.js)

CMS (optional, v2): Keep content hardcoded in v1 for speed; consider a headless CMS (Sanity/Contentful) only once content changes frequently

5. Build Order (suggested prompt sequence for Claude Code)

Scaffold Next.js + Tailwind project, set up color/font tokens

Build static layout for all sections with placeholder copy (no animation yet) — get structure right first

Add Hero 3D scene last (highest effort, highest risk of perf issues) — build everything else fast and stable first

Add Framer Motion scroll animations across sections

Mobile responsiveness pass

Swap placeholder content for real content as it's ready

Performance audit (Lighthouse) before launch — target 90+ mobile score despite the 3D hero

Next Steps

[ ] Team reviews/edits placeholder copy

[ ] Finalize brand colors/fonts (or approve v1 direction above)

[ ] Gather logos/assets for testimonials

[ ] Feed this doc + tech stack section into Claude Code as the initial build prompt

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7edd1520-b3f9-4965-a2f1-1cf07067dac9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

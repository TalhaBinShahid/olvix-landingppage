import { createFileRoute, Link } from "@tanstack/react-router";

import { CalendlyEmbed } from "@/components/site/CalendlyEmbed";

import { Footer } from "@/components/site/Footer";

import { Nav } from "@/components/site/Nav";

import { LinesReveal, Magnetic, Reveal } from "@/components/site/motion";

import { CALENDLY_FALLBACK_EMAIL, getCalendlyUrl } from "@/lib/calendly";



export const Route = createFileRoute("/book")({

  head: () => ({

    meta: [

      { title: "Book a call — Olvix" },

      {

        name: "description",

        content:

          "Book a 30-minute discovery call. We'll tell you honestly whether AI is the right answer — and what it would take to ship.",

      },

      { property: "og:title", content: "Book a call — Olvix" },

      {

        property: "og:description",

        content:

          "Book a 30-minute discovery call. We'll tell you honestly whether AI is the right answer — and what it would take to ship.",

      },

      { property: "og:type", content: "website" },

      { name: "twitter:card", content: "summary_large_image" },

    ],

  }),

  component: BookPage,

});



function BookPage() {
  const calendlyUrl = getCalendlyUrl();

  return (

    <div className="min-h-screen bg-background">

      <Nav />

      <main className="pt-24">

        <section className="section-shell text-center">

          <Reveal direction="blur">

            <Link

              to="/"

              className="link-arrow mb-10 inline-flex text-sm text-muted-foreground"

            >

              <span className="arrow rotate-180">→</span>

              Back to home

            </Link>

          </Reveal>



          <Reveal direction="blur">

            <span className="tag-mono shimmer-tag">Book a call</span>

          </Reveal>



          <LinesReveal className="mx-auto mt-4 max-w-2xl">

            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">

              30-minute discovery call

            </h1>

          </LinesReveal>



          <Reveal delay={0.12}>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">

              Book a 30-minute call and we&apos;ll tell you honestly whether AI is the

              right answer — and what it would take to ship.

            </p>

          </Reveal>



          <Reveal delay={0.2} direction="scale">

            <div className="mx-auto mt-10 w-full max-w-xl">

              <CalendlyEmbed eager />

            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Scheduler not loading?{" "}
              {calendlyUrl && (
                <>
                  <Magnetic strength={0.2}>
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow"
                    >
                      Open in Calendly
                    </a>
                  </Magnetic>
                  {" · "}
                </>
              )}
              <Magnetic strength={0.2}>
                <a
                  href={`mailto:${CALENDLY_FALLBACK_EMAIL}`}
                  className="link-arrow"
                  aria-label={`Email ${CALENDLY_FALLBACK_EMAIL}`}
                >
                  {CALENDLY_FALLBACK_EMAIL}
                </a>
              </Magnetic>
            </p>

          </Reveal>

        </section>

      </main>

      <Footer />

    </div>

  );

}



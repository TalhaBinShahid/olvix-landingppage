import { useCallback, useEffect, useRef, useState } from "react";

import { ClientOnly } from "@tanstack/react-router";

import { Skeleton } from "@/components/ui/skeleton";

import CalendlyWidget from "./CalendlyWidget";

import {
  CALENDLY_FALLBACK_EMAIL,
  CALENDLY_INITIAL_HEIGHT,
  getCalendlyUrl,
} from "@/lib/calendly";

function FallbackCard({ message }: { message: string }) {
  return (
    <div
      className="flex min-h-[640px] flex-col items-center justify-center gap-4 px-6 py-16 text-center sm:min-h-[700px]"
      role="alert"
    >
      <p className="max-w-sm text-muted-foreground">{message}</p>
      <a
        href={`mailto:${CALENDLY_FALLBACK_EMAIL}`}
        className="link-arrow"
        aria-label={`Email ${CALENDLY_FALLBACK_EMAIL} to book a call`}
      >
        {CALENDLY_FALLBACK_EMAIL}
      </a>
    </div>
  );
}

function CalendlySkeleton() {
  return (
    <div
      className="flex h-full flex-col gap-4 bg-background p-6"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading scheduling calendar"
    >
      <Skeleton className="mx-auto h-4 w-32" />
      <Skeleton className="mx-auto h-8 w-48" />
      <Skeleton className="mt-4 h-10 w-full rounded-xl" />
      <div className="mt-2 grid flex-1 grid-cols-7 gap-2">
        {Array.from({ length: 28 }).map((_, i) => (
          <Skeleton key={i} className="aspect-square w-full rounded-lg" />
        ))}
      </div>
      <span className="sr-only">Loading scheduling calendar…</span>
    </div>
  );
}

export function CalendlyEmbed({ eager = false }: { eager?: boolean }) {
  const url = getCalendlyUrl();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(eager);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (eager) {
      setShouldMount(true);
      return;
    }

    const el = containerRef.current;
    if (!el || !url) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldMount(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [url, eager]);

  const handleReady = useCallback(() => setLoaded(true), []);

  if (!url) {
    return (
      <div
        role="region"
        aria-label="Book a 30-minute discovery call"
        className="relative w-full overflow-hidden"
      >
        <FallbackCard message="Scheduling is temporarily unavailable. Email us and we'll get you on the calendar." />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Book a 30-minute discovery call"
      aria-busy={!loaded}
      className="relative w-full overflow-visible"
    >
      <div
        className="relative w-full"
        style={{ minHeight: `${CALENDLY_INITIAL_HEIGHT}px` }}
      >
        {!loaded && (
          <div className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300">
            <CalendlySkeleton />
          </div>
        )}
        {shouldMount && (
          <ClientOnly fallback={null}>
            <div className="w-full">
              <CalendlyWidget url={url} onReady={handleReady} />
            </div>
          </ClientOnly>
        )}
        <span className="sr-only" aria-live="polite">
          {loaded
            ? "Scheduling calendar ready"
            : shouldMount
              ? "Loading scheduling calendar"
              : "Scheduling calendar will load when visible"}
        </span>
      </div>
    </div>
  );
}

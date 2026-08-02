import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { InlineWidget, useCalendlyEventListener } from "react-calendly";

import {
  CALENDLY_INITIAL_HEIGHT,
  getCalendlyPageSettings,
} from "@/lib/calendly";

const EmptySpinner = () => null;

export default memo(function CalendlyWidget({
  url,
  onReady,
}: {
  url: string;
  onReady: () => void;
}) {
  const readyRef = useRef(false);
  const [height, setHeight] = useState(CALENDLY_INITIAL_HEIGHT);
  const pageSettings = useMemo(() => getCalendlyPageSettings(), []);

  const markReady = useCallback(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    onReady();
  }, [onReady]);

  useCalendlyEventListener({
    onEventTypeViewed: markReady,
    onProfilePageViewed: markReady,
    onPageHeightResize: (e) => {
      markReady();
      const next = Number(e.data.payload.height);
      if (!Number.isFinite(next)) return;
      setHeight(next);
    },
  });

  useEffect(() => {
    const markReadyFromIframe = (iframe: HTMLIFrameElement) => {
      if (iframe.dataset.calendlyReady === "true") return;
      iframe.dataset.calendlyReady = "true";
      iframe.addEventListener("load", () => markReady(), { once: true });
    };

    const root = document.querySelector(".calendly-inline-widget");
    const existing = root?.querySelector("iframe");
    if (existing instanceof HTMLIFrameElement) markReadyFromIframe(existing);

    const observer = new MutationObserver(() => {
      const iframe = document.querySelector(".calendly-inline-widget iframe");
      if (iframe instanceof HTMLIFrameElement) markReadyFromIframe(iframe);
    });
    if (root) observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [markReady]);

  return (
    <InlineWidget
      url={url}
      iframeTitle="Book a call with Olvix"
      className="calendly-inline-widget w-full"
      styles={{
        height: `${height}px`,
        minWidth: "320px",
        width: "100%",
      }}
      pageSettings={pageSettings}
      LoadingSpinner={EmptySpinner}
    />
  );
});

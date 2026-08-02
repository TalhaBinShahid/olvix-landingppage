import chroma from "chroma-js";

export const CALENDLY_URL = "https://calendly.com/email-olvix/30min";

export function getCalendlyUrl(): string {
  return CALENDLY_URL;
}

export const BOOKING_PATH = "/book";

export const CALENDLY_FALLBACK_EMAIL = "email@olvix.io";

export const CALENDLY_INITIAL_HEIGHT = 630;

const DEFAULT_PAGE_SETTINGS = {
  backgroundColor: "383838",
  primaryColor: "e8651a",
  textColor: "f5f5f5",
  hideEventTypeDetails: true,
  hideLandingPageDetails: true,
} as const;

function colorToCalendlyHex(color: string, fallback: string): string {
  try {
    return chroma(color).hex().replace("#", "");
  } catch {
    return fallback;
  }
}

/** Read a CSS custom property and return Calendly hex (no # prefix). Client-only. */
export function cssVarToCalendlyHex(varName: string, fallback: string): string {
  if (typeof document === "undefined") return fallback;

  const el = document.createElement("div");
  el.style.backgroundColor = `var(${varName})`;
  document.body.appendChild(el);
  const computed = getComputedStyle(el).backgroundColor;
  document.body.removeChild(el);

  return colorToCalendlyHex(computed, fallback);
}

export function getCalendlyPageSettings() {
  if (typeof document === "undefined") return { ...DEFAULT_PAGE_SETTINGS };

  return {
    backgroundColor: cssVarToCalendlyHex(
      "--background",
      DEFAULT_PAGE_SETTINGS.backgroundColor,
    ),
    primaryColor: cssVarToCalendlyHex(
      "--primary",
      DEFAULT_PAGE_SETTINGS.primaryColor,
    ),
    textColor: cssVarToCalendlyHex(
      "--foreground",
      DEFAULT_PAGE_SETTINGS.textColor,
    ),
    hideEventTypeDetails: true,
    hideLandingPageDetails: true,
  };
}

import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Bildmarke: ein Grundriss.
 * Der Raum als Umriss mit Türöffnung und Türschlag – darin das "M" für März.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Raumumriss mit Öffnung an der Unterkante */}
      <path
        d="M28 58H6V6h52v52H40"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeLinecap="square"
      />
      {/* Türschlag */}
      <path
        d="M40 46a12 12 0 0 1-12 12"
        stroke="currentColor"
        strokeWidth={2}
        opacity={0.55}
      />
      {/* Monogramm M */}
      <path
        d="M16 41V18l16 14 16-14v23"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
    </svg>
  );
}

/**
 * Wort-Bild-Marke für Header und Footer.
 * `tone` steuert die Farbgebung auf hellem bzw. dunklem Grund.
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`${site.name} – zur Startseite`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark
        className={`h-9 w-9 shrink-0 transition-colors ${
          isLight
            ? "text-white/90 group-hover:text-white"
            : "text-accent group-hover:text-accent-dark"
        }`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[0.95rem] font-semibold tracking-[0.14em] uppercase ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          Simone März
        </span>
        <span
          className={`mt-1 text-[0.6rem] tracking-[0.26em] uppercase ${
            isLight ? "text-white/60" : "text-muted"
          }`}
        >
          Objekteinrichtungen
        </span>
      </span>
    </Link>
  );
}

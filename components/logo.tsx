import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Bildmarke: zwei Winkel fassen einen Raum, ohne ihn zu schließen – die beiden
 * offenen Ecken sind die Öffnung. In der Mitte steht das „M“ für März.
 *
 * Die Winkel stehen in Petrolblau, das Monogramm in Tiefblau: so bleibt die
 * Hierarchie auch bei kleiner Darstellung lesbar.
 */
export function LogoMark({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  const rahmen = isLight ? "text-white/65" : "text-accent";
  const monogramm = isLight ? "text-white" : "text-accent-dark";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Winkel oben links */}
      <path
        d="M6 40V6h34"
        className={rahmen}
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* Winkel unten rechts */}
      <path
        d="M24 58h34V24"
        className={rahmen}
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* Monogramm M */}
      <path
        d="M20 43V22l12 11 12-11v21"
        className={monogramm}
        stroke="currentColor"
        strokeWidth={5.5}
        strokeLinecap="butt"
        strokeLinejoin="miter"
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
      className={`group inline-flex items-center gap-3.5 ${className}`}
    >
      <LogoMark
        tone={tone}
        className="h-9 w-9 shrink-0 transition-opacity group-hover:opacity-75"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[0.98rem] font-semibold tracking-[0.13em] uppercase ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          Simone März
        </span>
        <span
          className={`mt-1.5 text-[0.58rem] font-medium tracking-[0.3em] uppercase ${
            isLight ? "text-white/55" : "text-muted"
          }`}
        >
          Objekteinrichtungen
        </span>
      </span>
    </Link>
  );
}

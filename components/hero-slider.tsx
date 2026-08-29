"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

export type Slide = { src: string; alt: string };

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/** Respektiert die Systemeinstellung „Bewegung reduzieren“. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_MOTION);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

/**
 * Bildslider für die Startseite.
 *
 * Bewusst ohne Farbschleier über den Fotos: Die Motive bleiben unverfälscht,
 * der Text steht daneben statt darauf. Der Wechsel pausiert bei Hover, bei
 * Tastaturfokus und wenn das System „Bewegung reduzieren“ meldet.
 */
export function HeroSlider({
  slides,
  interval = 6500,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  /**
   * Wie viele Bilder überhaupt im DOM stehen dürfen.
   *
   * Beim ersten Rendern nur zwei: das sichtbare (LCP-Element) und das nächste,
   * damit die erste Überblendung nicht ins Leere läuft. Alle weiteren kommen
   * erst dazu, wenn man sich ihnen nähert. Ohne das lädt der Browser alle vier
   * Fotos gleichzeitig – die stecken im Viewport, `loading="lazy"` würde daran
   * nichts ändern – und sie nehmen dem LCP-Bild die Bandbreite weg.
   */
  const [reach, setReach] = useState(1);

  const goTo = useCallback(
    (next: number) => {
      const target = (next + slides.length) % slides.length;
      setIndex(target);
      setReach((current) => Math.max(current, target + 1));
    },
    [slides.length],
  );

  const autoplay = !paused && !reducedMotion && slides.length > 1;

  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(() => goTo(index + 1), interval);
    return () => clearTimeout(timer);
  }, [autoplay, goTo, index, interval]);

  return (
    <div
      aria-roledescription="Bildslider"
      aria-label="Einblicke in unsere Objekte"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand shadow-media sm:aspect-[3/2]">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.src}
            aria-hidden={slideIndex !== index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {slideIndex <= reach ? (
              <Image
                src={slide.src}
                alt={slideIndex === index ? slide.alt : ""}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                {...(slideIndex === 0
                  ? // Erstes Bild ist das LCP-Element und wird vorgeladen.
                    { preload: true }
                  : // Das jeweils nächste Bild im Hintergrund holen, damit das
                    // LCP-Bild Vorrang behält.
                    { fetchPriority: "low" as const })}
                className="object-cover"
              />
            ) : null}
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="mt-6 flex items-center justify-between gap-6">
          {/* Punkte */}
          <div className="flex items-center gap-3">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(slideIndex)}
                aria-current={slideIndex === index}
                className="group py-2"
              >
                <span className="sr-only">
                  Bild {slideIndex + 1} von {slides.length} anzeigen
                </span>
                <span
                  aria-hidden="true"
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    slideIndex === index
                      ? "w-10 bg-accent"
                      : "w-5 bg-line-strong group-hover:bg-muted"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <p className="font-display text-xs tracking-[0.2em] text-muted tabular-nums">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-1 text-line-strong">/</span>
              {String(slides.length).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-2">
              <SliderButton
                label="Vorheriges Bild"
                onClick={() => goTo(index - 1)}
                direction="prev"
              />
              <SliderButton
                label="Nächstes Bild"
                onClick={() => goTo(index + 1)}
                direction="next"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function SliderButton({
  label,
  onClick,
  direction,
}: {
  label: string;
  onClick: () => void;
  direction: "prev" | "next";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink-soft transition-colors hover:border-accent hover:bg-accent hover:text-white"
    >
      <span className="sr-only">{label}</span>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className={`h-3.5 w-3.5 ${direction === "prev" ? "rotate-180" : ""}`}
      >
        <path
          d="M1 8h13M9 3l5 5-5 5"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}

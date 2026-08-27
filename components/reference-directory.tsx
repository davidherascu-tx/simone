"use client";

import { useMemo, useState } from "react";
import { groupReferenzen } from "@/lib/referenzen";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ß/g, "ss");
}

export function ReferenceDirectory({ entries }: { entries: string[] }) {
  const [query, setQuery] = useState("");

  const gefiltert = useMemo(() => {
    const needle = normalize(query.trim());
    if (!needle) return entries;
    return entries.filter((entry) => normalize(entry).includes(needle));
  }, [entries, query]);

  const gruppen = useMemo(() => groupReferenzen(gefiltert), [gefiltert]);
  const vorhandeneBuchstaben = new Set(gruppen.map((gruppe) => gruppe.letter));

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="referenz-suche" className="sr-only">
            Referenzen durchsuchen
          </label>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted"
          >
            <circle
              cx="9"
              cy="9"
              r="6"
              stroke="currentColor"
              strokeWidth={1.6}
            />
            <path
              d="m13.5 13.5 4 4"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
            />
          </svg>
          <input
            id="referenz-suche"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Referenz suchen …"
            className="w-full rounded-lg border border-line bg-surface py-3.5 pr-4 pl-11 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>

        <p aria-live="polite" className="text-sm text-muted">
          {gefiltert.length}{" "}
          {gefiltert.length === 1 ? "Eintrag" : "Einträge"}
          {query.trim() ? ` für „${query.trim()}“` : ""}
        </p>
      </div>

      {/* Alphabet-Sprungleiste */}
      <nav
        aria-label="Alphabetische Sprungnavigation"
        className="mt-8 hidden flex-wrap gap-x-1 gap-y-2 md:flex"
      >
        {ALPHABET.map((letter) => {
          const available = vorhandeneBuchstaben.has(letter);
          return available ? (
            <a
              key={letter}
              href={`#buchstabe-${letter}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              {letter}
            </a>
          ) : (
            <span
              key={letter}
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center border border-transparent text-sm text-line-strong"
            >
              {letter}
            </span>
          );
        })}
      </nav>

      {gruppen.length === 0 ? (
        <p className="mt-16 text-lg text-ink-soft">
          Zu „{query.trim()}“ haben wir keinen Eintrag gefunden. Fragen Sie uns
          gern direkt – unsere Liste ist nur ein Auszug.
        </p>
      ) : (
        <div className="mt-14 space-y-14">
          {gruppen.map((gruppe) => (
            <section
              key={gruppe.letter}
              id={`buchstabe-${gruppe.letter}`}
              className="scroll-mt-32"
            >
              <div className="grid gap-6 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-10">
                <h2 className="font-display text-4xl font-semibold text-accent lg:sticky lg:top-32 lg:self-start">
                  {gruppe.letter}
                </h2>
                <ul className="grid gap-x-10 gap-y-px sm:grid-cols-2">
                  {gruppe.entries.map((entry) => (
                    <li
                      key={entry}
                      className="border-b border-line py-3.5 leading-relaxed text-ink-soft"
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "@/components/ui";
import { leistungen } from "@/lib/leistungen";
import { site } from "@/lib/site";

const ALLGEMEIN = "Allgemeine Anfrage";

const themen = [
  ALLGEMEIN,
  "Angebot / Produktanfrage",
  "Schnelllieferprogramm",
  ...leistungen.map((leistung) => leistung.nav),
];

const feldKlasse =
  "w-full rounded-lg border border-line bg-surface px-4 py-3.5 text-sm text-ink placeholder:text-muted transition-colors focus:border-accent focus:outline-none";

const labelKlasse =
  "block text-[0.7rem] font-medium tracking-[0.18em] text-muted uppercase";

/**
 * Das Formular verschickt nichts selbst, sondern öffnet das E-Mail-Programm
 * der Besucherin oder des Besuchers mit einer fertig vorbereiteten Nachricht.
 * So werden keine Daten an Dritte übertragen und es wird kein Server benötigt.
 * Für einen serverseitigen Versand genügt es, `handleSubmit` auszutauschen.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const themaAusUrl = searchParams.get("thema");
  const vorauswahl =
    themen.find((thema) => thema === themaAusUrl) ??
    leistungen.find((leistung) => leistung.slug === themaAusUrl)?.nav ??
    ALLGEMEIN;

  const [gesendet, setGesendet] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const daten = new FormData(event.currentTarget);
    const wert = (name: string) => String(daten.get(name) ?? "").trim();

    const betreff = `Anfrage über die Website – ${wert("thema")}`;
    const text = [
      `Name: ${wert("name")}`,
      `Unternehmen: ${wert("unternehmen") || "–"}`,
      `E-Mail: ${wert("email")}`,
      `Telefon: ${wert("telefon") || "–"}`,
      `Thema: ${wert("thema")}`,
      "",
      "Nachricht:",
      wert("nachricht"),
    ].join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      betreff,
    )}&body=${encodeURIComponent(text)}`;

    setGesendet(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelKlasse}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`${feldKlasse} mt-3`}
          />
        </div>
        <div>
          <label htmlFor="unternehmen" className={labelKlasse}>
            Unternehmen
          </label>
          <input
            id="unternehmen"
            name="unternehmen"
            type="text"
            autoComplete="organization"
            className={`${feldKlasse} mt-3`}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelKlasse}>
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${feldKlasse} mt-3`}
          />
        </div>
        <div>
          <label htmlFor="telefon" className={labelKlasse}>
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            className={`${feldKlasse} mt-3`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="thema" className={labelKlasse}>
          Thema
        </label>
        <select
          id="thema"
          name="thema"
          defaultValue={vorauswahl}
          className={`${feldKlasse} mt-3`}
        >
          {themen.map((thema) => (
            <option key={thema} value={thema}>
              {thema}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="nachricht" className={labelKlasse}>
          Ihre Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={6}
          required
          placeholder="Worum geht es? Wie viele Arbeitsplätze, welche Räume, welcher Zeitrahmen?"
          className={`${feldKlasse} mt-3 resize-y`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="datenschutz"
          name="datenschutz"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-accent"
        />
        <label htmlFor="datenschutz" className="text-sm leading-relaxed text-ink-soft">
          Ich habe die{" "}
          <Link
            href="/datenschutz"
            className="text-accent underline underline-offset-4"
          >
            Datenschutzerklärung
          </Link>{" "}
          zur Kenntnis genommen. *
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-accent px-7 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark sm:w-auto"
      >
        Nachricht vorbereiten
        <ArrowRight className="h-3.5 w-3.5" />
      </button>

      <p className="text-xs leading-relaxed text-muted">
        Mit dem Klick öffnet sich Ihr E-Mail-Programm mit der fertig
        ausgefüllten Nachricht – Sie schicken sie selbst ab. Es werden keine
        Daten an diese Website übertragen.
        {gesendet ? (
          <>
            {" "}
            <span className="text-accent">
              Öffnet sich nichts? Schreiben Sie uns direkt an{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="underline underline-offset-4"
              >
                {site.contact.email}
              </a>
              .
            </span>
          </>
        ) : null}
      </p>
    </form>
  );
}

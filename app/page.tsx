import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { HeroSlider, type Slide } from "@/components/hero-slider";
import {
  ArrowLink,
  ArrowRight,
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui";
import { hersteller } from "@/lib/hersteller";
import { leistungen } from "@/lib/leistungen";
import { buildMetadata } from "@/lib/metadata";
import { referenzen } from "@/lib/referenzen";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  description: site.description,
  path: "/",
  image: "/slide_1.webp",
});

const slides: Slide[] = [
  {
    src: "/slide_1.webp",
    alt: "Höhenverstellbare Schreibtische und Klapptische in einem Loftbüro mit Betonwand und Holzlamellen",
  },
  {
    src: "/slide_2.webp",
    alt: "Zwei Personen im Gespräch an einem Stehtisch mit Sideboard in Betonoptik und Blick über die Stadt",
  },
  {
    src: "/slide_3.webp",
    alt: "Arbeitsplatz mit Sitz-Steh-Schreibtisch, Drehstuhl, Sideboard und begrünter Wand",
  },
  {
    src: "/slide_4.webp",
    alt: "Einzelbüro mit Holzlamellenwand, weißem Schreibtisch und Glastrennwand",
  },
];

const kennzahlen = [
  { value: `${site.yearsOfExperience}`, label: "Jahre Einrichtungserfahrung" },
  { value: `${hersteller.length}`, label: "Hersteller aus einer Hand" },
  { value: `${referenzen.length}+`, label: "Referenzen aus allen Branchen" },
];

const dekore = [
  { name: "Diamantweiß", color: "#f2efe9" },
  { name: "Lichtgrau", color: "#c8c8c5" },
  { name: "Königsahorn", color: "#d9b98b" },
  { name: "Akazie hell", color: "#c99a63" },
  { name: "Eiche Natur", color: "#b58d5d" },
];

const argumente = [
  `${site.yearsOfExperience} Jahre Einrichtungserfahrung in den unterschiedlichsten Branchen`,
  "Persönliche Beratung bei Ihnen vor Ort und in unserer Ausstellung",
  "Raumplanungen von unserer Architektin – nach allen gesetzlichen Vorgaben",
  "Fünf Hersteller mit einem exzellenten Preis-/Leistungsverhältnis",
  "Aufmaß, Logistik und Montage bis zur gebrauchsfertigen Übergabe",
  "Erstklassige Bonität für eine sichere Geschäftsgrundlage",
];

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------ Hero */}
      <section className="border-b border-line bg-surface">
        <Container width="wide" className="py-12 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <Eyebrow>Büro- und Objekteinrichtung</Eyebrow>
              <h1 className="mt-6 text-4xl leading-[1.06] font-semibold text-ink sm:text-5xl lg:text-[3.5rem]">
                Innovative Büroeinrichtung.
                <br />
                <span className="text-accent">Individuelle Planung.</span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-soft">
                Wir entwickeln für Sie eine kreative Lösung – budget- und
                termingerecht.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/kontakt">
                  Termin vereinbaren
                  <ArrowRight className="h-3.5 w-3.5" />
                </ButtonLink>
                <ButtonLink href="/leistungen" variant="outline">
                  Leistungen entdecken
                </ButtonLink>
              </div>
            </div>

            <HeroSlider slides={slides} />
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Kennzahlen */}
      <div className="border-b border-line bg-surface">
        <Container width="wide">
          {/* Bis sm untereinander: Drei Spalten sind auf dem Handy zu schmal
              für Wörter wie „Einrichtungserfahrung“. Dort stehen Zahl und
              Bezeichnung nebeneinander auf einer Grundlinie. */}
          <dl className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {kennzahlen.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-baseline gap-4 py-5 sm:block sm:py-8 lg:py-10 ${
                  index === 0 ? "sm:pr-4 lg:pr-10" : "sm:px-4 lg:px-10"
                }`}
              >
                <dt className="font-display shrink-0 text-3xl font-semibold text-accent lg:text-4xl">
                  {item.value}
                </dt>
                <dd className="text-sm leading-relaxed text-muted sm:mt-2">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* --------------------------------------------- Kurzvorstellung */}
      <Section>
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <SectionHeading
              eyebrow="Willkommen"
              title="Sie können bei uns Büroeinrichtung bestellen. Sie können aber deutlich mehr bekommen."
            />
            <div className="space-y-5 lg:pt-16">
              <p className="text-lg leading-relaxed text-ink-soft">
                Unser Schwerpunkt liegt auf der Beratung und Planung von
                Einrichtungen für nahezu alle Arbeitsformen – ob ein Raum, ein
                Bereich oder ein ganzes Objekt.
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                Wir begleiten Sie von der Bedarfsanalyse über die Planung
                unserer Architektin bis zur gebrauchsfertigen Übergabe.
              </p>
              <div className="pt-3">
                <ArrowLink href="/referenzen">
                  Unsere Referenzen ansehen
                </ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------- Leistungen */}
      <Section className="border-t border-line bg-surface">
        <Container width="wide">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Leistungen"
              title="Von der ersten Idee bis zur Übergabe"
            />
            <div className="shrink-0 lg:pb-3">
              <ArrowLink href="/leistungen">Alle Leistungen</ArrowLink>
            </div>
          </div>

          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {leistungen.map((leistung) => (
              <li key={leistung.slug}>
                <Link
                  href={`/leistungen/${leistung.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand shadow-card transition-shadow duration-300 group-hover:shadow-media">
                    <Image
                      src={leistung.image}
                      alt={leistung.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`transition-transform duration-500 group-hover:scale-[1.04] ${
                        leistung.imageFit === "contain"
                          ? "object-contain p-3"
                          : "object-cover"
                      }`}
                    />
                  </div>
                  <h3 className="mt-5 flex items-start justify-between gap-4 text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {leistung.nav}
                    <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-line-strong transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent" />
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ------------------------------------ Schnelllieferprogramm */}
      <section className="border-y border-line bg-sand">
        <Container width="wide" className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>Schnell lieferbar</Eyebrow>
              <h2 className="mt-5 text-3xl leading-[1.14] font-semibold text-ink sm:text-4xl">
                In 7 Arbeitstagen arbeitsfähig
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
                Tische, Schränke, Container und Stühle aus dem
                Schnellliefersortiment unseres Herstellers fm – auf Wunsch vor
                Ort vertragen und montiert, später jederzeit ergänzbar.
              </p>

              <div className="mt-8">
                <p className="text-[0.7rem] font-medium tracking-[0.22em] text-muted uppercase">
                  Wählbare Dekore
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {dekore.map((dekor) => (
                    <li
                      key={dekor.name}
                      className="inline-flex items-center gap-2.5 rounded-lg border border-line bg-surface py-2 pr-4 pl-2 text-sm text-ink-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 rounded border border-line"
                        style={{ backgroundColor: dekor.color }}
                      />
                      {dekor.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9">
                <ButtonLink href="/kontakt?thema=Schnelllieferprogramm">
                  Angebot anfordern
                  <ArrowRight className="h-3.5 w-3.5" />
                </ButtonLink>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface shadow-media">
              <Image
                src="/fm-Schnelllieferprogramm-fastline.webp"
                alt="Arbeitsplätze mit Schreibtischen, Rollcontainern und Schränken aus dem fm Schnelllieferprogramm fastline"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- Warum wir */}
      {/* Eigenes <section> statt <Section>: Dieser Abschnitt läuft bewusst
          kompakter als das Standardmaß der übrigen Abschnitte. */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#00293c] via-accent-dark to-[#00587c] py-16 text-white lg:py-20">
        <Container width="wide">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-center lg:gap-12">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="Warum wir"
                title={`Warum ${site.shortName} Objekteinrichtungen?`}
                lead="Sechs Gründe, die den Unterschied zwischen einer Möbellieferung und einer durchdachten Einrichtung ausmachen."
              />

              {/* Ab xl in drei Spalten – sechs Gründe passen dann in zwei
                  Reihen statt drei und der Abschnitt bleibt flach. */}
              <ol className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:mt-12 xl:grid-cols-3">
                {argumente.map((argument, index) => (
                  <li key={argument} className="border-t border-white/20 pt-4">
                    <span className="font-display block text-xs font-medium tracking-[0.2em] text-white/40 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2.5 leading-relaxed text-white/85">
                      {argument}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/*
              Eigene Spalte für den Stuhl. Weil sie reserviert ist, kann er
              konstruktionsbedingt nie unter die Schrift geraten – unabhängig
              von der Fensterbreite. Deshalb steht er in voller Farbe, ohne
              Verlauf darüber. `lg:items-center` am Raster zentriert ihn
              senkrecht zum Text.
              Hinweis: Das Original ist nur 230 px breit. Hier wird es auf
              304 px gezogen; für eine deutlich größere, scharfe Darstellung
              wäre eine höher aufgelöste Datei nötig.
            */}
            <div aria-hidden="true" className="hidden lg:block">
              <Image
                src="/chair.png"
                alt=""
                width={230}
                height={375}
                sizes="304px"
                className="pointer-events-none -z-10 h-auto w-[19rem] max-w-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------- Hersteller */}
      <div className="border-y border-line bg-surface">
        <Container width="wide" className="py-14 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="lg:max-w-xs">
              <Eyebrow>Hersteller</Eyebrow>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Fünf Hersteller, ein Ansprechpartner.
              </p>
              <div className="mt-4">
                <ArrowLink href="/hersteller">Alle Hersteller</ArrowLink>
              </div>
            </div>

            <ul className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {hersteller.map((marke) => (
                <li
                  key={marke.slug}
                  className="flex items-center justify-center rounded-xl border border-line bg-white p-6 shadow-card"
                >
                  <Image
                    src={marke.logo}
                    alt={`Logo ${marke.name}`}
                    width={marke.logoWidth}
                    height={marke.logoHeight}
                    sizes="(max-width: 640px) 40vw, 15vw"
                    className="h-10 w-auto max-w-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <CtaBand
        headline="Vereinbaren Sie einen Termin – und wir legen sofort los."
        text="Ob ein Raum, ein Bereich oder ein ganzes Objekt: Schreiben Sie uns Ihren Terminwunsch oder Ihre Produktanfrage."
      />
    </>
  );
}

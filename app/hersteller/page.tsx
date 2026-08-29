import Image from "next/image";
import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import {
  ArrowRight,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui";
import { hersteller } from "@/lib/hersteller";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Hersteller",
  description:
    "fm Büromöbel, Febrü, C+P, LD Seating und Profim: fünf Hersteller für Büro- und Objekteinrichtung – zusammengestellt von einem Ansprechpartner.",
  path: "/hersteller",
});

export default function HerstellerPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Hersteller"
        title="Einrichtungen für Ihr Büro und Objekt. Gestalterische Freiheit garantiert."
        lead="Schauen Sie sich in Ruhe die Produkte unserer Hersteller an – oder machen Sie es sich ganz einfach: Wir stellen Ihr Gesamtensemble zusammen, in Funktion, Preis, Design und Lieferzeit."
        breadcrumbs={[
          { href: "/", label: "Startseite" },
          { href: "/hersteller", label: "Hersteller" },
        ]}
      />

      {/* Logoleiste als Schnellnavigation */}
      <div className="border-b border-line bg-surface">
        <Container width="wide">
          <ul className="grid grid-cols-2 gap-4 py-10 sm:grid-cols-3 lg:grid-cols-5">
            {hersteller.map((marke) => (
              <li key={marke.slug} className="rounded-xl border border-line bg-white shadow-card">
                <a
                  href={`#${marke.slug}`}
                  className="flex h-full items-center justify-center rounded-xl p-8 transition-opacity hover:opacity-60"
                >
                  <Image
                    src={marke.logo}
                    alt={`Logo ${marke.name}`}
                    width={marke.logoWidth}
                    height={marke.logoHeight}
                    sizes="(max-width: 640px) 40vw, 18vw"
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Section>
        <Container width="wide">
          <SectionHeading
            eyebrow="Ein Ansprechpartner"
            title="Wir stellen Ihr Gesamtensemble zusammen"
            lead="Wenn Sie sich einen erfahrenen Einrichtungspartner wünschen, der Sie berät, für Sie plant und Ihnen den Ablauf bis zur Übergabe so leicht wie möglich macht, nehmen Sie Kontakt zu uns auf. Wir freuen uns auf Sie."
          />

          <div className="mt-20 space-y-24 lg:space-y-32">
            {hersteller.map((marke, index) => (
              <article
                key={marke.slug}
                id={marke.slug}
                className="scroll-mt-32 border-t border-line pt-12 lg:pt-16"
              >
                <div className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <div className="flex h-36 w-full items-center justify-center rounded-xl border border-line bg-white p-7 shadow-card">
                      <Image
                        src={marke.logo}
                        alt={`Logo ${marke.name}`}
                        width={marke.logoWidth}
                        height={marke.logoHeight}
                        sizes="(max-width: 1024px) 90vw, 18rem"
                        className="max-h-full w-auto max-w-full object-contain"
                      />
                    </div>
                    <p className="mt-5 text-sm text-muted">{marke.country}</p>
                    {marke.badge ? (
                      <p className="mt-4 inline-block rounded-lg bg-accent-soft px-3 py-2 text-xs leading-relaxed text-accent">
                        {marke.badge}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <Eyebrow tone="muted">
                      {String(index + 1).padStart(2, "0")} · Hersteller
                    </Eyebrow>
                    <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                      {marke.name}
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
                      {marke.tagline}
                    </p>

                    <ul className="mt-9 grid gap-px bg-line">
                      {marke.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="bg-paper py-4 leading-relaxed text-ink-soft"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={marke.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-9 inline-flex items-center gap-2.5 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
                    >
                      <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-current">
                        Produkte von {marke.name} ansehen
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        headline="Etwas Interessantes entdeckt?"
        text="Lassen Sie sich ein Angebot erstellen oder vereinbaren Sie gleich einen persönlichen Beratungstermin."
        label="Angebot anfragen"
        href={`/kontakt?thema=${encodeURIComponent("Angebot / Produktanfrage")}`}
      />
    </>
  );
}

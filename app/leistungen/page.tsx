import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ArrowRight, Container, Section } from "@/components/ui";
import { leistungen } from "@/lib/leistungen";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Leistungen",
  description:
    "Bedarfsanalyse, Aufmaß, Architekten-Büroplanung, Musterstellungen, Realisierung, Umzugplanung, Leasing sowie Services für Architekten und Vermieter.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Von der ersten Idee bis zur gebrauchsfertigen Übergabe"
        lead="Wir begleiten Sie in allen Phasen Ihres Projekts. Nutzen Sie einzelne Bausteine – oder das komplette Paket aus einer Hand."
        tone="sand"
        breadcrumbs={[
          { href: "/", label: "Startseite" },
          { href: "/leistungen", label: "Leistungen" },
        ]}
      />

      <Section>
        <Container width="wide">
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {leistungen.map((leistung) => (
              <li key={leistung.slug}>
                <Link
                  href={`/leistungen/${leistung.slug}`}
                  className="group flex h-full flex-col"
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

                  <p className="mt-6 text-[0.7rem] font-medium tracking-[0.22em] text-accent uppercase">
                    {leistung.eyebrow}
                  </p>
                  <h2 className="mt-3 flex items-start justify-between gap-4 text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                    {leistung.nav}
                    <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-line-strong transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent" />
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {leistung.teaser}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        headline="Welche Leistung passt zu Ihrem Projekt?"
        text="Sagen Sie uns kurz, worum es geht – wir sortieren gemeinsam, was Sie wirklich brauchen."
        label="Jetzt beraten lassen"
      />
    </>
  );
}

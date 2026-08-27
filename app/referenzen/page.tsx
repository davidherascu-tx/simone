import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ReferenceDirectory } from "@/components/reference-directory";
import { Container, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { referenzen } from "@/lib/referenzen";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Referenzen",
  description:
    "Ein Auszug aus fast drei Jahrzehnten B2B-Einrichtungserfahrung: Behörden, Kliniken, Hochschulen, Industrie und Mittelstand in Berlin und Brandenburg.",
  path: "/referenzen",
});

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title={`${site.yearsOfExperience} Jahre B2B- und Einrichtungserfahrung`}
        lead="In modern eingerichteten Häusern zuhause: Behörden und Ämter, Kliniken und Pflege, Hochschulen und Forschung, Industrie, Handel und Mittelstand. Ein Auszug unserer Referenzen."
        tone="sand"
        breadcrumbs={[
          { href: "/", label: "Startseite" },
          { href: "/referenzen", label: "Referenzen" },
        ]}
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line shadow-card">
            <div className="bg-surface p-7">
              <dt className="text-sm text-muted">Referenzen im Auszug</dt>
              <dd className="mt-2 font-display text-4xl font-semibold text-accent">
                {referenzen.length}+
              </dd>
            </div>
            <div className="bg-surface p-7">
              <dt className="text-sm text-muted">Seit</dt>
              <dd className="mt-2 font-display text-4xl font-semibold text-accent">
                {site.foundedYear}
              </dd>
            </div>
          </dl>
        }
      />

      <Section>
        <Container width="wide">
          <ReferenceDirectory entries={referenzen} />
        </Container>
      </Section>

      <CtaBand
        headline="Werden Sie unsere nächste Referenz."
        text="Erzählen Sie uns von Ihrem Projekt – wir zeigen Ihnen, wie Ihre Räume aussehen könnten."
        label="Projekt besprechen"
      />
    </>
  );
}

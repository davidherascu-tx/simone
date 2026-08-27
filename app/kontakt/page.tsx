import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description: `${site.name}, ${site.contact.street}, ${site.contact.zip} ${site.contact.city}. Termin vereinbaren, Produktanfrage stellen oder Angebot anfordern.`,
  path: "/kontakt",
});

const kontaktdaten = [
  {
    label: "Adresse",
    value: (
      <>
        {site.name}
        <br />
        {site.contact.street}
        <br />
        {site.contact.zip} {site.contact.city}
      </>
    ),
  },
  {
    label: site.contact.phoneLabel,
    value: (
      <a
        href={site.contact.phoneHref}
        className="text-ink transition-colors hover:text-accent"
      >
        {site.contact.phone}
      </a>
    ),
  },
  {
    label: "E-Mail",
    value: (
      <a
        href={`mailto:${site.contact.email}`}
        className="break-all text-ink transition-colors hover:text-accent"
      >
        {site.contact.email}
      </a>
    ),
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihr Projekt"
        lead={
          <>
            Schreiben Sie uns Ihren Terminwunsch oder Ihre Produktanfrage – oder
            rufen Sie einfach an. Wir melden uns kurzfristig bei Ihnen zurück.
          </>
        }
        tone="sand"
        breadcrumbs={[
          { href: "/", label: "Startseite" },
          { href: "/kontakt", label: "Kontakt" },
        ]}
      />

      <Section>
        <Container width="wide">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-24">
            {/* Kontaktdaten */}
            <div>
              <Eyebrow>So erreichen Sie uns</Eyebrow>

              <dl className="mt-8 space-y-px border-t border-line">
                {kontaktdaten.map((eintrag) => (
                  <div
                    key={eintrag.label}
                    className="grid gap-2 border-b border-line py-6 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <dt className="text-[0.7rem] font-medium tracking-[0.18em] text-muted uppercase sm:pt-1">
                      {eintrag.label}
                    </dt>
                    <dd className="leading-relaxed text-ink-soft not-italic">
                      {eintrag.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Ansprechpartnerin */}
              <div className="mt-12 rounded-xl border-l-2 border-accent bg-accent-soft p-8">
                <Eyebrow>Ihre Einrichtungsexpertin</Eyebrow>
                <p className="mt-5 text-2xl font-semibold text-ink">
                  {site.contact.person}
                </p>
                <p className="mt-2 text-ink-soft">{site.contact.role}</p>
                <p className="mt-1 text-sm text-muted">
                  {site.contact.roleDetail}
                </p>
              </div>

              <div className="mt-12">
                <Eyebrow>Ausstellung</Eyebrow>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  Lernen Sie unsere Produkte live kennen – in der fm Büromöbel
                  Werksausstellung in Berlin-Schönefeld. Bitte vereinbaren Sie
                  vorab einen Termin, damit wir uns Zeit für Sie nehmen können.
                </p>
              </div>
            </div>

            {/* Formular */}
            <div>
              <Eyebrow>Anfrage senden</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold text-ink sm:text-3xl">
                Erzählen Sie uns von Ihrem Vorhaben
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Je mehr wir vorab wissen, desto konkreter können wir im ersten
                Gespräch werden. Pflichtfelder sind mit * gekennzeichnet.
              </p>

              <div className="mt-10">
                <Suspense
                  fallback={
                    <p className="text-sm text-muted">Formular wird geladen …</p>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

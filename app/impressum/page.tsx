import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${site.name}.`,
  path: "/impressum",
  noIndex: true,
});

/** Markiert Angaben, die vor dem Livegang noch ergänzt werden müssen. */
function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="bg-[#fdf3d7] px-1.5 py-0.5 text-ink">[{children}]</span>
  );
}

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        lead="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
        tone="sand"
        breadcrumbs={[
          { href: "/", label: "Startseite" },
          { href: "/impressum", label: "Impressum" },
        ]}
      />

      <Section>
        <Container width="narrow">
          <div className="mb-12 rounded-xl border-l-2 border-accent bg-accent-soft p-7 text-sm leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">Hinweis:</strong> Dieser
            Text ist eine sorgfältig erstellte Vorlage und ersetzt keine
            Rechtsberatung. Bitte prüfen Sie ihn vor der Veröffentlichung und
            ergänzen Sie die gelb markierten Angaben.
          </div>

          <div className="legal-prose">
            <h2>Diensteanbieter</h2>
            <p>
              {site.name}
              <br />
              Inhaberin: {site.contact.person}
              <br />
              {site.contact.street}
              <br />
              {site.contact.zip} {site.contact.city}
              <br />
              {site.contact.country}
            </p>

            <h2>Kontakt</h2>
            <p>
              {site.contact.phoneLabel}:{" "}
              <a href={site.contact.phoneHref}>{site.contact.phone}</a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>

            <h2>Umsatzsteuer-Identifikationsnummer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz: <Todo>USt-IdNr. ergänzen</Todo>
            </p>

            <h2>Berufsrechtliche Angaben</h2>
            <p>
              <strong>Berufsbezeichnung:</strong> Architektin (verliehen in der
              Bundesrepublik Deutschland)
            </p>
            <p>
              <strong>Zuständige Kammer:</strong>{" "}
              <Todo>
                zuständige Architektenkammer mit Anschrift und Website ergänzen,
                z. B. Brandenburgische Architektenkammer
              </Todo>
            </p>
            <p>
              <strong>Eintragungsnummer:</strong>{" "}
              <Todo>Kammer-Eintragungsnummer ergänzen</Todo>
            </p>
            <p>
              <strong>Berufsrechtliche Regelungen:</strong> Es gelten
              insbesondere das Architekten- und Ingenieurgesetz des zuständigen
              Bundeslandes sowie die Berufsordnung und die Satzungen der
              zuständigen Architektenkammer.{" "}
              <Todo>
                Fundstelle bzw. Link zu den einschlägigen Regelungen ergänzen
              </Todo>
            </p>

            <h2>Berufshaftpflichtversicherung</h2>
            <p>
              Angaben gemäß § 2 Abs. 1 Nr. 11 Dienstleistungs-Informationspflichten-Verordnung
              (DL-InfoV):
              <br />
              Name und Anschrift des Versicherers:{" "}
              <Todo>Versicherer und Anschrift ergänzen</Todo>
              <br />
              Räumlicher Geltungsbereich:{" "}
              <Todo>Geltungsbereich ergänzen, z. B. Deutschland / EU</Todo>
            </p>

            <h2>Redaktionell verantwortlich</h2>
            <p>
              {site.contact.person}
              <br />
              {site.contact.street}, {site.contact.zip} {site.contact.city}
            </p>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht
              erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung der jeweiligen Autorin oder des
              jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht von der Betreiberin
              erstellt wurden, werden die Urheberrechte Dritter beachtet.
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
              umgehend entfernen.
            </p>

            <h2>Bildnachweise</h2>
            <p>
              Produkt- und Objektabbildungen wurden uns freundlicherweise von
              unseren Herstellerpartnern zur Verfügung gestellt. Alle Marken-
              und Produktnamen sowie Logos sind Eigentum der jeweiligen
              Rechteinhaber.
            </p>
            <p>
              <Todo>
                Konkrete Bildnachweise und Lizenzen ergänzen, z. B. fm Büromöbel
                GmbH &amp; Co. KG, Febrü Büromöbel GmbH &amp; Co. KG, C+P
                Möbelsysteme GmbH &amp; Co. KG, LD Seating a.s., Profim sowie
                genutzte Stockfoto-Quellen
              </Todo>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

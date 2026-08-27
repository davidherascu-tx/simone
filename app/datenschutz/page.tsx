import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description: `Informationen zur Verarbeitung personenbezogener Daten auf der Website von ${site.name} gemäß DSGVO.`,
  path: "/datenschutz",
  noIndex: true,
});

/** Markiert Angaben, die vor dem Livegang noch ergänzt werden müssen. */
function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="bg-[#fdf3d7] px-1.5 py-0.5 text-ink">[{children}]</span>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        lead="Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO)."
        tone="sand"
        breadcrumbs={[
          { href: "/", label: "Startseite" },
          { href: "/datenschutz", label: "Datenschutzerklärung" },
        ]}
      />

      <Section>
        <Container width="narrow">
          <div className="mb-12 rounded-xl border-l-2 border-accent bg-accent-soft p-7 text-sm leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">Hinweis:</strong> Dieser
            Text ist eine sorgfältig erstellte Vorlage, die den aktuellen
            Funktionsumfang dieser Website beschreibt. Er ersetzt keine
            Rechtsberatung. Bitte prüfen Sie ihn vor der Veröffentlichung,
            ergänzen Sie die gelb markierten Angaben und passen Sie ihn an,
            sobald weitere Dienste (z. B. Analyse, Karten, Newsletter)
            eingebunden werden.
          </div>

          <div className="legal-prose">
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              {site.name}
              <br />
              {site.contact.person}
              <br />
              {site.contact.street}
              <br />
              {site.contact.zip} {site.contact.city}
              <br />
              {site.contact.country}
              <br />
              {site.contact.phoneLabel}:{" "}
              <a href={site.contact.phoneHref}>{site.contact.phone}</a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
            <p>
              Eine Datenschutzbeauftragte oder ein Datenschutzbeauftragter ist
              nach den gesetzlichen Vorgaben nicht bestellt.
            </p>

            <h2>2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website sowie
              unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
              erfolgt regelmäßig nur nach Ihrer Einwilligung oder wenn eine
              Rechtsgrundlage die Verarbeitung gestattet.
            </p>
            <p>
              Diese Website verwendet <strong>keine Cookies</strong>, keine
              Analyse- oder Trackingdienste, keine Werbenetzwerke und keine
              Social-Media-Plugins. Es findet keine Profilbildung und keine
              automatisierte Entscheidungsfindung statt.
            </p>

            <h2>3. Hosting und Server-Logfiles</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet:{" "}
              <Todo>
                Name und Anschrift des Hosting-Anbieters ergänzen; Vertrag über
                Auftragsverarbeitung nach Art. 28 DSGVO abschließen
              </Todo>
            </p>
            <p>
              Beim Aufruf der Website erhebt der Hosting-Anbieter automatisch
              Informationen, die Ihr Browser übermittelt, und speichert sie in
              sogenannten Server-Logfiles. Dies sind insbesondere:
            </p>
            <ul>
              <li>aufgerufene Seite bzw. Datei und Zugriffsstatus</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>übertragene Datenmenge</li>
              <li>Browsertyp, Browserversion und verwendetes Betriebssystem</li>
              <li>Referrer-URL (die zuvor besuchte Seite)</li>
              <li>IP-Adresse in gekürzter bzw. anonymisierter Form</li>
            </ul>
            <p>
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
              Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt in der technisch
              fehlerfreien Darstellung, der Stabilität und der Sicherheit
              unserer Website.
            </p>
            <p>
              Speicherdauer:{" "}
              <Todo>
                tatsächliche Speicherdauer der Logfiles beim Hoster ergänzen,
                üblich sind 7 bis 30 Tage
              </Todo>
            </p>

            <h2>4. Kontaktaufnahme</h2>
            <h3>4.1 Kontaktformular</h3>
            <p>
              Das Kontaktformular auf dieser Website überträgt{" "}
              <strong>keine Daten an unseren Webserver</strong>. Ihre Eingaben
              werden ausschließlich in Ihrem Browser zu einer E-Mail
              zusammengestellt und in Ihrem lokalen E-Mail-Programm geöffnet.
              Die Nachricht verlässt Ihren Rechner erst, wenn Sie sie selbst aus
              Ihrem E-Mail-Programm absenden.
            </p>
            <h3>4.2 E-Mail, Telefon und Post</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Post kontaktieren, werden
              Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zur
              Bearbeitung Ihres Anliegens und für den Fall von Anschlussfragen
              bei uns gespeichert.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
              übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
              Interesse an der effektiven Bearbeitung der an uns gerichteten
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
            </p>
            <p>
              Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
              Ihre Einwilligung widerrufen oder der Zweck der Speicherung
              entfällt. Zwingende gesetzliche Aufbewahrungsfristen –
              insbesondere handels- und steuerrechtliche – bleiben unberührt.
            </p>

            <h2>5. Schriftarten</h2>
            <p>
              Diese Website bindet Schriftarten lokal ein. Die Schriftdateien
              werden von unserem eigenen Server ausgeliefert; es wird{" "}
              <strong>keine Verbindung zu Servern Dritter</strong> – etwa zu
              Google Fonts – aufgebaut. Es werden dabei keine personenbezogenen
              Daten an Dritte übermittelt.
            </p>

            <h2>6. Externe Links</h2>
            <p>
              Diese Website enthält Links zu Websites unserer Herstellerpartner
              und anderer Dritter. Beim Anklicken eines solchen Links verlassen
              Sie unsere Website. Auf die Datenverarbeitung auf den verlinkten
              Websites haben wir keinen Einfluss; es gelten die
              Datenschutzhinweise der jeweiligen Anbieter.
            </p>

            <h2>7. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf
              „https://“ wechselt und am Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h2>8. Ihre Rechte als betroffene Person</h2>
            <p>Ihnen stehen gegenüber uns folgende Rechte zu:</p>
            <ul>
              <li>
                <strong>Auskunft</strong> über die zu Ihrer Person gespeicherten
                Daten und deren Verarbeitung (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Berichtigung</strong> unrichtiger oder Vervollständigung
                unvollständiger Daten (Art. 16 DSGVO)
              </li>
              <li>
                <strong>Löschung</strong> Ihrer bei uns gespeicherten Daten
                (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Einschränkung der Verarbeitung</strong>, soweit wir Ihre
                Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen
                (Art. 18 DSGVO)
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong>, sofern Sie in die
                Verarbeitung eingewilligt haben oder einen Vertrag mit uns
                abgeschlossen haben (Art. 20 DSGVO)
              </li>
              <li>
                <strong>Widerspruch</strong> gegen die Verarbeitung, soweit
                diese auf Art. 6 Abs. 1 lit. f DSGVO beruht (Art. 21 DSGVO)
              </li>
              <li>
                <strong>Widerruf einer erteilten Einwilligung</strong> mit
                Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)
              </li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>

            <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Für uns
              zuständig ist:
            </p>
            <p>
              Die Landesbeauftragte für den Datenschutz und für das Recht auf
              Akteneinsicht Brandenburg
              <br />
              Stahnsdorfer Damm 77, 14532 Kleinmachnow
              <br />
              <a
                href="https://www.lda.brandenburg.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.lda.brandenburg.de
              </a>
            </p>
            <p>
              Unabhängig davon können Sie sich an die Aufsichtsbehörde Ihres
              gewöhnlichen Aufenthaltsorts oder Ihres Arbeitsplatzes wenden.
            </p>

            <h2>10. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir passen diese Datenschutzerklärung an, sobald Änderungen der
              von uns durchgeführten Datenverarbeitungen dies erforderlich
              machen – etwa bei der Einführung neuer Dienste. Für Ihren erneuten
              Besuch gilt dann die jeweils aktuelle Fassung.
            </p>

            <p className="mt-12 text-sm text-muted">
              Siehe auch unser{" "}
              <Link href="/impressum">Impressum</Link>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

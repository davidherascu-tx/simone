# Simone März Objekteinrichtungen – Website

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · TypeScript

Alle Seiten werden statisch vorgerendert (SSG). Es gibt keine Datenbank, keine
Cookies und kein Tracking.

## Entwicklung

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

## Seitenstruktur

| Route                  | Inhalt                                                |
| ---------------------- | ----------------------------------------------------- |
| `/`                    | Startseite                                            |
| `/leistungen`          | Übersicht aller neun Leistungen                       |
| `/leistungen/[slug]`   | Detailseite je Leistung (statisch generiert)          |
| `/hersteller`          | fm Büromöbel, Febrü, C+P, LD Seating, Profim          |
| `/referenzen`          | Referenzliste A–Z mit Suche                           |
| `/kontakt`             | Kontaktdaten und Anfrageformular                      |
| `/impressum`           | Impressum (Vorlage)                                   |
| `/datenschutz`         | Datenschutzerklärung (Vorlage)                        |
| `/sitemap.xml`         | Automatisch erzeugt                                   |
| `/robots.txt`          | Automatisch erzeugt                                   |

## Wo Inhalte gepflegt werden

Der komplette Text steckt in `lib/` – die Seiten selbst enthalten nur Layout.

| Datei                | Inhalt                                                        |
| -------------------- | ------------------------------------------------------------- |
| `lib/site.ts`        | Firmenname, Adresse, Telefon, E-Mail, Domain, Jahreszahlen     |
| `lib/leistungen.ts`  | Die neun Leistungen inkl. Texten, Bildern und Reihenfolge      |
| `lib/hersteller.ts`  | Hersteller mit Logo, Beschreibung und Website                  |
| `lib/referenzen.ts`  | Referenzliste (Gruppierung A–Z passiert automatisch)           |
| `lib/metadata.ts`    | Gemeinsamer Bau der SEO- und Open-Graph-Metadaten              |

Eine neue Leistung anlegen: einen Eintrag in `lib/leistungen.ts` ergänzen. Menü,
Übersicht, Footer, Sitemap und die Vor-/Zurück-Navigation aktualisieren sich
automatisch.

Bilder liegen in `public/`. Wird eine Datei unter gleichem Namen ersetzt, zieht
die Änderung überall.

## Kontaktformular

Das Formular sendet nichts an einen Server: Es stellt die Nachricht im Browser
zusammen und öffnet das E-Mail-Programm der Besucherin oder des Besuchers
(`mailto:`). Dadurch werden keine personenbezogenen Daten übertragen und es wird
kein Backend benötigt.

Für einen echten serverseitigen Versand (z. B. über Resend, Postmark oder SMTP)
genügt es, `handleSubmit` in `components/contact-form.tsx` durch eine Server
Action zu ersetzen. Die Datenschutzerklärung muss dann entsprechend angepasst
werden.

## Vor dem Livegang zu erledigen

1. **Domain** in `lib/site.ts` (`site.url`) auf die echte Adresse setzen – sie
   steuert Canonical-Links, Open Graph, Sitemap und robots.txt.
2. **Impressum** (`app/impressum/page.tsx`): USt-IdNr., zuständige
   Architektenkammer, Eintragungsnummer, berufsrechtliche Regelungen,
   Berufshaftpflichtversicherung und Bildnachweise ergänzen. Die offenen Stellen
   sind im Text gelb markiert.
3. **Datenschutzerklärung** (`app/datenschutz/page.tsx`): Hosting-Anbieter und
   Speicherdauer der Logfiles ergänzen, Auftragsverarbeitungsvertrag abschließen.
4. **Rechtstexte anwaltlich prüfen lassen.** Beide Seiten sind sorgfältig
   erstellte Vorlagen, aber keine Rechtsberatung.
5. **Hersteller-Links** in `lib/hersteller.ts` prüfen – die URLs sind nach bestem
   Wissen eingetragen, aber nicht verifiziert.
6. **Doppeltes Bild ersetzen:** `Umzugplanung.webp` ist byte-identisch mit
   `Bedarfsanalyse.webp` – beide Leistungsseiten zeigen dieselbe Aufnahme.

## Startseiten-Slider

Der Slider liegt in `components/hero-slider.tsx`, die Bilder und Alt-Texte
stehen im Array `slides` in `app/page.tsx`. Ein Bild austauschen oder
hinzufügen: Datei nach `public/` legen und den Eintrag ergänzen – Punkte,
Zähler und Pfeile passen sich automatisch an.

Der Text steht neben dem Slider, nicht darauf – die Fotos bleiben dadurch ohne
Farbschleier. Der automatische Wechsel (6,5 s) pausiert bei Hover, bei
Tastaturfokus und wenn das Betriebssystem „Bewegung reduzieren“ meldet.

## Design

Die Farb- und Schriftdefinitionen stehen als Tailwind-Theme-Variablen in
`app/globals.css` (`@theme`).

| Token          | Wert      | Einsatz                                      |
| -------------- | --------- | -------------------------------------------- |
| `accent`       | `#00699C` | Buttons, Links, Zahlen, Logo, CTA-Band       |
| `accent-dark`  | `#003C58` | Dunkle Seitenköpfe, Verläufe, Hover-Zustände |
| `ink`          | `#101820` | Fließtext und Footer                         |
| `accent-soft`  | `#EEF2FA` | Hervorgehobene Kästen                        |
| `paper`        | `#F7F8FA` | Seitenhintergrund                            |

Bilder laufen mit `rounded-2xl` und `shadow-media` bzw. `shadow-card`, Karten
und Kästen mit `rounded-xl`, Buttons und Eingabefelder mit `rounded-lg`. Die
Schattenfarbe ist Tiefblau statt Grau, damit sie zur Palette passt.

Schriften: Inter (Fließtext) und Space Grotesk (Überschriften), über `next/font`
lokal selbst gehostet – es besteht keine Verbindung zu Google Fonts.

## Aktuell nicht eingebundene Bilder

Diese Dateien liegen in `public/`, werden derzeit aber nirgends verwendet:
`Hersteller.webp`, `fm-Sitzgruppe-Dialog.webp` sowie `Bueroplanung-Draufsicht.webp`
(Dublette von `Bueroplanung.webp`).

`chair.png` und `chair.webp` zeigen dasselbe freigestellte Motiv. Eingebunden ist
`chair.png`; `chair.webp` wird derzeit nicht gebraucht. Für die Auslieferung
spielt die Quelldatei keine Rolle – Next.js optimiert beide und liefert WebP
inklusive Transparenz aus.

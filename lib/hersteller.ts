/**
 * Unsere Hersteller.
 *
 * Hinweis: Die hinterlegten Hersteller-Websites (`url`) sind nach bestem Wissen
 * eingetragen, aber nicht verifiziert. Bitte vor dem Livegang einmal prüfen bzw.
 * durch die offiziellen Partnerlinks ersetzen.
 */

export type Hersteller = {
  slug: string;
  name: string;
  country: string;
  badge?: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  url: string;
  tagline: string;
  bullets: string[];
};

export const hersteller: Hersteller[] = [
  {
    slug: "fm-bueromoebel",
    name: "fm Büromöbel",
    country: "Deutschland",
    badge: "Unsere Werksausstellung in Berlin-Schönefeld",
    logo: "/fm_logo_bueromoebel.webp",
    logoWidth: 827,
    logoHeight: 346,
    url: "https://www.fm-bueromoebel.de",
    tagline: "Riesiges Sortiment – für eine Gestaltung aus einem Guss.",
    bullets: [
      "2 komplexe Schranksysteme, genutet und verleimt, mit Sockel etc. sowie 14 Schreibtischprogramme, davon 5 unterschiedliche Sitz-Steh-Tische",
      "21 Dekore (u. a. Beton und Eiche Natur), 5 Gestellfarben und verchromte Füße (Bi-Color)",
      "Container, Trennwände, Akustiklösungen, Beleuchtung – bis hin zu mobilen Pflanzkästen",
      "Sitzmöbel für alle Bereiche inklusive Lounge",
      "Sonderanfertigungen ab Losgröße 1 für perfekt passende Lösungen",
      "Sofortlieferprogramm: in 7 Arbeitstagen arbeitsfähig",
      "Höchste Umwelt- und Qualitätsstandards, mehrfach ausgezeichnetes Design",
    ],
  },
  {
    slug: "februe",
    name: "Febrü",
    country: "Deutschland",
    logo: "/Februe_Logo.webp",
    logoWidth: 1024,
    logoHeight: 565,
    url: "https://www.februe.de",
    tagline:
      "Rund 200 Mitarbeitende fertigen auf höchstem Niveau – unter anderem:",
    bullets: [
      "Büromöbelsysteme inklusive Sitz-Steh-Schreibtischen und Stauraum – auch in Echtholzfurnier",
      "Akustiklösungen",
      "Sitz- und Loungemöbel",
      "Sehr schöne Ergänzungsmöbel und Büroaccessoires",
    ],
  },
  {
    slug: "c-p",
    name: "C+P",
    country: "Deutschland",
    logo: "/Logo_CP.webp",
    logoWidth: 1024,
    logoHeight: 1024,
    url: "https://www.cp.de",
    tagline: "Seit 1925 auf Produkte aus Stahl spezialisiert – aber nicht nur.",
    bullets: [
      "Umkleide- und Schließfächer (Marktführer)",
      "Lager- und Betriebseinrichtungen",
      "Büro und Archivierung",
      "Glastrennwände",
      "Climate Office – Wandbegrünung, Wasserwände und mehr",
      "Bemusterung bei Objekten möglich",
    ],
  },
  {
    slug: "ld-seating",
    name: "LD Seating",
    country: "Tschechien",
    logo: "/Logo_LD-seating.webp",
    logoWidth: 250,
    logoHeight: 118,
    url: "https://www.ldseating.com",
    tagline: "Sitzmöbelspezialist für designorientierte Einrichtungen.",
    bullets: [
      "Drehstühle",
      "Besucher- und Konferenzstühle",
      "Loungebereiche",
      "Lifestyleprodukte",
      "Bemusterung möglich",
    ],
  },
  {
    slug: "profim",
    name: "Profim",
    country: "Polen",
    logo: "/Logo_profim.webp",
    logoWidth: 1024,
    logoHeight: 414,
    url: "https://www.profim.eu",
    tagline:
      "Herausragendes Preis-/Leistungsverhältnis für moderne, frische Sitzmöbel.",
    bullets: [
      "Chefsessel, Drehstühle, Konferenz- und Besucherstühle, Loungemöbel, Tische, Bänke, Barhocker, Garderoben",
      "Verschiedenste langlebige Bezugsstoffe inklusive zweier Lederarten decken alle Einsatzbereiche ab",
      "Gewinner prestigeträchtiger Wettbewerbe wie Red Dot Award, German Design Award und Top Design Award",
      "Durch das Zentrallager in Deutschland auch kurzfristige leihweise Bemusterungen möglich",
    ],
  },
];

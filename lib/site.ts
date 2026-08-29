/**
 * Zentrale Stammdaten der Website.
 * Adresse, Telefon und E-Mail werden an allen Stellen von hier gelesen –
 * eine Änderung hier wirkt sich auf Header, Footer, Kontakt und Impressum aus.
 */
export const site = {
  name: "Simone März Objekteinrichtungen",
  shortName: "Simone März",
  tagline: "Innovative Büroeinrichtung. Individuelle Planung.",
  description:
    "Beratung, Architekten-Büroplanung und Realisierung von Büro- und Objekteinrichtungen. Simone März Objekteinrichtungen aus Teupitz – für Berlin, Brandenburg und darüber hinaus.",
  // Basis für Canonicals, Open Graph, robots.txt und sitemap.xml.
  // Die Domain wird später bei Netlify verbunden – dieser Wert muss dann exakt
  // der bei Netlify als primär gesetzten Domain entsprechen (mit oder ohne www).
  url: "https://www.maerz-objekteinrichtungen.de",
  foundedYear: 1996,
  yearsOfExperience: 30,
  /** Datum der letzten inhaltlichen Änderung – speist die sitemap.xml. */
  contentUpdated: "2026-08-28",
  /**
   * Bestätigungscode der Google Search Console (Methode „HTML-Tag“).
   *
   * In der Search Console die Property anlegen, dort den `content`-Wert des
   * angebotenen Meta-Tags kopieren und hier eintragen – nur den Code, nicht das
   * ganze Tag. Solange der Wert leer ist, wird kein Meta-Tag ausgegeben.
   */
  googleSiteVerification: "",
  contact: {
    person: "Simone März",
    role: "Dipl.-Ing. Architektin",
    roleDetail: "Architekturleistung / Büromöbel regional",
    street: "Chausseestraße 11",
    zip: "15755",
    city: "Teupitz",
    country: "Deutschland",
    phone: "+49 176 10 200 555",
    phoneHref: "tel:+4917610200555",
    phoneLabel: "Mobil",
    email: "info@maerz-objekteinrichtungen.de",
  },
  /** Steuer-, kammer- und versicherungsrechtliche Angaben für das Impressum. */
  legal: {
    vatId: "DE407110268",
    taxNumber: "049/247/07203",
    professionalTitle: "Dipl.-Ing. Architektin",
    chamber: {
      name: "Brandenburgische Architektenkammer",
      street: "Kurfürstenstraße 52",
      zip: "14467",
      city: "Potsdam",
      registrationNumber: "BA 1677-95-1-A",
    },
    insurance: {
      // Anschrift und Geltungsbereich bitte einmal mit dem Versicherungsschein
      // abgleichen – die DL-InfoV verlangt hier korrekte Angaben.
      name: "VHV Allgemeine Versicherung AG",
      street: "VHV-Platz 1",
      zip: "30177",
      city: "Hannover",
      scope:
        "Berufs-Haftpflichtversicherung für Architekten und Bauingenieure",
      policyNumber: "H237-21016",
      territory: "Deutschland",
    },
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const legalNav = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutzerklärung" },
];

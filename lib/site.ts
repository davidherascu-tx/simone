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
  // Für Metadaten und Sitemap – bitte an die spätere Live-Domain anpassen.
  url: "https://www.maerz-objekteinrichtungen.de",
  foundedYear: 1996,
  yearsOfExperience: 30,
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

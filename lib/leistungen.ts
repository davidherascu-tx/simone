/**
 * Inhalte der neun Leistungs-Unterseiten.
 * Reihenfolge = Reihenfolge im Menü, auf der Übersicht und in der Weiter-Navigation.
 */

export type LeistungBlock =
  | { kind: "text"; title?: string; items: string[] }
  | {
      kind: "list";
      title?: string;
      intro?: string;
      items: string[];
      outro?: string;
    }
  | {
      kind: "highlight";
      title: string;
      items: string[];
      link?: { href: string; label: string };
    };

export type Leistung = {
  slug: string;
  nav: string;
  title: string;
  eyebrow: string;
  teaser: string;
  image: string;
  imageAlt: string;
  /** "contain" für Grundrisse und Zeichnungen, die nicht angeschnitten werden dürfen. */
  imageFit: "cover" | "contain";
  blocks: LeistungBlock[];
  cta: { headline: string; label: string };
};

export const leistungen: Leistung[] = [
  {
    slug: "bedarfsanalyse",
    nav: "Bedarfsanalyse",
    title: "Beratung + Bedarfsanalyse",
    eyebrow: "Leistung 01",
    teaser:
      "Wir analysieren Ihren Bedarf und entwickeln daraus eine Lösung, die zu Ihren Abläufen passt – nicht umgekehrt.",
    image: "/Bedarfsanalyse.webp",
    imageAlt:
      "Draufsicht auf einen Besprechungstisch mit Grundriss, Farbmustern und vier Personen im Gespräch",
    imageFit: "cover",
    blocks: [
      {
        kind: "text",
        items: [
          "Jedes gute Projekt beginnt mit Zuhören. Unsere Beratung startet deshalb mit einer detaillierten Bedarfsanalyse, in der wir Ihre individuellen Anforderungen und Wünsche aufnehmen.",
          "Wir sprechen über Ihre Arbeitsabläufe, die räumlichen Gegebenheiten und Ihre organisatorischen Bedürfnisse. Daraus entwickeln wir ein maßgeschneidertes Bürokonzept für Ihr Unternehmen.",
          "Damit Sie das Konzept nicht nur lesen, sondern sehen können, erstellt unsere Architektin anschließend 2D- und 3D-Raumplanungen für Sie.",
        ],
      },
      {
        kind: "list",
        title: "Worüber wir im Gespräch sprechen",
        items: [
          "Arbeitsformen und tägliche Abläufe – wer arbeitet wie, wo und mit wem?",
          "Anzahl der Arbeitsplätze, Bereiche und ihre Zuordnung zueinander",
          "Kommunikation und Konzentration: offene Zonen, Rückzug, Besprechung",
          "Akustik, Beleuchtung und Ergonomie",
          "Stauraum, Archivierung und Garderobe",
          "Budget, Zeitschiene und mögliche Bauabschnitte",
        ],
      },
      {
        kind: "highlight",
        title: "Grundlage ist ein exaktes Aufmaß",
        items: [
          "Maßstäbliche Planungen brauchen belastbare Maße. Wir prüfen vorhandene Grundrisse oder nehmen den Raum vollständig vor Ort auf.",
        ],
        link: { href: "/leistungen/aufmass", label: "Mehr zum Aufmaß" },
      },
      {
        kind: "highlight",
        title: "Finanzierung früh mitdenken",
        items: [
          "Ob Sie kaufen oder leasen, kann sich auf das Gesamtkonzept auswirken – etwa auf Umfang und Bauabschnitte. Es lohnt sich deshalb, das Thema früh zu betrachten.",
        ],
        link: { href: "/leistungen/leasing", label: "Leasing im Überblick" },
      },
    ],
    cta: {
      headline: "Lassen Sie uns über Ihren Bedarf sprechen.",
      label: "Termin vereinbaren",
    },
  },
  {
    slug: "aufmass",
    nav: "Aufmaß",
    title: "Ein exaktes Aufmaß",
    eyebrow: "Leistung 02",
    teaser:
      "Oft unterschätzt und doch unverzichtbar: Ohne belastbare Maße gibt es keine belastbare Planung.",
    image: "/Aufmass.webp",
    imageAlt:
      "Laser-Entfernungsmesser und Bleistift auf einer technischen Zeichnung",
    imageFit: "cover",
    blocks: [
      {
        kind: "text",
        items: [
          "Für maßstäbliche Raumplanungen benötigen wir eine ganze Reihe an Informationen zum Raum sowie aussagekräftige Grundrisse.",
        ],
      },
      {
        kind: "list",
        title: "Diese Angaben brauchen wir",
        items: [
          "Raumhöhe, -breite und -tiefe",
          "Abmessungen aller Vorsprünge und gegebenenfalls Säulen im Raum",
          "Höhe und Breite der Fensterbrüstungen",
          "Fensterart – für eine möglichst realistische Darstellung",
          "Position und Art der Deckenleuchten",
          "Lage aller Strom- und Datenanschlüsse",
          "Lage der Lichtschalter und Maße der Fußbodenleisten",
        ],
      },
      {
        kind: "highlight",
        title: "Was wir für Sie tun können",
        items: [
          "Wir überprüfen Ihre vorhandenen Grundrisse auf Vollständigkeit und Plausibilität – oder erstellen das gesamte Aufmaß für Sie vor Ort. So gehen keine Zentimeter verloren, die später teuer werden.",
        ],
      },
    ],
    cta: {
      headline: "Wir nehmen Ihre Räume auf.",
      label: "Aufmaß anfragen",
    },
  },
  {
    slug: "bueroplanung",
    nav: "Architekten Büroplanung",
    title: "Architekten Büroplanung",
    eyebrow: "Leistung 03",
    teaser:
      "Individuelle Raum- und Büroplanungen in 2D, 3D und perspektivischer Darstellung – von unserer Architektin.",
    image: "/Bueroplanung.webp",
    imageAlt:
      "Übersichtsplan einer Büromöbelplanung mit mehreren Räumen, Lounge und zwei Meetingräumen",
    imageFit: "contain",
    blocks: [
      {
        kind: "text",
        items: [
          "Unsere erfahrene Architektin, Frau Simone März, erstellt für Sie individuelle Raum- und Büroplanungen in 2D, 3D und perspektivischen Darstellungen.",
          "Dabei werden selbstverständlich alle gesetzlichen und berufsgenossenschaftlichen Vorgaben berücksichtigt – von Verkehrswegen und Fluchtwegbreiten bis zu Arbeitsplatzflächen und den Anforderungen an Bildschirmarbeitsplätze.",
          "Die Planungen sind kreativ und auf Ihre spezifischen Anforderungen zugeschnitten – unabhängig davon, in welcher Branche Sie tätig sind.",
        ],
      },
      {
        kind: "list",
        title: "Was Sie von uns erhalten",
        items: [
          "Maßstäbliche Grundriss- und Möblierungspläne",
          "3D-Visualisierungen und perspektivische Ansichten Ihrer Räume",
          "Varianten zum Vergleich – damit Sie eine echte Entscheidung treffen können",
          "Material-, Dekor- und Farbkonzept passend zur Planung",
          "Ein Gesamtangebot, das exakt zur gezeigten Planung gehört",
        ],
      },
    ],
    cta: {
      headline:
        "Gefällt Ihnen, was Sie sehen? Wir setzen auch Ihr Projekt visuell um.",
      label: "Planung anfragen",
    },
  },
  {
    slug: "musterstellungen",
    nav: "Musterstellungen",
    title: "Musterstellungen",
    eyebrow: "Leistung 04",
    teaser:
      "In Ruhe auswählen, anfassen und testen – für eine Entscheidung, die das ganze Team mitträgt.",
    image: "/Musterstellung.webp",
    imageAlt:
      "Beraterin wählt Farb- und Materialmuster aus einer Musterkollektion aus",
    imageFit: "cover",
    blocks: [
      {
        kind: "text",
        items: [
          "Farben und Oberflächen wirken am Bildschirm anders als im Raum. Wenn Sie in Ruhe auswählen und testen möchten, stellen wir Ihnen leihweise Originalmuster zur Verfügung.",
        ],
      },
      {
        kind: "list",
        title: "Was wir bemustern",
        items: [
          "Dekore",
          "Furniere",
          "Massivholzplatten",
          "Metall- und Lackfarben",
          "Stoff- und Ledermuster",
        ],
        outro:
          "Bei größeren Stückzahlen auch Einzelstühle – bis hin zur Bemusterung eines kompletten Bereiches mit Büro- und Sitzmöbeln.",
      },
      {
        kind: "highlight",
        title: "Oder gleich in unsere Ausstellung",
        items: [
          "Lernen Sie unsere Produkte live kennen, setzen Sie sich probe und nehmen Sie am Ende des Gesprächs gleich Muster und Prospekte mit.",
        ],
      },
    ],
    cta: {
      headline: "Gute Idee – ich möchte einen Termin vereinbaren.",
      label: "Termin vereinbaren",
    },
  },
  {
    slug: "realisierung",
    nav: "Realisierung",
    title: "Von der Auftragserteilung bis zur Realisierung",
    eyebrow: "Leistung 05",
    teaser:
      "Logistik, Vertragen und Montage aus einer Hand – damit Sie sich weiter um Ihr Geschäft kümmern können.",
    image: "/Realisierung.webp",
    imageAlt:
      "Montage eines Büromöbels – ein Scharnier wird mit dem Schraubendreher justiert",
    imageFit: "cover",
    blocks: [
      {
        kind: "text",
        items: [
          "Gerade beim Einsatz von Einrichtungen mehrerer Hersteller mit unterschiedlichen Lieferzeiten kommt es auf eine sorgfältige Logistikplanung an.",
          "Wir stimmen den optimalen Lieferzeitpunkt mit Ihnen ab und koordinieren anschließend die gesamte Anlieferung für Sie.",
          "Die meisten unserer Kunden entscheiden sich dafür, das Vertragen ab Bordsteinkante zum Montageort und die Montage von unserem Montageteam – oder dem des Herstellers – übernehmen zu lassen. Dafür gibt es gute Gründe:",
        ],
      },
      {
        kind: "list",
        title: "Drei gute Gründe für Vertragen und Montage",
        items: [
          "Haftung: Büromöbel sind sperrig und schwer – ein Sitz-Steh-Schreibtisch mit B 160 × T 80 cm wiegt allein rund 55 kg. Mit Vertragen und Montage übernehmen wir lückenlos das Risiko: für den Transport bis zur Verwendungsstelle, für eventuelle Boden- und Wandschäden und bis zum Nachweis der Funktionsfähigkeit vor der Abnahme.",
          "Zeit: Wir nehmen die örtlichen Bedingungen auf – Anfahrt, Treppenstufen, Durchgangsbreiten und -höhen – und übernehmen Organisation und Durchführung der Logistik. Sie können sich währenddessen voll auf Ihr Geschäft konzentrieren.",
          "Stresslose Anlieferung und Abnahme: In der Regel ist Ihr persönlicher Ansprechpartner bei der Anlieferung mit vor Ort, kümmert sich um die Abwicklung und übergibt Ihnen anschließend Ihre neuen Möbel.",
        ],
      },
    ],
    cta: {
      headline: "Sie haben Interesse und möchten einen Termin vereinbaren?",
      label: "Termin vereinbaren",
    },
  },
  {
    slug: "umzugplanung",
    nav: "Umzugplanung",
    title: "Umzugplanung",
    eyebrow: "Leistung 06",
    teaser:
      "Sie möchten oder müssen Ihren Standort verändern? Wir planen den Umzug so, dass Ihr Betrieb weiterläuft.",
    image: "/Umzugplanung.webp",
    imageAlt: "Draufsicht auf eine Besprechungssituation mit Plänen und Mustern",
    imageFit: "cover",
    blocks: [
      {
        kind: "text",
        items: [
          "Wenn Sie einen Umzug planen, unterstützen wir Sie bei Planung und Organisation.",
          "Wir nehmen Ihr vorhandenes Mobiliar und die räumlichen Gegebenheiten Ihres neuen Standorts auf. Daraus entwickeln wir Ihr maßgeschneidertes Umzugskonzept – eines, das Ihre Arbeitsabläufe so wenig wie möglich beeinträchtigt.",
          "Unser Team kümmert sich um Abbau, Transport und Wiederaufbau Ihrer Büroeinrichtung.",
        ],
      },
      {
        kind: "list",
        title: "Der Ablauf in vier Schritten",
        items: [
          "Bestandsaufnahme des vorhandenen Mobiliars – was zieht mit, was wird ersetzt?",
          "Aufmaß und Planung des neuen Standorts",
          "Umzugskonzept mit Zeitplan, Etappen und Kennzeichnungssystem",
          "Abbau, Transport, Wiederaufbau und Übergabe",
        ],
      },
      {
        kind: "highlight",
        title: "Bitte beachten Sie",
        items: [
          "Wir bitten um Verständnis, dass wir diesen sehr zeitaufwendigen Service nur in Verbindung mit einer Ergänzung Ihrer Einrichtung durch von uns gelieferte Möbel anbieten können.",
        ],
      },
    ],
    cta: {
      headline: "Ja, wir verändern uns – ich möchte einen Termin vereinbaren.",
      label: "Umzug besprechen",
    },
  },
  {
    slug: "leasing",
    nav: "Leasing",
    title: "Gewerbliches Leasing",
    eyebrow: "Leistung 07",
    teaser:
      "Liquidität und Kreditlinien erhalten – und trotzdem ab sofort modern und hochwertig eingerichtet sein.",
    image: "/Leasing.webp",
    imageAlt:
      "Taschenrechner und Kugelschreiber auf einer handschriftlichen Kalkulation",
    imageFit: "cover",
    blocks: [
      {
        kind: "text",
        items: [
          "Über unseren Partner, die Grenke AG, bieten wir Ihnen verschiedene Leasingoptionen mit Laufzeiten von 24 bis 60 Monaten an. Das Besondere daran: auf Wunsch mit Eigentumsübernahme nach Ablauf der Laufzeit.",
          "Statt hoher sofortiger Anschaffungskosten leasen Sie Ihre Büromöbel und Einrichtungsgegenstände zu attraktiven monatlichen Raten – und übernehmen sie am Ende der Laufzeit ins Eigentum.",
          "So bleiben Ihre Liquidität und Ihre Kreditlinien erhalten, während Sie ab sofort über die gesamte Laufzeit von moderner, hochwertiger Büroeinrichtung profitieren.",
        ],
      },
      {
        kind: "list",
        title: "Die Vorteile auf einen Blick",
        items: [
          "Laufzeiten von 24 bis 60 Monaten",
          "Eigentumsübernahme nach Ablauf der Laufzeit möglich",
          "Planbare monatliche Raten statt einer großen Einmalinvestition",
          "Liquidität und Kreditlinien bleiben für Ihr Kerngeschäft erhalten",
          "Auch spätere Erweiterungen lassen sich sauber abbilden",
        ],
      },
    ],
    cta: {
      headline: "Wir erstellen Ihnen Ihr persönliches Leasingangebot.",
      label: "Leasingangebot anfordern",
    },
  },
  {
    slug: "fuer-architekten",
    nav: "Für Architekten",
    title: "Von Architekt zu Architekt",
    eyebrow: "Leistung 08",
    teaser:
      "Sie planen ein Objekt und brauchen Verstärkung für die Innenraumplanung? Wir sprechen Ihre Sprache.",
    image: "/Fuer_Architekten.webp",
    imageAlt:
      "Drei Planende mit Schutzhelmen besprechen einen Plan auf der Baustelle",
    imageFit: "cover",
    blocks: [
      {
        kind: "text",
        items: [
          "Sie planen ein Objekt und haben keine Zeit oder keine Möglichkeiten, sich zusätzlich um die fachliche und gesetzeskonforme Innenraumplanung zu kümmern?",
          "Oder Sie benötigen spezielle Produkte, die Sie nicht im direkten planerischen Zugriff haben?",
          "Dann nutzen Sie unsere Architektin, Frau Simone März. Sie spricht Ihre Sprache – und hilft Ihnen gerne weiter.",
        ],
      },
      {
        kind: "list",
        title: "Wobei wir Sie unterstützen",
        items: [
          "Möblierungs- und Innenraumplanung in 2D, 3D und Perspektive",
          "Berücksichtigung gesetzlicher und berufsgenossenschaftlicher Vorgaben",
          "Produktauswahl aus dem Portfolio von fünf Herstellern",
          "Bemusterung für Ihre Bauherren",
          "Belastbare Kostenangaben zur Möblierung – früh im Projekt",
        ],
      },
      {
        kind: "highlight",
        title: "Sehen, mit welchen Produkten wir arbeiten",
        items: [
          "Fünf Hersteller, ein Ansprechpartner: von kompletten Möbelsystemen über Akustik und Stahlschränke bis zu designorientierten Sitzmöbeln.",
        ],
        link: { href: "/hersteller", label: "Unsere Hersteller" },
      },
    ],
    cta: {
      headline: "Ich habe Interesse an einem Gespräch.",
      label: "Gespräch vereinbaren",
    },
  },
  {
    slug: "fuer-vermieter",
    nav: "Für Vermieter",
    title: "Service für Vermieter",
    eyebrow: "Leistung 09",
    teaser:
      "Zeigen Sie Ihren Mietinteressenten im Detail, dass ihre Anforderungen in Ihrem Objekt aufgehen.",
    image: "/Fuer_Vermieter.webp",
    imageAlt: "Bürogebäude im Rohbau mit Gerüst und Baukran",
    imageFit: "cover",
    blocks: [
      {
        kind: "text",
        items: [
          "Um Ihren Mietinteressenten en détail zu zeigen, dass ihre Anforderungen und Wünsche in Ihrem Objekt perfekt umgesetzt werden können, hat sich eine maßstäbliche und möglichst realistische Raumplanung bewährt.",
          "Sie haben keine eigene Planungsabteilung für die Innenraumgestaltung – oder Sie haben eine, die zurzeit ausgelastet ist? Dann können wir Ihnen mit unserer Architektin helfen.",
          "Wir unterstützen Sie mit 2D-, 3D- und perspektivischen Raumplanungen und finden gemeinsam mit Ihnen – oder auf Wunsch direkt mit Ihren Interessenten – die besten Raumlösungen.",
        ],
      },
      {
        kind: "highlight",
        title: "Ein zusätzliches Argument für Ihre Interessenten",
        items: [
          "Zusammen mit den Raumplanungen liegt gleich ein Gesamtangebot für die Möblierung vor. So sind diese Kosten von Anfang an mit kalkuliert – und können gegebenenfalls mitfinanziert werden.",
        ],
      },
    ],
    cta: {
      headline: "Ich habe Interesse an einem Gespräch.",
      label: "Gespräch vereinbaren",
    },
  },
];

export function leistungBySlug(slug: string): Leistung | undefined {
  return leistungen.find((l) => l.slug === slug);
}

export const leistungenNav = leistungen.map((l) => ({
  href: `/leistungen/${l.slug}`,
  label: l.nav,
}));

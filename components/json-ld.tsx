/**
 * Gibt strukturierte Daten als `<script type="application/ld+json">` aus.
 *
 * Das `<` wird escaped, damit ein Inhalt mit spitzen Klammern das Script-Tag
 * nicht vorzeitig schließen kann – so empfiehlt es die Next.js-Dokumentation.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

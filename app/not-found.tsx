import Link from "next/link";
import { ArrowRight, ButtonLink, Container, Eyebrow } from "@/components/ui";
import { leistungen } from "@/lib/leistungen";

export default function NotFound() {
  return (
    <Container width="wide" className="py-24 lg:py-36">
      <div className="max-w-2xl">
        <Eyebrow>Fehler 404</Eyebrow>
        <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-ink sm:text-5xl">
          Diese Seite haben wir nicht im Grundriss.
        </h1>
        <p className="mt-7 text-lg leading-relaxed text-ink-soft">
          Die aufgerufene Adresse existiert nicht oder wurde verschoben.
          Vielleicht finden Sie hier, wonach Sie gesucht haben.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/">
            Zur Startseite
            <ArrowRight className="h-3.5 w-3.5" />
          </ButtonLink>
          <ButtonLink href="/kontakt" variant="outline">
            Kontakt aufnehmen
          </ButtonLink>
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-12">
        <p className="text-[0.7rem] font-medium tracking-[0.22em] text-muted uppercase">
          Unsere Leistungen
        </p>
        <ul className="mt-6 grid gap-x-10 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((leistung) => (
            <li key={leistung.slug} className="border-b border-line">
              <Link
                href={`/leistungen/${leistung.slug}`}
                className="block py-3.5 text-ink-soft transition-colors hover:text-accent"
              >
                {leistung.nav}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

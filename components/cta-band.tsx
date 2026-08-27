import { ArrowRight, ButtonLink, Container, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

/**
 * Abschluss-Band mit Handlungsaufforderung.
 * Steht am Ende nahezu jeder Seite – Text und Button sind pro Seite anpassbar.
 */
export function CtaBand({
  eyebrow = "Nächster Schritt",
  headline,
  text,
  label = "Termin vereinbaren",
  href = "/kontakt",
}: {
  eyebrow?: string;
  headline: string;
  text?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="bg-accent text-white">
      <Container width="wide" className="py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl leading-[1.14] font-semibold sm:text-4xl lg:text-[2.75rem]">
              {headline}
            </h2>
            {text ? (
              <p className="mt-6 max-w-xl leading-relaxed text-white/75">
                {text}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <ButtonLink href={href} variant="light" className="w-full sm:w-auto">
              {label}
              <ArrowRight className="h-3.5 w-3.5" />
            </ButtonLink>
            <a
              href={site.contact.phoneHref}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Oder direkt anrufen: {site.contact.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

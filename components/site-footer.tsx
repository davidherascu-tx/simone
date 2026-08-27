import Link from "next/link";
import { Logo } from "@/components/logo";
import { ArrowRight } from "@/components/ui";
import { leistungen } from "@/lib/leistungen";
import { legalNav, site } from "@/lib/site";

const seiten = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/hersteller", label: "Hersteller" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-white/70">
      <div className="mx-auto w-full max-w-[88rem] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-white/60">
              Beratung, Planung und Realisierung von Büro- und
              Objekteinrichtungen. Seit {site.foundedYear} für Unternehmen,
              Verwaltungen und Institutionen in Berlin und Brandenburg.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              Termin vereinbaren
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-white/40 uppercase">
              Leistungen
            </h2>
            <ul className="mt-6 space-y-3">
              {leistungen.map((leistung) => (
                <li key={leistung.slug}>
                  <Link
                    href={`/leistungen/${leistung.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {leistung.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-white/40 uppercase">
              Seiten
            </h2>
            <ul className="mt-6 space-y-3">
              {seiten.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-white/40 uppercase">
              Kontakt
            </h2>
            <address className="mt-6 space-y-4 text-sm not-italic">
              <p className="leading-relaxed text-white/70">
                {site.name}
                <br />
                {site.contact.street}
                <br />
                {site.contact.zip} {site.contact.city}
              </p>
              <p>
                <a
                  href={site.contact.phoneHref}
                  className="text-white transition-colors hover:text-white/70"
                >
                  {site.contact.phone}
                </a>
                <span className="block text-xs text-white/40">
                  {site.contact.phoneLabel}
                </span>
              </p>
              <p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="break-all text-white transition-colors hover:text-white/70"
                >
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {year} {site.name}
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-white/50 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

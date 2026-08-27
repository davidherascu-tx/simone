"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { ArrowRight } from "@/components/ui";
import { leistungen } from "@/lib/leistungen";
import { site } from "@/lib/site";

const mainNav = [
  { href: "/leistungen", label: "Leistungen", hasMenu: true },
  { href: "/hersteller", label: "Hersteller", hasMenu: false },
  { href: "/referenzen", label: "Referenzen", hasMenu: false },
  { href: "/kontakt", label: "Kontakt", hasMenu: false },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Menüs bei jedem Seitenwechsel schließen – auch bei Vor/Zurück im Browser.
  // Zustand während des Renderns anpassen statt in einem Effekt (React-Empfehlung).
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setMobileOpen(false);
    setDesktopMenuOpen(false);
  }

  // Scroll sperren, solange das mobile Menü offen ist.
  useEffect(() => {
    if (!mobileOpen) return;
    const vorher = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = vorher;
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setDesktopMenuOpen(false);
      setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function openDesktopMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopMenuOpen(true);
  }

  function scheduleCloseDesktopMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopMenuOpen(false), 120);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-[88rem] items-center justify-between gap-6 px-6 sm:px-8 lg:h-24 lg:px-12">
          <Logo />

          {/* Desktop-Navigation */}
          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={item.hasMenu ? openDesktopMenu : undefined}
                  onMouseLeave={
                    item.hasMenu ? scheduleCloseDesktopMenu : undefined
                  }
                >
                  <Link
                    href={item.href}
                    aria-haspopup={item.hasMenu ? "true" : undefined}
                    aria-expanded={
                      item.hasMenu
                        ? desktopMenuOpen
                          ? "true"
                          : "false"
                        : undefined
                    }
                    onFocus={item.hasMenu ? openDesktopMenu : undefined}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive(pathname, item.href)
                        ? "text-accent"
                        : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                    {item.hasMenu ? (
                      <svg
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                        className={`h-2.5 w-2.5 transition-transform duration-200 ${
                          desktopMenuOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M2 4.5 6 8.5l4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.6}
                        />
                      </svg>
                    ) : null}
                  </Link>

                  {item.hasMenu && desktopMenuOpen ? (
                    <div
                      className="absolute top-full left-1/2 z-50 w-[42rem] -translate-x-1/2 pt-4"
                      onMouseEnter={openDesktopMenu}
                      onMouseLeave={scheduleCloseDesktopMenu}
                    >
                      <div className="animate-rise rounded-xl border border-line bg-surface p-3 shadow-media">
                        <ul className="grid grid-cols-2 gap-1">
                          {leistungen.map((leistung) => (
                            <li key={leistung.slug}>
                              <Link
                                href={`/leistungen/${leistung.slug}`}
                                onBlur={scheduleCloseDesktopMenu}
                                className="group flex flex-col gap-1 rounded-lg px-4 py-3 transition-colors hover:bg-accent-soft"
                              >
                                <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                                  {leistung.nav}
                                </span>
                                <span className="line-clamp-2 text-xs leading-relaxed text-muted">
                                  {leistung.teaser}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/leistungen"
                          onBlur={scheduleCloseDesktopMenu}
                          className="mt-2 flex items-center justify-between border-t border-line px-4 py-3.5 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
                        >
                          Alle Leistungen im Überblick
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={site.contact.phoneHref}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {site.contact.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
            >
              Termin vereinbaren
            </Link>
          </div>

          {/* Mobile-Umschalter */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          >
            <span className="sr-only">
              {mobileOpen ? "Menü schließen" : "Menü öffnen"}
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
              {mobileOpen ? (
                <path
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth={1.6}
                />
              ) : (
                <path
                  d="M3 7h18M3 12h18M3 17h18"
                  stroke="currentColor"
                  strokeWidth={1.6}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/*
        Wichtig: Das mobile Menü steht bewusst AUSSERHALB von <header>.
        Der Header nutzt backdrop-blur; ein Element mit backdrop-filter wird zum
        Bezugsrahmen für position: fixed. Innerhalb des Headers wäre das Panel
        deshalb nur so hoch wie der Header selbst (und damit unsichtbar).
      */}
      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-paper lg:hidden"
        >
          <nav aria-label="Hauptnavigation mobil" className="px-6 py-8 sm:px-8">
            <p className="text-[0.7rem] font-medium tracking-[0.22em] text-muted uppercase">
              Leistungen
            </p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              <li>
                <Link
                  href="/leistungen"
                  className="block py-3.5 text-base font-medium text-ink"
                >
                  Übersicht
                </Link>
              </li>
              {leistungen.map((leistung) => (
                <li key={leistung.slug}>
                  <Link
                    href={`/leistungen/${leistung.slug}`}
                    className="block py-3.5 text-base text-ink-soft"
                  >
                    {leistung.nav}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-10 divide-y divide-line border-y border-line">
              {mainNav
                .filter((item) => !item.hasMenu)
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-4 text-lg font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/kontakt"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-medium tracking-wide text-white"
              >
                Termin vereinbaren
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={site.contact.phoneHref}
                className="mt-4 block text-center text-sm text-muted"
              >
                {site.contact.phoneLabel}: {site.contact.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}

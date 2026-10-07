"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import logoAnimated from "../../public/brand/kidoo-hub-animacao.gif";
import { CONTACT, NAV } from "@/lib/site";
import { SERVICE_LIST, serviceHref, type ServiceSlug } from "@/lib/services";

const icon = "h-[18px] w-[18px]";

const ICONS: Record<string, ReactNode> = {
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={icon} aria-hidden>
      <path d="M4 5h16v11H9l-5 4V5Z" strokeLinejoin="round" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={icon} aria-hidden>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={icon} aria-hidden>
      <path d="M4 20h16M7 16v-4M12 16V8M17 16V5" strokeLinecap="round" />
    </svg>
  ),
  hub: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="5" cy="18" r="1.5" />
      <circle cx="19" cy="18" r="1.5" />
      <path d="M12 5.5v4M6.2 17l4-3.2M17.8 17l-4-3.2" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" strokeLinejoin="round" />
      <path d="m4 12 8 4 8-4M4 16l8 4 8-4" strokeLinejoin="round" />
    </svg>
  ),
};

const SERVICE_ICONS: Record<ServiceSlug, string> = {
  automacao: "chat",
  "landing-pages": "code",
  "trafego-pago": "chart",
};

const SOLUTIONS = SERVICE_LIST.map((s) => ({
  icon: SERVICE_ICONS[s.slug],
  title: s.name,
  text: s.summary,
  href: serviceHref(s.slug),
}));

const BY_GOAL = [
  { icon: "hub", title: "Ecossistema completo", text: "Tráfego, site e automação conectados", href: "/#como-opera" },
  { icon: "layers", title: "Projeto sob medida", text: "Sistemas, integrações e dashboards", href: serviceHref("landing-pages") },
];

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="m3 4.5 3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-3 p-3 lg:grid-cols-[1fr_1fr_1fr_0.95fr]">
      {SOLUTIONS.map((s) => (
        <Link
          key={s.title}
          href={s.href}
          onClick={onNavigate}
          className="group flex min-h-[230px] flex-col rounded-xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.07] text-white">
              {ICONS[s.icon]}
            </span>
            <span className="font-display text-[15px] font-semibold text-white">{s.title}</span>
          </span>
          <span className="mt-4 text-sm leading-relaxed text-white/60">{s.text}</span>
          <span className="mt-auto flex items-center gap-1.5 pt-6 text-[13px] font-semibold text-white">
            Ver solução
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </Link>
      ))}

      <div className="flex flex-col gap-3 lg:pl-2">
        <p className="px-1 pt-1 font-mono text-[10.5px] font-medium tracking-[0.2em] text-white/50">
          POR OBJETIVO
        </p>
        {BY_GOAL.map((g) => (
          <Link
            key={g.title}
            href={g.href}
            onClick={onNavigate}
            className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="text-white/60">{ICONS[g.icon]}</span>
              {g.title}
            </span>
            <span className="mt-1 block text-[13px] text-white/55">{g.text}</span>
          </Link>
        ))}
        <Link
          href="/contato"
          onClick={onNavigate}
          className="group relative mt-auto overflow-hidden rounded-xl border border-white/25 bg-gradient-to-br from-white/[0.14] to-white/[0.03] px-4 py-4"
        >
          <span className="bg-dots-light pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <span className="relative block text-sm font-semibold text-white">
            Seu próximo projeto começa aqui
          </span>
          <span className="relative mt-1 block text-[13px] text-white/65">
            Conte onde sua empresa quer chegar.
          </span>
          <span className="relative mt-3 flex items-center gap-1.5 text-[13px] font-semibold text-white">
            Falar com a KIDOO
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuOpen(false), 160);
  };
  const closeAll = () => {
    setMenuOpen(false);
    setMobileOpen(false);
    setMobileSolutions(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) closeAll();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-50 flex h-[60px] items-center justify-between rounded-2xl border border-white/10 bg-moss/95 pr-2 pl-5 shadow-[0_20px_50px_-25px_rgb(0_0_0/0.5)] backdrop-blur-xl">
          <Link href="/" aria-label="KIDOO HUB — início" onClick={closeAll}>
            <Image
              src={logoAnimated}
              alt="KIDOO HUB"
              priority
              unoptimized
              className="h-[38px] w-auto brightness-0 invert sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            <div onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mega-solucoes"
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[14px] font-semibold transition-colors ${
                  menuOpen ? "bg-white/10 text-white" : "text-white/85 hover:text-white"
                }`}
              >
                Soluções
                <Chevron open={menuOpen} />
              </button>
            </div>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={scheduleClose}
                className="rounded-lg px-3.5 py-2 text-[14px] font-semibold text-white/85 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da KIDOO"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10"
            >
              <InstagramIcon />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 lg:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-white transition-transform ${mobileOpen ? "rotate-45" : "-translate-y-1"}`}
              />
              <span
                className={`absolute h-px w-4 bg-white transition-transform ${mobileOpen ? "-rotate-45" : "translate-y-1"}`}
              />
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        <div
          id="mega-solucoes"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
          className={`absolute inset-x-0 top-full hidden pt-2 transition-all duration-300 lg:block ${
            menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-moss-deep/[0.97] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] backdrop-blur-xl">
            <MegaMenu onNavigate={closeAll} />
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <>
            <button
              type="button"
              aria-label="Fechar menu"
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={closeAll}
            />
            <div className="relative z-50 mt-2 max-h-[min(32rem,calc(100dvh-5.5rem-env(safe-area-inset-bottom)))] overflow-y-auto rounded-2xl border border-white/10 bg-moss-deep p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-white shadow-2xl lg:hidden">
              <button
                type="button"
                onClick={() => setMobileSolutions((v) => !v)}
                aria-expanded={mobileSolutions}
                className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 py-3.5 font-display text-lg font-semibold"
              >
                Soluções
                <Chevron open={mobileSolutions} />
              </button>
              {mobileSolutions && (
                <div className="space-y-2 px-1 pb-2">
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      onClick={closeAll}
                      className="flex min-h-12 items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3.5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07]">
                        {ICONS[s.icon]}
                      </span>
                      <span>
                        <span className="block text-[15px] font-semibold">{s.title}</span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-white/55">{s.text}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  className="flex min-h-12 items-center justify-between rounded-xl px-3 py-3.5 font-display text-lg font-semibold"
                >
                  {item.label}
                  <span className="font-mono text-xs text-white/40">→</span>
                </Link>
              ))}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/20 px-5 py-3.5 text-[15px] font-semibold"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

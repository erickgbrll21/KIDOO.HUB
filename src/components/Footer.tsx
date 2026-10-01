import Link from "next/link";
import { Logo } from "./Logo";
import { CONTACT } from "@/lib/site";
import { serviceHref } from "@/lib/services";

const NAV = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Automação + IA", href: serviceHref("automacao") },
  { label: "Desenvolvimento", href: serviceHref("landing-pages") },
  { label: "Tráfego Pago", href: serviceHref("trafego-pago") },
  { label: "Cases", href: null },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "#contato" },
];

const SOCIAL = [
  { label: "Instagram", href: CONTACT.instagram },
  { label: "LinkedIn", href: CONTACT.linkedin },
  { label: "WhatsApp", href: CONTACT.whatsapp },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="h-11 w-auto" />
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-moss/70">
              Tecnologia, automação e estratégia conectadas para transformar negócios.
            </p>
            <p className="mt-8 font-mono text-[11px] tracking-[0.22em] text-moss/45">
              HUB DE SOLUÇÕES DIGITAIS
            </p>
          </div>

          <nav className="lg:col-span-4" aria-label="Rodapé">
            <p className="font-mono text-[11px] tracking-[0.2em] text-moss/40">NAVEGAÇÃO</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link href={item.href} className="inline-flex min-h-11 items-center text-moss/75 transition-colors hover:text-moss">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-moss/45">
                      {item.label}
                      <span className="rounded bg-moss/[0.07] px-1.5 py-0.5 font-mono text-[9px] tracking-wider">
                        EM BREVE
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.2em] text-moss/40">REDES</p>
            <ul className="mt-6 space-y-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 items-center gap-2 text-moss/75 transition-colors hover:text-moss"
                  >
                    {s.label}
                    <span className="text-moss/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-moss/10 py-6 text-sm text-moss/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} KIDOO HUB. Todos os direitos reservados.</p>
          <p className="font-mono text-[11px] tracking-[0.22em]">BUILD. AUTOMATE. GROW.</p>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none mx-auto max-w-7xl select-none px-6 pt-4 pb-10 lg:px-10">
        <Logo className="h-auto w-full opacity-[0.07]" />
      </div>
    </footer>
  );
}

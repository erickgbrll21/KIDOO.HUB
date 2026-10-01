import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { AdsVisual, ChatVisual, CodeVisual } from "./ServiceCardVisuals";
import { serviceHref, type ServiceSlug } from "@/lib/services";

type Pillar = {
  id: string;
  slug: ServiceSlug;
  index: string;
  tag: string;
  title: string;
  text: string;
  cta: string;
  items: string[];
  visual: ReactNode;
};

const PILLARS: Pillar[] = [
  {
    id: "automacao",
    slug: "automacao",
    index: "01",
    tag: "AUTOMAÇÃO + IA",
    title: "Seu atendimento trabalhando 24 horas por dia.",
    text: "Criamos automações inteligentes para WhatsApp capazes de atender, qualificar e direcionar seus clientes de forma rápida e escalável.",
    cta: "Explorar Automação",
    items: ["Atendimento 24/7", "Qualificação de leads", "Follow-ups", "Integrações"],
    visual: <ChatVisual />,
  },
  {
    id: "desenvolvimento",
    slug: "landing-pages",
    index: "02",
    tag: "DESENVOLVIMENTO",
    title: "Transformamos ideias em experiências digitais.",
    text: "Sites, Landing Pages e sistemas desenvolvidos com tecnologia moderna, performance e foco na experiência do usuário.",
    cta: "Explorar Desenvolvimento",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    visual: <CodeVisual />,
  },
  {
    id: "trafego",
    slug: "trafego-pago",
    index: "03",
    tag: "TRÁFEGO PAGO",
    title: "Colocamos sua empresa na frente das pessoas certas.",
    text: "Estratégias de mídia paga orientadas por dados para gerar tráfego qualificado, oportunidades e crescimento.",
    cta: "Explorar Tráfego",
    items: ["Meta Ads", "Google Ads", "Remarketing", "Análise de dados"],
    visual: <AdsVisual />,
  },
];

export function Services() {
  return (
    <section id="solucoes" className="relative py-20 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <SectionLabel index="01">SOLUÇÕES</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2rem,8vw,4rem)] leading-[1.05] font-bold tracking-[-0.04em]">
              <span className="block">Um HUB. Diferentes soluções.</span>
              <span className="block text-moss/40">Um único objetivo.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={120}>
            <p className="text-lg leading-relaxed text-moss/70">
              Construir uma operação digital capaz de atrair, converter e atender melhor.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.index} delay={i * 120} className="h-full">
              <article id={p.id} className="group flex h-full flex-col rounded-[1.75rem] border border-moss/12 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-moss/40 hover:shadow-[0_30px_60px_-30px_rgb(53_63_52/0.35)] lg:p-8">
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em]">
                  <span className="text-moss/45">{p.index} —</span>
                  <span className="rounded-full border border-moss/15 px-3 py-1 text-moss/70">
                    {p.tag}
                  </span>
                </div>

                <div className="mt-7 h-52 overflow-hidden rounded-2xl bg-moss/[0.045] p-5">{p.visual}</div>

                <h3 className="mt-8 font-display text-2xl leading-tight font-semibold tracking-[-0.025em]">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-moss/65">{p.text}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-moss/[0.06] px-3 py-1 font-mono text-[11px] text-moss/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="min-h-8 flex-1" />
                <Link
                  href={serviceHref(p.slug)}
                  className="flex min-h-12 items-center justify-between border-t border-moss/10 pt-6 text-[15px] font-medium"
                >
                  {p.cta}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-moss/20 transition-all duration-300 group-hover:border-moss group-hover:bg-moss group-hover:text-white">
                    →
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";
import { ServiceHeroVisual } from "./ServiceHeroVisual";
import { SERVICES, serviceHref, type Service, type ServiceSlug } from "@/lib/services";

const d = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const FLOW: { slug: ServiceSlug; label: string; verb: string }[] = [
  { slug: "trafego-pago", label: "Tráfego", verb: "atrai" },
  { slug: "landing-pages", label: "Landing Page", verb: "converte" },
  { slug: "automacao", label: "Automação", verb: "atende" },
];

function Hero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-44 lg:pb-32">
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-6">
          <nav aria-label="Breadcrumb" className="rise flex flex-wrap items-center gap-x-1 font-mono text-[10px] tracking-[0.12em] text-moss/45 sm:text-[11px] sm:tracking-[0.15em]" style={d(0)}>
            <Link href="/" className="hover:text-moss">INÍCIO</Link>
            <span className="mx-2">/</span>
            <Link href="/#solucoes" className="hover:text-moss">SOLUÇÕES</Link>
            <span className="mx-2">/</span>
            <span className="text-moss/75">{service.name.toUpperCase()}</span>
          </nav>

          <p
            className="rise mt-8 inline-flex items-center gap-3 rounded-full border border-moss/15 bg-white px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-moss/70"
            style={d(80)}
          >
            <span className="text-moss/40">{service.index} —</span>
            {service.tag}
          </p>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,5.6vw,4.9rem)] leading-[0.95] font-bold tracking-[-0.045em]">
            <span className="rise block" style={d(160)}>
              {service.headline[0]}
            </span>
            <span className="rise block text-moss/65" style={d(260)}>
              {service.headline[1]}
            </span>
          </h1>

          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-moss/70" style={d(380)}>
            {service.description}
          </p>

          <div className="rise mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4" style={d(480)}>
            <Link
              href="/contato"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-moss py-3.5 pr-4 pl-7 text-[15px] font-medium text-white shadow-[0_18px_40px_-18px_rgb(53_63_52/0.7)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Falar com a KIDOO
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="#como-funciona"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-moss/20 px-7 py-3.5 text-[15px] font-medium transition-colors hover:border-moss sm:w-auto"
            >
              Ver como funciona
            </a>
          </div>

          {service.stack ? (
            <ul className="rise mt-12 flex flex-wrap gap-2" style={d(600)}>
              {service.stack.map((tech) => (
                <li key={tech} className="rounded-full bg-moss/[0.06] px-3 py-1.5 font-mono text-[11px] text-moss/70">
                  {tech}
                </li>
              ))}
            </ul>
          ) : (
            <p className="rise mt-12 font-mono text-[11px] tracking-[0.2em] text-moss/45" style={d(600)}>
              {service.microcopy}
            </p>
          )}
        </div>

        <div className="rise mx-auto w-full max-w-[520px] lg:col-span-6 lg:max-w-none lg:pl-8" style={d(300)}>
          <ServiceHeroVisual slug={service.slug} />
        </div>
      </div>
    </section>
  );
}

function Pains({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden bg-moss py-20 text-white lg:py-32">
      <div className="bg-grid-light mask-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="01" tone="light">O DESAFIO</SectionLabel>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] font-bold tracking-[-0.04em]">
            {service.pains.title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {service.pains.items.map((item, i) => (
            <Reveal key={item} delay={i * 120} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 font-mono text-xs text-white/70">
                  ✕
                </span>
                <p className="mt-8 text-lg leading-relaxed text-white/80">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features({ service }: { service: Service }) {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="02">O QUE ENTREGAMOS</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1] font-bold tracking-[-0.04em]">
              {service.name} <span className="text-moss/40">na prática.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={100}>
            <p className="text-lg leading-relaxed text-moss/70">{service.summary}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid border-t border-l border-moss/10 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100} className="h-full">
              <div className="group h-full border-r border-b border-moss/10 p-8 transition-colors duration-300 hover:bg-moss hover:text-white">
                <span className="font-mono text-[11px] tracking-[0.2em] text-moss/40 group-hover:text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.025em]">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-moss/65 group-hover:text-white/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ service }: { service: Service }) {
  return (
    <section id="como-funciona" className="border-t border-moss/10 bg-moss/[0.025] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="03">COMO FUNCIONA</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1] font-bold tracking-[-0.04em]">
            Do diagnóstico <span className="text-moss/40">à otimização contínua.</span>
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-moss/20 md:block" />
          {service.process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-moss/20 bg-white font-mono text-xs md:mx-auto">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] md:text-center">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-moss/65 md:text-center">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function BeforeAfter({ service }: { service: Service }) {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="04">RESULTADO</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1] font-bold tracking-[-0.04em]">
            O que muda <span className="text-moss/40">na sua operação.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-[1.75rem] border border-moss/12 p-8 lg:p-10">
              <p className="font-mono text-[11px] tracking-[0.2em] text-moss/45">ANTES</p>
              <ul className="mt-8 space-y-5">
                {service.before.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg text-moss/55">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-moss/15 text-xs">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-moss p-8 text-white lg:p-10">
              <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-50" aria-hidden />
              <p className="relative font-mono text-[11px] tracking-[0.2em] text-white/55">COM A KIDOO HUB</p>
              <ul className="relative mt-8 space-y-5">
                {service.after.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs text-moss">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HubConnection({ service }: { service: Service }) {
  return (
    <section className="border-t border-moss/10 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="05">CONECTADO AO HUB</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1] font-bold tracking-[-0.04em]">
              Mais forte <span className="text-moss/40">quando conectado.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={100}>
            <p className="text-lg leading-relaxed text-moss/70">{service.hub}</p>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-14">
          <div className="grid gap-3 md:grid-cols-3">
            {FLOW.map((node, i) => {
              const current = node.slug === service.slug;
              const content = (
                <>
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em]">
                    <span className={current ? "text-white/50" : "text-moss/40"}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={current ? "text-white/70" : "text-moss/50"}>
                      {current ? "VOCÊ ESTÁ AQUI" : "EXPLORAR →"}
                    </span>
                  </div>
                  <p className="mt-10 font-display text-[clamp(1.8rem,2.8vw,2.4rem)] leading-[1] font-bold tracking-[-0.04em]">
                    {node.label}
                    <br />
                    <span className={current ? "text-white/50" : "text-moss/40"}>{node.verb}.</span>
                  </p>
                </>
              );
              return current ? (
                <div key={node.slug} className="rounded-[1.5rem] bg-moss p-7 text-white">
                  {content}
                </div>
              ) : (
                <Link
                  key={node.slug}
                  href={serviceHref(node.slug)}
                  className="rounded-[1.5rem] border border-moss/12 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-moss/40"
                >
                  {content}
                </Link>
              );
            })}
          </div>
          <div className="mt-3 flex flex-col gap-3 rounded-[1.5rem] border border-dashed border-moss/20 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="font-display text-xl font-semibold tracking-[-0.02em]">
              Estratégia <span className="text-moss/40">conecta tudo.</span>
            </p>
            <span className="hidden font-mono text-[11px] tracking-[0.2em] text-moss/45 sm:block">TECH + STRATEGY + GROWTH</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq({ service }: { service: Service }) {
  return (
    <section className="pb-20 lg:pb-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-4">
          <SectionLabel index="06">FAQ</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1] font-bold tracking-[-0.04em]">
            Perguntas <span className="text-moss/40">frequentes.</span>
          </h2>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <div className="divide-y divide-moss/10 border-y border-moss/10">
            {service.faq.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold tracking-[-0.02em] sm:gap-6 sm:text-xl [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-moss/20 text-lg transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-moss/65">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = SERVICES[slug];
  return (
    <>
      <Hero service={service} />
      <Pains service={service} />
      <Features service={service} />
      <Process service={service} />
      <BeforeAfter service={service} />
      <HubConnection service={service} />
      <Faq service={service} />
    </>
  );
}

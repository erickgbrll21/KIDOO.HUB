import type { CSSProperties } from "react";
import Image from "next/image";
import { CONTACT } from "@/lib/site";
import ecosystemArt from "../../public/brand/kidoo-ecosystem.png";

const d = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden px-5 pt-28 pb-12 sm:px-6 lg:px-10 lg:pt-36 lg:pb-24">
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-[90rem] items-center gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <h1 className="max-w-[8.6em] font-display text-[clamp(2.15rem,8.4vw,3.7rem)] leading-[1.08] font-bold tracking-[-0.038em] text-balance">
            <span className="rise block" style={d(120)}>
              Tecnologia que conecta.
            </span>
            <span className="rise mt-1 block font-medium text-moss/70" style={d(240)}>
              Estratégias que fazem crescer.
            </span>
          </h1>

          <p className="rise mt-5 max-w-[42ch] text-[1.05rem] leading-[1.7] text-pretty text-moss/80 sm:mt-6" style={d(380)}>
            A <strong className="font-semibold text-moss">KIDOO HUB</strong> conecta Inteligência
            Artificial, desenvolvimento e tráfego pago para construir operações digitais mais
            inteligentes, eficientes e preparadas para crescer.
          </p>

          <div className="rise mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4" style={d(500)}>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-moss py-3.5 pr-4 pl-7 text-[15px] font-medium text-white shadow-[0_18px_40px_-18px_rgb(53_63_52/0.7)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Falar com a KIDOO
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#solucoes"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-moss/20 px-7 py-3.5 text-[15px] font-medium transition-colors hover:border-moss hover:bg-moss/[0.03] sm:w-auto"
            >
              Conhecer nossas soluções
            </a>
          </div>
        </div>

        <div className="rise lg:col-span-7" style={d(280)}>
          <Image
            src={ecosystemArt}
            alt="A KIDOO HUB conecta automação com IA, desenvolvimento e tráfego pago em um único ciclo."
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="mx-auto h-auto w-full max-w-lg drop-shadow-[0_28px_48px_rgb(53_63_52/0.12)] lg:max-w-none lg:w-[96%]"
          />
        </div>
      </div>
    </section>
  );
}

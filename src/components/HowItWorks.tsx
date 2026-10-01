import { AutomationChat } from "./AutomationChat";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

/* ---------- Brand marks ---------- */

function MetaLogo() {
  return (
    <svg viewBox="0 0 44 28" className="h-9 w-auto" aria-label="Meta" role="img">
      <defs>
        <linearGradient id="meta-g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0064E0" />
          <stop offset="1" stopColor="#0082FB" />
        </linearGradient>
      </defs>
      <path
        d="M6 14c0-5 2.6-8 5.6-8C17 6 21 22 27.6 22 31 22 38 21 38 14s-3.6-8-6.6-8C25 6 21 22 15.6 22 9 22 6 19 6 14Z"
        fill="none"
        stroke="url(#meta-g)"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramLogo() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-label="Instagram" role="img">
      <defs>
        <radialGradient id="ig-g" cx="0.3" cy="1.05" r="1.25">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.25" stopColor="#FA7E1E" />
          <stop offset="0.5" stopColor="#D62976" />
          <stop offset="0.75" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </radialGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#ig-g)" />
      <rect x="9" y="9" width="22" height="22" rx="7" fill="none" stroke="#fff" strokeWidth="2.6" />
      <circle cx="20" cy="20" r="5.2" fill="none" stroke="#fff" strokeWidth="2.6" />
      <circle cx="26.6" cy="13.4" r="1.6" fill="#fff" />
    </svg>
  );
}

function GoogleAdsLogo() {
  return (
    <svg viewBox="0 0 48 44" className="h-9 w-auto" aria-hidden>
      <path d="M24 8 12 30" stroke="#FBBC04" strokeWidth="10" strokeLinecap="round" />
      <path d="M24 8 36 30" stroke="#4285F4" strokeWidth="10" strokeLinecap="round" />
      <circle cx="12" cy="31" r="6" fill="#34A853" />
    </svg>
  );
}

/* ---------- Stage visuals ---------- */

function TrafficCard() {
  return (
    <div className="w-full max-w-[230px] rounded-2xl border border-moss/10 bg-white p-3 shadow-[0_24px_50px_-30px_rgb(53_63_52/0.45)]">
      <div className="flex items-center justify-around rounded-xl bg-moss/[0.04] px-4 py-5">
        <MetaLogo />
        <InstagramLogo />
      </div>
      <div className="mt-3 flex items-center justify-center gap-2.5 rounded-xl bg-moss/[0.04] px-4 py-6">
        <GoogleAdsLogo />
        <span className="text-[19px] font-medium tracking-tight text-[#5f6368]">Google Ads</span>
      </div>
    </div>
  );
}

function LaptopPage() {
  return (
    <div className="space-y-3 pb-3">
      <div className="relative overflow-hidden rounded-md bg-moss p-4">
        <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-y-0 right-0 h-full w-1/2 text-white" aria-hidden>
          <path d="M30 60 L55 0 H100 V60 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M55 60 L75 8 H100 V60 Z" fill="currentColor" fillOpacity="0.1" />
          {[14, 26, 38, 50].map((y) => (
            <line key={y} x1="60" x2="100" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.6" />
          ))}
        </svg>
        <span className="relative block h-2 w-2/5 rounded bg-white/85" />
        <span className="relative mt-1.5 block h-1.5 w-1/3 rounded bg-white/35" />
        <span className="relative mt-1 block h-1.5 w-1/4 rounded bg-white/35" />
        <span className="relative mt-3 block h-3 w-14 rounded-full bg-white" />
      </div>
      <div className="grid grid-cols-3 gap-2 rounded-md border border-moss/10 p-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <span className="h-3 w-3 rounded-[4px] border border-moss/30" />
            <span className="h-1 w-8 rounded bg-moss/15" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 items-center gap-3 px-1">
        <div className="space-y-1.5">
          <span className="block h-1.5 w-4/5 rounded bg-moss/40" />
          <span className="block h-1 w-full rounded bg-moss/15" />
          <span className="block h-1 w-3/4 rounded bg-moss/15" />
          <span className="mt-2 block h-2.5 w-12 rounded-full bg-moss" />
        </div>
        <div className="h-14 rounded-md bg-moss/[0.08]" />
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-9 rounded bg-moss/[0.06]" />
        ))}
      </div>
      <div className="flex items-center justify-between rounded-md bg-moss/[0.9] px-3 py-3">
        <span className="h-1.5 w-1/3 rounded bg-white/70" />
        <span className="h-2.5 w-10 rounded-full bg-white" />
      </div>
      <div className="flex justify-between px-1 pt-1">
        <span className="h-1 w-10 rounded bg-moss/20" />
        <span className="flex gap-1.5">
          <span className="h-1 w-5 rounded bg-moss/10" />
          <span className="h-1 w-5 rounded bg-moss/10" />
        </span>
      </div>
    </div>
  );
}

function PhonePage() {
  return (
    <div className="space-y-2 pb-2">
      <div className="rounded bg-moss p-2">
        <span className="block h-1 w-3/4 rounded bg-white/80" />
        <span className="mt-1 block h-1 w-1/2 rounded bg-white/35" />
        <span className="mt-2 block h-6 rounded-sm bg-white/10" />
      </div>
      <span className="block h-1 w-full rounded bg-moss/15" />
      <span className="block h-1 w-4/5 rounded bg-moss/15" />
      <span className="block h-1 w-3/5 rounded bg-moss/15" />
      <span className="mx-auto block h-3 w-3/4 rounded-full bg-moss" />
      <div className="grid grid-cols-2 gap-1.5 pt-1">
        <span className="h-8 rounded bg-moss/[0.07]" />
        <span className="h-8 rounded bg-moss/[0.07]" />
      </div>
      <span className="block h-1 w-2/3 rounded bg-moss/25" />
      <span className="block h-1 w-full rounded bg-moss/10" />
      <span className="block h-10 rounded bg-moss/[0.06]" />
    </div>
  );
}

function SiteDevices() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,300px)] pr-8 sm:max-w-[380px] sm:pr-10">
      {/* Laptop */}
      <div className="rounded-t-xl border-[7px] border-b-0 border-moss-deep bg-moss-deep">
        <div className="overflow-hidden rounded-t-[4px] bg-white">
          <div className="flex items-center justify-between border-b border-moss/5 px-3 py-2.5">
            <span className="h-1.5 w-8 rounded bg-moss/40" />
            <span className="flex gap-1.5">
              <span className="h-1 w-5 rounded bg-moss/15" />
              <span className="h-1 w-5 rounded bg-moss/15" />
              <span className="h-1 w-5 rounded bg-moss/15" />
            </span>
          </div>
          <div className="relative h-[132px] overflow-hidden px-3 pt-3" aria-hidden>
            <div className="animate-site-scroll">
              <LaptopPage />
              <LaptopPage />
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mx-5 h-3 rounded-b-xl bg-gradient-to-b from-moss/25 to-moss/40">
        <span className="absolute top-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-b-md bg-moss/30" />
      </div>

      {/* Phone */}
      <div className="absolute right-0 -bottom-2 w-[112px] overflow-hidden rounded-[18px] border-[5px] border-moss-deep bg-white shadow-[0_20px_40px_-20px_rgb(0_0_0/0.5)]">
        <div className="relative z-10 bg-white px-2 pt-2 pb-1.5">
          <span className="mx-auto mb-2 block h-1 w-8 rounded-full bg-moss/20" />
          <div className="flex items-center justify-between">
            <span className="h-1 w-5 rounded bg-moss/40" />
            <span className="h-1 w-3 rounded bg-moss/20" />
          </div>
        </div>
        <div className="h-[150px] overflow-hidden px-2" aria-hidden>
          <div className="animate-site-scroll" style={{ animationDelay: "-3s" }}>
            <PhonePage />
            <PhonePage />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Layout ---------- */

const STAGES = [
  {
    title: "Tráfego Pago",
    caption: ["Pessoas certas", "chegando até você"],
    visual: <TrafficCard />,
  },
  {
    title: "Site / Landing Page",
    caption: ["Transforma o interesse", "em oportunidade"],
    visual: <SiteDevices />,
  },
  {
    title: "Automação + IA",
    caption: ["Atendimento automatizado", "que gera resultados"],
    visual: <AutomationChat />,
  },
];

function FlowArrow() {
  return (
    <svg viewBox="0 0 64 16" className="h-4 w-14 text-moss" aria-hidden>
      <path d="M2 8h56" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 4" className="dash-flow" />
      <path d="m52 2 7 6-7 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Caption({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col items-center">
      <span className="relative h-7 w-px bg-moss/30" aria-hidden>
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-moss" />
      </span>
      <p className="rounded-full border border-moss/10 bg-moss/[0.07] px-4 py-3 text-center font-mono text-[11px] leading-relaxed font-semibold tracking-[0.08em] text-moss uppercase sm:px-6 sm:text-[12px] sm:tracking-[0.12em]">
        {lines[0]}
        <br />
        {lines[1]}
      </p>
    </div>
  );
}

const GRID = "lg:grid-cols-[0.9fr_72px_1.35fr_72px_1.25fr]";

export function HowItWorks() {
  return (
    <section id="como-opera" className="relative overflow-hidden border-t border-moss/10 py-20 lg:py-36">
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="02">COMO A KIDOO OPERA</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1] font-bold tracking-[-0.04em]">
            <span className="block">Do tráfego ao atendimento.</span>
            <span className="block text-moss/40">Um único ciclo.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-moss/70">
            O tráfego traz as pessoas certas. O site transforma interesse em oportunidade. A
            automação atende, qualifica e devolve dados para o próximo ciclo de crescimento.
          </p>
        </Reveal>

        {/* Stages */}
        <div className={`mt-14 grid gap-y-10 lg:mt-20 lg:gap-y-6 ${GRID}`}>
          {STAGES.map((stage, i) => (
            <div key={stage.title} className="contents">
              <Reveal delay={i * 180} className="flex flex-col items-center">
                <h3 className="font-display text-[17px] font-extrabold tracking-[0.1em] uppercase">{stage.title}</h3>
                <div className="mt-8 flex w-full items-center justify-center lg:h-[270px]">{stage.visual}</div>
                <div className="mt-6 lg:mt-3">
                  <Caption lines={stage.caption} />
                </div>
              </Reveal>

              {i < STAGES.length - 1 && (
                <Reveal delay={i * 180 + 120} className="flex justify-center lg:block">
                  <div className="flex items-center justify-center lg:mt-[54px] lg:h-[270px]">
                    <span className="rotate-90 lg:rotate-0">
                      <FlowArrow />
                    </span>
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>

        {/* Return loop — desktop */}
        <Reveal delay={500} className={`hidden lg:grid ${GRID}`}>
          <div className="relative h-16">
            <span className="absolute top-0 right-0 bottom-0 left-1/2 rounded-bl-3xl border-b-[1.5px] border-l-[1.5px] border-moss" />
            <svg viewBox="0 0 12 10" className="absolute -top-1.5 left-1/2 h-2.5 w-3 -translate-x-1/2 text-moss" aria-hidden>
              <path d="M1 9 6 2l5 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="h-16 border-b-[1.5px] border-moss" />
          <div className="relative h-16 border-b-[1.5px] border-moss">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-moss px-8 py-3.5 font-mono text-[12.5px] font-bold tracking-[0.16em] whitespace-nowrap text-white uppercase">
              Mais clientes e mais vendas
            </span>
          </div>
          <div className="h-16 border-b-[1.5px] border-moss" />
          <div className="relative h-16">
            <span className="absolute top-0 right-1/2 bottom-0 left-0 rounded-br-3xl border-r-[1.5px] border-b-[1.5px] border-moss" />
          </div>
        </Reveal>

        {/* Return loop — mobile */}
        <Reveal className="mt-10 flex justify-center lg:hidden">
          <span className="flex items-center gap-3 rounded-full bg-moss px-5 py-3.5 text-center font-mono text-[11px] font-bold tracking-[0.12em] text-white uppercase sm:px-6 sm:text-[12px] sm:tracking-[0.14em]">
            ↺ Mais clientes e mais vendas
          </span>
        </Reveal>
      </div>
    </section>
  );
}

import type { CSSProperties } from "react";
import type { ServiceSlug } from "@/lib/services";

const d = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

function Chip({ children, className, delay }: { children: string; className: string; delay: number }) {
  return (
    <span
      aria-hidden
      className={`rise absolute hidden rounded-md border border-moss/15 bg-white/95 px-2.5 py-1.5 font-mono text-[10.5px] text-moss/75 shadow-sm backdrop-blur sm:block ${className}`}
      style={d(delay)}
    >
      {children}
    </span>
  );
}

function AutomationVisual() {
  const messages = [
    { from: "user", text: "Oi! Vi o anúncio de vocês. Como funciona?" },
    { from: "bot", text: "Olá! Posso te ajudar. Para indicar a melhor opção, qual o porte da sua empresa?" },
    { from: "user", text: "Somos 25 pessoas." },
    { from: "bot", text: "Perfeito! Já estou conectando você com um especialista." },
  ];
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[1.75rem] border border-moss/12 bg-white shadow-[0_40px_80px_-40px_rgb(53_63_52/0.45)]">
        <div className="flex items-center gap-3 bg-moss px-5 py-4 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 font-display text-sm font-bold">
            IA
          </span>
          <div>
            <p className="text-sm font-semibold">KIDOO Assistente</p>
            <p className="flex items-center gap-1.5 text-xs text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> online agora
            </p>
          </div>
          <span className="ml-auto font-mono text-[10px] tracking-[0.15em] text-white/50">02:14 AM</span>
        </div>
        <div className="bg-grid space-y-3 p-5 text-[14px]">
          {messages.map((m, i) => (
            <div
              key={m.text}
              className={`rise max-w-[82%] rounded-2xl px-4 py-2.5 leading-snug ${
                m.from === "user"
                  ? "ml-auto rounded-br-sm bg-white text-moss shadow-sm ring-1 ring-moss/10"
                  : "rounded-bl-sm bg-moss text-white"
              }`}
              style={d(300 + i * 350)}
            >
              {m.text}
            </div>
          ))}
          <div className="rise flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-sm bg-moss/10 px-4 py-3" style={d(1800)}>
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                className="h-1.5 w-1.5 animate-bounce rounded-full bg-moss/60"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
      <Chip className="right-10 -top-4" delay={1200}>lead.qualificado ✓</Chip>
      <Chip className="left-8 -bottom-4" delay={1500}>→ encaminhado ao comercial</Chip>
      <Chip className="right-8 -bottom-4" delay={1800}>crm.sync = ok</Chip>
    </div>
  );
}

function LandingVisual() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[1.5rem] border border-moss/12 bg-white shadow-[0_40px_80px_-40px_rgb(53_63_52/0.45)]">
        <div className="flex items-center gap-2 border-b border-moss/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-moss/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-moss/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-moss/20" />
          <span className="ml-3 flex-1 rounded-md bg-moss/[0.06] px-3 py-1 font-mono text-[11px] text-moss/55">
            suaempresa.com.br
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="h-3 w-16 rounded bg-moss" />
            <span className="flex gap-2">
              <span className="h-2 w-8 rounded bg-moss/15" />
              <span className="h-2 w-8 rounded bg-moss/15" />
              <span className="h-2 w-8 rounded bg-moss/15" />
            </span>
          </div>
          <div className="mt-8 grid grid-cols-5 items-center gap-5">
            <div className="col-span-3 space-y-2.5">
              <span className="rise block h-4 w-full rounded bg-moss" style={d(300)} />
              <span className="rise block h-4 w-4/5 rounded bg-moss" style={d(400)} />
              <span className="rise block h-2 w-full rounded bg-moss/15" style={d(500)} />
              <span className="rise block h-2 w-2/3 rounded bg-moss/15" style={d(550)} />
              <span
                className="rise mt-4 inline-flex rounded-lg bg-moss px-4 py-2 text-[11px] font-semibold text-white"
                style={d(700)}
              >
                Quero saber mais →
              </span>
            </div>
            <div className="rise col-span-2 aspect-[4/5] rounded-xl bg-moss/[0.08] p-3" style={d(600)}>
              <div className="flex h-full flex-col justify-end gap-1.5 rounded-lg border border-dashed border-moss/20 p-2">
                <span className="h-1.5 w-2/3 rounded bg-moss/25" />
                <span className="h-1.5 w-1/2 rounded bg-moss/15" />
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rise rounded-lg border border-moss/10 p-3" style={d(850 + i * 120)}>
                <span className="block h-5 w-5 rounded-md bg-moss/15" />
                <span className="mt-3 block h-2 w-full rounded bg-moss/20" />
                <span className="mt-1.5 block h-1.5 w-2/3 rounded bg-moss/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Chip className="right-10 -top-4" delay={1200}>core web vitals ✓</Chip>
      <Chip className="left-8 -bottom-4" delay={1450}>mobile-first</Chip>
      <Chip className="right-8 -bottom-4" delay={1700}>pixel.conversion → enviado</Chip>
    </div>
  );
}

function TrafficVisual() {
  const funnel = [
    { label: "Impressões", w: 100 },
    { label: "Cliques", w: 72 },
    { label: "Leads", w: 46 },
    { label: "Oportunidades", w: 28 },
  ];
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[1.5rem] border border-moss/12 bg-white p-6 shadow-[0_40px_80px_-40px_rgb(53_63_52/0.45)]">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10.5px] tracking-[0.18em] text-moss/50">CAMPANHAS ATIVAS</p>
          <div className="flex gap-1.5 font-mono text-[10px]">
            <span className="rounded-md bg-moss px-2 py-1 text-white">META ADS</span>
            <span className="rounded-md border border-moss/15 px-2 py-1 text-moss/60">GOOGLE ADS</span>
          </div>
        </div>

        <svg viewBox="0 0 320 110" className="mt-6 h-auto w-full text-moss" aria-hidden>
          {[20, 50, 80].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.08" />
          ))}
          <path
            d="M0 95 C40 90 60 82 90 76 S150 70 180 52 S250 30 320 12 L320 110 L0 110 Z"
            fill="currentColor"
            fillOpacity="0.07"
          />
          <path
            d="M0 95 C40 90 60 82 90 76 S150 70 180 52 S250 30 320 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 100 C50 98 90 94 130 90 S220 78 320 62"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
          <circle cx="320" cy="12" r="4" fill="currentColor" />
        </svg>

        <div className="mt-6 space-y-3">
          {funnel.map((f, i) => (
            <div key={f.label} className="flex items-center gap-4">
              <span className="w-28 shrink-0 text-[13px] text-moss/65">{f.label}</span>
              <div className="h-7 flex-1 rounded-md bg-moss/[0.05]">
                <div
                  className={`rise h-full rounded-md ${i === funnel.length - 1 ? "bg-moss" : "bg-moss/25"}`}
                  style={{ ...d(400 + i * 150), width: `${f.w}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Chip className="right-10 -top-4" delay={1200}>público: lookalike</Chip>
      <Chip className="left-8 -bottom-4" delay={1450}>remarketing.on</Chip>
      <Chip className="right-8 -bottom-4" delay={1700}>otimização contínua ↗</Chip>
    </div>
  );
}

export function ServiceHeroVisual({ slug }: { slug: ServiceSlug }) {
  if (slug === "automacao") return <AutomationVisual />;
  if (slug === "landing-pages") return <LandingVisual />;
  return <TrafficVisual />;
}

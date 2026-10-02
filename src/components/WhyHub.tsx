import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function MetaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

const GAPS = [
  {
    code: "ADS",
    icon: MetaIcon,
    text: "Uma campanha pode gerar milhares de acessos, mas precisa de uma boa experiência para converter.",
  },
  {
    code: "DEV",
    icon: CodeIcon,
    text: "Uma Landing Page pode converter, mas precisa de pessoas chegando até ela.",
  },
  {
    code: "IA",
    icon: BotIcon,
    text: "Um lead pode demonstrar interesse, mas precisa ser atendido rapidamente.",
  },
];

const STAGES = [
  { index: "01", word: "Tráfego", verb: "atrai." },
  { index: "02", word: "Desenvolvimento", verb: "converte." },
  { index: "03", word: "Automação", verb: "atende." },
];

export function WhyHub() {
  return (
    <section id="por-que-hub" className="relative py-20 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel index="03">CONCEITO</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,12vw,6rem)] leading-[0.95] font-bold tracking-[-0.05em]">
              Por que <span className="caret">HUB?</span>
            </h2>
            <p className="mt-8 max-w-sm font-display text-2xl leading-snug font-medium tracking-[-0.02em] text-moss/80">
              Porque crescimento digital não acontece em uma única frente.
            </p>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-4">
            <ul className="divide-y divide-moss/10 border-y border-moss/10">
              {GAPS.map((g, i) => (
                <Reveal as="li" key={g.code} delay={i * 100} className="flex gap-6 py-7">
                  <div className="flex w-12 shrink-0 flex-col items-center gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-moss text-white">
                      <g.icon />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-moss/40">{g.code}</span>
                  </div>
                  <p className="pt-1.5 text-lg leading-relaxed text-moss/75">{g.text}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={300}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed">
                É por isso que a <strong className="font-semibold">KIDOO</strong> conecta diferentes
                especialidades dentro de uma mesma estrutura.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Four-stage visual */}
        <Reveal delay={100} className="mt-20 lg:mt-28">
          <div className="grid gap-4 md:grid-cols-3">
            {STAGES.map((s, i) => (
              <div key={s.index} className="relative">
                <div className="h-full rounded-[1.5rem] border border-moss/12 bg-white p-7">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-moss/40">{s.index}</span>
                  <p className="mt-10 font-display text-[clamp(1.8rem,2.8vw,2.4rem)] leading-[1] font-bold tracking-[-0.04em]">
                    {s.word}
                    <br />
                    <span className="text-moss/40">{s.verb}</span>
                  </p>
                </div>
                {i < STAGES.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-[22px] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-moss/15 bg-white font-mono text-sm md:flex"
                  >
                    →
                  </span>
                )}
                {/* connector down to strategy layer */}
                <span aria-hidden className="absolute -bottom-4 left-1/2 hidden h-4 w-px bg-moss/30 md:block" />
              </div>
            ))}
          </div>

          <div className="relative mt-4 overflow-hidden rounded-[1.5rem] bg-moss p-7 text-white md:p-9">
            <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-60" aria-hidden />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">04 — CAMADA DE ESTRATÉGIA</span>
                <p className="mt-6 font-display text-[clamp(1.8rem,3.4vw,3rem)] leading-[1] font-bold tracking-[-0.04em]">
                  Estratégia <span className="text-white/50">conecta tudo.</span>
                </p>
              </div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-white/50">
                TECH + STRATEGY + GROWTH
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

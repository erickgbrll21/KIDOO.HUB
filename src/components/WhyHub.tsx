import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const GAPS = [
  {
    code: "ADS",
    text: "Uma campanha pode gerar milhares de acessos, mas precisa de uma boa experiência para converter.",
  },
  {
    code: "DEV",
    text: "Uma Landing Page pode converter, mas precisa de pessoas chegando até ela.",
  },
  {
    code: "IA",
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
                  <span className="w-12 shrink-0 pt-1 font-mono text-[11px] tracking-[0.2em] text-moss/40">
                    {g.code}
                  </span>
                  <p className="text-lg leading-relaxed text-moss/75">{g.text}</p>
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

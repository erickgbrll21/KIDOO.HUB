import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const MARKS = ["KIDOO / HUB", "KIDOO.HUB", "KIDOO_", "<KIDOO />", "KIDOO // DIGITAL"];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-moss/10 py-20 lg:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-16 select-none font-display text-[22vw] leading-none font-extrabold tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgb(53_63_52/0.08)] lg:text-[15rem]"
      >
        {"<K/>"}
      </span>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionLabel index="04">SOBRE</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,5.4vw,4.8rem)] leading-[0.95] font-bold tracking-[-0.045em]">
              Somos a KIDOO HUB.
            </h2>
            <p className="mt-6 max-w-lg font-display text-[clamp(1.25rem,4.6vw,1.9rem)] leading-snug font-medium tracking-[-0.02em] text-moss/70">
              Tecnologia não precisa ser complicada. Precisa gerar resultado.
            </p>
            <p className="mt-10 inline-flex items-center gap-3 rounded-full bg-moss px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-white">
              TECHNOLOGY & GROWTH HUB
            </p>
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed text-moss/75 lg:col-span-5 lg:col-start-8 lg:pt-16">
            <Reveal delay={100}>
              <p>
                A KIDOO HUB nasceu para conectar diferentes competências do universo digital dentro de
                uma única estrutura.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                Unimos <span className="text-moss">desenvolvimento</span>,{" "}
                <span className="text-moss">automação</span> e{" "}
                <span className="text-moss">aquisição</span> para criar soluções que ajudam empresas a
                vender, atender e operar melhor no ambiente digital.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                Mais do que executar serviços isolados, buscamos entender o negócio, identificar
                oportunidades e conectar as tecnologias certas para cada desafio.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={150} className="mt-20">
          <ul className="grid grid-cols-2 border-t border-l border-moss/10 sm:grid-cols-3 lg:grid-cols-5">
            {MARKS.map((m, i) => (
              <li
                key={m}
                className={`group flex aspect-[5/3] flex-col justify-between border-r border-b border-moss/10 p-5 transition-colors duration-300 hover:bg-moss hover:text-white ${
                  i === MARKS.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-moss/35 group-hover:text-white/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-sm tracking-wide sm:text-base">{m}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

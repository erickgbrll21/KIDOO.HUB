import { Logo } from "./Logo";
import MetallicPaint from "./MetallicPaint";
import { Reveal } from "./Reveal";
import metalLogo from "../../public/brand/kidoo-hub-metal.png";
import { CONTACT } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-moss text-white sm:rounded-[2.5rem]">
        <div className="bg-grid-light pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:py-36">
          <div>
            <Reveal>
              <Logo tone="light" className="h-9 w-auto opacity-90 sm:h-10" />
              <p className="mt-12 font-mono text-[11px] tracking-[0.22em] text-white/50">
                {"// NEXT_PROJECT.INIT()"}
              </p>
              <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.15rem,9vw,5.6rem)] leading-[1.02] font-bold tracking-[-0.045em]">
                Seu próximo projeto <span className="text-white/45">pode começar aqui.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
                Conte para a KIDOO onde sua empresa quer chegar. Nós conectamos tecnologia, estratégia e
                execução para ajudar a construir o caminho.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white py-3.5 pr-4 pl-7 text-[15px] font-medium text-moss transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Falar com a KIDOO
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-moss text-white transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href={CONTACT.email}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-medium transition-colors hover:border-white hover:bg-white/5 sm:w-auto"
                >
                  Solicitar orçamento
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto aspect-[2/1] w-full max-w-md lg:max-w-none" aria-hidden>
            <div className="absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2">
              <MetallicPaint
                imageSrc={metalLogo.src}
                seed={42}
                scale={4}
                patternSharpness={1}
                noiseScale={0.5}
                speed={0.3}
                liquid={0.75}
                mouseAnimation={false}
                brightness={2}
                contrast={0.5}
                refraction={0.01}
                blur={0.015}
                chromaticSpread={2}
                fresnel={1}
                angle={0}
                waveAmplitude={1}
                distortion={1}
                contour={0.2}
                lightColor="#ffffff"
                darkColor="#ffffff"
                tintColor="#3F493E"
              />
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[11px] tracking-[0.16em] text-white/40 sm:mt-20 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 sm:tracking-[0.2em] lg:col-span-2 lg:mt-6">
            <span>AUTOMATE / BUILD / SCALE</span>
            <span>POWERED BY TECHNOLOGY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

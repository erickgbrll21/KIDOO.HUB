import Image from "next/image";
import heroBg from "../../public/hero/hero-bg.png";
import heroBgMobile from "../../public/hero/hero-bg-mobile.png";

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-start overflow-hidden bg-moss lg:items-center"
    >
      <Image
        src={heroBgMobile}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_bottom] lg:hidden"
      />
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center lg:block"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-t from-white via-white/75 to-transparent sm:h-44"
        aria-hidden
      />

      <div className="hero-copy relative z-10 ml-0 flex w-full max-w-[46rem] flex-col items-start px-5 pt-28 pb-12 sm:px-8 lg:px-14 lg:py-28">
        <div
          className="pointer-events-none absolute -inset-x-8 -top-24 bottom-[-42%] bg-[linear-gradient(180deg,rgb(22_28_21/0.96)_0%,rgb(22_28_21/0.9)_58%,transparent_100%)] lg:inset-y-[-18%] lg:right-auto lg:bottom-auto lg:-left-14 lg:w-[130%] lg:bg-[linear-gradient(90deg,rgb(22_28_21/0.97)_0%,rgb(22_28_21/0.92)_48%,rgb(22_28_21/0.62)_78%,transparent_100%)]"
          aria-hidden
        />
        <h1
          id="hero-title"
          className="relative font-display text-[clamp(2.15rem,8.2vw,3rem)] leading-[0.92] tracking-[-0.05em] sm:text-[clamp(2.15rem,3.35vw,3rem)] sm:tracking-[-0.045em]"
        >
          <span className="block font-normal whitespace-nowrap text-[#d7dfd4]">Tráfego, sites e IA</span>
          <span className="block font-normal whitespace-nowrap text-[#d7dfd4]">trabalhando juntos</span>
          <span className="block font-extrabold whitespace-nowrap text-white">pelo seu</span>
          <span className="block font-extrabold whitespace-nowrap text-white">crescimento.</span>
        </h1>
        <p className="relative mt-5 max-w-[26rem] text-[15px] leading-[1.45] text-white">
          Atraímos as pessoas certas, transformamos atenção em experiência e interesse em oportunidade. Um
          ecossistema digital completo para o seu negócio.
        </p>
        <div className="relative mt-8 flex flex-wrap items-start gap-2.5">
          <a
            href="#contato"
            className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white py-2 pr-1.5 pl-4 text-sm font-medium whitespace-nowrap text-moss transition-transform hover:-translate-y-0.5"
          >
            Fale com um especialista
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-moss text-white transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#como-opera"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-[#161c15]/35 px-4 text-sm font-medium whitespace-nowrap text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-[#161c15]/50"
          >
            Conheça o ecossistema
          </a>
        </div>
      </div>
    </section>
  );
}

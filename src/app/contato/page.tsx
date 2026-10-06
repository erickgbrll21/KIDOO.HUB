import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contato — KIDOO HUB",
  description: "Informe nome, WhatsApp com DDD, empresa e o gargalo de hoje. A KIDOO responde em seguida.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="relative isolate overflow-hidden bg-[#161c15] lg:bg-transparent">
        <div className="relative mx-auto w-full max-w-[1920px] lg:aspect-video">
        <video
          className="pointer-events-none absolute inset-x-0 top-0 aspect-video h-auto w-full object-cover object-center lg:inset-0 lg:h-full"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src="/contato/kidoo-hero.webm" type="video/webm" />
        </video>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 aspect-video bg-[linear-gradient(90deg,rgb(22_28_21/0.94)_0%,rgb(22_28_21/0.82)_34%,rgb(22_28_21/0.28)_58%,transparent_78%)] lg:inset-0 lg:aspect-auto lg:w-[min(100%,920px)]"
          aria-hidden
        />

        <div className="relative z-10 ml-0 w-full max-w-xl px-5 pt-24 pb-8 sm:px-8 lg:px-12 lg:pt-28 lg:pb-10">
          <SectionLabel index="06" tone="light">
            Contato
          </SectionLabel>
          <h1 className="mt-3 font-display text-[clamp(1.7rem,2.4vw,2.45rem)] leading-[1.05] font-bold tracking-[-0.04em] text-white">
            Conta o que está travando o seu digital.
          </h1>
          <p className="mt-2 max-w-md text-start text-sm leading-snug text-white/75">
            Nome, WhatsApp e o gargalo de hoje já indicam por onde a KIDOO começa.
          </p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

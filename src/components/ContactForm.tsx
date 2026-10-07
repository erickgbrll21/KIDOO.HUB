"use client";

import { FormEvent, useState } from "react";
import { CONTACT } from "@/lib/site";

const GARGALOS = [
  "Demora para responder clientes no WhatsApp / Perda de vendas fora do horário comercial.",
  "Processos manuais e retrabalho operacional (planilhas, controle no papel, falta de integração).",
  "Dificuldade para atrair e qualificar novos clientes B2B.",
  "Outro.",
] as const;

const VOLUMES = ["Até 20 contatos/dia", "De 20 a 100 contatos/dia", "Mais de 100 contatos/dia"] as const;

const inputClass =
  "mt-1 w-full rounded-xl border border-moss/15 bg-white px-3 py-2 text-sm text-moss outline-none transition-colors placeholder:text-moss/35 focus:border-moss";

const optionClass =
  "flex cursor-pointer items-start gap-2 rounded-xl border border-white/70 bg-white/92 px-3 py-2 text-start text-[13px] leading-tight text-moss transition-colors has-checked:border-white has-checked:bg-white";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [gargalos, setGargalos] = useState<string[]>([]);
  const [volume, setVolume] = useState("");
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  const alternarGargalo = (item: string) => {
    setGargalos((atual) => (atual.includes(item) ? atual.filter((opcao) => opcao !== item) : [...atual, item]));
  };

  const enviar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nomeLimpo = nome.trim();
    const empresaLimpa = empresa.trim();
    const digitos = whatsapp.replace(/\D/g, "");
    if (!nomeLimpo) {
      setErro("Informe seu nome.");
      return;
    }
    if (digitos.length < 10 || digitos.length > 11) {
      setErro("Informe o WhatsApp comercial com DDD.");
      return;
    }
    if (!empresaLimpa) {
      setErro("Informe o nome da empresa ou o segmento.");
      return;
    }
    if (gargalos.length === 0) {
      setErro("Marque pelo menos um gargalo.");
      return;
    }
    setErro("");
    const corpo = [
      "Olá, KIDOO HUB! Vim pelo site.",
      "",
      `Nome: ${nomeLimpo}`,
      `WhatsApp comercial: ${whatsapp.trim()}`,
      `Empresa / segmento: ${empresaLimpa}`,
      "",
      "Principal gargalo:",
      ...gargalos.map((item) => `- ${item}`),
      "",
      `Volume de atendimentos/dia: ${volume || "não informado"}`,
    ].join("\n");
    const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(corpo)}`;
    const janela = window.open(url, "_blank", "noopener,noreferrer");
    if (!janela) window.location.href = url;
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="rounded-[1.75rem] border border-moss/12 bg-moss/[0.04] px-6 py-10 sm:px-8">
        <p className="font-display text-2xl font-bold tracking-[-0.03em] text-moss">Mensagem pronta.</p>
        <p className="mt-3 text-start text-base leading-relaxed text-moss/70">
          O WhatsApp vai abrir com o que você marcou. Se não abrir, envie para (31) 99587-0862.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} noValidate className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-[auto_auto] sm:gap-x-3 sm:gap-y-1">
        <div className="grid content-start gap-y-1 sm:row-span-2 sm:grid-rows-subgrid">
          <label htmlFor="contato-nome" className="self-end text-[13px] font-medium text-white">
            Nome <span className="font-normal text-white/55">(obrigatório)</span>
          </label>
          <input
            id="contato-nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className={`${inputClass} mt-0`}
          />
        </div>
        <div className="grid content-start gap-y-1 sm:row-span-2 sm:grid-rows-subgrid">
          <label htmlFor="contato-whatsapp" className="self-end text-[13px] font-medium text-white">
            WhatsApp comercial <span className="font-normal text-white/55">(obrigatório)</span>
          </label>
          <input
            id="contato-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="(11) 90000-0000"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            className={`${inputClass} mt-0`}
          />
        </div>
      </div>

      <label className="block text-[13px] font-medium text-white">
        Nome da empresa / segmento
        <input
          name="empresa"
          type="text"
          autoComplete="organization"
          required
          placeholder="Ex.: Hotelaria, Clínica/Estética, Varejo, Serviços"
          value={empresa}
          onChange={(event) => setEmpresa(event.target.value)}
          className={inputClass}
        />
      </label>

      <fieldset className="flex flex-col gap-1.5">
        <legend className="text-[13px] font-medium text-white">Qual é o seu principal gargalo hoje?</legend>
        <span className="text-start text-[11px] leading-tight text-white/60">Pode marcar mais de uma opção.</span>
        {GARGALOS.map((item) => (
          <label key={item} className={optionClass}>
            <input
              type="checkbox"
              name="gargalo"
              value={item}
              checked={gargalos.includes(item)}
              onChange={() => alternarGargalo(item)}
              className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-moss"
            />
            <span>{item}</span>
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend className="text-[13px] font-medium text-white">
          Volume aproximado de atendimentos/pedidos por dia{" "}
          <span className="font-normal text-white/55">(opcional)</span>
        </legend>
        <div className="mt-1.5 grid gap-1.5 sm:grid-cols-3">
        {VOLUMES.map((item) => (
          <label key={item} className={optionClass}>
            <input
              type="radio"
              name="volume"
              value={item}
              checked={volume === item}
              onChange={() => setVolume(item)}
              className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-moss"
            />
            <span>{item}</span>
          </label>
        ))}
        </div>
      </fieldset>

      {erro ? <p className="text-start text-sm text-white">{erro}</p> : null}

      <button
        type="submit"
        className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-moss transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Enviar mensagem
      </button>
    </form>
  );
}

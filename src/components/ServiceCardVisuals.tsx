"use client";

import { useEffect, useState } from "react";

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type ChatEvent =
  | { type: "user"; text: string }
  | { type: "typing" }
  | { type: "bot"; text: string };

const CHAT: ChatEvent[] = [
  { type: "user", text: "Olá! Gostaria de um orçamento." },
  { type: "typing" },
  { type: "bot", text: "Claro! Qual o segmento da sua empresa?" },
  { type: "user", text: "Somos uma clínica." },
  { type: "typing" },
  { type: "bot", text: "Perfeito. Já estou te encaminhando." },
];

const CHAT_DELAY: Record<ChatEvent["type"], number> = { user: 1400, typing: 900, bot: 1800 };
const CHAT_RESTART = 2200;

export function ChatVisual() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const reduced = reducedMotion();
    const done = step >= CHAT.length;
    if (reduced && done) return;
    const wait = reduced ? 0 : done ? CHAT_RESTART : CHAT_DELAY[CHAT[step].type];
    const next = reduced ? CHAT.length : done ? 1 : step + 1;
    const id = window.setTimeout(() => setStep(next), wait);
    return () => window.clearTimeout(id);
  }, [step]);

  const visible = CHAT.slice(0, step)
    .map((event, index) => ({ event, index }))
    .filter(({ event, index }) => event.type !== "typing" || index === step - 1);

  return (
    <div className="flex h-full flex-col justify-end gap-2.5 overflow-hidden text-[13px]" aria-hidden>
      {visible.map(({ event, index }) => {
        if (event.type === "typing") {
          return (
            <div
              key={index}
              className="swap-in flex w-14 items-center justify-center gap-1 rounded-2xl rounded-bl-sm bg-moss px-3.5 py-3"
            >
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/80"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </div>
          );
        }
        if (event.type === "user") {
          return (
            <div
              key={index}
              className="swap-in max-w-[80%] self-end rounded-2xl rounded-br-sm bg-white px-3.5 py-2.5 shadow-sm ring-1 ring-moss/10"
            >
              {event.text}
            </div>
          );
        }
        return (
          <div
            key={index}
            className="swap-in max-w-[85%] rounded-2xl rounded-bl-sm bg-moss px-3.5 py-2.5 text-white"
          >
            {event.text}
          </div>
        );
      })}
    </div>
  );
}

const CODE_SOURCE = `// building digital experiences
export default function Page() {
  return <KIDOO />
}`;

function highlightLine(line: string, blinking: boolean) {
  const cursor = blinking ? (
    <span className="cursor-blink ml-px inline-block h-[1em] w-[7px] translate-y-[2px] bg-white/80 align-baseline" />
  ) : null;

  if (line.startsWith("//")) {
    return (
      <>
        <span className="text-white/40">{line}</span>
        {cursor}
      </>
    );
  }

  const kiddo = "<KIDOO />";
  if (line.includes(kiddo)) {
    const [before] = line.split(kiddo);
    return (
      <>
        {before}
        <span className="text-white">{kiddo}</span>
        {cursor}
      </>
    );
  }

  if (line.startsWith("export default")) {
    return (
      <>
        <span className="text-white">export default</span>
        {line.slice("export default".length)}
        {cursor}
      </>
    );
  }

  return (
    <>
      {line}
      {cursor}
    </>
  );
}

export function CodeVisual() {
  const [len, setLen] = useState(0);

  useEffect(() => {
    const reduced = reducedMotion();
    if (reduced) {
      const id = window.setTimeout(() => setLen(CODE_SOURCE.length), 0);
      return () => window.clearTimeout(id);
    }
    if (len >= CODE_SOURCE.length) {
      const id = window.setTimeout(() => setLen(0), 2200);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => setLen((n) => n + 1), 38);
    return () => window.clearTimeout(id);
  }, [len]);

  const typed = CODE_SOURCE.slice(0, len);
  const lines = typed.split("\n");

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-moss text-[12px] text-white/80 shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="ml-3 font-mono text-[10px] text-white/45">app/page.tsx</span>
      </div>
      <pre className="flex-1 px-4 py-3.5 font-mono leading-relaxed" aria-hidden>
        {lines.map((line, i) => (
          <span key={i}>
            {highlightLine(line, i === lines.length - 1 && len < CODE_SOURCE.length)}
            {i < lines.length - 1 ? "\n" : null}
          </span>
        ))}
      </pre>
    </div>
  );
}

const BARS = [28, 40, 34, 52, 61, 58, 76, 88];

export function AdsVisual() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduced = reducedMotion();
    if (reduced) {
      const id = window.setTimeout(() => setShown(BARS.length), 0);
      return () => window.clearTimeout(id);
    }
    if (shown >= BARS.length) {
      const id = window.setTimeout(() => setShown(0), 2400);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => setShown((n) => n + 1), shown === 0 ? 280 : 180);
    return () => window.clearTimeout(id);
  }, [shown]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between font-mono text-[10px] tracking-wider text-moss/50">
        <span>CONVERSÕES / SEMANA</span>
        <span className="rounded bg-moss px-1.5 py-0.5 text-white">META · GOOGLE</span>
      </div>
      <div className="mt-auto flex h-[70%] items-end gap-2">
        {BARS.map((h, i) => {
          const grown = i < shown;
          const current = i === shown - 1 || (grown && i === BARS.length - 1 && shown === BARS.length);
          return (
            <div
              key={i}
              className={`flex-1 origin-bottom rounded-t-sm transition-[height,background-color] duration-300 ease-out ${
                current ? "bg-moss" : "bg-moss/20"
              }`}
              style={{ height: grown ? `${h}%` : "4%" }}
            />
          );
        })}
      </div>
    </div>
  );
}

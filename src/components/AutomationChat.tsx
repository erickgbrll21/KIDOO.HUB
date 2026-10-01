"use client";

import { useEffect, useState, type ReactNode } from "react";

type ChatEvent =
  | { type: "user"; widths: [number, number] }
  | { type: "typing" }
  | { type: "bot"; widths: [number, number]; branch: number };

const SCRIPT: ChatEvent[] = [
  { type: "user", widths: [80, 50] },
  { type: "typing" },
  { type: "bot", widths: [100, 70], branch: 0 },
  { type: "user", widths: [65, 40] },
  { type: "typing" },
  { type: "bot", widths: [90, 55], branch: 1 },
  { type: "user", widths: [75, 45] },
  { type: "typing" },
  { type: "bot", widths: [100, 60], branch: 2 },
];

const DELAY: Record<ChatEvent["type"], number> = { user: 1100, typing: 900, bot: 1500 };
const RESTART_DELAY = 2600;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden>
      <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6L4.5 19.5Z" strokeLinejoin="round" />
      <path
        d="M9.2 9.4c.2 2.4 2.6 4.8 5.2 5.3l1-1.2-1.6-.9-.7.6c-.9-.4-1.8-1.3-2.2-2.2l.6-.7-.9-1.6-1.4.7Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function BotBadge() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-moss text-white">
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden>
        <rect x="3" y="5" width="10" height="8" rx="2.5" />
        <rect x="7.3" y="2" width="1.4" height="3" rx="0.7" />
        <circle cx="6.2" cy="9" r="1" fill="#353f34" />
        <circle cx="9.8" cy="9" r="1" fill="#353f34" />
      </svg>
    </span>
  );
}

const BRANCHES: { label: string; icon: ReactNode }[] = [
  {
    label: "Atende",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-[18px] w-[18px]" aria-hidden>
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Qualifica",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-[18px] w-[18px]" aria-hidden>
        <path d="M4 5h16l-6 7.5V19l-4-2v-4.5L4 5Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Agenda",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-[18px] w-[18px]" aria-hidden>
        <rect x="4" y="5.5" width="16" height="14" rx="2.5" />
        <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" strokeLinecap="round" />
        <path d="M9 14h.01M12 14h.01M15 14h.01" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
    ),
  },
];

function Message({ event }: { event: ChatEvent }) {
  if (event.type === "typing") {
    return (
      <div className="swap-in flex items-end justify-end gap-1.5">
        <span className="flex items-center gap-[3px] rounded-lg rounded-br-sm bg-moss/[0.14] px-2.5 py-2">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="h-1 w-1 animate-bounce rounded-full bg-moss/60"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </span>
        <BotBadge />
      </div>
    );
  }
  if (event.type === "user") {
    return (
      <div className="swap-in flex items-start gap-1.5">
        <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-moss/20" />
        <span className="flex-1 rounded-lg rounded-tl-sm bg-white p-1.5 shadow-sm ring-1 ring-moss/5">
          <span className="block h-1 rounded bg-moss/20" style={{ width: `${event.widths[0]}%` }} />
          <span className="mt-1 block h-1 rounded bg-moss/15" style={{ width: `${event.widths[1]}%` }} />
        </span>
      </div>
    );
  }
  return (
    <div className="swap-in flex items-end justify-end gap-1.5">
      <span className="w-[72%] rounded-lg rounded-br-sm bg-moss/[0.14] p-1.5">
        <span className="block h-1 rounded bg-moss/35" style={{ width: `${event.widths[0]}%` }} />
        <span className="mt-1 block h-1 rounded bg-moss/25" style={{ width: `${event.widths[1]}%` }} />
      </span>
      <BotBadge />
    </div>
  );
}

export function AutomationChat() {
  // Number of SCRIPT events already played.
  const [step, setStep] = useState(1);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const done = step >= SCRIPT.length;
    if (reduced && done) return;
    const wait = reduced ? 0 : done ? RESTART_DELAY : DELAY[SCRIPT[step].type];
    const next = reduced ? SCRIPT.length : done ? 0 : step + 1;
    const id = window.setTimeout(() => setStep(next), wait);
    return () => window.clearTimeout(id);
  }, [step]);

  const played = step;
  const visible = SCRIPT.slice(0, played)
    .map((event, index) => ({ event, index }))
    .filter(({ event, index }) => event.type !== "typing" || index === played - 1);

  const lastBot = [...visible].reverse().find(({ event }) => event.type === "bot");
  const activeBranch = lastBot && lastBot.event.type === "bot" ? lastBot.event.branch : -1;

  return (
    <div className="flex items-center">
      <div className="w-[150px] shrink-0 overflow-hidden rounded-[22px] border-[5px] border-moss-deep bg-white shadow-[0_24px_50px_-28px_rgb(0_0_0/0.55)]">
        <div className="flex items-center justify-between bg-moss px-3 py-2.5 text-white">
          <WhatsAppIcon />
          <span className="flex flex-col gap-[3px]" aria-hidden>
            <span className="h-[3px] w-[3px] rounded-full bg-white/80" />
            <span className="h-[3px] w-[3px] rounded-full bg-white/80" />
            <span className="h-[3px] w-[3px] rounded-full bg-white/80" />
          </span>
        </div>
        <div className="flex h-[176px] flex-col justify-end gap-2.5 overflow-hidden bg-moss/[0.03] px-2.5 py-3.5" aria-hidden>
          {visible.map(({ event, index }) => (
            <Message key={index} event={event} />
          ))}
        </div>
      </div>

      <span className="h-px w-4 shrink-0 border-t border-dashed border-moss/40" aria-hidden />
      <ul className="relative flex flex-col gap-5 py-1">
        <span
          aria-hidden
          className="absolute top-[22px] bottom-[22px] left-0 w-4 rounded-l-xl border-y border-l border-dashed border-moss/40"
        />
        <span aria-hidden className="absolute top-1/2 left-0 h-px w-4 border-t border-dashed border-moss/40" />
        {BRANCHES.map((b, i) => {
          const active = i === activeBranch;
          return (
            <li key={b.label} className="relative flex items-center gap-2.5 pl-4">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 ${
                  active
                    ? "scale-110 border-moss bg-moss text-white shadow-[0_0_0_6px_rgb(53_63_52/0.08)]"
                    : "border-moss/25 bg-white text-moss"
                }`}
              >
                {b.icon}
              </span>
              <span
                className={`font-mono text-[12px] font-bold tracking-[0.14em] uppercase transition-colors duration-500 ${
                  active ? "text-moss" : "text-moss/75"
                }`}
              >
                {b.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

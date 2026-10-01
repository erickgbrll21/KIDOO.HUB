const ITEMS = [
  "BUILD. AUTOMATE. GROW.",
  "DIGITAL SOLUTIONS / CONNECTED",
  "TECH + STRATEGY + GROWTH",
  "<KIDOO />",
  "BUILDING DIGITAL EXPERIENCES",
  "POWERED BY TECHNOLOGY",
  "AUTOMATE / BUILD / SCALE",
  "KIDOO // DIGITAL",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="mask-fade-x overflow-hidden border-y border-white/10 bg-moss py-5 text-white" aria-hidden>
      <div className="animate-marquee flex w-max gap-12 font-mono text-xs tracking-[0.22em]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap text-white/70">
            {item}
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

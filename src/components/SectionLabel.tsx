type SectionLabelProps = {
  index: string;
  children: string;
  tone?: "dark" | "light";
};

export function SectionLabel({ index, children, tone = "dark" }: SectionLabelProps) {
  const muted = tone === "dark" ? "text-moss/45" : "text-white/50";
  const line = tone === "dark" ? "bg-moss/20" : "bg-white/25";
  return (
    <p className={`flex items-center gap-4 font-mono text-[11px] tracking-[0.22em] ${muted}`}>
      <span>{index}</span>
      <span className={`h-px w-10 ${line}`} />
      <span>{children}</span>
    </p>
  );
}

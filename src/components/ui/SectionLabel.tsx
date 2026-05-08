type SectionLabelProps = {
  index: string;
  label: string;
  tone?: "light" | "dark";
};

export function SectionLabel({ index, label, tone = "dark" }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-4 text-[11px] font-medium uppercase tracking-label ${
        tone === "light" ? "text-stone" : "text-carbon/55"
      }`}
    >
      <span>{index}</span>
      <span className={`h-px w-12 ${tone === "light" ? "bg-stone/45" : "bg-carbon/25"}`} />
      <span>{label}</span>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export default function SectionLabel({
  children,
  variant = "dark",
  className = "",
}: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6 ${
        variant === "light"
          ? "border border-accent/40 text-accent bg-accent/10"
          : "border border-primary/20 text-primary bg-primary/5"
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          variant === "light" ? "bg-accent" : "bg-primary"
        }`}
      />
      {children}
    </span>
  );
}

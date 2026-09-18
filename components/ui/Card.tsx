interface Props {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg";
  tone?: "light" | "surface" | "dark" | "glass";
  hover?: boolean;
  flush?: boolean;
  className?: string;
  id?: string;
}

/** Equal padding on all 4 sides at each breakpoint (longhands, not `p-*`). */
const PADDING: Record<NonNullable<Props["size"]>, string> = {
  sm: "pt-6 pr-6 pb-6 pl-6 sm:pt-7 sm:pr-7 sm:pb-7 sm:pl-7 lg:pt-8 lg:pr-8 lg:pb-8 lg:pl-8",
  base: "pt-7 pr-7 pb-7 pl-7 sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-8 lg:pt-10 lg:pr-10 lg:pb-10 lg:pl-10",
  lg: "pt-8 pr-8 pb-8 pl-8 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-10 lg:pt-12 lg:pr-12 lg:pb-12 lg:pl-12",
};

const TONE: Record<NonNullable<Props["tone"]>, string> = {
  light: "bg-white border border-border",
  surface: "bg-surface border border-border",
  dark: "bg-primary border border-white/10 text-white",
  glass: "bg-white/[0.06] border border-white/10 text-white backdrop-blur-sm",
};

export default function Card({
  children,
  size = "base",
  tone = "light",
  hover = false,
  flush = false,
  className = "",
  id,
}: Props) {
  return (
    <div
      id={id}
      className={`box-border flex h-auto w-full flex-col self-stretch rounded-2xl shadow-none transition-all duration-300 ease-out ${
        flush ? "overflow-hidden p-0" : PADDING[size]
      } ${TONE[tone]} ${
        hover ? "hover:-translate-y-1 hover:shadow-xl hover:border-accent" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Colored label strip at the top of a flush card. */
export function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`shrink-0 px-6 py-4 sm:px-7 sm:py-5 ${className}`}>
      {children}
    </div>
  );
}

/** Body region of a flush card — same padding scale as size="sm". */
export function CardBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`box-border min-h-0 flex-1 pt-6 pr-6 pb-6 pl-6 sm:pt-7 sm:pr-7 sm:pb-7 sm:pl-7 lg:pt-8 lg:pr-8 lg:pb-8 lg:pl-8 ${className}`}
    >
      {children}
    </div>
  );
}
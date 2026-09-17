import { statsData } from "@/lib/tech7";

export default function StatsTicker() {
  return (
    <section
      id="stats"
      className="bg-primary border-t border-white/10 border-b border-white/10"
    >
      <div className="container py-1 grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {statsData.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-4 py-5 sm:py-6 text-center gap-1.5"
          >
            <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-accent leading-none font-normal">
              {stat.value}
              {stat.suffix && (
                <span className="text-[0.6em] opacity-85 ml-0.5">{stat.suffix}</span>
              )}
            </span>
            <span className="text-white/60 text-[11px] font-medium tracking-widest uppercase mt-0.5">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

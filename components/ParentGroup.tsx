import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import { j7Data } from "@/lib/tech7";

export default function ParentGroup() {
  return (
    <section id="j7-group" className="section bg-primary text-white relative overflow-hidden py-20 lg:py-24">
      {/* Subtle radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(215,240,156,0.08),transparent_50%)] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Story & Stats */}
          <div>
            <SectionLabel variant="light">{j7Data.label}</SectionLabel>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight mt-4 mb-4">
              {j7Data.headline}
            </h2>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {j7Data.sub}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {j7Data.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="font-serif text-accent leading-none mb-1.5 text-3xl sm:text-4xl font-normal">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-wider text-white/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portfolio & Sectors */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Signature Developments */}
            <Card size="sm" tone="glass">
              <h3 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                Signature Developments
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {j7Data.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-xs sm:text-sm font-medium text-white"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {project}
                  </div>
                ))}
              </div>
            </Card>

            {/* Core Sectors */}
            <Card size="sm" tone="glass">
              <h3 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                Institutional Expertise Across Sectors
              </h3>
              <div className="flex flex-wrap gap-2">
                {j7Data.sectors.map((sec, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs text-white font-medium"
                  >
                    {sec}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
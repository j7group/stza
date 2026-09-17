import SectionLabel from "@/components/ui/SectionLabel";
import { parkStats } from "@/lib/tech7";

export default function ParkBreakdown() {
  return (
    <section id="park" className="section bg-primary">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <SectionLabel variant="light">Tech7 Park</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight max-w-xl">
            1.1 Million Sq Ft of Possibility
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden shadow-sm">
          {parkStats.map((stat, i) => (
            <div
              key={i}
              className={`p-7 sm:p-8 lg:p-9 transition-colors duration-200 border-b border-white/10 ${
                (i + 1) % 2 === 0 ? "lg:border-r" : "border-r"
              } ${(i + 1) % 4 === 0 ? "lg:border-r-0" : ""} ${
                i >= 4 ? "border-b-0" : ""
              } ${stat.highlight ? "bg-accent" : "bg-transparent"}`}
            >
              <div
                className={`font-serif leading-none mb-2.5 text-3xl sm:text-4xl lg:text-5xl font-normal ${
                  stat.highlight ? "text-primary" : "text-accent"
                }`}
              >
                {stat.value}
                <span className="font-sans font-medium opacity-80 text-base sm:text-lg ml-1">
                  {stat.unit}
                </span>
              </div>
              <div
                className={`text-xs sm:text-[13px] font-medium tracking-wider uppercase mt-2.5 ${
                  stat.highlight ? "text-primary" : "text-white/60"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Buildings status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            {
              name: "Emporium Park 1 (EMP1)",
              status: "Operational",
              area: "364,129 sqft",
              floors: "7 Floors",
              highlight: true,
            },
            {
              name: "Emporium Park 2 (EMP2)",
              status: "Completion June 2027",
              area: "293,473 sqft",
              floors: "7 Floors",
              highlight: false,
            },
          ].map((building) => (
            <div
              key={building.name}
              className={`rounded-2xl p-6 sm:p-7 flex items-center justify-between gap-4 ${
                building.highlight
                  ? "bg-primary border border-accent/30 shadow-xs"
                  : "bg-white/[0.04] border border-white/10"
              }`}
            >
              <div>
                <div className="text-xs text-white/50 mb-1 font-medium tracking-wider uppercase">
                  {building.floors}
                </div>
                <div className="text-base sm:text-lg font-semibold text-white">{building.name}</div>
                <div className="text-sm text-white/60 mt-0.5">{building.area}</div>
              </div>
              <span
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap border ${
                  building.highlight
                    ? "text-accent border-accent/60 bg-accent/10"
                    : "text-white/50 border-white/30"
                }`}
              >
                {building.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

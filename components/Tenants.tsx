import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import { tenants } from "@/lib/tech7";

const statusConfig = {
  operational: {
    label: "Operational",
    className: "bg-accent/20 text-primary border-accent/40",
    dotClass: "bg-primary",
  },
  signed: {
    label: "Agreement Signed",
    className: "bg-blue-500/10 text-blue-700 border-blue-500/25",
    dotClass: "bg-blue-500",
  },
  discussion: {
    label: "In Discussion",
    className: "bg-amber-500/10 text-amber-700 border-amber-500/25",
    dotClass: "bg-amber-400",
  },
};

export default function Tenants() {
  return (
    <section id="tenants" className="section bg-surface border-t border-border py-28 lg:py-36">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-start md:items-end flex-wrap gap-6 mb-14">
          <div>
            <SectionLabel>Zone Occupancy</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-tight">
              Ecosystem &amp; Key Tenants
            </h2>
            <p className="text-muted text-base mt-2 max-w-xl leading-relaxed">
              Join an elite collective of international technology leaders, fintech giants, and research consortia establishing operations inside Tech7.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-border text-sm font-medium text-primary shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(215,240,156,0.5)]" />
            Active Leasing In Progress
          </div>
        </div>

        {/* Tenant Cards */}
        <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {tenants.map((tenant, idx) => {
            const status = statusConfig[tenant.status];
            return (
              <Card key={idx} hover className="flex flex-col justify-between">
                {/* Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold uppercase tracking-wider ${status.className}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`} />
                      {status.label}
                    </span>
                    <span className="font-mono text-xs text-muted">ID 0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-primary tracking-tight mb-2">
                    {tenant.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{tenant.floor}</p>
                </div>

                {/* Bottom metric */}
                <div className="mt-8 pt-6 border-t border-border flex items-baseline justify-between">
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-muted mb-1 font-medium">
                      Allocated Footprint
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-primary leading-none">
                      {tenant.areaSqft}
                    </span>
                    <span className="text-sm text-muted ml-1">sq. ft.</span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
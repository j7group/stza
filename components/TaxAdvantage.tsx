import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import { incomeTaxRows, importTaxRows } from "@/lib/tech7";

function TaxTable({
  rows,
  title,
}: {
  rows: { label: string; withoutSTZ: string; withSTZ: string }[];
  title: string;
}) {
  return (
    <Card flush>
      {/* Header row */}
      <div className="grid grid-cols-[1fr_auto_auto] gap-4 bg-primary px-8 py-5 sm:py-6 items-center">
        <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">{title}</span>
        <span className="text-xs text-white/60 font-medium text-right tracking-wider uppercase min-w-[90px]">
          Without STZ
        </span>
        <span className="text-xs font-bold text-primary bg-accent px-3 py-1.5 rounded-md tracking-wider uppercase min-w-[80px] text-center">
          With STZ
        </span>
      </div>

      {rows.map((row, i) => (
        <div
          key={i}
          className={`grid grid-cols-[1fr_auto_auto] gap-4 px-8 py-5 sm:py-5.5 items-center ${i < rows.length - 1 ? "border-b border-border" : ""
            } ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <span className="text-sm sm:text-base text-primary font-normal">{row.label}</span>
          <span className="text-sm sm:text-base  line-through text-right min-w-[90px]">{row.withoutSTZ}</span>
          <span className="text-base sm:text-lg font-bold text-primary min-w-[80px] text-center">{row.withSTZ}</span>
        </div>
      ))}

      {/* Total row */}
      <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-8 py-6 items-center bg-accent">
        <span className="text-sm sm:text-base font-bold text-primary">Effective Total</span>
        <span className="text-sm sm:text-base text-primary/75 font-semibold text-right min-w-[90px]">~39%+</span>
        <span className="text-base sm:text-lg font-extrabold text-primary min-w-[80px] text-center">0%</span>
      </div>
    </Card>
  );
}

export default function TaxAdvantage() {
  return (
    <section id="benefits" className="section bg-surface py-28 lg:py-36">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <SectionLabel>Tax Advantage</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-tight mb-5">
              No Taxes.<br />Zero.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              With an STZ license from Tech7, your business pays 0% on income tax, corporate tax, import duties, and sales tax — for a full 10 years.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              This isn&apos;t a reduction. It&apos;s a full exemption — one of the most competitive tax frameworks in the region for technology businesses.
            </p>
          </div>

          {/* Big visual stat */}
          <Card size="lg" tone="dark" className="flex flex-col gap-3 justify-center">
            <span className="text-xs sm:text-sm text-white/60 font-semibold tracking-widest uppercase">You Save</span>
            <span className="font-serif text-accent leading-none text-7xl sm:text-8xl lg:text-9xl font-normal">
              39%
            </span>
            <span className="text-base text-white/70 leading-relaxed max-w-xs mt-2">
              effective tax rate on your business operations, for 10 years.
            </span>
          </Card>
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-8 lg:gap-10">
          <TaxTable rows={incomeTaxRows} title="Income Taxes" />
          <TaxTable rows={importTaxRows} title="Import Taxes" />
        </div>
      </div>
    </section>
  );
}
import SectionLabel from "@/components/ui/SectionLabel";
import { fdiBenefits } from "@/lib/tech7";

export default function FDIBenefits() {
  return (
    <section id="fdi" className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <SectionLabel>Foreign Investors</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-tight">
            Built for International Investment
          </h2>
        </div>

        {/* 4x2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fdiBenefits.map((benefit, i) => (
            <div
              key={i}
              id={`fdi-card-${i}`}
              className="bg-white border border-border rounded-xl p-7 sm:p-8 md:p-12 lg:p-14 flex flex-col transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-5 shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-primary"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={benefit.icon} />
                </svg>
              </div>

              <h3 className="text-base font-bold text-primary mb-2.5 leading-snug">
                {benefit.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed">{benefit.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 p-6 sm:p-7 bg-surface rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-border">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-accent" strokeWidth="2">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            <strong className="text-primary font-semibold">10-Year Guarantee:</strong>{" "}
            All benefits listed above are legally binding and run for a full ten years from the date your STZ license is issued under the STZA Act 2021.
          </p>
        </div>
      </div>
    </section>
  );
}

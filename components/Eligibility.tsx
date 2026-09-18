import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import { eligibilitySteps } from "@/lib/tech7";
import Link from "next/link";

export default function Eligibility() {
  return (
    <section id="eligibility" className="section bg-white py-20 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <SectionLabel>Compliance &amp; Onboarding</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-tight mt-3.5 mb-3">
            How to Qualify as a Zone Enterprise
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Any technology, ITeS, or advanced engineering company meeting the criteria outlined in the STZA Act 2021 can access the 10-year tax holiday and regulatory protections.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 items-stretch md:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-12">
          {eligibilitySteps.map((step, idx) => (
            <Card key={idx} size="sm" hover className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl sm:text-3xl font-normal text-primary leading-none">
                    {step.step}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-primary/5 flex items-center justify-center text-xs text-primary font-semibold">
                    ✓
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-normal text-primary tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{step.body}</p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-dashed border-border text-[11px] text-muted uppercase tracking-wider">
                STZA Act 2021 § Verification
              </div>
            </Card>
          ))}
        </div>

        {/* Assistance Banner */}
        <Card tone="dark" className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-serif text-lg sm:text-xl font-normal text-white mb-1">
              Need assistance with STZA Zone Enterprise licensing?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Our dedicated regulatory concierge team assists prospective tenants through every step of documentation, SECP alignment, and zone sanctioning.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c8e888] shadow-sm shrink-0"
          >
            Speak to Licensing Concierge
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </Card>
      </div>
    </section>
  );
}
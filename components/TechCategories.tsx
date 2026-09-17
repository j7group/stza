import SectionLabel from "@/components/ui/SectionLabel";
import { techCategories } from "@/lib/tech7";

export default function TechCategories() {
  return (
    <section id="categories" className="section bg-primary py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <SectionLabel variant="light">What Can Operate Here</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            From AI to Biotech —<br />Your Industry Belongs Here
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {techCategories.map((cat, i) => (
            <div
              key={i}
              className={`pt-6 md:pt-0 ${i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"}`}
            >
              {/* Category Label */}
              <div className="text-xs sm:text-[13px] font-bold text-accent tracking-wider uppercase mb-6 pb-4 border-b border-white/10">
                {cat.group}
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-3.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-baseline gap-2.5 text-sm text-white/80 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-accent shrink-0" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            Technology categories are defined by the STZA (Qualification and Approval) Rules 2021. Contact our team to confirm your industry classification.
          </p>
        </div>
      </div>
    </section>
  );
}

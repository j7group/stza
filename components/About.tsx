import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutData } from "@/lib/tech7";

export default function About() {
  return (
    <section id="about" className="section bg-surface py-24 lg:py-32">
      <div className="container grid gap-12 lg:gap-16 items-center lg:grid-cols-[55fr_45fr]">
        {/* Left — Text */}
        <div>
          <SectionLabel>{aboutData.label}</SectionLabel>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-8 font-normal">
            {aboutData.headline}
          </h2>

          <div className="flex flex-col gap-5">
            {aboutData.paragraphs.map((para, i) => (
              <p key={i} className="text-muted text-base sm:text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* License badge */}
          <div className="inline-flex items-center gap-4 mt-10 px-7 py-5 bg-white border border-border rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-accent" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-muted tracking-wider uppercase font-semibold">
                STZA Licensed Zone Developer
              </div>
              <div className="text-base font-semibold text-primary mt-0.5">
                License No. {aboutData.licenseNumber}
              </div>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-sm">
          <Image
            src={aboutData.image}
            alt={aboutData.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}

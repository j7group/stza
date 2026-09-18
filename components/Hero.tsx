import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/lib/tech7";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-end overflow-hidden min-h-[100dvh]"
    >
      {/* Background Image */}
      <Image
        src={heroData.image}
        alt="Tech7 Special Technology Zone — B-17 Islamabad"
        fill
        priority
        quality={90}
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/25" />

      {/* Bottom gradient for text legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-primary via-primary/80 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 pt-36">

        {/* Headline */}
        <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight max-w-3xl">
          {heroData.headline.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-white/75 text-base sm:text-lg mb-10 tracking-wide max-w-2xl leading-relaxed">
          {heroData.sub}
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <Link
            href={heroData.primaryCta.href}
            id="hero-primary-cta"
            className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-8 py-3.5 rounded-xl text-[15px] font-semibold tracking-wide hover:bg-[#c8e888] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
          >
            {heroData.primaryCta.label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href={heroData.secondaryCta.href}
            target={heroData.secondaryCta.target}
            id="hero-secondary-cta"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-3.5 rounded-xl text-[15px] font-medium hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            {heroData.secondaryCta.label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex absolute right-10 lg:right-16 bottom-8 sm:bottom-12 flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-widest uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[40%] bg-accent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

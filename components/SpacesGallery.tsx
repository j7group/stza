import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { galleryImages } from "@/lib/tech7";

/** Matches the actual rendered column width of each item at every
 *  breakpoint (grid goes 2 → 3 → 4 cols; "wide" items span 2 cols),
 *  so Next/Image requests the right resolution instead of over- or
 *  under-fetching. */
function imageSizes(span: "wide" | "tall" | "normal") {
  return span === "wide"
    ? "(max-width: 767px) 100vw, (max-width: 1023px) 66vw, 50vw"
    : "(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw";
}

export default function SpacesGallery() {
  return (
    <section id="spaces" className="section bg-white py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionLabel>The Spaces</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-tight">
              Every Detail.<br />Designed for Work.
            </h2>
          </div>
          <p className="text-muted text-base max-w-sm md:text-right leading-relaxed">
            Premium office environments, collaborative spaces, and world-class amenities across 1.1 million square feet.
          </p>
        </div>

        {/* Masonry Grid — 2 cols on phones, 3 on tablets, 4 from desktop up.
            Row height grows with the viewport so images get visibly larger
            on big screens instead of staying pinned to a fixed 220px.
            grid-flow-dense backfills any holes left by the wide/tall spans
            when the column count changes between breakpoints. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-4 md:gap-5 lg:gap-6 auto-rows-[160px] sm:auto-rows-[190px] md:auto-rows-[220px] lg:auto-rows-[260px] xl:auto-rows-[300px] 2xl:auto-rows-[340px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              id={`gallery-img-${i}`}
              className={`group relative overflow-hidden bg-surface border border-border/60 ${
                img.span === "wide" ? "col-span-2" : "col-span-1"
              } ${img.span === "tall" ? "row-span-2" : "row-span-1"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes={imageSizes(img.span)}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-end p-4">
                <span className="text-xs text-white font-medium opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-primary/80 px-3 py-1.5 backdrop-blur-sm shadow-sm">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
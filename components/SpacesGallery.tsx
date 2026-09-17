import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { galleryImages } from "@/lib/tech7";

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

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              id={`gallery-img-${i}`}
              className={`group relative overflow-hidden bg-surface rounded-2xl border border-border/60 ${
                img.span === "wide" ? "col-span-2" : "col-span-1"
              } ${img.span === "tall" ? "row-span-2" : "row-span-1"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end p-4">
                <span className="text-xs text-white font-medium opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-primary/80 px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-sm">
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

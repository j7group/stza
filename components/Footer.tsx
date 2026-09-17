"use client";

import Link from "next/link";
import { footerData } from "@/lib/tech7";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#082210] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 mb-16">
          {/* Column 1: About + CTA */}
          <div className="max-w-sm">
            <span className="block text-xs font-semibold text-white/50 mb-5 uppercase tracking-wider">
              About us
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-snug tracking-tight mb-4">
              Let&apos;s talk about your workspace solutions and opportunities
            </h3>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-7">
              Have questions about our workspaces, STZA zone licensing, or enterprise office allocations?
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-primary font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:bg-[#E4F8B2] hover:-translate-y-0.5 shadow-md"
            >
              Get in Touch
              <span className="text-base leading-none">→</span>
            </Link>
          </div>

          {/* Column 2: Get in touch */}
          <div>
            <span className="block text-xs font-semibold text-white/50 mb-5 uppercase tracking-wider">
              Get in touch
            </span>
            <div className="flex flex-col gap-4">
              <a href="tel:+92518437777" className="text-sm sm:text-base font-medium text-white hover:text-accent transition-colors">
                +92 (51) 843-7777
              </a>
              <a href={`mailto:${footerData.contact.email}`} className="text-sm sm:text-base font-medium text-white hover:text-accent transition-colors">
                {footerData.contact.email}
              </a>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xs">
                Plot No. 1-2, MR-09, Block C, MPCHS, B-17, Islamabad
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <span className="block text-xs font-semibold text-white/50 mb-5 uppercase tracking-wider">
              Quick Links
            </span>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#zone" },
                { label: "Tax Benefits", href: "#benefits" },
                { label: "Spaces", href: "#spaces" },
                { label: "Contact", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm sm:text-base font-medium text-white/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services Links */}
          <div>
            <span className="block text-xs font-semibold text-white/50 mb-5 uppercase tracking-wider">
              Services Links
            </span>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Work point", href: "#spaces" },
                { label: "Smart workspaces", href: "#spaces" },
                { label: "Daily desks", href: "#spaces" },
                { label: "Pro desks", href: "#spaces" },
                { label: "Desk hub", href: "#spaces" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm sm:text-base font-medium text-white/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive Watermark */}
        <div className="relative w-full text-center leading-[0.8] select-none pointer-events-none mt-6 -mb-4 overflow-hidden">
          <span className="font-serif font-bold tracking-tighter inline-block bg-gradient-to-b from-accent/20 to-accent/5 bg-clip-text text-transparent text-[clamp(6rem,21vw,20rem)]">
            Tech7
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-7 mt-4 flex items-center justify-between flex-wrap gap-4 text-xs text-white/50">
          <div>
            &copy; {currentYear} Tech7 (Private) Limited. All rights reserved. A J7 Group Company.
          </div>
          <div className="flex gap-4 items-center">
            <span className="font-mono text-accent">{footerData.legal.license}</span>
            <span>•</span>
            <a
              href="/Tech7_Profile_V5_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Official Profile PDF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

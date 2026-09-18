"use client";

import { useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { navLinks } from "@/lib/tech7";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useLenis((lenis) => {
    setScrolled(lenis.scroll > 80);
  });

  return (
    <>
      <header
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div
          className={`container mx-auto flex items-center justify-between rounded-full border transition-all duration-300 px-6 overflow-visible ${
            scrolled
              ? "h-18 bg-[#081e0e]/95 backdrop-blur-md border-white/15 shadow-lg shadow-black/20"
              : "h-16 bg-[#081e0e]/40 backdrop-blur-sm border-white/10"
          }`}
        >
          {/* Logo — left */}
          <Link href="/" className="flex items-center shrink-0">
            <div
              className={`relative w-auto transition-all duration-300 ${
                scrolled ? "h-8" : "h-9"
              }`}
              style={{ aspectRatio: "auto", width: scrolled ? 140 : 170 }}
            >
              <Image
                src="/logo/TECH7_Website_Logo.svg"
                alt="Tech7"
                fill
                className="object-contain object-left"
                priority
                sizes="200px"
              />
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-normal tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — right */}
          <Link
            href="#contact"
            id="navbar-cta"
            className="hidden md:inline-flex items-center bg-accent text-primary px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#c8e888] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(215,240,156,0.3)] transition-all duration-200 whitespace-nowrap"
          >
            Enquire Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex md:hidden flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-50"
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-serif font-normal hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-primary px-8 py-3 rounded-full text-base font-semibold mt-4 hover:bg-[#c8e888] transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </>
  );
}
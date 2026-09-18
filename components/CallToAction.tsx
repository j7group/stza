"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import { ctaData, footerData } from "@/lib/tech7";

export default function CallToAction() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="section bg-surface py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: Direct Info & PDF */}
          <div>
            <SectionLabel>{ctaData.label}</SectionLabel>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-tight mt-4 mb-3">
              {ctaData.headline[0]}{" "}
              <span className="block text-primary">{ctaData.headline[1]}</span>
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              {ctaData.sub}
            </p>

            {/* Direct Contact Info Card */}
            <Card size="sm" className="mb-6">
              <h4 className="text-[11px] uppercase tracking-wider text-muted font-semibold mb-4">
                Zone Secretariat &amp; Inquiries
              </h4>
              <div className="flex flex-col gap-4">
                <div>
                  <span className="block text-[11px] text-muted mb-0.5 font-medium">Address</span>
                  <p className="text-xs sm:text-sm text-primary font-medium leading-snug">
                    {footerData.contact.address}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3.5 border-t border-border">
                  <div>
                    <span className="block text-[11px] text-muted mb-0.5 font-medium">Email</span>
                    <a href={`mailto:${footerData.contact.email}`} className="text-xs sm:text-sm text-primary font-semibold hover:underline">
                      {footerData.contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="block text-[11px] text-muted mb-0.5 font-medium">Official License</span>
                    <span className="text-xs sm:text-sm font-mono text-primary font-semibold">
                      {footerData.legal.license}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* PDF Download */}
            <a
              href={ctaData.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white border border-primary px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all duration-200 w-full shadow-xs"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              {ctaData.secondaryCta.label} (Official Dossier)
            </a>
          </div>

          {/* Right: Form */}
          <Card>
            {submitted ? (
              <div className="py-8 px-4 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/40 text-primary flex items-center justify-center text-xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-primary mb-1.5 font-normal">Inquiry Received</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed mb-5">
                  Thank you for your interest in Tech7. Our Zone Enterprise Licensing Director will contact you within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-surface text-primary rounded-xl text-xs sm:text-sm font-semibold border border-border hover:bg-border/50 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-primary mb-0.5">
                    Request Zone Space &amp; Consultation
                  </h3>
                  <p className="text-xs text-muted">
                    Begin your STZA qualification and floor allocation process.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { label: "Full Name *", type: "text", placeholder: "e.g. Sarah Khan" },
                    { label: "Company / Organization *", type: "text", placeholder: "e.g. Apex Systems Ltd." },
                  ].map(({ label, type, placeholder }) => (
                    <div key={label}>
                      <label className="block text-[11px] font-semibold text-primary mb-1">{label}</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm outline-none bg-surface focus:border-primary transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { label: "Work Email *", type: "email", placeholder: "sarah@apex.com" },
                    { label: "Phone Number *", type: "tel", placeholder: "+92 300 1234567" },
                  ].map(({ label, type, placeholder }) => (
                    <div key={label}>
                      <label className="block text-[11px] font-semibold text-primary mb-1">{label}</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm outline-none bg-surface focus:border-primary transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-primary mb-1">Tech Domain</label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm outline-none bg-surface text-primary">
                      <option>IT &amp; ITeS / Software</option>
                      <option>Cloud &amp; Data Center</option>
                      <option>AI &amp; Machine Learning</option>
                      <option>Fintech &amp; Payments</option>
                      <option>Hi-Tech &amp; Electronics</option>
                      <option>Other Tech Innovation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-primary mb-1">Required Area (Sq. Ft.)</label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm outline-none bg-surface text-primary">
                      <option>2,500 – 5,000 sq. ft.</option>
                      <option>5,000 – 15,000 sq. ft.</option>
                      <option>15,000 – 40,000 sq. ft.</option>
                      <option>Full Floor (&gt; 50,000 sq. ft.)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-primary mb-1">Additional Notes</label>
                  <textarea
                    rows={2.5}
                    placeholder="Briefly describe your team size, timeline, or STZA queries..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm outline-none bg-surface resize-y focus:border-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-accent text-primary font-semibold text-xs sm:text-sm rounded-xl hover:bg-[#c8e888] transition-all duration-200 disabled:opacity-50 disabled:cursor-wait shadow-sm cursor-pointer mt-1"
                >
                  {loading ? "Transmitting..." : "Submit Allocation Inquiry"}
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
import SectionLabel from "@/components/ui/SectionLabel";
import Card, { CardHeader, CardBody } from "@/components/ui/Card";
import { stzaData } from "@/lib/tech7";

export default function STZOpportunity() {
  const { license, callout } = stzaData;

  return (
    <section id="zone" className="section bg-white py-20 lg:py-24">
      <div className="container">
        {/* Top label + headline */}
        <div className="max-w-2xl mb-12">
          <SectionLabel>{stzaData.label}</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-tight mb-4">
            {stzaData.headline}
          </h2>
          {stzaData.body.map((para, i) => (
            <p key={i} className="text-muted text-base sm:text-lg leading-relaxed mb-3">
              {para}
            </p>
          ))}
        </div>

        {/* Two-col: License card + Callout */}
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-8 lg:gap-10">
          {/* License Card */}
          <Card flush>
            <CardHeader className="bg-primary flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-accent" strokeWidth="2">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
              </svg>
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase">
                Zone Developer License
              </span>
            </CardHeader>

            <CardBody>
              {[
                ["License No.", license.number],
                ["Zone Name", license.zone],
                ["Entity", license.entity],
                ["Location", license.location],
                ["Issue Date", license.issued],
                ["Expiry Date", license.expiry],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[130px_1fr] gap-3 py-2.5 border-b border-border last:border-b-0 items-center"
                >
                  <span className="text-xs text-muted font-medium uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="text-sm sm:text-base text-primary font-medium">{value}</span>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Right col: Callout box + STZA authority */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Accent Callout */}
            <Card size="lg" tone="dark">
              <div className="font-serif text-accent leading-none mb-3 text-5xl sm:text-6xl font-normal">
                {callout.stat}
              </div>
              <div className="text-base sm:text-lg font-semibold mb-2">{callout.label}</div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{callout.body}</p>
            </Card>

            {/* STZA Info */}
            <Card size="sm">
              <div className="text-xs text-muted font-semibold uppercase tracking-wider mb-2">
                Regulatory Authority
              </div>
              <div className="text-base sm:text-lg font-bold text-primary mb-2">
                Special Technology Zones Authority
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Established under the STZA Act 2021, Government of Pakistan. Tech7 operates under full regulatory oversight and compliance.
              </p>
              <a
                href="https://stza.gov.pk/tech-7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-primary text-xs sm:text-sm font-semibold border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors"
              >
                www.stza.gov.pk/tech-7
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gullia = localFont({
  src: "../public/font/gullia.woff2",
  variable: "--font-gullia",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tech7.pk"),
  title: "Tech7 — Pakistan's Premier Special Technology Zone",
  description:
    "Tech-7 Pvt. Ltd. is a licensed Special Technology Zone (STZ) under STZA, offering 1.1 million sq ft of advanced office space, zero income tax, and world-class infrastructure in B-17, Islamabad.",
  keywords: [
    "Tech7",
    "Special Technology Zone",
    "STZA",
    "Islamabad tech zone",
    "Pakistan technology investment",
    "STZ license",
    "coworking Islamabad",
    "B-17 Islamabad",
    "J7 Group",
    "FDI Pakistan",
    "tax-free technology zone",
  ],
  authors: [{ name: "Tech7 Pvt. Ltd." }],
  creator: "Tech7 Pvt. Ltd.",
  publisher: "J7 Group",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://tech7.pk",
    siteName: "Tech7 Special Technology Zone",
    title: "Tech7 — Pakistan's Premier Special Technology Zone",
    description:
      "1.1M sqft. Zero income tax. 100% foreign ownership. Pakistan's premier licensed Special Technology Zone in B-17, Islamabad.",
    images: [
      {
        url: "/images/imgi_22_9-1.jpg.webp",
        width: 1200,
        height: 630,
        alt: "Tech7 Special Technology Zone — Islamabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech7 — Pakistan's Premier Special Technology Zone",
    description:
      "1.1M sqft. Zero income tax. 100% foreign ownership. Licensed STZ in B-17, Islamabad.",
    images: ["/images/imgi_22_9-1.jpg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${gullia.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

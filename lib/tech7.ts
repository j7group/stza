import type {
  Stat,
  ParkStat,
  TaxRow,
  FDIBenefit,
  TechCategory,
  Tenant,
  FloorData,
  EligibilityStep,
  GalleryImage,
  J7Project,
  NavLink,
} from "./types";

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "The Zone", href: "#zone" },
  { label: "Benefits", href: "#benefits" },
  { label: "Spaces", href: "#spaces" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const heroData = {
  badge: "Licensed Special Technology Zone · STZA",
  headline: ["Where Pakistan's", "Technology Future", "Takes Shape."],
  sub: "1.1 Million Sq Ft · B-17, Islamabad · Licensed 2024",
  primaryCta: { label: "Explore the Zone", href: "#about" },
  secondaryCta: {
    label: "Download Profile",
    href: "/Tech7_Profile_V5_compressed.pdf",
    target: "_blank",
  },
  image: "/images/imgi_22_9-1.jpg.webp",
};

// ─── Stats Ticker ─────────────────────────────────────────────────────────────
export const statsData: Stat[] = [
  { value: "1.1", suffix: "M sqft", label: "Total Licensed Area" },
  { value: "39", suffix: "%", label: "Effective Tax Savings" },
  { value: "657", suffix: "K sqft", label: "Net Leasable Area" },
  { value: "10", suffix: "+", label: "Years of J7 Excellence" },
];

// ─── About ───────────────────────────────────────────────────────────────────
export const aboutData = {
  label: "About Tech7",
  headline: "A Licensed Special Technology Zone for Pakistan's Digital Economy",
  paragraphs: [
    "Tech-7 Pvt. Ltd. is a licensed Special Technology Zone, having obtained an STZ license for an area of 1.1 million square feet under the supervision and regulatory oversight of the Special Technology Zones Authority (STZA).",
    "The licensed area comprises dedicated parking facilities for clients and tenants, a mezzanine floor designed for entertainment and support amenities, and multiple floors allocated specifically for technology zone operations.",
    "The facility features advanced office spaces, incubation centers, and eco-friendly amenities, creating a modern and innovation-driven environment aimed at attracting international partnerships, technology companies, startups, and investors.",
  ],
  image: "/images/imgi_34_7-2.jpg",
  imageAlt: "Tech7 interior — premium office lounge",
  licenseNumber: "02-10000-104",
  website: "www.stza.gov.pk/tech-7",
};

// ─── STZA Opportunity ────────────────────────────────────────────────────────
export const stzaData = {
  label: "The Opportunity",
  headline: "Pakistan's Most Competitive Technology Ecosystem",
  body: [
    "Pakistan is rapidly emerging as a regional technology hub, and the Special Technology Zones Authority (STZA) framework offers a unique opportunity for investors and technology companies to operate in a tax-efficient, policy-backed ecosystem.",
    "By becoming a licensed Zone Enterprise, investors can benefit from long-term tax incentives, ease of doing business, and access to a regulated technology environment designed to accelerate growth and returns.",
  ],
  callout: {
    stat: "39%",
    label: "Effective Tax Savings",
    body: "0% on all income taxes, imports, and dividends with an STZ license — for a full 10 years from date of issuance.",
  },
  license: {
    number: "02-10000-104",
    zone: "Tech7 Special Technology Zone",
    entity: "Tech7 (Private) Limited",
    location: "Plot No. 1-2, MR-09, Block C, B-17, Islamabad",
    issued: "01-09-2024",
    expiry: "01-09-2039",
  },
};

// ─── Park Breakdown ──────────────────────────────────────────────────────────
export const parkStats: ParkStat[] = [
  { value: "451K", unit: "sqft", label: "Offices" },
  { value: "91K", unit: "sqft", label: "Commercial" },
  { value: "115K", unit: "sqft", label: "Club & Amenities" },
  { value: "657K", unit: "sqft", label: "Net Leasable Area" },
  { value: "277K", unit: "sqft", label: "Common Areas" },
  { value: "4K", unit: "sqft", label: "Front Desk Lobby" },
  { value: "156K", unit: "sqft", label: "Dedicated Smart Parking" },
  { value: "1.1M", unit: "sqft", label: "Grand Total Area", highlight: true },
];

// ─── Floor Data ───────────────────────────────────────────────────────────────
export const floorData: FloorData[] = [
  { floor: "1st", emp1: 49979, emp2: 41501 },
  { floor: "2nd", emp1: 53858, emp2: 46512 },
  { floor: "2nd A", emp1: 56781, emp2: 46804 },
  { floor: "3rd", emp1: 55057, emp2: 46788 },
  { floor: "4th", emp1: 57882, emp2: 46713 },
  { floor: "5th", emp1: 67915, emp2: 47181 },
  { floor: "5th A", emp1: 22657, emp2: 17975 },
];

// ─── Tax Data ─────────────────────────────────────────────────────────────────
export const incomeTaxRows: TaxRow[] = [
  { label: "Income Tax", withoutSTZ: "29%", withSTZ: "0%" },
  {
    label: "Minimum Tax (Sec 113)",
    withoutSTZ: "1.25% of Annual Turnover",
    withSTZ: "0%",
  },
  {
    label: "Alternate Corporate Tax (Sec 113C)",
    withoutSTZ: "17% on Accounting Profit",
    withSTZ: "0%",
  },
  {
    label: "Super Tax – 4C (income > 500M)",
    withoutSTZ: "10%",
    withSTZ: "0%",
  },
  { label: "Withholding Tax on Income", withoutSTZ: "5.5%", withSTZ: "0%" },
];

export const importTaxRows: TaxRow[] = [
  {
    label: "Custom Duty / Additional Custom Duty",
    withoutSTZ: "20% / 5% / 10–15%",
    withSTZ: "0%",
  },
  { label: "Sales Tax", withoutSTZ: "18%", withSTZ: "0%" },
  { label: "Additional Tax", withoutSTZ: "4%", withSTZ: "0%" },
  { label: "Income Tax on Imports", withoutSTZ: "5.5%", withSTZ: "0%" },
];

// ─── FDI Benefits ─────────────────────────────────────────────────────────────
export const fdiBenefits: FDIBenefit[] = [
  {
    title: "100% Ownership",
    body: "Foreign investors can have 100% ownership of businesses operating in the zone.",
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 14.5c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08A7.5 7.5 0 0112 19.5z",
  },
  {
    title: "Non-Taxibility",
    body: "0% Income Tax on business gains, profits, and incomes for 10 years from license issuance.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Tax-Free Dividends",
    body: "100% Tax Exemption on Foreign Dividend Income for a period of ten years.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Full Repatriation",
    body: "Easy and full repatriation of profits and dividends with no restrictions.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Foreign Currency Account",
    body: "Hedge against devaluation of local currency through dedicated forex accounts.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    title: "Unrestricted Capital",
    body: "Restriction-free capital flow through Special Forex Accounts.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Duty & Tax-Free Import",
    body: "100% Exemption from Income Tax, Sales Tax, and Custom Duties on imports for 10 years.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "10-Year Advantage",
    body: "Every benefit runs for a full ten years from the date your license is issued.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

// ─── Tech Categories ──────────────────────────────────────────────────────────
export const techCategories: TechCategory[] = [
  {
    group: "IT & Computing",
    items: [
      "Information Technology (IT) & ITeS",
      "Data Center & Cloud Computing",
      "Artificial Intelligence (AI)",
      "Big Data Analytics",
      "Cybersecurity",
      "E-commerce",
      "Business Process Outsourcing (BPO)",
      "Quantum Computing",
      "Robo Advisory",
      "Telemedicine",
    ],
  },
  {
    group: "Hi-Tech / Advanced Production",
    items: [
      "Electronics",
      "Space Technologies & Satellite Smart Devices",
      "Electric Vehicles",
      "Semiconductor Design & Manufacturing",
      "Robotics & Wearables",
      "Bioengineering, Biotech & Medtech",
      "3D Printing & Precise Instruments",
      "Envirotech, Greentech & Cleantech",
      "Renewable Energy",
    ],
  },
  {
    group: "Emerging Tech",
    items: [
      "Fintech & Digital Payments",
      "Augmented & Virtual Reality",
      "Internet of Things (IoT)",
      "Blockchain & Web3",
      "EdTech & Learning Platforms",
      "HealthTech & Digital Health",
      "AgriTech & Smart Farming",
      "Smart City Solutions",
      "Autonomous Vehicles",
      "Nanotechnology",
    ],
  },
];

// ─── Gallery Images ───────────────────────────────────────────────────────────
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/imgi_22_9-1.jpg.webp",
    alt: "Tech7 building exterior — aerial view",
    span: "wide",
  },
  {
    src: "/images/imgi_34_7-2.jpg",
    alt: "Tech7 premium office lounge",
    span: "tall",
  },
  {
    src: "/images/imgi_36_34.jpg",
    alt: "Tech7 collaborative workspace",
    span: "normal",
  },
  {
    src: "/images/imgi_35_5-2.jpg",
    alt: "Tech7 office space",
    span: "normal",
  },
  {
    src: "/images/imgi_37_3-1.jpg",
    alt: "Tech7 interior space",
    span: "normal",
  },
  {
    src: "/images/imgi_38_2-1.jpg",
    alt: "Tech7 workspace detail",
    span: "normal",
  },
  {
    src: "/images/imgi_28_15-1.jpg",
    alt: "Tech7 office floor",
    span: "wide",
  },
  {
    src: "/images/imgi_29_14-1.jpg",
    alt: "Tech7 workspace area",
    span: "normal",
  },
  {
    src: "/images/imgi_30_13-1.jpg",
    alt: "Tech7 office environment",
    span: "normal",
  },
  {
    src: "/images/imgi_31_12-1.jpg",
    alt: "Tech7 collaborative area",
    span: "normal",
  },
  {
    src: "/images/imgi_32_11-1.jpg",
    alt: "Tech7 open office",
    span: "tall",
  },
  {
    src: "/images/imgi_33_9-1.jpg",
    alt: "Tech7 building — Islamabad",
    span: "normal",
  },
  {
    src: "/images/imgi_27_1-2.jpg",
    alt: "Tech7 premium suite",
    span: "normal",
  },
  {
    src: "/images/imgi_95_Tech7-STZ-1.png",
    alt: "Tech7 STZ branding",
    span: "normal",
  },
];

// ─── Tenants ──────────────────────────────────────────────────────────────────
export const tenants: Tenant[] = [
  {
    name: "ISTP — Co Zone Developer",
    floor: "2nd and 3rd Floor, EMP1 & EMP2",
    areaSqft: "200,000",
    status: "operational",
  },
  {
    name: "IBI — China",
    floor: "3rd Floor, EMP1",
    areaSqft: "20,000",
    status: "discussion",
  },
  {
    name: "Jazz Cash",
    floor: "4th Floor, EMP1",
    areaSqft: "8,000",
    status: "signed",
  },
];

// ─── Eligibility ──────────────────────────────────────────────────────────────
export const eligibilitySteps: EligibilityStep[] = [
  {
    step: "01",
    title: "Register Your Entity",
    body: "Must be a legally registered entity in Pakistan, incorporated with SECP or registered with the relevant authority under the STZA Act 2021.",
  },
  {
    step: "02",
    title: "Secure Space in Tech7",
    body: "Have a space or land allotted in one of the notified Special Technology Zones — i.e., Tech7 Pvt. Ltd., Plot B-17, Islamabad.",
  },
  {
    step: "03",
    title: "Operate in a STZA Category",
    body: "Have a business operating in one of the technology categories under the STZA (Qualification and Approval) Rules 2021.",
  },
];

// ─── J7 Group ─────────────────────────────────────────────────────────────────
export const j7Data = {
  label: "Parent Company",
  headline: "A J7 Group Company",
  sub: "One of Pakistan's leading real estate developers delivering integrated destinations that redefine the future of urban living.",
  stats: [
    { value: "10+", label: "Years of Excellence" },
    { value: "10M+", label: "Sq Ft Developments" },
  ],
  projects: ["Emporium", "Radisson Blu", "Rotana Islamabad", "J7 Icon", "Infinity"],
  sectors: ["Hospitality", "Retail", "Residential", "Technology", "Wellness"],
};

// ─── Contact / CTA ───────────────────────────────────────────────────────────
export const ctaData = {
  label: "Get Started",
  headline: ["Ready to Operate in", "Pakistan's Premier Tech Zone?"],
  sub: "Secure your space in Tech7 — B-17, Islamabad. STZ License No. 02-10000-104.",
  primaryCta: { label: "Contact Our Team", href: "#contact" },
  secondaryCta: {
    label: "Download Profile",
    href: "/Tech7_Profile_V5_compressed.pdf",
    target: "_blank",
  },
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const footerData = {
  tagline: "Pakistan's Premier Licensed Special Technology Zone",
  links: [
    { label: "About Tech7", href: "#about" },
    { label: "The Zone", href: "#zone" },
    { label: "Tax Benefits", href: "#benefits" },
    { label: "Spaces", href: "#spaces" },
    { label: "Eligibility", href: "#eligibility" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    address: "Plot No. 1-2, MR-09, Block C, Multi Professionals Co-Operative Housing Society, B-17, Islamabad",
    website: "www.stza.gov.pk/tech-7",
    email: "info@tech7.pk",
  },
  legal: {
    license: "STZ License No. 02-10000-104",
    authority: "Special Technology Zones Authority (STZA)",
    issued: "01-09-2024",
    expiry: "01-09-2039",
    company: "Tech7 (Private) Limited",
    parent: "A J7 Group Company",
  },
};

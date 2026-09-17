// ─── All TypeScript Interfaces for Tech7 Data ───────────────────────────────

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface ParkStat {
  value: string;
  unit: string;
  label: string;
  highlight?: boolean;
}

export interface TaxRow {
  label: string;
  withoutSTZ: string;
  withSTZ: string;
}

export interface FDIBenefit {
  title: string;
  body: string;
  icon: string; // SVG path string
}

export interface TechCategory {
  group: string;
  items: string[];
}

export interface Tenant {
  name: string;
  floor: string;
  areaSqft: string;
  status: "operational" | "signed" | "discussion";
}

export interface FloorData {
  floor: string;
  emp1: number;
  emp2?: number;
  emp2Status?: string;
}

export interface EligibilityStep {
  step: string;
  title: string;
  body: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span: "wide" | "tall" | "normal";
}

export interface J7Project {
  name: string;
}

export interface NavLink {
  label: string;
  href: string;
}

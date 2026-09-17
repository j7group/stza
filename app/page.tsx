import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsTicker from "@/components/StatsTicker";
import About from "@/components/About";
import STZOpportunity from "@/components/STZOpportunity";
import ParkBreakdown from "@/components/ParkBreakdown";
import TaxAdvantage from "@/components/TaxAdvantage";
import FDIBenefits from "@/components/FDIBenefits";
import TechCategories from "@/components/TechCategories";
import SpacesGallery from "@/components/SpacesGallery";
import Tenants from "@/components/Tenants";
import Eligibility from "@/components/Eligibility";
import ParentGroup from "@/components/ParentGroup";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsTicker />
        <About />
        <STZOpportunity />
        <ParkBreakdown />
        <TaxAdvantage />
        <FDIBenefits />
        <TechCategories />
        <SpacesGallery />
        <Tenants />
        <Eligibility />
        <ParentGroup />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

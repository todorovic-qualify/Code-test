import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProductOverviewSection from "@/components/ProductOverviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TouchpointJourneySection from "@/components/TouchpointJourneySection";
import LiveDemo from "@/components/LiveDemo";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProductOverviewSection />
        <FeaturesSection />
        <IndustriesSection />
        <TouchpointJourneySection />
        <LiveDemo />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

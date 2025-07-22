import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import MoreThanMarketplaceSection from "@/components/sections/MoreThanMarketplaceSection";
import OnboardingSection from "@/components/sections/OnboardingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  // Flaga do kontrolowania widoczności CTA Section
  const showCTASection = false; // Zmień na true żeby pokazać

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <CategoriesSection />
        <MoreThanMarketplaceSection />
        <OnboardingSection />
        <FAQSection />
        
        {/* CTASection - warunkowe renderowanie */}
        {showCTASection && <CTASection />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
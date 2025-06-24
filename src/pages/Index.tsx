
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import CommissionSection from "@/components/sections/CommissionSection";
import OnboardingSection from "@/components/sections/OnboardingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <CategoriesSection />
        <CommissionSection />
        <OnboardingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

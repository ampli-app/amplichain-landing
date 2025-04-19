
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import RadarSection from "@/components/sections/RadarSection";
import ShopSection from "@/components/sections/ShopSection";
import SecuritySection from "@/components/sections/SecuritySection";
import CommunitySection from "@/components/sections/CommunitySection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WaitlistSection />
        <FeaturesSection />
        <RadarSection />
        <ShopSection />
        <SecuritySection />
        <CommunitySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

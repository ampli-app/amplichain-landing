import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import DiscountBanner from "@/components/ui/discount-banner";

const HeroSection = () => {
  // Flaga do kontrolowania widoczności bannera
  const showDiscountBanner = false; // Zmień na true żeby pokazać

  const deadline = "2025-07-14T23:59:59";

  return (
    <section className="min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16 flex items-center bg-white">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Full-width Discount Banner - warunkowe renderowanie */}
        {showDiscountBanner && (
          <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-12">
            <DiscountBanner
              deadlineDate={deadline}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Enhanced Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            
            {/* Professional Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 bg-olivine-pale border border-olivine-200 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <div className="w-2 h-2 bg-olivine-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-olivine-700 tracking-wide uppercase">
                  Dołącz do pierwszych użytkowników
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-rhythm-950">
                Twoja sieć <span className="text-olivine-text">muzycznych</span> możliwości
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-rhythm-600 max-w-2xl leading-relaxed font-light">
                <strong className="font-semibold text-rhythm-950">Jeden system zamiast OLX-a, Excela i Calendly</strong>
                {' '}– zbudowany dla muzyków. Sprzedaż, kontakty i wszystko,
                czego potrzebujesz –{' '}
                <strong className="font-semibold text-rhythm-950">w jednym miejscu.</strong>
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:block order-1 lg:order-2">
            <img
              src="./images/mock.webp"
              alt="Profesjonalne narzędzia dla sprzedawców muzycznych"
              className="w-full h-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px] 2xl:max-h-none object-contain lg:object-cover lg:object-center rounded-2xl shadow-card animate-scale-in"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95) rotateY(-10deg); }
          to { opacity: 1; transform: scale(1) rotateY(0deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 1.2s ease-out 0.4s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
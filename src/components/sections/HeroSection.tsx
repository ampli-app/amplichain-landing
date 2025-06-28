import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import DiscountBanner from "@/components/ui/discount-banner";

const HeroSection = () => {

  const handleStartSelling = () => {
    window.open('https://app.amplichain.com/register', '_blank');
  };

  const deadline = "2025-07-10T23:59:59";

  return (
    <section className="min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center bg-white">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Full-width Discount Banner */}
        <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-12">
          <DiscountBanner 
            deadlineDate={deadline}
            onCtaClick={handleStartSelling}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Enhanced Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            
            {/* Professional Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 bg-gray-50/80 backdrop-blur-sm border-2 border-ampli-green/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-ampli-green tracking-wide uppercase">
                  Startujemy w lipcu!
                </span>
              </div>
            </div>

            {/* Main Headline - More Professional Typography */}
            <div className="space-y-4 sm:space-y-6">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
    <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">
      Twoja sieć <span class="text-gray-900 font-extrabold">muzycznych</span> możliwości
    </span>
  </h1>

              
  <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
  To nie jest kolejny marketplace. To nowy{' '}
  <strong className="font-semibold text-gray-900">hub dla branży muzycznej: </strong>
  sprzedaż, kontakty i wszystko
  czego potrzebujesz –{' '}
  <strong className="font-semibold text-gray-900">w jednym miejscu.</strong>
</p>
            </div>

            {/* Enhanced CTA Buttons */}
            

          </div>

          {/* Right Column - Image */}
          <div className="lg:block order-1 lg:order-2">
            <div>
              <div>
                <img
                  src="./images/mock.png"
                  alt="Profesjonalne narzędzia dla sprzedawców muzycznych"
                  className="w-full h-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px] 2xl:max-h-none object-contain lg:object-cover lg:object-center animate-scale-in"
                />
              </div>
            </div>
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
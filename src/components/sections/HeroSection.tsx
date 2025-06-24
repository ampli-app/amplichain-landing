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
            <div className="inline-flex items-center gap-3 bg-gray-50/80 backdrop-blur-sm border-2 border-ampli-green/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
              <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-ampli-green tracking-wide uppercase">
                Właśnie Wystartowaliśmy!
              </span>
            </div>

            {/* Main Headline - More Professional Typography */}
            <div className="space-y-4 sm:space-y-6">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
    <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">
      Twoja sieć <span class="text-gray-900 font-extrabold">muzycznych</span> możliwości
    </span>
  </h1>

              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
                Profesjonalny marketplace dla branży muzycznej z najniższymi prowizjami 
                i zaawansowanymi narzędziami sprzedażowymi
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ampli-green flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700 font-medium">Tylko 3% prowizji z kodem rabatowym</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ampli-green flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700 font-medium">10,000+ zweryfikowanych kupujących</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-ampli-green flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700 font-medium">Gwarancja bezpieczeństwa transakcji</span>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleStartSelling}
                size="lg" 
                className="group bg-gradient-to-r from-ampli-green to-ampli-darkgreen hover:from-ampli-darkgreen hover:to-ampli-green text-white font-bold px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg shadow-xl shadow-ampli-green/20 hover:shadow-ampli-green/30 transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                Zarejestruj się i odbierz kod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

          </div>

          {/* Right Column - Professional Photo */}
          <div className="lg:block animate-scale-in order-1 lg:order-2">
            <div className="relative group">
              
              {/* Professional glow effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-ampli-green/20 via-ampli-green/10 to-ampli-green/20 rounded-2xl sm:rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Professional image */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Profesjonalne narzędzia dla sprzedawców muzycznych"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
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
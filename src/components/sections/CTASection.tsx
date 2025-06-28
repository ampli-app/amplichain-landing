import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Users, CheckCircle, Star, Zap } from "lucide-react";
import DiscountBanner from "@/components/ui/discount-banner";

const CTASection: React.FC = () => {
  const handleStartSelling = () => {
    // Removed the redirect to let the Tally popup handle registration
    // The Tally popup will be triggered by the data attributes on the button
  };

  const deadline = "2025-07-10T23:59:59";
  const deadlineDate = new Date(deadline);
  const deadlineFormatted = deadlineDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });
  const deadlineDayMonth = deadlineDate.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit' });

  return (
    <section id="" // Zamiast py-32, użyj:
    className="pt-8 pb-16 md:pt-20 md:pb-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ampli-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-ampli-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            

            {/* Compact Discount Banner */}
            <div className="mb-12">
              <DiscountBanner 
                variant="compact" 
                className="mx-auto" 
                deadlineDate={deadline}
                onCtaClick={handleStartSelling}
              />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold font-syne mb-8 text-white leading-tight">
              Zostań
              <br />
              <span className="bg-gradient-to-r from-ampli-green to-ampli-lightgreen bg-clip-text text-transparent">
                pierwszym sprzedawcą!
              </span>
            </h2>
            
            
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold font-syne mb-6 text-white">
            Rezerwuj swój kod rabatowy!
            </h3>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Dołącz do <strong className="text-ampli-green">pierwszej fali użytkowników</strong> i skorzystaj 
              z kodu rabatowego obniżającego prowizję. Rejestracja zajmuje tylko 2 minuty.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                data-tally-open="mRxM6p"
                data-tally-layout="modal"
                data-tally-width="500"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                size="lg" 
                className="group bg-gradient-to-r from-ampli-green to-ampli-lightgreen hover:from-ampli-lightgreen hover:to-ampli-green text-white font-bold px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl shadow-2xl shadow-ampli-green/25 hover:shadow-ampli-green/40 transition-all duration-300 transform hover:scale-105 rounded-2xl w-full sm:w-auto"
              >
                <span className="whitespace-nowrap">Zarezerwuj kod</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
              
              <div className="text-center">
                
               
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-ampli-green">-70%</div>
                <div className="text-sm text-gray-400">Z kodem rabatowym</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ampli-green">Lipiec 2025</div>
                <div className="text-sm text-gray-400">Start platformy</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
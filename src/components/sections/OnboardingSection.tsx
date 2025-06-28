import React from "react";
import { UserPlus, Camera, DollarSign, TrendingUp, ArrowRight, CheckCircle, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnboardingSection: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Zarejestruj się",
      description: "Email i podstawowe dane. Prosty proces - w 2 minuty masz dostęp do platformy."
    },
    {
      icon: Camera,
      title: "Skonfiguruj płatności",
      description: "Globalny standard Stripe Connect umożliwia odbieranie płatności od klientów."
    },
    {
      icon: DollarSign,
      title: "Dodaj pierwszą ofertę",
      description: "Wystaw swoją pierwszą ofertę - zdjęcia, opis, cena. Automatycznie tworzysz swój unikalny sklep."
    }
  ];

  return (
    <section id="onboarding" className="pt-8 pb-16 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm border-2 border-ampli-green/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-ampli-green tracking-wide uppercase">
              Proces Onboardingu
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-syne mb-6 sm:mb-8 text-gray-900 tracking-tight leading-tight">
            Jak <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">zacząć</span>?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Prosty proces rejestracji - od założenia konta do wystawienia pierwszych ofert
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-ampli-green/30 to-ampli-green/10 z-10" />
                )}

                {/* Step card */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100/50 overflow-visible h-full">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-ampli-green/5 to-transparent rounded-bl-3xl" />

                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-ampli-green via-ampli-lightgreen to-ampli-darkgreen text-white rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center font-bold text-base sm:text-lg shadow-xl group-hover:scale-110 transition-all duration-300">
                          <span className="relative z-10">{index + 1}</span>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-ampli-green/30 to-ampli-lightgreen/30 rounded-full blur-sm animate-pulse"></div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-syne text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-gray-200">
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-syne mb-4 sm:mb-6 text-gray-900 leading-tight">
                Zacznij <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">zarabiać</span> na swojej <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">pasji</span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
                Przekształć swoją muzyczną pasję w stabilne źródło dochodu. 
                Sprzedawaj sprzęt, oferuj usługi i rozwijaj swój biznes z najniższymi prowizjami na rynku.
              </p>

              <div className="my-6 sm:my-8 flex flex-col sm:flex-row gap-4 justify-center items-center px-2">
                <Button 
                  data-tally-open="m6pqbA"
                  data-tally-layout="modal"
                  data-tally-width="500"
                  data-tally-emoji-text="👋"
                  data-tally-emoji-animation="wave"
                  size="lg" 
                  className="group bg-gradient-to-r from-ampli-green to-ampli-darkgreen hover:from-ampli-darkgreen hover:to-ampli-green text-white font-bold px-6 sm:px-12 py-4 sm:py-6 text-sm sm:text-xl shadow-xl shadow-ampli-green/20 hover:shadow-ampli-green/30 transition-all duration-300 transform hover:scale-105 rounded-2xl w-full sm:w-auto"
                >
                  <span className="text-center leading-tight">
                    <span className="block sm:hidden">Zacznij zarabiać</span>
                    <span className="hidden sm:block">Chcę zarabiać na swojej pasji</span>
                  </span>
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green flex-shrink-0" />
                  <span>Bez opłat miesięcznych</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green flex-shrink-0" />
                  <span>Bezpieczne transakcje</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green flex-shrink-0" />
                  <span>Pełne wsparcie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default OnboardingSection;
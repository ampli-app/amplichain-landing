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
      title: "Dodaj ofertę",
      description: "Wystaw swoją pierwszą ofertę - zdjęcia, opis, cena. Automatycznie tworzysz swój unikalny sklep."
    }
  ];

  return (
    <section id="onboarding" className="pt-8 pb-16 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-olivine-pale border border-olivine-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-olivine-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-olivine-700 tracking-wide uppercase">
              Proces Onboardingu
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 text-rhythm-950 tracking-tight">
            Jak <span className="text-olivine-text">zacząć</span>?
          </h2>

          <p className="text-xl text-rhythm-600 max-w-3xl mx-auto leading-relaxed">
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
                  <div className="hidden xl:block absolute top-1/3 -right-4 w-8 h-0.5 bg-olivine-200 z-10" />
                )}

                {/* Step card */}
                <div className="relative bg-white rounded-[20px] p-6 sm:p-8 shadow-card hover:shadow-hover transition-all duration-200 h-full">
                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-action text-white rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center font-bold text-base sm:text-lg">
                        {index + 1}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display text-rhythm-950">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-rhythm-600 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section — Dark Surface CTA Card */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div
            className="max-w-5xl mx-auto rounded-[20px] p-6 sm:p-8 lg:p-12 bg-rhythm-950"
            style={{ boxShadow: "var(--shadow-olivine-glow)" }}
          >
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4 sm:mb-6 text-white leading-tight">
                Zacznij <span className="text-olivine-200">zarabiać</span> na swojej <span className="text-olivine-200">pasji</span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
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
                  className="group text-white font-bold px-6 sm:px-12 py-4 sm:py-6 text-sm sm:text-xl transition-all duration-200 rounded-2xl w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(135deg, #7B9A00, #52680d)",
                    boxShadow: "0px 8px 24px rgba(123,154,0,0.25)",
                  }}
                >
                  <span className="text-center leading-tight">
                    <span className="block sm:hidden">Zacznij zarabiać</span>
                    <span className="hidden sm:block">Chcę zarabiać na swojej pasji</span>
                  </span>
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4 sm:pt-6 text-xs sm:text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-olivine-300 flex-shrink-0" />
                  <span>Bez opłat miesięcznych</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-olivine-300 flex-shrink-0" />
                  <span>Bezpieczne transakcje</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-olivine-300 flex-shrink-0" />
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
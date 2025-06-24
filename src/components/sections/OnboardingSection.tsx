import React from "react";
import { UserPlus, Camera, DollarSign, TrendingUp, ArrowRight, CheckCircle, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnboardingSection: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Zarejestruj się",
      description: "Stwórz konto sprzedawcy w mniej niż 2 minuty. Wystarczy email i podstawowe dane firmy.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Camera,
      title: "Dodaj pierwszą ofertę",
      description: "Zrób profesjonalne zdjęcia, opisz swój sprzęt lub usługę. Nasze AI pomoże w optymalizacji.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: DollarSign,
      title: "Otrzymaj pierwsze zamówienie",
      description: "Dzięki zaawansowanym algorytmom Twoja oferta trafi do właściwych kupujących. Gwarancja widoczności.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: TrendingUp,
      title: "Skaluj swój biznes",
      description: "Wykorzystuj zaawansowane analytics, automatyzację i narzędzia marketingowe do maksymalizacji zysków.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="onboarding" className="pt-8 pb-16 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-ampli-green/20 rounded-full px-6 py-3 shadow-lg mb-8">
            <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
            <span className="text-sm font-bold text-ampli-green tracking-wide uppercase">
              Proces Onboardingu
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-syne mb-8 text-gray-900 tracking-tight">
            Od <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">zera</span> do <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">bohatera</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-gray-600 font-bold">w 4 prostych krokach</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Profesjonalny system wdrażania, który przeprowadzi Cię przez cały proces - 
            <br className="hidden md:block" />
            od rejestracji do pierwszych zysków
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-ampli-green/30 to-ampli-green/10 z-10" />
                )}

                {/* Step card */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-8 shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100/50 overflow-visible h-full">
                  {/* Step number */}
                  <div className="absolute -top-8 right-8 z-20">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-ampli-green via-ampli-lightgreen to-ampli-darkgreen text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <span className="relative z-10">{index + 1}</span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-ampli-green/30 to-ampli-lightgreen/30 rounded-full blur-md animate-pulse"></div>
                    </div>
                  </div>

                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-ampli-green/5 to-transparent rounded-bl-3xl" />

                  {/* Image */}
                  <div className="relative mb-6">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-syne text-gray-900">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-5xl mx-auto rounded-3xl p-12 border-2 border-gray-200">
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-bold font-syne mb-6 text-gray-900 leading-tight">
                Zacznij <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">zarabiać</span> na swojej <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">pasji</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Przekształć swoją muzyczną pasję w stabilne źródło dochodu. 
                Sprzedawaj sprzęt, oferuj usługi i rozwijaj swój biznes z najniższymi prowizjami na rynku.
              </p>

              <div className="my-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-ampli-green to-ampli-darkgreen hover:from-ampli-darkgreen hover:to-ampli-green text-white font-bold px-12 py-6 text-xl shadow-xl shadow-ampli-green/20 hover:shadow-ampli-green/30 transition-all duration-300 transform hover:scale-105 rounded-2xl"
                >
                  Zarabiaj na swojej pasji
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 pt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green" />
                  <span>Bez opłat miesięcznych</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green" />
                  <span>Bezpieczne transakcje</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green" />
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

import React from "react";
import { UserPlus, Camera, DollarSign, TrendingUp, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnboardingSection: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Zarejestruj się",
      description: "Stwórz konto sprzedawcy w mniej niż 2 minuty. Wystarczy email i podstawowe dane firmy.",
      time: "2 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: ["Bezpłatna rejestracja", "Weryfikacja w 24h", "Pełne wsparcie"]
    },
    {
      icon: Camera,
      title: "Dodaj pierwszą ofertę",
      description: "Zrób profesjonalne zdjęcia, opisz swój sprzęt lub usługę. Nasze AI pomoże w optymalizacji.",
      time: "5 min",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: ["Wsparcie AI w opisach", "Optymalizacja SEO", "Podpowiedzi cenowe"]
    },
    {
      icon: DollarSign,
      title: "Otrzymaj pierwsze zamówienie",
      description: "Dzięki zaawansowanym algorytmom Twoja oferta trafi do właściwych kupujących. Gwarancja widoczności.",
      time: "24 godz",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: ["Algorytmy dopasowania", "Promocja nowych ofert", "Wsparcie sprzedażowe"]
    },
    {
      icon: TrendingUp,
      title: "Skaluj swój biznes",
      description: "Wykorzystuj zaawansowane analytics, automatyzację i narzędzia marketingowe do maksymalizacji zysków.",
      time: "Ciągle",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: ["Zaawansowane analytics", "Automatyzacja procesów", "Narzędzia marketingowe"]
    }
  ];

  return (
    <section id="onboarding" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-ampli-green/5 to-ampli-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-ampli-green/8 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-ampli-green/20 rounded-full px-6 py-3 shadow-lg mb-8">
            <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
            <span className="text-sm font-bold text-ampli-green tracking-wide uppercase">
              Proces Onboardingu
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat mb-8 text-gray-900 tracking-tight">
            Od <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">zera</span> do <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">bohatera</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-gray-600 font-semibold">w 4 prostych krokach</span>
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
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 border border-gray-100/50 overflow-hidden h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-ampli-green to-ampli-darkgreen text-white rounded-full h-12 w-12 flex items-center justify-center font-black text-lg shadow-lg z-20">
                    {index + 1}
                  </div>

                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-ampli-green/5 to-transparent rounded-bl-3xl" />

                  {/* Image */}
                  <div className="relative mb-6 mt-4">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    {/* Icon overlay */}
                    <div className="absolute -bottom-3 left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                      <step.icon className="h-6 w-6 text-ampli-green" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold font-montserrat text-gray-900">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-1 bg-gray-100 rounded-lg px-3 py-1">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-700">{step.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 pt-2">
                      {step.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-ampli-green flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story Banner */}
        <div className="relative bg-gradient-to-r from-ampli-green to-ampli-darkgreen rounded-3xl p-12 mb-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Sukces sprzedawcy"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ampli-green/90 to-ampli-darkgreen/90" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-wide opacity-90">
                  Historia Sukcesu
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black leading-tight">
                "W pierwszy miesiąc sprzedałem za 15,000 PLN"
              </h3>
              
              <p className="text-lg opacity-90 leading-relaxed">
                Marcin, producent muzyczny z Warszawy, wykorzystał nasze narzędzia do sprzedaży 
                profesjonalnego sprzętu studyjnego i usług produkcyjnych.
              </p>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-black">15k PLN</div>
                  <div className="text-sm opacity-80">pierwszy miesiąc</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black">47</div>
                  <div className="text-sm opacity-80">sprzedanych ofert</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black">4.9★</div>
                  <div className="text-sm opacity-80">średnia ocena</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Marcin - sukces na Amplichain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <TrendingUp className="w-8 h-8 text-ampli-green" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100/50 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ampli-green via-ampli-darkgreen to-ampli-green" />
            
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-black font-montserrat mb-4 text-gray-900">
                  Gotowy na <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">przełom</span>?
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Dołącz do listy oczekujących i otrzymaj ekskluzywny dostęp do platformy 
                  oraz pakiet startowy o wartości 200 PLN
                </p>
              </div>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-ampli-green/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-ampli-green" />
                  </div>
                  <span className="font-semibold text-gray-700">Wczesny dostęp</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-ampli-green/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-ampli-green" />
                  </div>
                  <span className="font-semibold text-gray-700">Bonus 200 PLN</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-ampli-green/10 rounded-lg flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-ampli-green" />
                  </div>
                  <span className="font-semibold text-gray-700">Wsparcie 1-na-1</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-ampli-green to-ampli-darkgreen hover:from-ampli-darkgreen hover:to-ampli-green text-white font-bold px-12 py-6 text-xl shadow-xl shadow-ampli-green/20 hover:shadow-ampli-green/30 transition-all duration-300 transform hover:scale-105 rounded-2xl"
                >
                  Zapisz się na listę oczekujących
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-2xl">🎁</span>
                  <span className="text-sm font-medium">
                    Pakiet startowy za darmo
                  </span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 pt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green" />
                  <span>Bez zobowiązań</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green" />
                  <span>Anuluj kiedy chcesz</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-ampli-green" />
                  <span>100% bezpieczeństwa</span>
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

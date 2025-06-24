import React from "react";
import { UserPlus, Camera, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnboardingSection: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Zarejestruj się",
      description: "Stwórz konto sprzedawcy w mniej niż 2 minuty. Wystarczy email i podstawowe dane.",
      time: "2 min"
    },
    {
      icon: Camera,
      title: "Dodaj pierwszą ofertę",
      description: "Zrób zdjęcia, opisz swój sprzęt lub usługę. Nasze narzędzia pomogą Ci stworzyć atrakcyjną ofertę.",
      time: "5 min"
    },
    {
      icon: DollarSign,
      title: "Otrzymaj pierwsze zamówienie",
      description: "Dzięki naszym algorytmom Twoja oferta trafi do właściwych osób. Pierwsze sprzedaże często już w ciągu 24h.",
      time: "24 godz"
    },
    {
      icon: TrendingUp,
      title: "Rozwijaj biznes",
      description: "Wykorzystuj nasze narzędzia analityczne do optymalizacji cen i zwiększania sprzedaży.",
      time: "Ciągle"
    }
  ];

  return (
    <section id="onboarding" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gray-900">
            Jak zacząć sprzedawać?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rozpoczęcie sprzedaży na Amplichain jest prostsze niż myślisz. Wystarczą 4 kroki.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 h-full group">
                  <div className="absolute -top-4 left-6 bg-ampli-green text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className="bg-ampli-green/10 rounded-xl h-16 w-16 flex items-center justify-center mb-6 group-hover:bg-ampli-green/20 transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-ampli-green" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg px-3 py-1 inline-block">
                    <span className="text-sm font-medium text-gray-700">⏱ {step.time}</span>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
            <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-900">
              Gotowy na start?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Dołącz do listy oczekujących i otrzymaj wcześniejszy dostęp do platformy oraz specjalne bonusy startowe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-ampli-green hover:bg-ampli-darkgreen text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Zapisz się na listę oczekujących
              </Button>
              <span className="text-gray-500 text-sm">
                💝 Bonus 50 PLN za rejestrację
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;

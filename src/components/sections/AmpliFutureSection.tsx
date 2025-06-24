
import React from "react";
import { Smartphone, Globe, Users, Zap } from "lucide-react";

const AmpliFutureSection: React.FC = () => {
  const futureFeatures = [
    {
      icon: Smartphone,
      title: "Aplikacja mobilna",
      description: "Dedykowana aplikacja na iOS i Android już wkrótce",
      status: "W przygotowaniu",
      color: "bg-blue-500"
    },
    {
      icon: Globe,
      title: "Ekspansja międzynarodowa",
      description: "Planujemy wejście na rynki europejskie w 2025 roku",
      status: "Planowane na 2025",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Program partnerski",
      description: "Zarabiaj polecając Amplichain innym sprzedawcom",
      status: "Q2 2024",
      color: "bg-orange-500"
    },
    {
      icon: Zap,
      title: "AI dla sprzedawców",
      description: "Automatyczna optymalizacja cen i sugestie sprzedażowe",
      status: "W rozwoju",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Przyszłość <span className="text-ampli-green">Amplichain</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ciągle rozwijamy platformę, dodając nowe funkcje i możliwości dla sprzedawców
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {futureFeatures.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className={`${feature.color} rounded-xl h-14 w-14 flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold font-montserrat">
                      {feature.title}
                    </h3>
                    <span className="bg-ampli-green/20 text-ampli-green px-2 py-1 rounded-full text-xs font-medium">
                      {feature.status}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-ampli-green/20 to-ampli-darkgreen/20 rounded-2xl p-8 border border-ampli-green/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-montserrat mb-4">
              Bądź częścią rewolucji
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Jako użytkownik z listy oczekujących będziesz mieć wpływ na rozwój platformy. 
              Twoje opinie i sugestie pomogą nam tworzyć najlepszy marketplace muzyczny w Polsce.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Wczesny dostęp do nowości", "Specjalne promocje", "Bezpośredni kontakt z zespołem", "Program beta tester"].map((benefit, index) => (
                <span key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmpliFutureSection;

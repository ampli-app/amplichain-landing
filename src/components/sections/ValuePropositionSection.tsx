import React from "react";
import { TrendingUp, Users, Shield, Zap } from "lucide-react";

const ValuePropositionSection: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Zwiększ swoje zyski",
      description: "Dotrzij do tysięcy muzyków szukających właśnie Twojego sprzętu. Nasze algorytmy dopasowują Twoje oferty do właściwych kupujących."
    },
    {
      icon: Users,
      title: "Społeczność muzyczna",
      description: "Dołącz do największej polskiej społeczności muzyków. Buduj relacje, wymieniaj się doświadczeniami i rozwijaj swój biznes."
    },
    {
      icon: Shield,
      title: "Bezpieczne transakcje",
      description: "System płatności Stripe zapewnia 100% bezpieczeństwa transakcji. Twoje pieniądze są chronione od momentu sprzedaży do wypłaty."
    },
    {
      icon: Zap,
      title: "Błyskawiczne wystawienie",
      description: "Dodaj swoją ofertę w mniej niż 3 minuty. Intuicyjny panel sprzedawcy sprawia, że zarządzanie ofertami jest dziecinnie proste."
    }
  ];

  return (
    <section id="value" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ampli-green/5 to-transparent"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gray-900">
            Dlaczego warto sprzedawać na <span className="text-ampli-green">Amplichain</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pierwszy marketplace stworzony specjalnie dla muzyków. Tutaj Twój sprzęt znajdzie właściwego nabywcę.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100/50">
              <div className="bg-ampli-green/10 rounded-xl h-16 w-16 flex items-center justify-center mb-6 group-hover:bg-ampli-green/20 transition-colors duration-300">
                <benefit.icon className="h-8 w-8 text-ampli-green" />
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;

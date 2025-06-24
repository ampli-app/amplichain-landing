
import React from "react";
import { TrendingUp, Users, Shield, Zap } from "lucide-react";

const ValuePropositionSection: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Najniższe prowizje",
      description: "Tylko 5% prowizji oznacza więcej pieniędzy w Twojej kieszeni",
      highlight: "5% prowizji"
    },
    {
      icon: Users,
      title: "Gotowi nabywcy",
      description: "10,000+ zweryfikowanych muzyków aktywnie szuka sprzętu",
      highlight: "10k+ kupujących"
    },
    {
      icon: Shield,
      title: "Pełne bezpieczeństwo",
      description: "Płatności przez Stripe + ochrona sprzedawcy",
      highlight: "100% bezpieczeństwa"
    },
    {
      icon: Zap,
      title: "Szybka sprzedaż",
      description: "AI dopasowuje Twoje oferty do właściwych kupujących",
      highlight: "AI matching"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-6 text-gray-900">
            Dlaczego wybierają
            <br />
            <span className="text-ampli-green">Amplichain?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nie jesteś kolejnym sprzedawcą w tłumie. Jesteś ekspertem, którego szukają muzycy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 group border border-gray-100">
              <div className="text-center">
                <div className="bg-ampli-green/10 rounded-xl h-14 w-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-ampli-green/20 transition-colors duration-300">
                  <benefit.icon className="h-7 w-7 text-ampli-green" />
                </div>
                
                <div className="bg-ampli-green/10 rounded-full px-3 py-1 mb-4 inline-block">
                  <span className="text-xs font-bold text-ampli-green">{benefit.highlight}</span>
                </div>

                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-ampli-green/10 to-ampli-green/5 rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-black font-montserrat mb-4 text-gray-900">
            Gotowy na więcej sprzedaży?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Dołącz do profesjonalnych sprzedawców na Amplichain.
          </p>
          <button className="bg-ampli-green hover:bg-ampli-darkgreen text-white font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300">
            Zacznij sprzedawać teraz
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;


import React from "react";
import { TrendingUp, Users, Shield, Zap, Target, Award, ChevronRight } from "lucide-react";

const ValuePropositionSection: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Maksimalizuj zyski",
      description: "Najniższe prowizje na rynku (tylko 5%) oznaczają więcej pieniędzy w Twojej kieszeni",
      highlight: "5% prowizji",
      stats: "średnio 95% więcej zysku vs konkurencja"
    },
    {
      icon: Users,
      title: "Gotowi nabywcy",
      description: "10,000+ zweryfikowanych muzyków aktywnie szuka sprzętu właśnie teraz",
      highlight: "10k+ kupujących",
      stats: "średnio 3 oferty dziennie"
    },
    {
      icon: Shield,
      title: "Gwarancja bezpieczeństwa",
      description: "Płatności przez Stripe + ochrona sprzedawcy. Twoje pieniądze są zawsze zabezpieczone",
      highlight: "100% bezpieczeństwa",
      stats: "0 strat w historii platformy"
    },
    {
      icon: Zap,
      title: "Błyskawiczna sprzedaż",
      description: "Zaawansowane algorytmy dopasowują Twoje oferty do właściwych kupujących w czasie rzeczywistym",
      highlight: "AI matching",
      stats: "średnio 7 dni do sprzedaży"
    }
  ];

  const socialProof = [
    {
      icon: Target,
      metric: "2.3x",
      description: "szybsza sprzedaż vs konkurencja"
    },
    {
      icon: Award,
      metric: "98%",
      description: "zadowolonych sprzedawców"
    },
    {
      icon: Users,
      metric: "450+",
      description: "sprzedawców już zarabia"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ampli-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-ampli-green/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-ampli-green/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-ampli-green">Sprawdzone przez profesjonalistów</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black font-montserrat mb-8 text-gray-900 leading-tight">
            Dlaczego najlepsi sprzedawcy
            <br />
            <span className="text-ampli-green">wybierają Amplichain?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Nie jesteś kolejnym sprzedawcą w tłumie. Jesteś ekspertem, którego szukają muzycy.
            <br />
            <strong className="text-gray-900">Czas zacząć zarabiać jak ekspert.</strong>
          </p>

          {/* Social Proof Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
            {socialProof.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-soft border border-gray-100">
                <div className="bg-ampli-green/10 rounded-xl p-2">
                  <item.icon className="h-5 w-5 text-ampli-green" />
                </div>
                <div>
                  <div className="text-2xl font-black text-ampli-green">{item.metric}</div>
                  <div className="text-sm text-gray-600 font-medium">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-3xl p-10 shadow-card hover:shadow-hover transition-all duration-500 border border-gray-100/50 group-hover:border-ampli-green/20 h-full">
                
                {/* Icon & Highlight */}
                <div className="flex items-start justify-between mb-8">
                  <div className="bg-gradient-to-br from-ampli-green/15 to-ampli-green/5 rounded-2xl h-16 w-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-ampli-green" />
                  </div>
                  <div className="bg-ampli-green/10 rounded-full px-4 py-2">
                    <span className="text-sm font-bold text-ampli-green">{benefit.highlight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black font-montserrat text-gray-900 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <ChevronRight className="h-4 w-4 text-ampli-green" />
                    <span className="text-sm font-semibold text-ampli-green">{benefit.stats}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-ampli-green/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-ampli-green/10 via-ampli-green/5 to-ampli-green/10 rounded-3xl p-12 border border-ampli-green/20">
          <h3 className="text-3xl md:text-4xl font-black font-montserrat mb-6 text-gray-900">
            Gotowy na więcej sprzedaży?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dołącz do grona profesjonalnych sprzedawców, którzy już zarabiają na Amplichain. 
            <strong className="text-gray-900"> Pierwszy miesiąc całkowicie za darmo.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-ampli-green hover:bg-ampli-darkgreen text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-ampli-green/25">
              Zacznij sprzedawać teraz
            </button>
            <button className="border-2 border-ampli-green text-ampli-green hover:bg-ampli-green hover:text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300">
              Porozmawiaj z ekspertem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;

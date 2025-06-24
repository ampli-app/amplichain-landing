import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ValuePropositionSection: React.FC = () => {
  const benefits = [
    {
      image: "https://images.unsplash.com/photo-1593672715438-d88a706299a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Najniższe prowizje",
      description: "Tylko 5% prowizji oznacza więcej pieniędzy w Twojej kieszeni",
    },
    {
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Rosnąca społeczność",
      description: "Dołącz do pierwszych sprzedawców i zbuduj swoją pozycję na rynku",
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Pełne bezpieczeństwo",
      description: "Płatności przez Stripe + ochrona sprzedawcy",
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Nowoczesna platforma",
      description: "Zaawansowane narzędzia do sprzedaży już w przygotowaniu",
    }
  ];

  const handleStartSelling = () => {
    window.open('https://app.amplichain.com/register', '_blank');
  };

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 bg-gray-50/80 backdrop-blur-sm border-2 border-ampli-green/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-ampli-green tracking-wide uppercase">
              Dlaczego Amplichain
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-montserrat mb-6 sm:mb-8 text-gray-900 tracking-tight">
            Dlaczego wybrać
            <br />
            <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">Amplichain?</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Rozpoczynamy rewolucję w sprzedaży sprzętu muzycznego. Dołącz do nas od początku.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:scale-105 hover:-translate-y-2 flex flex-col">
              <div className="relative mb-6">
                <div className="aspect-video overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold font-montserrat mb-3 sm:mb-4 text-gray-900">
                {benefit.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-ampli-green/10 via-ampli-green/5 to-transparent rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-lg border border-ampli-green/10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-montserrat mb-4 sm:mb-6 text-gray-900">
            Gotowy na nowy start?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Dołącz do pierwszych sprzedawców na Amplichain i zbuduj swoją pozycję od podstaw.
          </p>
          
          <Button 
            onClick={handleStartSelling}
            size="lg" 
            className="group bg-gradient-to-r from-ampli-green to-ampli-darkgreen hover:from-ampli-darkgreen hover:to-ampli-green text-white font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl shadow-xl shadow-ampli-green/20 hover:shadow-ampli-green/30 transition-all duration-300 transform hover:scale-105 rounded-xl sm:rounded-2xl"
          >
            Zacznij sprzedawać teraz
            <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
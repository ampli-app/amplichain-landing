import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ValuePropositionSection: React.FC = () => {
  const benefits = [
    {
      image: "./images/prow.jpg",
      title: "Najniższe prowizje",
      description: "Więcej pieniędzy zostaje u Ciebie - prowizje niższe niż na Allegro i Fiverr",
    },
    {
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Prawdziwa społeczność",
      description: "Szukaj sprzętu, poznawaj ludzi z branży, korzystaj z usług profesjonalistów",
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Pełne bezpieczeństwo",
      description: "Weryfikowani sprzedawcy, płatności Stripe, baza skradzionych sprzętów",
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Od startu z nami",
      description: "Dołącz do pierwszych użytkowników i zmieniaj branżę muzyczną",
    }
  ];

  const handleStartSelling = () => {
    window.open('https://app.amplichain.com/register', '_blank');
  };

  return (
    <section id="value-proposition" className="pt-8 pb-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 bg-gray-50/80 backdrop-blur-sm border-2 border-ampli-green/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-ampli-green tracking-wide uppercase">
              Dlaczego Amplichain
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-syne mb-6 sm:mb-8 text-gray-900 tracking-tight">
            Co zyskujesz z
            <br />
            <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">Amplichain?</span>
          </h2>
          
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
              
              <h3 className="text-lg sm:text-xl font-bold font-syne mb-3 sm:mb-4 text-gray-900">
                {benefit.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
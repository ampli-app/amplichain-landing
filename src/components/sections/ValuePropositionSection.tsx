import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ValuePropositionSection: React.FC = () => {
  const benefits = [
    {
      image: "./images/prow.webp",
      title: "Najniższe prowizje",
      description: "Więcej pieniędzy zostaje u Ciebie - prowizje niższe niż na Allegro i Fiverr",
    },
    {
      image: "./images/spol.webp",
      title: "Prawdziwa społeczność",
      description: "Szukaj sprzętu, poznawaj ludzi z branży, korzystaj z usług profesjonalistów",
    },
    {
      image: "./images/padlock.webp",
      title: "Pełne bezpieczeństwo",
      description: "Numer seryjny sprawdzony w rejestrze kradzieży blokuje wystawienie i zakup, opinie tylko z opłaconych transakcji, pieniądze w depozycie do potwierdzenia odbioru",
    },
    {
      image: "./images/rocket.webp",
      title: "Status Founding Member",
      description: "Pierwsi użytkownicy dostają odznakę Founding Member z numerem członkowskim i zwrot do 500 zł na pierwszym zleceniu usługowym",
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
          <div className="inline-flex items-center gap-3 bg-olivine-pale border border-olivine-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-olivine-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-olivine-700 tracking-wide uppercase">
              Dlaczego Amplichain
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-6 sm:mb-8 text-rhythm-950 tracking-tight">
            Co zyskujesz z
            <br />
            <span className="text-olivine-text">Amplichain?</span>
          </h2>

        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white rounded-[20px] p-6 sm:p-7 shadow-card hover:shadow-hover transition-all duration-200 flex flex-col">
              <div className="relative mb-6">
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-display mb-3 sm:mb-4 text-rhythm-950">
                {benefit.title}
              </h3>

              <p className="text-sm sm:text-base text-rhythm-600 leading-relaxed">
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
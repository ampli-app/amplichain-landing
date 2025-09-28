import React from "react";
import { Star, TrendingUp } from "lucide-react";

const SuccessStoriesSection: React.FC = () => {
  const testimonials = [
    {
      name: "Marcin Kowalski",
      role: "Właściciel sklepu muzycznego",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Dzięki Amplichain zwiększyłem sprzedaż o 200% w ciągu pierwszych trzech miesięcy. Platforma jest intuicyjna, a prowizje naprawdę konkurencyjne.",
      revenue: "15,000 PLN",
      period: "miesięcznie"
    },
    {
      name: "Anna Nowak",
      role: "Producentka muzyczna",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b601?w=150&h=150&fit=crop&crop=face",
      content: "Jako producentka oferuję usługi masteringu. Amplichain pomógł mi dotrzeć do klientów z całej Polski. Teraz mam stałe zlecenia.",
      revenue: "8,500 PLN",
      period: "miesięcznie"
    },
    {
      name: "Piotr Zieliński",
      role: "Muzyk sesyjny",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Sprzedałem już ponad 50 instrumentów przez Amplichain. Proces jest błyskawiczny, a płatności zawsze na czas. Polecam każdemu muzykowi!",
      revenue: "22,000 PLN",
      period: "łącznie"
    }
  ];

  const stats = [
    { value: "500+", label: "Aktywnych sprzedawców" },
    { value: "2M PLN", label: "Łączne obroty" },
    { value: "4.9/5", label: "Średnia ocena" },
    { value: "48h", label: "Średni czas sprzedaży" }
  ];

  return (
    <section id="success" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6 text-gray-900">
            Historie <span className="text-ampli-green">sukcesu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zobacz jak inni sprzedawcy rozwijają swój biznes dzięki Amplichain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-hover transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="bg-ampli-green/10 rounded-xl p-4 flex items-center">
                <TrendingUp className="h-6 w-6 text-ampli-green mr-3" />
                <div>
                  <div className="font-bold text-ampli-green">{testimonial.revenue}</div>
                  <div className="text-sm text-gray-600">{testimonial.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-syne mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;

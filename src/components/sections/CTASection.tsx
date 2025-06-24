import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ampli-green/5 to-transparent"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-gray-900">
            Zacznij sprzedawać <span className="text-ampli-green">już dziś</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Dołącz do listy oczekujących i otrzymaj ekskluzywny dostęp do największego 
            polskiego marketplace'a muzycznego
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-soft border border-ampli-green/20">
              <Gift className="h-8 w-8 text-ampli-green mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Bonus startowy</h3>
              <p className="text-gray-600 text-sm">50 PLN na start dla pierwszych 1000 sprzedawców</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-ampli-green/20">
              <Clock className="h-8 w-8 text-ampli-green mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Wczesny dostęp</h3>
              <p className="text-gray-600 text-sm">Zacznij sprzedawać 2 tygodnie przed oficjalnym startem</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border border-ampli-green/20">
              <ArrowRight className="h-8 w-8 text-ampli-green mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Zero prowizji</h3>
              <p className="text-gray-600 text-sm">Pierwszy miesiąc bez prowizji od sprzedaży</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen rounded-2xl p-8 md:p-12 text-white mb-8">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
              Ograniczona oferta
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Tylko pierwsze 1000 osób otrzyma pełen pakiet bonusów startowych
            </p>
            <div className="text-4xl font-bold mb-2">847 / 1000</div>
            <div className="w-full bg-white/20 rounded-full h-2 mb-6">
              <div className="bg-white h-2 rounded-full" style={{width: '84.7%'}}></div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-ampli-green hover:bg-ampli-darkgreen text-white font-bold px-12 py-8 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Zapisz się na listę oczekujących
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>

          <p className="text-gray-500 mt-6 text-sm">
            🔒 Twoje dane są bezpieczne. Żadnego spamu, tylko ważne informacje o starcie platformy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

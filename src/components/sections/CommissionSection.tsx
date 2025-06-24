
import React from "react";
import { Calculator, TrendingDown, Shield } from "lucide-react";

const CommissionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gray-900">
            Przejrzyste prowizje
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Żadnych ukrytych kosztów. Płacisz tylko za udane transakcje. Im więcej sprzedajesz, tym mniej płacisz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-ampli-green to-ampli-darkgreen rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <Calculator className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold font-montserrat mb-4">
                  Sprzęt muzyczny
                </h3>
                <div className="text-4xl font-bold mb-2">5%</div>
                <p className="text-lg opacity-90">
                  Najniższa prowizja w branży od sprzedaży instrumentów i sprzętu audio
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 relative overflow-hidden border border-gray-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <TrendingDown className="h-12 w-12 mb-6 text-gray-700" />
                <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-900">
                  Usługi i konsultacje
                </h3>
                <div className="text-4xl font-bold mb-2 text-gray-900">10%</div>
                <p className="text-lg text-gray-700">
                  Konkurencyjna prowizja od usług muzycznych i konsultacji
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-8 w-8 text-ampli-green" />
              <h3 className="text-2xl font-bold font-montserrat text-gray-900">
                Co jest wliczone w prowizję?
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Otrzymujesz:</h4>
                <ul className="space-y-2">
                  {[
                    "Bezpieczne płatności przez Stripe",
                    "Wsparcie techniczne 24/7",
                    "Narzędzia promocyjne",
                    "Analitykę sprzedaży",
                    "Ochronę kupującego i sprzedawcy"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-ampli-green rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Brak dodatkowych opłat za:</h4>
                <ul className="space-y-2">
                  {[
                    "Wystawienie oferty",
                    "Prowadzenie sklepu",
                    "Komunikację z klientami",
                    "Wypłaty środków",
                    "Aktualizacje platformy"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-ampli-green rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionSection;

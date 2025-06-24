
import React from "react";
import { Calculator, TrendingDown, Shield, CheckCircle, Zap, Crown } from "lucide-react";

const CommissionSection: React.FC = () => {
  const benefits = [
    "Bezpieczne płatności przez Stripe",
    "Wsparcie techniczne 24/7", 
    "Narzędzia promocyjne",
    "Analitykę sprzedaży",
    "Ochronę kupującego i sprzedawcy"
  ];

  const noCosts = [
    "Wystawienie oferty",
    "Prowadzenie sklepu", 
    "Komunikację z klientami",
    "Wypłaty środków",
    "Aktualizacje platformy"
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-gradient-to-br from-ampli-green/8 via-ampli-green/4 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-tl from-ampli-green/6 via-ampli-green/3 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(123,154,0,0.03),transparent_70%),radial-gradient(circle_at_80%_20%,rgba(123,154,0,0.02),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ampli-green/15 to-ampli-green/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-ampli-green/20">
            <Crown className="h-4 w-4 text-ampli-green" />
            <span className="text-sm font-bold text-ampli-green tracking-wide uppercase">Transparentne prowizje</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat mb-8 text-gray-900 leading-[0.9] tracking-tight">
            Najniższe prowizje
            <br />
            <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">
              w całej branży
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Żadnych ukrytych kosztów. Płacisz tylko za udane transakcje.
            <br />
            <strong className="text-gray-900 font-semibold">Im więcej sprzedajesz, tym więcej zarabiasz.</strong>
          </p>
        </div>

        {/* Premium Commission Cards */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Music Equipment Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-ampli-green via-ampli-green to-ampli-darkgreen rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-ampli-green via-ampli-green to-ampli-darkgreen rounded-3xl p-10 text-white overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                      <Calculator className="h-8 w-8" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <Zap className="h-4 w-4 inline mr-1" />
                      <span className="text-sm font-bold">Najlepsze</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black font-montserrat mb-4">
                    Sprzęt muzyczny
                  </h3>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-6xl font-black">5</span>
                    <span className="text-3xl font-bold">%</span>
                    <span className="text-lg opacity-80 ml-2">prowizji</span>
                  </div>
                  
                  <p className="text-lg opacity-90 leading-relaxed">
                    Najniższa prowizja w branży od sprzedaży instrumentów i sprzętu audio. 
                    <strong className="text-white"> 95% zysku zostaje u Ciebie.</strong>
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="text-sm opacity-80">Przykład:</div>
                    <div className="text-lg font-bold">Sprzedaż za 1000 PLN = <span className="text-2xl">950 PLN</span> dla Ciebie</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 relative overflow-hidden border-2 border-gray-200/50 hover:border-ampli-green/30 transition-all duration-500 transform group-hover:scale-[1.02]">
                
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-ampli-green/10 to-transparent rounded-full -ml-16 -mb-16" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingDown className="h-8 w-8 text-gray-700" />
                    </div>
                    <div className="bg-ampli-green/10 rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-ampli-green">Konkurencyjne</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black font-montserrat mb-4 text-gray-900">
                    Usługi i konsultacje
                  </h3>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-6xl font-black text-gray-900">10</span>
                    <span className="text-3xl font-bold text-gray-900">%</span>
                    <span className="text-lg text-gray-600 ml-2">prowizji</span>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Konkurencyjna prowizja od usług muzycznych i konsultacji. 
                    <strong className="text-gray-900"> Wciąż znacznie poniżej średniej rynkowej.</strong>
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-300/50">
                    <div className="text-sm text-gray-600">Przykład:</div>
                    <div className="text-lg font-bold text-gray-900">Usługa za 500 PLN = <span className="text-2xl text-ampli-green">450 PLN</span> dla Ciebie</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-2xl shadow-gray-900/5">
            
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-ampli-green to-ampli-darkgreen rounded-xl p-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black font-montserrat text-gray-900">
                  Co otrzymujesz w tej cenie?
                </h3>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nasze prowizje obejmują pełen pakiet usług premium. Żadnych dodatkowych, ukrytych kosztów.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Included Services */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-ampli-green to-ampli-darkgreen rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    W cenie otrzymujesz:
                  </h4>
                  <div className="space-y-4">
                    {benefits.map((item, index) => (
                      <div key={index} className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-ampli-green/5 transition-all duration-300">
                        <div className="w-6 h-6 bg-gradient-to-br from-ampli-green to-ampli-darkgreen rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* No Additional Costs */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    Brak dodatkowych opłat za:
                  </h4>
                  <div className="space-y-4">
                    {noCosts.map((item, index) => (
                      <div key={index} className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                        <div className="w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center bg-gradient-to-r from-ampli-green/10 via-ampli-green/5 to-ampli-green/10 rounded-2xl p-8">
                <h5 className="text-2xl font-black text-gray-900 mb-4">
                  Gotowy na najlepsze warunki w branży?
                </h5>
                <p className="text-lg text-gray-600 mb-6">
                  Pierwszych 30 dni bez prowizji dla nowych sprzedawców
                </p>
                <button className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen text-white font-bold px-8 py-4 rounded-2xl text-lg hover:shadow-2xl hover:shadow-ampli-green/25 transition-all duration-300 transform hover:scale-105">
                  Zacznij sprzedawać za darmo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionSection;

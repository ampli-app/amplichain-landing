
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Users, CheckCircle, Star } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ampli-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-ampli-green/5 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#7b9a00" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-ampli-green/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
              <span className="text-sm font-bold text-ampli-green uppercase tracking-wide">
                Ograniczona Oferta
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black font-montserrat mb-8 text-white leading-tight">
              Gotowy na
              <br />
              <span className="bg-gradient-to-r from-ampli-green to-ampli-lightgreen bg-clip-text text-transparent">
                wielką sprzedaż?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Dołącz do <strong className="text-white">ekskluzywnej grupy sprzedawców</strong> i otrzymaj 
              dostęp do najlepszego marketplace'a muzycznego w Polsce
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="bg-ampli-green/20 rounded-xl p-2">
                    <Gift className="h-6 w-6 text-ampli-green" />
                  </div>
                  Pakiet startowy dla pierwszych 1000
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ampli-green flex-shrink-0" />
                    <span className="text-gray-300">50 PLN bonusu na start</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ampli-green flex-shrink-0" />
                    <span className="text-gray-300">Wczesny dostęp - 2 tygodnie przed startem</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ampli-green flex-shrink-0" />
                    <span className="text-gray-300">Pierwszy miesiąc bez prowizji</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ampli-green flex-shrink-0" />
                    <span className="text-gray-300">Priorytetowe wsparcie techniczne</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="bg-gradient-to-r from-ampli-green/20 to-ampli-darkgreen/20 backdrop-blur-sm rounded-2xl p-8 border border-ampli-green/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Pozostało miejsc</h4>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-ampli-green" />
                    <span className="text-ampli-green font-bold text-lg">153 / 1000</span>
                  </div>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-3 mb-4">
                  <div className="bg-gradient-to-r from-ampli-green to-ampli-lightgreen h-3 rounded-full relative" style={{width: '15.3%'}}>
                    <div className="absolute right-0 top-0 h-3 w-3 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Oferta kończy się za <strong className="text-white">7 dni</strong>
                </p>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-ampli-green/30 to-ampli-lightgreen/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                
                {/* Main image */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Profesjonalna sprzedaż instrumentów muzycznych"
                    className="w-full h-80 object-cover"
                  />
                  
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-bold text-gray-600">4.9/5 ocena</span>
                      </div>
                      
                      <h4 className="text-gray-900 font-bold text-lg mb-2">
                        +200% wzrost sprzedaży
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Średni wynik naszych sprzedawców w pierwszych 3 miesiącach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-black font-montserrat mb-6 text-white">
              Nie czekaj - miejsca się kończą!
            </h3>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Zapisz się teraz i otrzymaj <strong className="text-ampli-green">pełen pakiet bonusów startowych</strong>.
              Bez zobowiązań, bez ukrytych kosztów.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-ampli-green to-ampli-lightgreen hover:from-ampli-lightgreen hover:to-ampli-green text-white font-bold px-12 py-8 text-xl shadow-2xl shadow-ampli-green/25 hover:shadow-ampli-green/40 transition-all duration-300 transform hover:scale-105 rounded-2xl"
              >
                Zapisz się na listę oczekujących
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">100% bezpłatne</div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-ampli-green" />
                  <span className="text-sm">Brak spamu, tylko ważne informacje</span>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-ampli-green">500+</div>
                <div className="text-sm text-gray-400">Sprzedawców czeka</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ampli-green">2M PLN</div>
                <div className="text-sm text-gray-400">Wartość transakcji</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ampli-green">48h</div>
                <div className="text-sm text-gray-400">Średni czas sprzedaży</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

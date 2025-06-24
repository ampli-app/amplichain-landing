import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Users, CheckCircle, Star, Zap } from "lucide-react";
import DiscountBanner from "@/components/ui/discount-banner";

const CTASection: React.FC = () => {
  const handleStartSelling = () => {
    window.open('https://app.amplichain.com/register', '_blank');
  };

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
              <Zap className="w-4 h-4 text-ampli-green" />
              <span className="text-sm font-bold text-ampli-green uppercase tracking-wide">
                Właśnie Wystartowaliśmy!
              </span>
            </div>

            {/* Compact Discount Banner */}
            <div className="mb-12">
              <DiscountBanner variant="compact" className="mx-auto" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black font-montserrat mb-8 text-white leading-tight">
              Zostań
              <br />
              <span className="bg-gradient-to-r from-ampli-green to-ampli-lightgreen bg-clip-text text-transparent">
                pierwszym sprzedawcą!
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Amplichain właśnie ruszył! Dołącz do <strong className="text-white">pierwszej fali sprzedawców</strong> 
              i skorzystaj z ekskluzywnych bonusów na start
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
                  Bonusy dla pierwszych sprzedawców
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ampli-green flex-shrink-0" />
                    <span className="text-gray-300">Kod rabatowy - prowizja tylko 3%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ampli-green flex-shrink-0" />
                    <span className="text-gray-300">50 PLN bonusu na promocję ogłoszeń</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ampli-green flex-shrink-0" />
                    <span className="text-gray-300">Priorytetowe wyświetlanie w wynikach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-ampli-green flex-shrink-0" />
                    <span className="text-gray-300">Dedykowane wsparcie sprzedażowe</span>
                  </div>
                </div>
              </div>

              {/* Urgency Bar */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Do 31 grudnia 2024</h4>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-400" />
                    <span className="text-red-400 font-bold text-lg">Czas ucieka!</span>
                  </div>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-3 mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full relative animate-pulse" style={{width: '70%'}}>
                    <div className="absolute right-0 top-0 h-3 w-3 bg-white rounded-full" />
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm">
                  Kod rabatowy dostępny tylko do <strong className="text-white">końca roku</strong> - nie przegap okazji!
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
                        <span className="text-sm font-bold text-gray-600">Nowa platforma</span>
                      </div>
                      
                      <h4 className="text-gray-900 font-bold text-lg mb-2">
                        Bądź pierwszy na rynku
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Zdobądź przewagę konkurencyjną jako jeden z pierwszych sprzedawców
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
              Zarejestruj się i odbierz kod rabatowy!
            </h3>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Dołącz do <strong className="text-ampli-green">pierwszej fali sprzedawców</strong> i skorzystaj 
              z kodu rabatowego obniżającego prowizję. Rejestracja zajmuje tylko 2 minuty.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                onClick={handleStartSelling}
                size="lg" 
                className="group bg-gradient-to-r from-ampli-green to-ampli-lightgreen hover:from-ampli-lightgreen hover:to-ampli-green text-white font-bold px-12 py-8 text-xl shadow-2xl shadow-ampli-green/25 hover:shadow-ampli-green/40 transition-all duration-300 transform hover:scale-105 rounded-2xl"
              >
                Zarejestruj się po kod rabatowy
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">100% bezpłatne</div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="h-4 w-4 text-ampli-green" />
                  <span className="text-sm">Kod wysłany od razu</span>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-ampli-green">3%</div>
                <div className="text-sm text-gray-400">Z kodem rabatowym</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ampli-green">31.12</div>
                <div className="text-sm text-gray-400">Deadline kodu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ampli-green">GRATIS</div>
                <div className="text-sm text-gray-400">Rejestracja</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

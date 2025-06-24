
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Shield } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-ampli-green/10 rounded-full blur-3xl animate-pulse-light" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-ampli-green/5 rounded-full blur-3xl animate-pulse-light" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ampli-green/5 rounded-full blur-3xl animate-pulse-light" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="container relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-[1.1]">
              <span className="text-ampli-green">Sprzedawaj</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">więcej na Amplichain</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 max-w-xl leading-relaxed">
              Pierwszy marketplace społecznościowy stworzony specjalnie dla sprzedawców w branży muzycznej
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-lg">
              Najniższe prowizje w branży. Najwyższe zarobki dla Ciebie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-ampli-green hover:bg-ampli-darkgreen text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('cta')?.scrollIntoView({behavior: 'smooth'})}
              >
                Zacznij sprzedawać za darmo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-medium shadow-soft"
                onClick={() => document.getElementById('value')?.scrollIntoView({behavior: 'smooth'})}
              >
                Zobacz korzyści
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-ampli-green/20 rounded-full p-2">
                  <TrendingUp className="h-5 w-5 text-ampli-green" />
                </div>
                <div>
                  <div className="font-bold text-lg">5%</div>
                  <div className="text-sm text-gray-400">prowizji od sprzętu</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-ampli-green/20 rounded-full p-2">
                  <Users className="h-5 w-5 text-ampli-green" />
                </div>
                <div>
                  <div className="font-bold text-lg">10k+</div>
                  <div className="text-sm text-gray-400">muzyków czeka</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-ampli-green/20 rounded-full p-2">
                  <Shield className="h-5 w-5 text-ampli-green" />
                </div>
                <div>
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm text-gray-400">bezpieczeństwa</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-scale-in">
            <div className="relative">
              {/* Mock seller dashboard */}
              <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-card overflow-hidden border border-white/20">
                <div className="h-14 bg-gradient-to-r from-ampli-green to-ampli-darkgreen flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-white/30"></div>
                    <div className="h-3 w-3 rounded-full bg-white/20"></div>
                    <div className="h-3 w-3 rounded-full bg-white/10"></div>
                  </div>
                  <div className="flex-1 text-center text-white font-medium">Panel Sprzedawcy</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-lg text-white">Twoje sprzedaże</h3>
                      <p className="text-gray-300 text-sm">Ostatnie 30 dni</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-ampli-green">12,450 PLN</div>
                      <div className="text-sm text-gray-300">+23% vs poprzedni miesiąc</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">Fender Stratocaster</div>
                        <div className="text-sm text-gray-300">Sprzedano 2 dni temu</div>
                      </div>
                      <div className="text-ampli-green font-bold">4,200 PLN</div>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">Usługa masteringu</div>
                        <div className="text-sm text-gray-300">Zakończono wczoraj</div>
                      </div>
                      <div className="text-ampli-green font-bold">300 PLN</div>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">Marshall JCM800</div>
                        <div className="text-sm text-gray-300">W trakcie negocjacji</div>
                      </div>
                      <div className="text-gray-400 font-bold">2,800 PLN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

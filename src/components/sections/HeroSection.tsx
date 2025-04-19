
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section 
      className="min-h-[90vh] pt-24 pb-16 flex items-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,242,245,0.5) 100%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-ampli-green/5 rounded-full blur-3xl animate-pulse-light" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-ampli-blue/5 rounded-full blur-3xl animate-pulse-light" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-ampli-green/5 to-ampli-blue/5 rounded-full blur-3xl animate-pulse-light" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-gray-900 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ampli-green to-ampli-blue">Amplichain</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">sieć muzycznych możliwości</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-700 max-w-xl leading-relaxed">
              Pierwszy marketplace społecznościowy stworzony specjalnie dla branży muzycznej
            </p>
            <p className="text-lg mb-8 text-gray-600 max-w-lg">
              Sprzedawaj, kupuj, łącz się. Wszystko w jednym miejscu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-ampli-green to-ampli-blue hover:opacity-90 text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})}
              >
                Dołącz do listy oczekujących
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-ampli-green text-ampli-green hover:bg-ampli-green/5 font-medium shadow-soft"
                onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}
              >
                Poznaj szczegóły
              </Button>
            </div>
          </div>

          <div className="hidden lg:block animate-scale-in">
            <div className="relative">
              {/* Mock app interface with modern styling */}
              <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100/50 backdrop-blur-sm">
                <div className="h-14 bg-gradient-to-r from-ampli-green to-ampli-blue flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-white/30"></div>
                    <div className="h-3 w-3 rounded-full bg-white/20"></div>
                    <div className="h-3 w-3 rounded-full bg-white/10"></div>
                  </div>
                  <div className="flex-1 text-center text-white font-medium">Amplichain Marketplace</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-lg">Najnowsze oferty</h3>
                      <p className="text-gray-500 text-sm">Sprzęt muzyczny, usługi i konsultacje</p>
                    </div>
                    <div className="bg-gray-100 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Sample products */}
                    <div className="bg-gray-50 p-3 rounded-lg flex gap-3">
                      <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold">Fender Stratocaster 2019</h4>
                        <p className="text-sm text-gray-600">Gitara elektryczna, stan idealny</p>
                        <p className="text-ampli-green font-bold mt-1">4.200 PLN</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg flex gap-3">
                      <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold">Miks i mastering online</h4>
                        <p className="text-sm text-gray-600">Usługa muzyczna - szybka realizacja</p>
                        <p className="text-ampli-green font-bold mt-1">300 PLN / utwór</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg flex gap-3">
                      <div className="w-20 h-20 bg-gray-200 rounded-md flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold">Konsultacje producenckie</h4>
                        <p className="text-sm text-gray-600">Sesja online 60 min</p>
                        <p className="text-ampli-green font-bold mt-1">250 PLN</p>
                      </div>
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

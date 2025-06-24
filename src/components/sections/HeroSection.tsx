import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Shield, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 pb-16 flex items-center relative overflow-hidden bg-white">
      {/* Light animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-ampli-green/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] bg-ampli-green/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(123,154,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(123,154,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-ampli-green/20 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-ampli-green/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-ampli-green/20 rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="container relative z-10 text-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-10 animate-fade-in">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-ampli-green/10 backdrop-blur-sm border border-ampli-green/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-ampli-green">Nowa generacja marketplace'a</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="text-ampli-green">
                  Sprzedawaj
                </span>
                <br />
                <span className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold">
                  więcej na<br />Amplichain
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed font-light">
                Pierwszy marketplace społecznościowy stworzony specjalnie dla sprzedawców w branży muzycznej
              </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-ampli-green/5 backdrop-blur-sm border border-ampli-green/15 rounded-2xl p-6">
              <p className="text-lg text-ampli-green font-semibold mb-2">💰 Najniższe prowizje w branży</p>
              <p className="text-gray-600">Zarabiaj więcej dzięki transparentnym i konkurencyjnym prowizjom</p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-ampli-green hover:bg-ampli-darkgreen text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-ampli-green/15 hover:shadow-ampli-green/25 transition-all duration-300 transform hover:scale-105"
              >
                Zacznij sprzedawać za darmo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group border-2 border-gray-300 text-gray-700 hover:bg-gray-50 backdrop-blur-sm font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Zobacz demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-4">
              <div className="text-center group">
                <div className="bg-ampli-green/10 backdrop-blur-sm rounded-2xl p-4 mb-3 group-hover:scale-105 transition-transform">
                  <TrendingUp className="h-8 w-8 text-ampli-green mx-auto" />
                </div>
                <div className="font-black text-2xl text-ampli-green">5%</div>
                <div className="text-sm text-gray-500 font-medium">prowizji od sprzętu</div>
              </div>
              
              <div className="text-center group">
                <div className="bg-ampli-green/10 backdrop-blur-sm rounded-2xl p-4 mb-3 group-hover:scale-105 transition-transform">
                  <Users className="h-8 w-8 text-ampli-green mx-auto" />
                </div>
                <div className="font-black text-2xl text-ampli-green">10k+</div>
                <div className="text-sm text-gray-500 font-medium">muzyków czeka</div>
              </div>
              
              <div className="text-center group">
                <div className="bg-ampli-green/10 backdrop-blur-sm rounded-2xl p-4 mb-3 group-hover:scale-105 transition-transform">
                  <Shield className="h-8 w-8 text-ampli-green mx-auto" />
                </div>
                <div className="font-black text-2xl text-ampli-green">100%</div>
                <div className="text-sm text-gray-500 font-medium">bezpieczeństwa</div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="hidden lg:block animate-scale-in">
            <div className="relative group">
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-ampli-green/10 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
              
              {/* Main dashboard */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
                
                {/* Header */}
                <div className="h-16 bg-ampli-green flex items-center px-6">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-white/40" />
                    <div className="h-3 w-3 rounded-full bg-white/30" />
                    <div className="h-3 w-3 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 text-center text-white font-semibold">Panel Sprzedawcy</div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  
                  {/* Main stats */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="font-bold text-2xl text-gray-900 mb-1">Twoje sprzedaże</h3>
                      <p className="text-gray-500 text-sm">Ostatnie 30 dni</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-ampli-green">
                        12,450 PLN
                      </div>
                      <div className="text-sm text-ampli-green font-medium">+23% ↗</div>
                    </div>
                  </div>

                  {/* Transactions */}
                  <div className="space-y-4">
                    
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 hover:border-ampli-green/15 transition-all group/item">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Fender Stratocaster</div>
                          <div className="text-sm text-gray-500">Sprzedano 2 dni temu</div>
                        </div>
                        <div className="text-ampli-green font-bold text-lg">4,200 PLN</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 hover:border-ampli-green/15 transition-all group/item">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Usługa masteringu</div>
                          <div className="text-sm text-gray-500">Zakończono wczoraj</div>
                        </div>
                        <div className="text-ampli-green font-bold text-lg">300 PLN</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 hover:border-ampli-green/15 transition-all group/item">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Marshall JCM800</div>
                          <div className="text-sm text-gray-500">W trakcie negocjacji</div>
                        </div>
                        <div className="text-gray-500 font-bold text-lg">2,800 PLN</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

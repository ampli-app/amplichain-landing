import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Shield, ArrowRight, Play, CheckCircle, Gift } from "lucide-react";

const HeroSection = () => {
  const handleStartSelling = () => {
    window.open('https://app.amplichain.com/register', '_blank');
  };

  const handleWatchDemo = () => {
    // Link to demo video or tour
    window.open('https://app.amplichain.com/demo', '_blank');
  };

  return (
    <section className="min-h-screen pt-20 pb-16 flex items-center relative overflow-hidden bg-white">
      {/* Professional background with subtle patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-ampli-green/5" />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="60" height="60" viewBox="0 0 60 60" className="absolute top-0 left-0 w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#7b9a00" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Modern accent elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-ampli-green/10 to-ampli-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-gradient-to-br from-ampli-green/8 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Enhanced Content */}
          <div className="space-y-8 animate-fade-in">
            
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-ampli-green/20 rounded-full px-6 py-3 shadow-lg">
              <div className="w-2 h-2 bg-ampli-green rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-ampli-green tracking-wide uppercase">
                Właśnie Wystartowaliśmy!
              </span>
            </div>

            {/* Registration Discount Banner */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="h-6 w-6 text-orange-600" />
                <span className="text-orange-800 font-bold text-lg">Kod rabatowy na start!</span>
              </div>
              <p className="text-orange-700 font-medium">
                Zarejestruj się do <strong>31 grudnia 2024</strong> i otrzymaj kod obniżający prowizję do <strong>tylko 3%</strong>
              </p>
            </div>

            {/* Main Headline - More Professional Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight">
                <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">
                  Sprzedawaj
                </span>
                <br />
                <span className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold">
                  inteligentnie
                </span>
                <br />
                <span className="text-gray-700 text-3xl sm:text-4xl md:text-5xl font-medium">
                  na Amplichain
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
                Profesjonalny marketplace dla branży muzycznej z najniższymi prowizjami 
                i zaawansowanymi narzędziami sprzedażowymi
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-ampli-green" />
                <span className="text-lg text-gray-700 font-medium">Tylko 3% prowizji z kodem rabatowym</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-ampli-green" />
                <span className="text-lg text-gray-700 font-medium">10,000+ zweryfikowanych kupujących</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-ampli-green" />
                <span className="text-lg text-gray-700 font-medium">Gwarancja bezpieczeństwa transakcji</span>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleStartSelling}
                size="lg" 
                className="group bg-gradient-to-r from-ampli-green to-ampli-darkgreen hover:from-ampli-darkgreen hover:to-ampli-green text-white font-bold px-10 py-6 text-lg shadow-xl shadow-ampli-green/20 hover:shadow-ampli-green/30 transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                Zarejestruj się i odbierz kod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={handleWatchDemo}
                size="lg" 
                variant="outline"
                className="group border-2 border-gray-300 hover:border-ampli-green text-gray-700 hover:text-ampli-green hover:bg-ampli-green/5 backdrop-blur-sm font-semibold px-10 py-6 text-lg transition-all duration-300 rounded-xl"
              >
                <Play className="mr-2 h-5 w-5" />
                Zobacz prezentację
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-ampli-green/15 to-ampli-green/5 rounded-2xl p-5 mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-ampli-green mx-auto" />
                </div>
                <div className="font-black text-3xl text-ampli-green mb-1">3%</div>
                <div className="text-sm text-gray-600 font-medium">z kodem</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-ampli-green/15 to-ampli-green/5 rounded-2xl p-5 mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="h-8 w-8 text-ampli-green mx-auto" />
                </div>
                <div className="font-black text-3xl text-ampli-green mb-1">10k+</div>
                <div className="text-sm text-gray-600 font-medium">kupujących</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-ampli-green/15 to-ampli-green/5 rounded-2xl p-5 mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-ampli-green mx-auto" />
                </div>
                <div className="font-black text-3xl text-ampli-green mb-1">100%</div>
                <div className="text-sm text-gray-600 font-medium">bezpieczeństwa</div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className="hidden lg:block animate-scale-in">
            <div className="relative group">
              
              {/* Professional glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-ampli-green/20 via-ampli-green/10 to-ampli-green/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Professional image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Profesjonalne narzędzia dla sprzedawców muzycznych"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Elegant overlay with branding */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Professional badge on image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-3 w-3 bg-ampli-green rounded-full animate-pulse" />
                      <span className="text-ampli-green font-bold text-sm uppercase tracking-wide">
                        Amplichain Pro
                      </span>
                    </div>
                    <h3 className="text-gray-900 font-bold text-xl mb-2">
                      Profesjonalne narzędzia sprzedażowe
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Wszystko czego potrzebujesz do efektywnej sprzedaży w branży muzycznej
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95) rotateY(-10deg); }
          to { opacity: 1; transform: scale(1) rotateY(0deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 1.2s ease-out 0.4s both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

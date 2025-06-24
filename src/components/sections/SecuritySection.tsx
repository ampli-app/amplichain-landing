
import React, { useState } from "react";
import { Shield, ScanSearch, AlertTriangle, CheckCircle2, Users, Database, Lock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SecuritySection: React.FC = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!serialNumber.trim()) return;
    
    setIsSearching(true);
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSearching(false);
    
    // Here would be actual search logic
    console.log('Searching for:', { serialNumber, category, brand });
  };

  const stats = [
    { icon: Database, value: "15,000+", label: "Sprawdzonych seriali", color: "text-blue-600" },
    { icon: Users, value: "2,500+", label: "Zgłoszeń kradzieży", color: "text-red-600" },
    { icon: CheckCircle2, value: "98%", label: "Skuteczność", color: "text-green-600" },
    { icon: Lock, value: "24/7", label: "Monitoring", color: "text-purple-600" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Weryfikuj przed zakupem",
      description: "Sprawdź numer seryjny instrumentu w naszej bazie zanim dokonasz zakupu",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: AlertTriangle,
      title: "Zgłaszaj kradzieże",
      description: "Pomóż odzyskać utracone instrumenty i zwiększ szanse na ich odnalezienie",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Users,
      title: "Współpraca z organami",
      description: "Pracujemy z policją i ubezpieczycielami w całej Polsce",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Database,
      title: "Zniechęcaj złodziei",
      description: "Ograniczamy możliwości sprzedaży skradzionego sprzętu muzycznego",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="security" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-green-100/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 100 100">
            <defs>
              <pattern id="security-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#security-grid)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Bezpieczeństwo Przede Wszystkim
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Bezpieczne zakupy z bazą skradzionych sprzętów
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Amplichain walczy z nielegalnym obrotem instrumentów muzycznych oferując 
            <span className="font-semibold text-blue-600"> największą w Polsce bazę </span>
            skradzionych przedmiotów dostępną dla wszystkich użytkowników
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="font-black text-3xl text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Report Theft CTA */}
            <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    Skradziono Ci sprzęt?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Zgłoś kradzież natychmiast i zwiększ szanse na odzyskanie
                  </p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    Zgłoś kradzież
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Search Tool */}
          <div className="lg:sticky lg:top-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-4 shadow-lg">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Sprawdź sprzęt przed zakupem
                </h3>
                <p className="text-gray-600">
                  Wprowadź dane sprzętu aby sprawdzić czy nie figuruje w bazie skradzionych
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="serialNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Numer seryjny sprzętu *
                  </label>
                  <Input
                    id="serialNumber"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    placeholder="Np. ABC123456789"
                    className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                      Kategoria
                    </label>
                    <select 
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-12 rounded-md border-2 border-gray-200 bg-white px-4 text-lg focus:border-blue-500 transition-colors"
                    >
                      <option value="">Wybierz kategorię</option>
                      <option value="guitar">Gitary</option>
                      <option value="bass">Gitary basowe</option>
                      <option value="keys">Instrumenty klawiszowe</option>
                      <option value="drums">Perkusja</option>
                      <option value="studio">Sprzęt studyjny</option>
                      <option value="pa">Nagłośnienie</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="brand" className="block text-sm font-semibold text-gray-700 mb-2">
                      Marka
                    </label>
                    <Input
                      id="brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Np. Fender, Gibson..."
                      className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleSearch}
                  disabled={!serialNumber.trim() || isSearching}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sprawdzam...
                    </>
                  ) : (
                    <>
                      <ScanSearch className="mr-3 h-5 w-5" />
                      Sprawdź sprzęt
                    </>
                  )}
                </Button>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">100% bezpłatne sprawdzenie</p>
                      <p>Każde wyszukiwanie jest całkowicie darmowe i anonimowe</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

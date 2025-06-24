
import React, { useState } from "react";
import { Shield, ScanSearch, AlertTriangle, CheckCircle2, Users, Database, Lock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SecuritySection: React.FC = () => {
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

          {/* Search Image */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
              <img 
                src="/lovable-uploads/0bc43e50-cae2-4e5a-934f-049c52363336.png" 
                alt="Sprawdź sprzęt przed zakupem"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

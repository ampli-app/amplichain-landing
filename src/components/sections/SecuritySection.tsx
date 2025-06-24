import React from "react";
import { Shield, CheckCircle2, Users, CreditCard, Lock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SecuritySection: React.FC = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Zadowolonych sprzedawców", color: "text-ampli-green" },
    { icon: CreditCard, value: "50M+", label: "Bezpiecznych transakcji", color: "text-blue-600" },
    { icon: CheckCircle2, value: "99.8%", label: "Pomyślnych płatności", color: "text-green-600" },
    { icon: TrendingUp, value: "24/7", label: "Wsparcie sprzedawców", color: "text-purple-600" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Bezpieczne płatności",
      description: "Gwarancja wypłat i ochrona przed nieuczciwymi kupującymi. Twoje pieniądze są zawsze bezpieczne",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: CheckCircle2,
      title: "Weryfikowani kupujący",
      description: "Wszyscy kupujący przechodzą proces weryfikacji, co minimalizuje ryzyko problemowych transakcji",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Users,
      title: "Społeczność sprzedawców",
      description: "Dołącz do tysięcy muzyków, którzy już zarabiają na swojej pasji dzięki naszej platformie",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: CreditCard,
      title: "Szybkie wypłaty",
      description: "Otrzymuj pieniądze w ciągu 24 godzin od zakończenia transakcji. Bez ukrytych opłat",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="security" className="py-24 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-ampli-green/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Shield className="h-5 w-5 text-ampli-green" />
            <span className="text-sm font-semibold text-ampli-green uppercase tracking-wide">
              Bezpieczeństwo i Zaufanie
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-ampli-green to-gray-900 bg-clip-text text-transparent leading-tight">
            Sprzedawaj z pewnością i spokojem
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Amplichain to miejsce, gdzie <span className="font-semibold text-ampli-green">sprzedawcy są chronieni</span>, 
            transakcje są bezpieczne, a zarabianie na muzycznej pasji staje się proste i przyjemne
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
                          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-ampli-green transition-colors">
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

            {/* Start Selling CTA */}
            <Card className="p-6 bg-gradient-to-r from-ampli-green/10 to-ampli-darkgreen/10 border border-ampli-green/30 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ampli-green/20 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-ampli-green" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    Gotowy na pierwsze zyski?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Dołącz do tysięcy sprzedawców i zacznij zarabiać już dziś
                  </p>
                  <Button size="sm" className="bg-ampli-green hover:bg-ampli-darkgreen text-white">
                    Rozpocznij sprzedaż
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Trust Image */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
              <img 
                src="/lovable-uploads/0bc43e50-cae2-4e5a-934f-049c52363336.png" 
                alt="Bezpieczna sprzedaż na Amplichain"
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

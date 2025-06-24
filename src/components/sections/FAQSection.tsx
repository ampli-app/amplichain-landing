
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle2, Shield, Zap, Users, TrendingUp, Star, MessageCircle } from "lucide-react";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Ile kosztuje sprzedawanie na Amplichain?",
      answer: "Rejestracja i prowadzenie sklepu są całkowicie bezpłatne. Płacisz tylko prowizję od udanych transakcji: 5% od sprzętu muzycznego i 10% od usług. To jedne z najniższych stawek na rynku.",
      icon: CheckCircle2,
      gradient: "from-green-400 to-emerald-600"
    },
    {
      question: "Jak szybko otrzymam pieniądze za sprzedaż?",
      answer: "Pieniądze są automatycznie przekazywane na Twoje konto w ciągu 2-7 dni roboczych po potwierdzeniu otrzymania produktu przez kupującego. Korzystamy z systemu płatności Stripe, który zapewnia szybkie i bezpieczne transfery.",
      icon: Zap,
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      question: "Czy mogę sprzedawać używany sprzęt?",
      answer: "Oczywiście! Amplichain to idealne miejsce na sprzedaż używanego sprzętu muzycznego. Zachęcamy do szczegółowego opisywania stanu technicznego i załączania wysokiej jakości zdjęć.",
      icon: Star,
      gradient: "from-purple-400 to-violet-600"
    },
    {
      question: "Jak działa proces weryfikacji sprzedawców?",
      answer: "Wszyscy sprzedawcy przechodzą proces weryfikacji przez Stripe Connect. Sprawdzamy dane osobowe, dokumenty tożsamości i dane bankowe. To zapewnia bezpieczeństwo wszystkim użytkownikom platformy.",
      icon: Shield,
      gradient: "from-orange-400 to-red-600"
    },
    {
      question: "Czy mogę oferować usługi muzyczne?",
      answer: "Tak! Amplichain to nie tylko marketplace sprzętu, ale też miejsce dla usług muzycznych: nagrywanie, mixing, mastering, aranżacje, lekcje gry na instrumentach, konsultacje producenckie i wiele więcej.",
      icon: Users,
      gradient: "from-pink-400 to-rose-600"
    },
    {
      question: "Jak skutecznie sprzedawać na platformie?",
      answer: "Kluczem do sukcesu są wysokiej jakości zdjęcia, szczegółowe opisy, konkurencyjne ceny i szybka komunikacja z klientami. Nasz zespół wspiera sprzedawców wskazówkami i najlepszymi praktykami.",
      icon: TrendingUp,
      gradient: "from-indigo-400 to-blue-600"
    },
    {
      question: "Czy jest limit ilości ofert?",
      answer: "Nie ma limitu! Możesz wystawiać tyle ofert, ile chcesz. Im więcej masz ofert, tym większe szanse na sprzedaż. Nasze narzędzia analityczne pomogą Ci zarządzać dużą liczbą produktów.",
      icon: HelpCircle,
      gradient: "from-teal-400 to-green-600"
    },
    {
      question: "Co jeśli kupujący nie jest zadowolony?",
      answer: "Mamy sprawny system rozwiązywania sporów. Jeśli dojdzie do problemu, nasz zespół pomoże znaleźć rozwiązanie korzystne dla obu stron. Chronimy zarówno kupujących, jak i sprzedawców.",
      icon: MessageCircle,
      gradient: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-ampli-green/5 to-ampli-blue/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-ampli-green/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-ampli-blue/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ampli-green to-ampli-blue rounded-2xl mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Znajdź odpowiedzi na najważniejsze pytania dotyczące sprzedawania na Amplichain
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <AccordionTrigger className="text-left py-6 px-8 hover:no-underline hover:bg-slate-50/50 transition-all duration-300 group-hover:scale-[1.01]">
                    <div className="flex items-center gap-4 w-full">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${faq.gradient} shadow-lg flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold text-slate-900 text-lg leading-tight pr-4">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="pl-16">
                      <div className="w-full h-px bg-gradient-to-r from-slate-200 to-transparent mb-4"></div>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-ampli-green/10 to-ampli-blue/10 rounded-3xl p-8 max-w-2xl mx-auto border border-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Masz inne pytania?
            </h3>
            <p className="text-slate-600 mb-6">
              Nasz zespół wsparcia jest gotowy pomóc Ci w każdej chwili
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-ampli-green to-ampli-blue text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

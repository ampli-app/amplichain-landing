
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
      icon: CheckCircle2
    },
    {
      question: "Jak szybko otrzymam pieniądze za sprzedaż?",
      answer: "Pieniądze są automatycznie przekazywane na Twoje konto w ciągu 2-7 dni roboczych po potwierdzeniu otrzymania produktu przez kupującego. Korzystamy z systemu płatności Stripe, który zapewnia szybkie i bezpieczne transfery.",
      icon: Zap
    },
    {
      question: "Czy mogę sprzedawać używany sprzęt?",
      answer: "Oczywiście! Amplichain to idealne miejsce na sprzedaż używanego sprzętu muzycznego. Zachęcamy do szczegółowego opisywania stanu technicznego i załączania wysokiej jakości zdjęć.",
      icon: Star
    },
    {
      question: "Jak działa proces weryfikacji sprzedawców?",
      answer: "Wszyscy sprzedawcy przechodzą proces weryfikacji przez Stripe Connect. Sprawdzamy dane osobowe, dokumenty tożsamości i dane bankowe. To zapewnia bezpieczeństwo wszystkim użytkownikom platformy.",
      icon: Shield
    },
    {
      question: "Czy mogę oferować usługi muzyczne?",
      answer: "Tak! Amplichain to nie tylko marketplace sprzętu, ale też miejsce dla usług muzycznych: nagrywanie, mixing, mastering, aranżacje, lekcje gry na instrumentach, konsultacje producenckie i wiele więcej.",
      icon: Users
    },
    {
      question: "Jak skutecznie sprzedawać na platformie?",
      answer: "Kluczem do sukcesu są wysokiej jakości zdjęcia, szczegółowe opisy, konkurencyjne ceny i szybka komunikacja z klientami. Nasz zespół wspiera sprzedawców wskazówkami i najlepszymi praktykami.",
      icon: TrendingUp
    },
    {
      question: "Czy jest limit ilości ofert?",
      answer: "Nie ma limitu! Możesz wystawiać tyle ofert, ile chcesz. Im więcej masz ofert, tym większe szanse na sprzedaż. Nasze narzędzia analityczne pomogą Ci zarządzać dużą liczbą produktów.",
      icon: HelpCircle
    },
    {
      question: "Co jeśli kupujący nie jest zadowolony?",
      answer: "Mamy sprawny system rozwiązywania sporów. Jeśli dojdzie do problemu, nasz zespół pomoże znaleźć rozwiązanie korzystne dla obu stron. Chronimy zarówno kupujących, jak i sprzedawców.",
      icon: MessageCircle
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-6">
            <HelpCircle className="w-6 h-6 text-gray-600" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-montserrat mb-6 text-gray-900 tracking-tight">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Znajdź odpowiedzi na najważniejsze pytania dotyczące sprzedawania na Amplichain
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-gray-200/80 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-left py-6 px-8 hover:no-underline hover:bg-gray-50/50 transition-all duration-300">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-semibold text-gray-900 text-lg leading-tight pr-4">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="pl-14">
                      <div className="w-full h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed text-base">
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
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masz inne pytania?
            </h3>
            <p className="text-gray-600 mb-6">
              Nasz zespół wsparcia jest gotowy pomóc Ci w każdej chwili
            </p>
            <button className="inline-flex items-center gap-2 bg-ampli-green hover:bg-ampli-darkgreen text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
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

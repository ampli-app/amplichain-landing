import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react"; // Usunęliśmy nieużywane ikony

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Ile kosztuje sprzedawanie na Amplichain?",
      answer: "Rejestracja i prowadzenie sklepu są całkowicie bezpłatne. Płacisz tylko prowizję od udanych transakcji: 5% od sprzętu muzycznego i 10% od usług. To jedne z najniższych stawek na rynku.",
    },
    {
      question: "Jak szybko otrzymam pieniądze za sprzedaż?",
      answer: "Pieniądze są automatycznie przekazywane na Twoje konto w ciągu 2-7 dni roboczych po potwierdzeniu otrzymania produktu przez kupującego. Korzystamy z systemu płatności Stripe, który zapewnia szybkie i bezpieczne transfery.",
    },
    {
      question: "Czy mogę sprzedawać używany sprzęt?",
      answer: "Oczywiście! Amplichain to idealne miejsce na sprzedaż używanego sprzętu muzycznego. Zachęcamy do szczegółowego opisywania stanu technicznego i załączania wysokiej jakości zdjęć.",
    },
    {
      question: "Jak działa proces weryfikacji sprzedawców?",
      answer: "Wszyscy sprzedawcy przechodzą proces weryfikacji przez Stripe Connect. Sprawdzamy dane osobowe, dokumenty tożsamości i dane bankowe. To zapewnia bezpieczeństwo wszystkim użytkownikom platformy.",
    },
    {
      question: "Czy mogę oferować usługi muzyczne?",
      answer: "Tak! Amplichain to nie tylko marketplace sprzętu, ale też miejsce dla usług muzycznych: nagrywanie, mixing, mastering, aranżacje, konsultacje producenckie i wiele więcej.",
    },
    // ... reszta pytań
  ];

  return (
    <section id="faq" className="pt-8 pb-16 bg-white">
      <div className="container">
        {/* Nagłówek - teraz maksymalnie czysty, bez ikony */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Często zadawane pytania
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Wszystko, co musisz wiedzieć o sprzedaży na Amplichain, w jednym miejscu.
          </p>
        </div>

        {/* Akordeon z FAQ */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 p-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-slate-200/80 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 p-6 hover:no-underline focus:outline-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Sekcja "Masz inne pytania?" */}
        <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            Nie znalazłeś odpowiedzi?
                        </h3>
                        <p className="text-slate-600">
                            Nasz zespół wsparcia chętnie odpowie na każde Twoje pytanie.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                         <a href="mailto:hello@amplichain.com" className="inline-flex items-center gap-2 bg-ampli-green hover:bg-ampli-darkgreen text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-200 hover:scale-105">
                            <MessageCircle className="w-5 h-5" />
                            Skontaktuj się z nami
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
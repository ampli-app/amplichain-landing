import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react"; // Usunęliśmy nieużywane ikony

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Czy Amplichain jest tylko dla muzyków?",
      answer: "Amplichain został stworzony z myślą o całej społeczności muzycznej, nie tylko dla muzyków. Zapraszamy wszystkich - muzyków, kolekcjonerów sprzętu, techników, producentów dźwięku czy po prostu entuzjastów, którzy chcą kupić lub sprzedać sprzęt muzyczny i być na bieżąco.",
    },
    {
      question: "Kiedy ruszy platforma?",
      answer: "Planujemy uruchomienie platformy w lipcu 2025. Osoby zapisane na listę oczekujących otrzymają dostęp do platformy jako pierwsze.",
    },
    {
      question: "Czy platforma jest tylko dla profesjonalistów?",
      answer: "Nie, Amplichain jest platformą dla wszystkich pasjonatów muzyki - od początkujących po profesjonalistów z branży. Każdy może sprzedawać swój sprzęt, oferować usługi muzyczne. Zależy nam aby każdy mógł budować swoją markę osobistą w branży.",
    },
    {
      question: "Czy mogę sprzedawać używany sprzęt?",
      answer: "Oczywiście! Amplichain to idealne miejsce na sprzedaż używanego sprzętu muzycznego. Zachęcamy do szczegółowego opisywania stanu technicznego i załączania wysokiej jakości zdjęć.",
    },
    {
      question: "Jak działa proces weryfikacji sprzedawców?",
      answer: "Wszyscy sprzedawcy przechodzą proces weryfikacji przez Stripe Connect. Sprawdzamy dane osobowe, dokumenty tożsamości i dane bankowe. To zapewnia bezpieczeństwo wszystkim użytkownikom platformy.",
    },
    // ... reszta pytań
  ];

  return (
    <section id="faq" className="pt-8 pb-16 bg-white">
      <div className="container">
        {/* Nagłówek - teraz maksymalnie czysty, bez ikony */}
        <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-syne mb-8 text-gray-900 tracking-tight">
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
                            Napisz do nas na <b>hello@amplichain.com</b>

                        </p>
                    </div>
                    <div className="flex-shrink-0">
                         <Button 
                            asChild
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-ampli-green to-ampli-lightgreen hover:from-ampli-lightgreen hover:to-ampli-green text-white font-bold shadow-2xl shadow-ampli-green/25 hover:shadow-ampli-green/40 transition-all duration-300 transform hover:scale-105 rounded-xl"
                         >
                            <a href="mailto:hello@amplichain.com">
                                <MessageCircle className="w-5 h-5" />
                                <span className="whitespace-nowrap font-semibold">Skontaktuj się z nami</span>
                            </a>
                         </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
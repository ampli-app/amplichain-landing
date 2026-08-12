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
      answer: "Pracujemy nad uruchomieniem platformy. Osoby zapisane na listę oczekujących otrzymają dostęp jako pierwsze.",
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
      answer: "Używamy Stripe Connect do płatności i weryfikacji sprzedawców - to standard w branży, który gwarantuje bezpieczeństwo.",
    },
    // ... reszta pytań
  ];

  return (
    <section id="faq" className="pt-8 pb-16 bg-white">
      <div className="container">
        {/* Nagłówek - teraz maksymalnie czysty, bez ikony */}
        <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 text-rhythm-950 tracking-tight">
            Często zadawane pytania
          </h2>
          <p className="text-lg text-rhythm-600 max-w-3xl mx-auto leading-relaxed">
            Wszystko, co musisz wiedzieć o sprzedaży na Amplichain, w jednym miejscu.
          </p>
        </div>

        {/* Akordeon z FAQ */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-subtle border border-rhythm-200 p-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-rhythm-200 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-rhythm-950 p-6 hover:no-underline focus:outline-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-rhythm-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Sekcja "Masz inne pytania?" */}
        <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-white rounded-2xl border border-rhythm-200 p-8 shadow-subtle">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-center sm:text-left">
                        <h3 className="text-2xl font-display mb-2 text-rhythm-950">
                            Nie znalazłeś odpowiedzi?
                        </h3>
                        <p className="text-rhythm-600">
                            Napisz do nas na <b>hello@amplichain.com</b>

                        </p>
                    </div>
                    <div className="flex-shrink-0">
                         <Button
                            asChild
                            className="inline-flex items-center gap-2 bg-action hover:bg-action-hover text-white font-semibold shadow-card hover:shadow-hover transition-all duration-200 rounded-xl"
                         >
                            <a href="mailto:hello@amplichain.com">
                                <MessageCircle className="w-5 h-5" />
                                <span className="whitespace-nowrap">Skontaktuj się z nami</span>
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
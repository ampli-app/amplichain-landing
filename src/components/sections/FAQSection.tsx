
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Ile kosztuje sprzedawanie na Amplichain?",
      answer: "Rejestracja i prowadzenie sklepu są całkowicie bezpłatne. Płacisz tylko prowizję od udanych transakcji: 5% od sprzętu muzycznego i 10% od usług. To jedne z najniższych stawek na rynku."
    },
    {
      question: "Jak szybko otrzymam pieniądze za sprzedaż?",
      answer: "Pieniądze są automatycznie przekazywane na Twoje konto w ciągu 2-7 dni roboczych po potwierdzeniu otrzymania produktu przez kupującego. Korzystamy z systemu płatności Stripe, który zapewnia szybkie i bezpieczne transfery."
    },
    {
      question: "Czy mogę sprzedawać używany sprzęt?",
      answer: "Oczywiście! Amplichain to idealne miejsce na sprzedaż używanego sprzętu muzycznego. Zachęcamy do szczegółowego opisywania stanu technicznego i załączania wysokiej jakości zdjęć."
    },
    {
      question: "Jak działa proces weryfikacji sprzedawców?",
      answer: "Wszyscy sprzedawcy przechodzą proces weryfikacji przez Stripe Connect. Sprawdzamy dane osobowe, dokumenty tożsamości i dane bankowe. To zapewnia bezpieczeństwo wszystkim użytkownikom platformy."
    },
    {
      question: "Czy mogę oferować usługi muzyczne?",
      answer: "Tak! Amplichain to nie tylko marketplace sprzętu, ale też miejsce dla usług muzycznych: nagrywanie, mixing, mastering, aranżacje, lekcje gry na instrumentach, konsultacje producenckie i wiele więcej."
    },
    {
      question: "Jak skutecznie sprzedawać na platformie?",
      answer: "Kluczem do sukcesu są wysokiej jakości zdjęcia, szczegółowe opisy, konkurencyjne ceny i szybka komunikacja z klientami. Nasz zespół wspiera sprzedawców wskazówkami i najlepszymi praktykami."
    },
    {
      question: "Czy jest limit ilości ofert?",
      answer: "Nie ma limitu! Możesz wystawiać tyle ofert, ile chcesz. Im więcej masz ofert, tym większe szanse na sprzedaż. Nasze narzędzia analityczne pomogą Ci zarządzać dużą liczbą produktów."
    },
    {
      question: "Co jeśli kupujący nie jest zadowolony?",
      answer: "Mamy sprawny system rozwiązywania sporów. Jeśli dojdzie do problemu, nasz zespół pomoże znaleźć rozwiązanie korzystne dla obu stron. Chronimy zarówno kupujących, jak i sprzedawców."
    }
  ];

  return (
    <section id="faq" className="section py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Najczęściej zadawane pytania</h2>
        <p className="section-subtitle">
          Znajdź odpowiedzi na najważniejsze pytania dotyczące sprzedawania na Amplichain
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-5 hover:no-underline hover:text-ampli-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

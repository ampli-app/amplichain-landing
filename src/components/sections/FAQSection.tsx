
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
      question: "Kiedy ruszy platforma?",
      answer: "Planujemy uruchomienie platformy w pierwszym kwartale przyszłego roku. Osoby zapisane na listę oczekujących otrzymają wcześniejszy dostęp do wersji beta."
    },
    {
      question: "Jakie prowizje będą pobierane?",
      answer: "Nasze prowizje należą do najniższych w branży i wynoszą 5% od sprzedaży sprzętu oraz 10% od usług i konsultacji. Dla użytkowników z listy oczekujących przygotowaliśmy specjalne zniżki na start."
    },
    {
      question: "Jak działa weryfikacja sprzedawców przez Stripe Connect?",
      answer: "Wszyscy sprzedawcy przechodzą proces weryfikacji poprzez Stripe Connect, co zapewnia bezpieczeństwo płatności oraz weryfikację danych osobowych. System automatycznie sprawdza dokumenty tożsamości oraz historię transakcji."
    },
    {
      question: "Czy platforma jest tylko dla profesjonalistów?",
      answer: "Nie, Amplichain jest platformą dla wszystkich pasjonatów muzyki - od początkujących muzyków po profesjonalistów z branży. Każdy może sprzedawać swój sprzęt lub oferować usługi muzyczne."
    },
    {
      question: "Jak działa baza skradzionych sprzętów?",
      answer: "Baza gromadzi zgłoszenia kradzieży instrumentów i sprzętu muzycznego. Każdy użytkownik może sprawdzić numer seryjny przed zakupem, aby upewnić się, że sprzęt nie figuruje jako skradziony. Współpracujemy też z organami ścigania w celu odzyskiwania skradzionego sprzętu."
    },
    {
      question: "Czy mogę sprzedawać używany sprzęt?",
      answer: "Oczywiście! Większość ofert na Amplichain to właśnie sprzęt używany. Zachęcamy do dokładnego opisywania stanu technicznego oraz załączania zdjęć wysokiej jakości, aby zwiększyć zaufanie kupujących."
    },
    {
      question: "Jak działa system płatności?",
      answer: "Wszystkie płatności realizowane są za pośrednictwem Stripe, co zapewnia najwyższe standardy bezpieczeństwa. Oferujemy zarówno płatności kartą, BLIK, jak i płatności odroczone. Pieniądze są przekazywane sprzedawcy po potwierdzeniu otrzymania przedmiotu przez kupującego."
    }
  ];

  return (
    <section id="faq" className="section py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Najczęściej zadawane pytania</h2>

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

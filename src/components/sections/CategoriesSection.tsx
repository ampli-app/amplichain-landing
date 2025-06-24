import React from "react";
import { Music, Headphones, Mic, Settings } from "lucide-react";

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: Music,
      title: "Instrumenty muzyczne",
      description: "Gitary, basy, perkusja, instrumenty klawiszowe i więcej",
      examples: ["Gitary elektryczne i akustyczne", "Perkusja i akcesoria perkusyjne", "Keyboardy i syntezatory", "Instrumenty dęte"]
    },
    {
      icon: Headphones,
      title: "Sprzęt audio",
      description: "Mikrofony, słuchawki, interfejsy audio, monitory",
      examples: ["Mikrofony studyjne i sceniczne", "Słuchawki profesjonalne", "Interfejsy audio USB/Thunderbolt", "Monitory studyjne"]
    },
    {
      icon: Mic,
      title: "Usługi muzyczne",
      description: "Nagrywanie, miks, mastering, aranżacje",
      examples: ["Nagrywanie w studiu", "Mixing i mastering", "Aranżacje muzyczne", "Lekcje gry na instrumentach"]
    },
    {
      icon: Settings,
      title: "Konsultacje",
      description: "Doradztwo muzyczne, coaching, mentoring",
      examples: ["Konsultacje producenckie", "Coaching wokalny", "Doradztwo w zakresie sprzętu", "Mentoring dla muzyków"]
    }
  ];

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gray-900">
            Co możesz sprzedawać?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Amplichain to miejsce dla każdego rodzaju oferty muzycznej. Od sprzętu po usługi - wszystko ma tu swoje miejsce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="bg-ampli-green/10 rounded-xl h-14 w-14 flex items-center justify-center flex-shrink-0 group-hover:bg-ampli-green/20 transition-colors duration-300">
                  <category.icon className="h-7 w-7 text-ampli-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-montserrat mb-3 text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-ampli-green rounded-full mr-3"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-ampli-green/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-900">
            Masz coś innego?
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Jeśli Twoja oferta nie pasuje do żadnej z powyższych kategorii, skontaktuj się z nami. 
            Ciągle rozwijamy platformę i dodajemy nowe kategorie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

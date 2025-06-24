
import React from "react";
import { Music, Mic, Settings } from "lucide-react";

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: Music,
      title: "Instrumenty i sprzęt audio",
      description: "Gitary, basy, perkusja, mikrofony, słuchawki, interfejsy audio i więcej",
      examples: [
        "Gitary elektryczne i akustyczne", 
        "Perkusja i akcesoria perkusyjne", 
        "Mikrofony studyjne i sceniczne",
        "Słuchawki profesjonalne",
        "Interfejsy audio USB/Thunderbolt",
        "Monitory studyjne"
      ]
    },
    {
      icon: Mic,
      title: "Usługi muzyczne",
      description: "Nagrywanie, miks, mastering, aranżacje",
      examples: [
        "Nagrywanie w studiu", 
        "Mixing i mastering", 
        "Aranżacje muzyczne", 
        "Lekcje gry na instrumentach"
      ]
    },
    {
      icon: Settings,
      title: "Konsultacje",
      description: "Doradztwo muzyczne, coaching, mentoring",
      examples: [
        "Konsultacje producenckie", 
        "Coaching wokalny", 
        "Doradztwo w zakresie sprzętu", 
        "Mentoring dla muzyków"
      ]
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 group border border-gray-100">
              <div className="text-center">
                <div className="bg-ampli-green/10 rounded-xl h-16 w-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-ampli-green/20 transition-colors duration-300">
                  <category.icon className="h-8 w-8 text-ampli-green" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-3 text-left">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-ampli-green rounded-full mr-3 flex-shrink-0"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

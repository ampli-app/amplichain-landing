import React from "react";

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Instrumenty i sprzęt audio",
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
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Usługi muzyczne",
      examples: [
        "Nagrywanie w studiu", 
        "Mixing i mastering", 
        "Aranżacje muzyczne", 
        "Lekcje gry na instrumentach"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1516116216624-53e697314c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Konsultacje",
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
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6 text-gray-900">
            Co możesz <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">sprzedawać</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Amplichain to miejsce dla każdego rodzaju oferty muzycznej. Od sprzętu po usługi - wszystko ma tu swoje miejsce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="relative mb-6">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-syne mb-4 text-gray-900 text-center">
                  {category.title}
                </h3>
                <ul className="space-y-3 text-left flex-grow">
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

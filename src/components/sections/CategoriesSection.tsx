import React from "react";

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      image: "./images/sprzet.webp",
      title: "Sprzęt muzyczny",
      examples: [
        "Instrumenty muzyczne", 
        "Sprzęt studyjny i nagraniowy", 
        "Sprzęt sceniczny i koncertowy"
      ]
    },
    {
      image: "./images/usługi.webp",
      title: "Usługi muzyczne",
      examples: [
        "Nagrywanie w studiu", 
        "Mixing i mastering", 
        "Aranżacje muzyczne"
      ]
    },
    {
      image: "./images/kons.webp",
      title: "Konsultacje",
      examples: [
        "Konsultacje producenckie", 
        "Coaching wokalny", 
        "Mentoring dla muzyków"
      ]
    }
  ];

  return (
    <section id="categories" className="pt-8 pb-16 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-syne mb-8 text-gray-900 tracking-tight">
            Co mogę <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">sprzedawać</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Dajesz wartość scenie muzycznej? Czas na tym zarobić.
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
        
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 font-medium">
            ...i nie tylko!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

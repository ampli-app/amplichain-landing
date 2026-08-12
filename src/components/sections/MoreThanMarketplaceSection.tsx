import React from "react";

const MoreThanMarketplaceSection: React.FC = () => {
  const features = [
    {
      image: "./images/radar.webp",
      title: "Inteligentne poszukiwania",
      subtitle: "Znajdź to, czego szukasz",
      description: "Publikuj ogłoszenia \"Radar\" na tablicy społeczności. Potrzebujesz konkretnego sprzętu? Inni użytkownicy mogą odpowiedzieć swoimi ofertami z marketplace."
    },
    {
      image: "./images/hand.webp",
      title: "Bezpieczne zakupy",
      subtitle: "Sprawdź przed zakupem",
      description: "Weryfikuj numery seryjne w bazie skradzionych instrumentów. Zgłaszaj kradzieże i czytaj opinie od prawdziwych kupujących po transakcjach."
    },
    {
      image: "./images/prof.webp",
      title: "Profesjonalne usługi",
      subtitle: "Od konsultacji po mastering",
      description: "Znajdź eksperta który Ci pomoże: doradztwo przy zakupach, lekcje, mixing, mastering. Wszystko w jednym miejscu, z systemem ocen i bezpiecznych płatności."
    }
  ];

  return (
    <section id="more-than-marketplace" className="pt-8 pb-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 text-rhythm-950 tracking-tight">
            Więcej niż <span className="text-olivine-text">marketplace</span>
          </h2>
          <p className="text-xl text-rhythm-600 max-w-3xl mx-auto leading-relaxed">
            Amplichain to więcej niż zwykły marketplace - to kompleksowe rozwiązanie dla społeczności muzycznej.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-[20px] p-6 shadow-card hover:shadow-hover transition-all duration-200 flex flex-col">
              <div className="relative mb-6">
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-display mb-2 text-rhythm-950 text-center">
                  {feature.title}
                </h3>
                <h4 className="text-lg font-medium text-olivine-text mb-4 text-center">
                  {feature.subtitle}
                </h4>
                <p className="text-rhythm-600 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreThanMarketplaceSection;

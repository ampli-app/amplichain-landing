aimport React from "react";

const MoreThanMarketplaceSection: React.FC = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Inteligentne poszukiwania",
      subtitle: "Znajdź to, czego szukasz",
      description: "Publikuj ogłoszenia \"Szukam\" na tablicy społeczności. Potrzebujesz konkretnego sprzętu? Inni użytkownicy mogą odpowiedzieć swoimi ofertami z marketplace."
    },
    {
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Bezpieczne zakupy",
      subtitle: "Sprawdź przed zakupem",
      description: "Weryfikuj numery seryjne w bazie skradzionych instrumentów. Zgłaszaj kradzieże i czytaj opinie od prawdziwych kupujących po transakcjach."
    },
    {
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Profesjonalne usługi",
      subtitle: "Od konsultacji po mastering",
      description: "Znajdź eksperta który Ci pomoże: doradztwo przy zakupach, lekcje, mixing, mastering. Wszystko w jednym miejscu, z systemem ocen i bezpiecznych płatności."
    }
  ];

  return (
    <section id="more-than-marketplace" className="pt-8 pb-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6 text-gray-900">
            Więcej niż <span className="bg-gradient-to-r from-ampli-green to-ampli-darkgreen bg-clip-text text-transparent">marketplace</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Amplichain to więcej niż zwykły marketplace - to kompleksowe rozwiązanie dla społeczności muzycznej.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="relative mb-6">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-syne mb-2 text-gray-900 text-center">
                  {feature.title}
                </h3>
                <h4 className="text-lg font-medium text-ampli-green mb-4 text-center">
                  {feature.subtitle}
                </h4>
                <p className="text-gray-600 text-center">
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

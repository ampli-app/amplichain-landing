import React from "react";
import { Music4, ShoppingCart, Store } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  imageUrl: string;
  isSmaller?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  imageUrl,
  isSmaller = false
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${isSmaller ? 'col-span-1' : 'col-span-1 md:col-span-2 lg:col-span-1'}`}>
      <div className="p-6 md:p-8">
        <div className="w-12 h-12 rounded-full bg-ampli-green/10 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2 mb-6">
          {description.map((item, index) => (
            <li key={index} className="flex items-start text-sm md:text-base text-gray-600">
              <span className="text-ampli-green mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-64 bg-gray-100">
        <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <span>Grafika interfejsu</span>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Jeden marketplace - trzy możliwości</h2>
        <p className="section-subtitle text-gray-600">
          Amplichain łączy w sobie marketplace sprzętu, platformę usług muzycznych oraz system konsultacji eksperckich,
          tworząc kompletne rozwiązanie dla branży muzycznej
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<ShoppingCart className="h-6 w-6 text-ampli-green" />}
            title="Marketplace sprzętu"
            description={[
              "Kupuj i sprzedawaj instrumenty, sprzęt studyjny i sceniczny", 
              "Niskie prowizje i bezpieczne transakcje przez Stripe Connect", 
              "Własny minisklep z unikalnym linkiem do promocji w social media"
            ]}
            imageUrl=""
          />

          <FeatureCard
            icon={<Music4 className="h-6 w-6 text-ampli-green" />}
            title="Usługi muzyczne"
            description={[
              "Oferuj swoje usługi: produkcja, miks, mastering, naprawa",
              "Zdobywaj nowych klientów w branży muzycznej",
              "Buduj portfolio i referencje zawodowe"
            ]}
            imageUrl=""
          />

          <FeatureCard
            icon={<Store className="h-6 w-6 text-ampli-green" />}
            title="Konsultacje eksperckie"
            description={[
              "Monetyzuj swoją wiedzę poprzez konsultacje online",
              "Przyciągnij uczniów i dziel się swoim doświadczeniem",
              "Wkrótce dostępne..."
            ]}
            imageUrl=""
            isSmaller
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

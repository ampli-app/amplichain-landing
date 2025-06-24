import React from "react";
import { BarChart3, MessageSquare, Camera, Smartphone } from "lucide-react";

const ToolsSection: React.FC = () => {
  const tools = [
    {
      icon: BarChart3,
      title: "Analityka sprzedaży",
      description: "Śledź swoje wyniki, analizuj trendy i optymalizuj ceny w czasie rzeczywistym",
      features: ["Statystyki wyświetleń", "Analiza konwersji", "Raporty przychodów", "Trendy cenowe"]
    },
    {
      icon: MessageSquare,
      title: "Komunikacja z klientami",
      description: "Wbudowany system wiadomości pozwala na bezpośredni kontakt z kupującymi",
      features: ["Czat w czasie rzeczywistym", "Historia rozmów", "Powiadomienia push", "Automatyczne odpowiedzi"]
    },
    {
      icon: Camera,
      title: "Profesjonalne zdjęcia",
      description: "Narzędzia do tworzenia atrakcyjnych wizualnie ofert",
      features: ["Edytor zdjęć", "Szablony opisów", "Galerie produktów", "Znaczniki wodne"]
    },
    {
      icon: Smartphone,
      title: "Aplikacja mobilna",
      description: "Zarządzaj swoim biznesem z każdego miejsca dzięki dedykowanej aplikacji",
      features: ["Powiadomienia o sprzedaży", "Mobilny panel", "Szybkie odpowiedzi", "Offline sync"]
    }
  ];

  return (
    <section id="tools" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gray-900">
            Narzędzia dla <span className="text-ampli-green">sprzedawców</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesjonalne narzędzia, które pomogą Ci sprzedawać więcej i lepiej zarządzać swoim biznesem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="bg-ampli-green/10 rounded-xl h-14 w-14 flex items-center justify-center flex-shrink-0 group-hover:bg-ampli-green/20 transition-colors duration-300">
                  <tool.icon className="h-7 w-7 text-ampli-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-montserrat mb-3 text-gray-900">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-ampli-green rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold font-montserrat mb-4 text-gray-900">
                Dashboard sprzedawcy
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Wszystko czego potrzebujesz w jednym miejscu. Intuicyjny panel kontrolny 
                pozwala na łatwe zarządzanie ofertami, śledzenie sprzedaży i komunikację z klientami.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Łatwe dodawanie ofert", "Zarządzanie zamówieniami", "Centrum wiadomości", "Raporty i statystyki"].map((feature, index) => (
                  <span key={index} className="bg-ampli-green/10 text-ampli-green px-3 py-1 rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-96 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 font-medium">Dashboard Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

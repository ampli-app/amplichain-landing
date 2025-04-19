
import React from "react";
import { Radar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RadarSection: React.FC = () => {
  return (
    <section id="radar" className="section py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 max-w-lg mx-auto">
              {/* Mock Radar post */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h4 className="font-medium">Jan Kowalski</h4>
                      <span className="text-xs text-gray-500">30 minut temu</span>
                    </div>
                  </div>
                  <Badge className="bg-ampli-green">
                    <Radar className="h-3 w-3 mr-1" /> Radar
                  </Badge>
                </div>
                
                <h3 className="font-bold text-xl mb-3">Poszukuję gitary Gibson Les Paul Standard używanej</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Szukam używanej gitary Gibson Les Paul Standard w kolorze sunburst, 
                  rocznik 2015-2020. Preferowany kontakt w Warszawie lub okolicach, 
                  ale rozważę też wysyłkę. Budżet: do 8000 zł.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-gray-50">Gibson</Badge>
                  <Badge variant="outline" className="bg-gray-50">Les Paul</Badge>
                  <Badge variant="outline" className="bg-gray-50">Gitara elektryczna</Badge>
                  <Badge variant="outline" className="bg-gray-50">Warszawa</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    <span className="mr-3">👁️ 243 wyświetlenia</span>
                    <span>💬 12 odpowiedzi</span>
                  </div>
                  <Button size="sm" variant="outline" className="text-ampli-blue border-ampli-blue hover:bg-ampli-blue/10">
                    Odpowiedz
                  </Button>
                </div>
              </div>
              
              {/* Related items suggestion */}
              <div className="p-4 bg-gray-50">
                <h5 className="font-medium text-sm mb-3">Podobne oferty w marketplace</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-2 rounded shadow-sm flex">
                    <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="ml-2">
                      <p className="text-xs font-medium">Gibson LP Studio</p>
                      <p className="text-xs text-ampli-green">7.500 zł</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm flex">
                    <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="ml-2">
                      <p className="text-xs font-medium">Gibson LP Standard</p>
                      <p className="text-xs text-ampli-green">9.200 zł</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Radar - innowacyjny sposób na poszukiwania
            </h2>
            <p className="text-gray-600 mb-6">
              Szukasz rzadkiego instrumentu? Poszukujesz muzyków do zespołu? 
              Potrzebujesz specjalistycznego sprzętu?
            </p>

            <div className="bg-gray-50 border-l-4 border-ampli-green p-4 rounded mb-8">
              <p className="text-gray-700">
                <strong>Publikuj posty typu Radar</strong> i docieraj do całej społeczności muzycznej.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-ampli-green/10 p-2 rounded-full mr-4 mt-1">
                  <Search className="h-5 w-5 text-ampli-green" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Elastyczne kategorie poszukiwań</h3>
                  <p className="text-gray-600">Sprzęt, muzycy, usługi, wydarzenia, lokale, edukacja i więcej</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-ampli-green/10 p-2 rounded-full mr-4 mt-1">
                  <Search className="h-5 w-5 text-ampli-green" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Szybkie dopasowania</h3>
                  <p className="text-gray-600">System automatycznie łączy Twoje zapytanie z istniejącymi ofertami</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-ampli-green/10 p-2 rounded-full mr-4 mt-1">
                  <Search className="h-5 w-5 text-ampli-green" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Skierowany do branży</h3>
                  <p className="text-gray-600">Docieraj do osób, które naprawdę mogą Ci pomóc</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-ampli-blue/10 text-ampli-blue hover:bg-ampli-blue/20 px-3 py-1.5">
                Znajdź gitarzystę na sesję
              </Badge>
              <Badge className="bg-ampli-blue/10 text-ampli-blue hover:bg-ampli-blue/20 px-3 py-1.5">
                Poszukaj studia w Twojej okolicy
              </Badge>
              <Badge className="bg-ampli-blue/10 text-ampli-blue hover:bg-ampli-blue/20 px-3 py-1.5">
                Zdobądź wymarzony instrument
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarSection;

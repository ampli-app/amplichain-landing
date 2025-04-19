
import React from "react";
import { Shield, ScanSearch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="section py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Bezpieczne zakupy z bazą skradzionych sprzętów</h2>
        <p className="section-subtitle text-gray-600">
          Amplichain walczy z nielegalnym obrotem instrumentów i sprzętu muzycznego, 
          oferując bazę danych skradzionych przedmiotów dostępną dla wszystkich użytkowników
        </p>

        <div className="bg-gray-50 rounded-2xl p-8 mt-12 max-w-4xl mx-auto shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-ampli-blue/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-ampli-blue" />
              </div>
              <h3 className="text-xl font-bold text-center mb-6">
                Baza skradzionych sprzętów
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-ampli-blue mr-2 mt-1">✓</span>
                  <span className="text-gray-600">
                    Weryfikuj numery seryjne instrumentów przed zakupem
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-ampli-blue mr-2 mt-1">✓</span>
                  <span className="text-gray-600">
                    Zgłaszaj kradzieże i pomagaj odzyskać utracone instrumenty
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-ampli-blue mr-2 mt-1">✓</span>
                  <span className="text-gray-600">
                    Współpracujemy z policją i ubezpieczycielami w całej Polsce
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-ampli-blue mr-2 mt-1">✓</span>
                  <span className="text-gray-600">
                    Zniechęcaj złodziei poprzez ograniczenie możliwości sprzedaży skradzionego sprzętu
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-lg mb-4 flex items-center">
                  <ScanSearch className="h-5 w-5 mr-2 text-ampli-green" />
                  Wyszukaj w bazie skradzionych przedmiotów
                </h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="serialNumber" className="block text-sm font-medium mb-1">
                      Numer seryjny sprzętu
                    </label>
                    <Input
                      id="serialNumber"
                      placeholder="Wpisz numer seryjny, np. ABC123456789"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-1">
                      Kategoria (opcjonalnie)
                    </label>
                    <select 
                      id="category"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Wybierz kategorię</option>
                      <option value="guitar">Gitary</option>
                      <option value="bass">Gitary basowe</option>
                      <option value="keys">Instrumenty klawiszowe</option>
                      <option value="drums">Perkusja i instrumenty perkusyjne</option>
                      <option value="studio">Sprzęt studyjny</option>
                      <option value="pa">Nagłośnienie</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="brand" className="block text-sm font-medium mb-1">
                      Marka (opcjonalnie)
                    </label>
                    <Input
                      id="brand"
                      placeholder="Np. Fender, Gibson, Yamaha..."
                      className="w-full"
                    />
                  </div>
                  
                  <Button className="w-full bg-ampli-green hover:bg-ampli-lightgreen">
                    Sprawdź sprzęt
                  </Button>
                  
                  <div className="text-center mt-2">
                    <a href="#" className="text-sm text-ampli-blue hover:underline">
                      Zgłoś kradzież sprzętu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

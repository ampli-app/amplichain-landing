import React from "react";
import { Store, Link, ExternalLink, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShopSection: React.FC = () => {
  return (
    <section id="shop" className="section py-24 bg-white">
      <div className="container">
        <h2 className="section-title">Promuj swoją ofertę we własnym minisklepie</h2>
        <p className="section-subtitle text-gray-600">
          Każdy sprzedawca otrzymuje dedykowany profil z unikalnym adresem URL, 
          który może być udostępniany w mediach społecznościowych oraz na własnej stronie
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-md mx-auto">
              {/* Mock personal shop header */}
              <div className="h-36 bg-gradient-to-r from-ampli-green to-ampli-blue relative">
                <div className="absolute -bottom-16 left-6">
                  <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200"></div>
                </div>
              </div>
              
              <div className="pt-20 px-6 pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-2xl">Guitar Master</h3>
                    <p className="text-gray-500">Warszawa, Polska</p>
                  </div>
                  <Button size="sm" className="bg-ampli-blue hover:bg-ampli-lightblue">
                    <Share2 className="h-4 w-4 mr-1" /> Udostępnij
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold">142</div>
                    <div className="text-xs text-gray-500">oferty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">98%</div>
                    <div className="text-xs text-gray-500">pozytywnych</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">3.5 roku</div>
                    <div className="text-xs text-gray-500">na Amplichain</div>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center">
                  <div className="text-sm text-ampli-blue flex items-center">
                    <Link className="h-4 w-4 mr-1" />
                    <span>amplichain.pl/sklep/guitar-master</span>
                  </div>
                  <Button size="icon" variant="ghost" className="ml-2 h-6 w-6">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              {/* Products grid */}
              <div className="px-6 pb-6">
                <h4 className="font-semibold mb-4">Popularne oferty</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded overflow-hidden">
                    <div className="h-24 bg-gray-200"></div>
                    <div className="p-2">
                      <h5 className="font-medium text-xs">Fender Telecaster</h5>
                      <p className="text-ampli-green text-xs font-semibold">3.800 PLN</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded overflow-hidden">
                    <div className="h-24 bg-gray-200"></div>
                    <div className="p-2">
                      <h5 className="font-medium text-xs">Wzmacniacz VOX</h5>
                      <p className="text-ampli-green text-xs font-semibold">1.200 PLN</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded overflow-hidden">
                    <div className="h-24 bg-gray-200"></div>
                    <div className="p-2">
                      <h5 className="font-medium text-xs">Struny D&apos;Addario</h5>
                      <p className="text-ampli-green text-xs font-semibold">65 PLN</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded overflow-hidden">
                    <div className="h-24 bg-gray-200"></div>
                    <div className="p-2">
                      <h5 className="font-medium text-xs">Efekt BOSS</h5>
                      <p className="text-ampli-green text-xs font-semibold">450 PLN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-ampli-green/10 flex items-center justify-center mr-4">
                  <Store className="h-5 w-5 text-ampli-green" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Twój własny minisklep</h3>
              </div>
              <p className="text-gray-600 mb-4">Nie musisz być ekspertem od technologii. Nasze narzędzia są tak proste, że każdy może z nich korzystać.</p>
              <p className="text-gray-600">
                Otrzymasz dedykowany link, który możesz udostępniać w mediach społecznościowych i promować wszędzie, 
                gdzie tylko chcesz. Klienci będą mogli przeglądać wszystkie Twoje oferty w jednym miejscu.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-1">Buduj swoją markę i reputację</h4>
                <p className="text-sm text-gray-600">
                  Twój profil to nie tylko sklep, ale również wizytówka biznesowa. 
                  Zbieraj pozytywne opinie i buduj zaufanie wśród klientów.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-1">Docieraj do nowych klientów</h4>
                <p className="text-sm text-gray-600">
                  Dzięki profilom społecznościowym i unikalnym linkom zwiększasz zasięg 
                  bez dodatkowych kosztów marketingowych.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-1">Automatyczna integracja z mediami społecznościowymi</h4>
                <p className="text-sm text-gray-600">
                  Udostępniaj swój sklep na Facebooku, Instagramie i innych platformach. 
                  Nasza integracja automatycznie tworzy atrakcyjne podglądy.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="h-10 w-10 bg-blue-600 rounded flex items-center justify-center text-white">f</div>
              <div className="h-10 w-10 bg-pink-600 rounded flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="h-10 w-10 bg-sky-500 rounded flex items-center justify-center text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <div className="h-10 w-10 bg-green-500 rounded flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

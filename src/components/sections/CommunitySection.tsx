
import React from "react";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="section py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Buduj swoją sieć zawodową</h2>
        <p className="section-subtitle text-gray-600">
          Amplichain to nie tylko marketplace - to społeczność profesjonalistów i pasjonatów muzyki, 
          którzy razem tworzą nową jakość w branży muzycznej
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-ampli-green/10 flex items-center justify-center mb-5">
              <Users className="h-8 w-8 text-ampli-green" />
            </div>
            <h3 className="font-bold text-xl mb-3">Łącz się z profesjonalistami</h3>
            <p className="text-gray-600 mb-6">
              Poznawaj muzyków, producentów, inżynierów dźwięku i innych specjalistów z branży muzycznej. 
              Buduj swoją sieć kontaktów zawodowych.
            </p>
            <div className="mt-auto">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center text-white text-xs">
                  +24
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-ampli-blue/10 flex items-center justify-center mb-5">
              <svg className="h-8 w-8 text-ampli-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Nawiązuj współpracę</h3>
            <p className="text-gray-600 mb-6">
              Szukaj muzyków do swojego zespołu, znajdź producenta do nagrania EP 
              lub zaproponuj współpracę innym artystom w branży.
            </p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2">
                <div className="px-2 py-1 bg-gray-100 rounded-full text-xs">gitarzysta</div>
                <div className="px-2 py-1 bg-gray-100 rounded-full text-xs">producent</div>
                <div className="px-2 py-1 bg-gray-100 rounded-full text-xs">wokalista</div>
                <div className="px-2 py-1 bg-gray-100 rounded-full text-xs">+12 więcej</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-ampli-green/10 flex items-center justify-center mb-5">
              <svg className="h-8 w-8 text-ampli-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Rozwijaj swoją karierę</h3>
            <p className="text-gray-600 mb-6">
              Buduj portfolio, zdobywaj referencje i zwiększaj swoją rozpoznawalność 
              w środowisku muzycznym. Wykorzystaj profile zawodowe do promocji.
            </p>
            <div className="mt-auto">
              <div className="flex items-center justify-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-xs text-gray-500 ml-1">(128 opinii)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Dołącz do rewolucji w branży muzycznej</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Zbudujmy razem platformę, która zmieni sposób działania branży muzycznej w Polsce
          </p>
          <Button 
            size="lg" 
            className="bg-ampli-blue hover:bg-ampli-lightblue text-white font-medium px-8"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})}
          >
            <Users className="mr-2 h-5 w-5" /> Dołącz do społeczności
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

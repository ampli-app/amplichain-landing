
import React from "react";
import { Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Amplichain</h3>
            <p className="text-gray-600 text-sm mb-4">
              Pierwszy marketplace społecznościowy stworzony specjalnie dla branży muzycznej
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-ampli-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ampli-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ampli-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ampli-green transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Linki</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#features" className="text-gray-600 hover:text-ampli-green transition-colors text-sm">
                Możliwości
              </a>
              <a href="#radar" className="text-gray-600 hover:text-ampli-green transition-colors text-sm">
                Radar
              </a>
              <a href="#shop" className="text-gray-600 hover:text-ampli-green transition-colors text-sm">
                Minisklep
              </a>
              <a href="#security" className="text-gray-600 hover:text-ampli-green transition-colors text-sm">
                Bezpieczeństwo
              </a>
              <a href="#community" className="text-gray-600 hover:text-ampli-green transition-colors text-sm">
                Społeczność
              </a>
              <a href="#faq" className="text-gray-600 hover:text-ampli-green transition-colors text-sm">
                FAQ
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Kontakt</h3>
            <p className="text-gray-600 text-sm mb-1">Email: info@amplichain.pl</p>
            <a 
              href="#waitlist"
              className="inline-block mt-4 py-2 px-4 bg-ampli-green hover:bg-ampli-lightgreen text-white rounded-md transition-colors text-sm"
            >
              Zapisz się na premierę
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Amplichain. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-ampli-green transition-colors text-xs">
              Polityka prywatności
            </a>
            <a href="#" className="text-gray-500 hover:text-ampli-green transition-colors text-xs">
              Warunki korzystania
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

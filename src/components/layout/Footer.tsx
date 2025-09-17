import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block mb-4">
              <img src="./logotype.webp" alt="Amplichain Logo" className="h-8 mx-auto md:mx-0" />
            </a>
            <p className="text-gray-600 text-sm mb-6">
              Pierwszy marketplace społecznościowy stworzony specjalnie dla branży muzycznej
            </p>

          </div>
          
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Kontakt</h3>
            <a 
              href="mailto:hello@amplichain.com" 
              className="text-gray-600 hover:text-ampli-green transition-colors text-sm block mb-2"
            >
              hello@amplichain.com
            </a>
            <a 
              href="tel:000000000" 
              className="text-gray-600 hover:text-ampli-green transition-colors text-sm block hidden"
            >
              000 000 000
            </a>
          </div>
          
          {/* CTA Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Dołącz do nas</h3>
            <p className="text-gray-600 text-sm mb-4">
              Zacznij budować swoją sieć muzycznych możliwości
            </p>
            <Button
              data-tally-open="m6pqbA"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              size="sm"
              className="bg-gradient-to-r from-ampli-green to-ampli-lightgreen hover:from-ampli-lightgreen hover:to-ampli-green text-white font-bold shadow-2xl shadow-ampli-green/25 hover:shadow-ampli-green/40 transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              <span className="whitespace-nowrap font-semibold">Dołącz do platformy</span>
            </Button>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-xs">
                &copy; {currentYear} Amplichain. Wszelkie prawa zastrzeżone.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#privacy" className="text-gray-500 hover:text-ampli-green transition-colors text-xs hidden">
                Polityka prywatności
              </a>
              <a href="#terms" className="text-gray-500 hover:text-ampli-green transition-colors text-xs hidden">
                Regulamin
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573789722059" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ampli-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/amplichain" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ampli-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-ampli-green transition-colors hidden">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
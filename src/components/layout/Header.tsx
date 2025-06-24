
import React from "react";
import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Music2 className="h-8 w-8 text-ampli-green" />
          <span className="text-xl font-bold font-montserrat text-ampli-green">
            Amplichain
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#value" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Dlaczego my
          </a>
          <a href="#categories" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Co sprzedawać
          </a>
          <a href="#tools" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Narzędzia
          </a>
          <a href="#success" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Sukces
          </a>
          <a href="#onboarding" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Jak zacząć
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            FAQ
          </a>
        </nav>

        <Button 
          size="sm" 
          className="bg-ampli-green hover:bg-ampli-darkgreen text-white shadow-soft hover:shadow-hover transition-all duration-300"
          onClick={() => document.getElementById('cta')?.scrollIntoView({behavior: 'smooth'})}
        >
          Dołącz do listy
        </Button>
      </div>
    </header>
  );
};

export default Header;


import React from "react";
import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-soft py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Music2 className="h-8 w-8 text-ampli-green" />
          <span className="text-xl font-bold font-montserrat bg-gradient-to-r from-ampli-green to-ampli-blue bg-clip-text text-transparent">
            Amplichain
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Możliwości
          </a>
          <a href="#radar" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Radar
          </a>
          <a href="#shop" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Minisklep
          </a>
          <a href="#security" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Bezpieczeństwo
          </a>
          <a href="#community" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            Społeczność
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-ampli-green transition-colors hover:scale-105 transform duration-200">
            FAQ
          </a>
        </nav>

        <Button 
          size="sm" 
          className="bg-gradient-to-r from-ampli-green to-ampli-blue hover:opacity-90 text-white shadow-soft hover:shadow-hover transition-all duration-300"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})}
        >
          Dołącz do listy
        </Button>
      </div>
    </header>
  );
};

export default Header;

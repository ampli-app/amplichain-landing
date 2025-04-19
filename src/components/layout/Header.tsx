
import React from "react";
import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Music2 className="h-8 w-8 text-ampli-green" />
          <span className="text-xl font-bold font-montserrat">Amplichain</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-ampli-green transition-colors">
            Możliwości
          </a>
          <a href="#radar" className="text-sm font-medium hover:text-ampli-green transition-colors">
            Radar
          </a>
          <a href="#shop" className="text-sm font-medium hover:text-ampli-green transition-colors">
            Minisklep
          </a>
          <a href="#security" className="text-sm font-medium hover:text-ampli-green transition-colors">
            Bezpieczeństwo
          </a>
          <a href="#community" className="text-sm font-medium hover:text-ampli-green transition-colors">
            Społeczność
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-ampli-green transition-colors">
            FAQ
          </a>
        </nav>

        <Button 
          size="sm" 
          className="bg-ampli-blue hover:bg-ampli-lightblue text-white"
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})}
        >
          Dołącz do listy
        </Button>
      </div>
    </header>
  );
};

export default Header;

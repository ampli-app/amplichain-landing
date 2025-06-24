import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#value", label: "Dlaczego my" },
    { href: "#categories", label: "Co sprzedawać" },
    { href: "#tools", label: "Narzędzia" },
    { href: "#success", label: "Sukces" },
    { href: "#onboarding", label: "Jak zacząć" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCtaClick = () => {
    window.open('https://app.amplichain.com/register', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3">
            <img src="/logotype.png" alt="Amplichain Logo" className="h-8" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-ampli-green transition-all duration-200 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-ampli-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></div>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Button 
            size="sm" 
            className="hidden lg:flex bg-gradient-to-r from-ampli-green to-ampli-darkgreen hover:from-ampli-darkgreen hover:to-ampli-green text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={handleCtaClick}
          >
            <span className="font-semibold">Rozpocznij sprzedaż</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-ampli-green transition-colors duration-200 hover:bg-gray-100 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }} className="flex items-center gap-3">
              <img src="/logotype.png" alt="Amplichain Logo" className="h-7" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-ampli-green transition-colors duration-200 hover:bg-gray-100 rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:text-ampli-green hover:bg-ampli-green/10 rounded-lg transition-all duration-200 font-medium"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-gray-100">
            <Button 
              onClick={handleCtaClick}
              className="w-full bg-gradient-to-r from-ampli-green to-ampli-darkgreen hover:from-ampli-darkgreen hover:to-ampli-green text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-3"
            >
              <span className="font-semibold">Rozpocznij sprzedaż</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
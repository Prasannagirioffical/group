
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-yellow-500 p-2 rounded-lg group-hover:bg-yellow-400 transition-colors duration-300">
              <img 
                src="/lovable-uploads/bf792c62-9ff2-413c-ad58-c89d5ed99221.png" 
                alt="PI Consults Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div>
              <h1 className="font-bold text-pi-navy text-lg group-hover:text-yellow-500 transition-colors duration-300">PI Consults</h1>
              <p className="text-xs text-pi-earth group-hover:text-yellow-600 transition-colors duration-300">Pvt. Ltd.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg relative ${
                  item.name === 'Home' 
                    ? 'text-pi-navy hover:text-white hover:bg-yellow-500 hover:shadow-lg transform hover:scale-105' 
                    : 'text-pi-navy hover:text-yellow-500'
                }`}
              >
                {item.name}
                {item.name === 'Home' && (
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-yellow-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-pi-navy" /> : <Menu className="text-pi-navy" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <div className="pt-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 font-medium transition-all duration-300 rounded-lg mx-2 ${
                    item.name === 'Home'
                      ? 'text-pi-navy hover:text-white hover:bg-yellow-500 hover:shadow-md transform hover:scale-[1.02]'
                      : 'text-pi-navy hover:text-yellow-500 hover:bg-yellow-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

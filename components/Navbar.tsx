
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS, LogoIcon } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Packaging', href: '#packaging' },
    { name: 'Trust', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer"
            onClick={(e) => {
              const elem = document.getElementById('home');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <LogoIcon className="h-12 w-12 transform transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-tight" style={{ color: COLORS.darkGreen }}>MOUNTROSE</span>
                <span className="text-sm font-semibold tracking-widest leading-none" style={{ color: COLORS.lightGreen }}>AVOCADO</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`${scrolled ? 'text-gray-700' : 'text-gray-900'} hover:text-[#A3C139] px-3 py-2 text-sm font-bold transition-colors duration-200`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-bold rounded-full shadow-sm text-white transition-all transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: COLORS.darkGreen }}
              >
                Request Quotation
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-green-600 px-3 py-2 text-base font-bold"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-4">
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 border border-transparent text-base font-bold rounded-full shadow-sm text-white"
                style={{ backgroundColor: COLORS.darkGreen }}
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Request Quotation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

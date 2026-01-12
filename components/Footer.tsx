
import React from 'react';
import { COLORS, LogoIcon } from '../constants';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
             <div className="flex items-center space-x-3 mb-8">
                <LogoIcon className="h-14 w-14" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold leading-none tracking-tight" style={{ color: COLORS.darkGreen }}>MOUNTROSE</span>
                    <span className="text-xs font-semibold tracking-widest leading-none" style={{ color: COLORS.lightGreen }}>AVOCADO</span>
                </div>
              </div>
            <p className="text-gray-500 max-w-sm mb-10 text-lg leading-relaxed">
              Tanzania's premier avocado export partner. Delivering the finest volcanic harvest to the global market with integrity and excellence.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-green-600 hover:bg-green-50 transition-all shadow-sm">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-8 uppercase text-sm tracking-widest">Navigation</h4>
            <ul className="space-y-5 text-gray-500 text-base font-semibold">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-green-600 transition-colors">About Us</a></li>
              <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-green-600 transition-colors">Our Fruit</a></li>
              <li><a href="#packaging" onClick={(e) => scrollToSection(e, 'packaging')} className="hover:text-green-600 transition-colors">Logistics</a></li>
              <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-green-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-8 uppercase text-sm tracking-widest">Business</h4>
            <ul className="space-y-5 text-gray-500 text-base font-semibold">
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-green-600 transition-colors">Inquiries</a></li>
              <li><a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')} className="hover:text-green-600 transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Mountrose Avocado Tanzania. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span className="flex items-center"><div className="w-2.5 h-2.5 rounded-full mr-2.5" style={{ backgroundColor: COLORS.lightGreen }}></div> Global GAP</span>
            <span className="flex items-center"><div className="w-2.5 h-2.5 rounded-full mr-2.5" style={{ backgroundColor: COLORS.darkGreen }}></div> EU Organic</span>
            <span className="flex items-center"><div className="w-2.5 h-2.5 rounded-full mr-2.5" style={{ backgroundColor: COLORS.brown }}></div> SMETA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

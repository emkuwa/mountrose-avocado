
import React from 'react';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590159746766-7f8373322964?auto=format&fit=crop&q=80&w=1920" 
          alt="Lush Avocado Plantation" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div 
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 animate-pulse"
            style={{ backgroundColor: `${COLORS.lightGreen}20`, color: COLORS.darkGreen }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.lightGreen }}></span>
            <span>Premium Tanzanian Harvest</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: COLORS.darkGreen }}>
            World-Class <span style={{ color: COLORS.lightGreen }}>Avocados</span> from Africa
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            Cultivating and exporting the finest Hass and Fuerte varieties. Grown in the nutrient-rich volcanic soils of Mountrose farms.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex justify-center items-center px-10 py-4 text-lg font-bold rounded-full text-white transition-all transform hover:scale-105 shadow-xl hover:shadow-green-900/20"
              style={{ backgroundColor: COLORS.darkGreen }}
            >
              Get a Quote
            </a>
            <a 
              href="#products" 
              onClick={(e) => scrollToSection(e, 'products')}
              className="inline-flex justify-center items-center px-10 py-4 text-lg font-bold rounded-full border-2 transition-all transform hover:scale-105"
              style={{ borderColor: COLORS.darkGreen, color: COLORS.darkGreen }}
            >
              Our Selection
            </a>
          </div>
        </div>
      </div>

      {/* Hero Visual Element */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[85%] pointer-events-none px-8">
        <img 
          src="https://res.cloudinary.com/dn6aezjpa/image/upload/v1768237344/shutterstock_116205556bacon_b59ae0a5-6673-4d99-a9ba-ec6ded5ba99c_kecaj9.jpg" 
          alt="Premium Mountrose Avocados"
          className="rounded-[60px] shadow-2xl object-cover h-full w-full border-4"
          style={{ borderColor: COLORS.lightGreen }}
        />
      </div>
    </section>
  );
};

export default Hero;

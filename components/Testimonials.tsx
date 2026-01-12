
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { COLORS } from '../constants';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The consistency of Mountrose's Hass avocados is unmatched in East Africa. Our retail partners in the Netherlands are consistently impressed with the uniformity and exceptional shelf-life of every consignment.",
      author: "Jan de Vries",
      role: "Fresh Produce Procurement Manager",
      location: "Amsterdam, Netherlands",
      rating: 5
    },
    {
      quote: "Working with Mountrose has significantly streamlined our fruit sourcing from Tanzania. Their cold chain documentation is precise, giving us full confidence in the safety and quality of the produce.",
      author: "Sarah Chen",
      role: "Director of International Imports",
      location: "Singapore",
      rating: 5
    },
    {
      quote: "Mountrose provides professional service and top-tier fruit. The Fuerte variety we received was perfectly handled and arrived in prime condition for our premium markets. They are a reliable long-term partner.",
      author: "Ahmed Al-Maktoum",
      role: "CEO, GreenLife Logistics",
      location: "Dubai, UAE",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: COLORS.lightGreen }}>Global Trust</h2>
          <h3 className="text-4xl font-bold mb-6" style={{ color: COLORS.darkGreen }}>Voices of Our Partners</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            We take pride in our long-standing relationships with leading fruit importers and retailers across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="relative p-10 rounded-[48px] bg-gray-50 border border-gray-100 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={64} style={{ color: COLORS.darkGreen }} />
              </div>
              
              <div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={18} fill={COLORS.lightGreen} stroke={COLORS.lightGreen} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: COLORS.darkGreen }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none mb-1">{t.author}</h4>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: COLORS.lightGreen }}>{t.role}</p>
                  <p className="text-xs text-gray-400 font-medium">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[60px] flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative" style={{ backgroundColor: COLORS.darkGreen }}>
          <div className="relative z-10 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">Join our network of global partners</h4>
            <p className="text-green-50/70">Experience the difference of premium Tanzanian volcanic soil.</p>
          </div>
          <a 
            href="#contact" 
            className="relative z-10 px-10 py-4 rounded-full font-bold text-gray-900 transition-all transform hover:scale-105 shadow-xl"
            style={{ backgroundColor: COLORS.lightGreen }}
          >
            Partner With Us
          </a>
          {/* Decorative background circle */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: COLORS.lightGreen }}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

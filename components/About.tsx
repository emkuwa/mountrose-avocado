
import React from 'react';
import { Target, Eye, ShieldCheck, Leaf } from 'lucide-react';
import { COLORS, LogoIcon } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Suble watermark background */}
      <div className="absolute top-20 -right-20 opacity-[0.05] pointer-events-none transform rotate-12">
        <LogoIcon className="w-[600px] h-[600px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: COLORS.lightGreen }}>Our Heritage</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: COLORS.darkGreen }}>Quality Rooted in Tradition</h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Mountrose Avocado is at the forefront of Tanzania's agricultural revolution. We combine modern export technology with traditional farming wisdom to bring the world's most nutritious fruit from our soil to your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-green-50 rounded-[40px] transform -rotate-1 transition-transform group-hover:rotate-0"></div>
            <img 
              src="https://res.cloudinary.com/dn6aezjpa/image/upload/v1768234206/fdf4933b1639296b26c39e6eb4ff477e_senru3.jpg" 
              alt="Sustainable Tanzanian Avocado Farming" 
              className="relative rounded-[40px] shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: COLORS.darkGreen }}>
                <Target size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2" style={{ color: COLORS.darkGreen }}>Global Mission</h4>
                <p className="text-gray-600 leading-relaxed">To be the preferred global partner for premium avocados, fostering sustainable growth for Tanzanian farmers through ethical export practices.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: COLORS.lightGreen }}>
                <Eye size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2" style={{ color: COLORS.darkGreen }}>Green Vision</h4>
                <p className="text-gray-600 leading-relaxed">Leading the industry in carbon-neutral agricultural exports while maintaining the highest fruit quality standards in East Africa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Class I Quality", desc: "Hand-picked and sorted to meet rigorous Class I retail standards." },
            { icon: Leaf, title: "Eco-Harvest", desc: "Chemical-free pest management and water-efficient irrigation." },
            { icon: ShieldCheck, title: "Certified Safe", desc: "HACCP and ISO 22000 compliant processing facilities." },
            { icon: Leaf, title: "Fair Pricing", desc: "Direct-to-market model ensuring better returns for our growers." },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-10 bg-gray-50/30 border border-gray-100 rounded-[32px] hover:bg-white hover:border-green-200 hover:shadow-xl transition-all">
              <item.icon className="mx-auto mb-6 w-12 h-12" style={{ color: COLORS.lightGreen }} />
              <h5 className="font-bold text-lg mb-3" style={{ color: COLORS.darkGreen }}>{item.title}</h5>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

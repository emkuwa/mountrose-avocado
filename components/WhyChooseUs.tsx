
import React from 'react';
import { CheckCircle2, Globe, ShieldCheck, Zap, Handshake, Sprout } from 'lucide-react';
import { COLORS } from '../constants';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    { icon: Globe, title: "Product of Tanzania", desc: "Sourced from the fertile volcanic soils of the Southern Highlands, rich in nutrients." },
    { icon: ShieldCheck, title: "Quality Control", desc: "Multi-stage inspection from harvest to final box sealing." },
    { icon: Zap, title: "Reliable Supply", desc: "Strong partnerships with clusters of GAP-certified farmers for consistent volume." },
    { icon: Handshake, title: "Expert Handling", desc: "Decades of experience in the international export protocols." },
    { icon: Sprout, title: "Sustainable Farming", desc: "Commitment to ethical practices and environmental conservation." },
    { icon: CheckCircle2, title: "EU Market Ready", desc: "Full compliance with MRL (Minimum Residue Levels) standards." },
  ];

  return (
    <section id="why-us" className="py-24" style={{ backgroundColor: COLORS.darkGreen }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: COLORS.lightGreen }}>Excellence Defined</h2>
          <h3 className="text-4xl font-bold mb-6 text-white">Why Mountrose Avocado?</h3>
          <p className="max-w-2xl mx-auto text-green-100 opacity-80">
            We are more than just exporters; we are partners in your supply chain, ensuring premium quality at every step of the journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <r.icon size={28} style={{ color: COLORS.darkGreen }} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">{r.title}</h4>
              <p className="text-green-50 opacity-70 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

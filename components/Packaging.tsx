
import React from 'react';
import { Package, Truck, ThermometerSnowflake, Ruler } from 'lucide-react';
import { COLORS } from '../constants';

const Packaging: React.FC = () => {
  return (
    <section id="packaging" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: COLORS.lightGreen }}>Export Logistics</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: COLORS.darkGreen }}>State-of-the-Art Cold Chain</h3>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Preserving peak freshness requires precision. Our temperature-controlled logistics ensure that every Mountrose avocado arrives in perfect condition, whether by sea or air.
            </p>

            <div className="grid gap-8">
              {[
                { 
                  icon: Package, 
                  title: "Reinforced Packaging", 
                  desc: "High-burst-strength cartons designed for long-haul durability and optimal airflow." 
                },
                { 
                  icon: ThermometerSnowflake, 
                  title: "Rapid Pre-Cooling", 
                  desc: "Advanced hydro-cooling facilities that bring internal temperatures to 5°C within hours of harvest." 
                },
                { 
                  icon: Ruler, 
                  title: "Digital Sorting", 
                  desc: "Weight-calibrated automated lines ensuring zero sizing errors in your consignment." 
                },
                { 
                  icon: Truck, 
                  title: "Just-In-Time Delivery", 
                  desc: "Synchronized harvest and shipping schedules to maximize shelf-life for the end consumer." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:bg-green-100 shadow-sm" style={{ backgroundColor: `${COLORS.lightGreen}15`, color: COLORS.darkGreen }}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1" style={{ color: COLORS.darkGreen }}>{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
             <div className="space-y-6">
                <img 
                  src="https://res.cloudinary.com/dn6aezjpa/image/upload/v1768236615/images_1_u2nupp.png" 
                  alt="Avocado Quality Management" 
                  className="rounded-[48px] shadow-2xl w-full h-[320px] object-cover border-4 border-white"
                />
                <img 
                  src="https://res.cloudinary.com/dn6aezjpa/image/upload/v1768234201/99d5b5e8af91e80e56166452d5292df2_c3dias.jpg" 
                  alt="Modern Avocado Packing Facility" 
                  className="rounded-[48px] shadow-xl w-full h-[400px] object-cover"
                />
             </div>
             <div className="space-y-6 pt-16">
                <img 
                  src="https://res.cloudinary.com/dn6aezjpa/image/upload/v1768234207/e45d2e41c17cbe4d1ab93f595fcec3be_r8b5hc.jpg" 
                  alt="Premium Avocados Sorted for Export" 
                  className="rounded-[48px] shadow-xl w-full h-[420px] object-cover"
                />
                <div className="p-10 rounded-[48px] text-white shadow-2xl h-[300px] flex flex-col justify-end" style={{ backgroundColor: COLORS.brown }}>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Shelf Life</p>
                    <h4 className="text-3xl font-bold leading-tight">Optimized for 25+ Days of Freshness</h4>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;

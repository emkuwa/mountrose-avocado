
import React from 'react';
import { COLORS } from '../constants';

const Products: React.FC = () => {
  const varieties = [
    {
      name: "Hass Avocado",
      scientificName: "Persea americana 'Hass'",
      description: "Our flagship export variety. Renowned for its rich, buttery texture and high oil content. Exceptional shelf-life for long-distance transit.",
      features: ["Textured, dark purple skin", "Oil content: 18% - 22%", "Consistent fruit sizing", "Main Season: Mar - Sept"],
      image: "https://res.cloudinary.com/dn6aezjpa/image/upload/v1768234207/e45d2e41c17cbe4d1ab93f595fcec3be_r8b5hc.jpg"
    },
    {
      name: "Fuerte Avocado",
      scientificName: "Persea americana 'Fuerte'",
      description: "A premium green-skin variety with a sophisticated, mild flavor. Its smooth skin and classic pear shape make it a favorite for diverse markets.",
      features: ["Smooth, thin green skin", "Classic pear-like shape", "Oil content: 12% - 16%", "Main Season: Jan - Apr"],
      image: "https://res.cloudinary.com/dn6aezjpa/image/upload/v1768234206/a161abea809c256b193962aa6805e7b4_zxu9vs.jpg"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: COLORS.lightGreen }}>Our Products</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: COLORS.darkGreen }}>Premium Tanzanian Varieties</h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We provide precision-graded avocados, meticulously sorted by size and maturity to ensure uniform ripening upon arrival.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {varieties.map((v, i) => (
            <div key={i} className="bg-white rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
              <div className="h-96 overflow-hidden relative">
                <img 
                  src={v.image} 
                  alt={v.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6">
                  <span 
                    className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg"
                    style={{ backgroundColor: COLORS.lightGreen }}
                  >
                    Export Grade A
                  </span>
                </div>
              </div>
              <div className="p-12">
                <div className="mb-6">
                  <h4 className="text-3xl font-bold mb-1" style={{ color: COLORS.darkGreen }}>{v.name}</h4>
                  <p className="text-sm italic text-gray-400 font-medium tracking-wide">{v.scientificName}</p>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{v.description}</p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                  {v.features.map((f, idx) => (
                    <div key={idx} className="flex items-center text-sm font-semibold text-gray-500">
                      <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: COLORS.lightGreen }}></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sizes and Grading */}
        <div className="mt-20 bg-white p-10 md:p-16 rounded-[60px] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-3 gap-16">
            <div className="text-center md:text-left">
              <h5 className="text-2xl font-bold mb-6" style={{ color: COLORS.darkGreen }}>Sizing Specification</h5>
              <p className="text-gray-500 text-sm mb-8">Strictly categorized by weight (grams per fruit).</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { count: '12', weight: '306 - 365g' },
                  { count: '14', weight: '266 - 305g' },
                  { count: '16', weight: '236 - 265g' },
                  { count: '18', weight: '211 - 235g' },
                  { count: '20', weight: '191 - 210g' },
                  { count: '22', weight: '171 - 190g' }
                ].map(s => (
                  <div key={s.count} className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-bold text-gray-700">Count {s.count}</span>
                    <span className="text-gray-400 text-sm">{s.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 h-full">
                <div className="p-10 rounded-[40px] border border-green-50" style={{ backgroundColor: `${COLORS.lightGreen}05` }}>
                  <h5 className="text-xl font-bold mb-4" style={{ color: COLORS.darkGreen }}>Quality Grades</h5>
                  <div className="space-y-4">
                    <div>
                      <span className="font-bold text-sm uppercase tracking-widest block mb-1" style={{ color: COLORS.lightGreen }}>Class I</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Virtually perfect fruit with no skin defects. Ideal for high-end retail display.</p>
                    </div>
                    <div>
                      <span className="font-bold text-sm uppercase tracking-widest block mb-1" style={{ color: COLORS.lightGreen }}>Class II</span>
                      <p className="text-sm text-gray-600 leading-relaxed">Minor superficial blemishes. Internal eating quality is identical to Class I.</p>
                    </div>
                  </div>
                </div>
                <div className="p-10 rounded-[40px] flex flex-col justify-center" style={{ backgroundColor: COLORS.darkGreen }}>
                  <h5 className="text-xl font-bold mb-4 text-white">Supply Stability</h5>
                  <p className="text-sm text-green-50/70 leading-relaxed mb-6">Our network of over 1,500 contracted farmers ensures a stable, high-volume supply throughout the peak seasons.</p>
                  <a href="#contact" className="text-sm font-bold text-white underline underline-offset-8 hover:text-green-300 transition-colors">Download Specs (PDF)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

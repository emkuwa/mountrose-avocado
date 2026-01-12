
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { COLORS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Which avocado varieties do you export from Tanzania?",
      answer: "We primarily export the Hass and Fuerte varieties. Hass is our most popular export due to its high oil content and long shelf life, while Fuerte is sought after for its smooth skin and mild flavor profile."
    },
    {
      question: "What international certifications does Mountrose Avocado hold?",
      answer: "We are committed to global standards. Our operations are Global GAP certified, and we adhere to HACCP, ISO 22000, and SMETA protocols. We also offer EU Organic certified avocados upon request."
    },
    {
      question: "How do you maintain the cold chain during long-distance transit?",
      answer: "Our cold chain starts immediately after harvest. Fruit is pre-cooled to 5°C in our facility. During transit, we use refrigerated containers (Reefers) with atmosphere control (CA) to slow down ripening, ensuring 25+ days of freshness."
    },
    {
      question: "What is your typical minimum order quantity (MOQ)?",
      answer: "For sea freight, our standard MOQ is a 20ft refrigerated container (approx. 10-12 tons). For air freight, we can accommodate smaller pallet-sized orders (approx. 1-2 tons) depending on seasonal availability."
    },
    {
      question: "Which regions in Tanzania do you source from?",
      answer: "Our avocados are grown in the nutrient-rich volcanic soils of the Southern Highlands, including regions like Njombe, Iringa, and Mbeya. This high altitude provides the perfect climate for premium fruit development."
    },
    {
      question: "Can buyers track their consignments in real-time?",
      answer: "Yes, all our international shipments are equipped with IoT temperature and location trackers. Buyers receive a link to monitor their cargo's condition and exact location throughout the journey."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-3xl mb-6 shadow-sm bg-white"
            style={{ color: COLORS.lightGreen }}
          >
            <HelpCircle size={32} />
          </div>
          <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: COLORS.lightGreen }}>Common Inquiries</h2>
          <h3 className="text-4xl font-bold mb-6" style={{ color: COLORS.darkGreen }}>Frequently Asked Questions</h3>
          <p className="text-gray-600">
            Find answers to the most common questions about our export process, quality standards, and varieties.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-[32px] overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white shadow-xl border-green-100' : 'bg-white/50 border-gray-100 hover:border-green-100'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-green-800' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <Minus size={20} style={{ color: COLORS.lightGreen }} />
                  ) : (
                    <Plus size={20} style={{ color: COLORS.darkGreen }} />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Still have questions about our export process?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center font-bold underline underline-offset-8 transition-colors"
            style={{ color: COLORS.darkGreen }}
          >
            Speak to our Export Manager
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

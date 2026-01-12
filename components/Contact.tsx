
import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { COLORS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[60px] overflow-hidden shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 p-12 lg:p-16 text-white flex flex-col justify-between" style={{ backgroundColor: COLORS.darkGreen }}>
              <div>
                <h3 className="text-4xl font-bold mb-6">Let's Talk Business</h3>
                <p className="text-green-50 opacity-80 mb-12">
                  Ready to source premium Tanzanian avocados? Contact our export team for a customized quotation or to schedule a visit to our facilities.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-60">Call Us</p>
                      <p className="font-bold">+255 785 137 995</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-60">Email Address</p>
                      <p className="font-bold">export@mountroseavocado.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-60">HQ Location</p>
                      <p className="font-bold">Dar es Salaam, Tanzania</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm opacity-60 mb-4">Fast Response via WhatsApp</p>
                <a 
                  href="https://wa.me/255785137995" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:opacity-90 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={18} className="mr-2" />
                  Chat with Export Manager
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-3 p-12 lg:p-16">
              <h4 className="text-2xl font-bold mb-8" style={{ color: COLORS.darkGreen }}>Request a Quotation</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 transition-all" 
                      style={{ '--tw-ring-color': COLORS.lightGreen } as any} 
                      placeholder="Enter your company" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 transition-all" 
                      style={{ '--tw-ring-color': COLORS.lightGreen } as any} 
                      placeholder="Full name" 
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 transition-all" 
                      style={{ '--tw-ring-color': COLORS.lightGreen } as any} 
                      placeholder="email@company.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Variety Interested In</label>
                    <select 
                      className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 transition-all appearance-none" 
                      style={{ '--tw-ring-color': COLORS.lightGreen } as any}
                    >
                      <option>Hass Avocado</option>
                      <option>Fuerte Avocado</option>
                      <option>Both Varieties</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Volume (Tons/Week)</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 transition-all" 
                    style={{ '--tw-ring-color': COLORS.lightGreen } as any} 
                    placeholder="e.g., 20 Tons" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message / Special Requirements</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 transition-all" 
                    style={{ '--tw-ring-color': COLORS.lightGreen } as any} 
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-10 py-4 rounded-full text-white font-bold flex items-center justify-center hover:shadow-xl transition-all transform hover:-translate-y-1"
                  style={{ backgroundColor: COLORS.darkGreen }}
                >
                  <Send size={18} className="mr-2" />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

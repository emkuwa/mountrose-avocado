
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/255785137995" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group flex items-center"
      aria-label="Contact via WhatsApp"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold">
        Chat with us&nbsp;&nbsp;
      </span>
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;

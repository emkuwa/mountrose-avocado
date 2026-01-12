
import React from 'react';

export const COLORS = {
  darkGreen: '#1A3C23', // Professional deep forest green
  lightGreen: '#A3C139', // Vibrant avocado flesh green
  brown: '#6D3F1E',      // Rich seed brown
  white: '#FFFFFF',
};

export const LOGO_URL = "https://res.cloudinary.com/dn6aezjpa/image/upload/v1768236747/IMG_20260112_184033_yadatg_cdhhl1.png";

export const LogoIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <img 
    src={LOGO_URL} 
    alt="Mountrose Avocado Logo" 
    className={`${className} object-contain`}
  />
);

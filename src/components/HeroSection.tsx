
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  links?: { text: string; url: string }[];
  backgroundImage: string;
  textColor?: string;
  fullHeight?: boolean;
  ipadSection?: boolean;
  textPosition?: 'top' | 'center';
  logoImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  links,
  backgroundImage,
  textColor = 'text-black',
  fullHeight = false,
  ipadSection = false,
  textPosition = 'top',
  logoImage
}) => {
  return (
    <section 
      className={`relative w-full ${fullHeight ? 'h-screen' : 'h-[580px] md:h-[680px]'} bg-cover bg-center`} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div 
        className={`flex flex-col items-center ${
          textPosition === 'top' 
            ? 'pt-16 md:pt-24' 
            : 'justify-center h-full'
        }`}
      >
        <div className="text-center px-6">
          {logoImage && (
            <img src={logoImage} alt={title} className="h-12 md:h-16 mb-3 mx-auto" />
          )}
          <h2 className={`text-4xl md:text-6xl font-semibold ${textColor}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-2 text-xl md:text-2xl ${textColor}`}>
              {subtitle}
            </p>
          )}
          {links && (
            <div className="mt-4 flex justify-center space-x-5">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className={`text-apple-blue text-lg md:text-xl font-medium flex items-center hover:underline`}
                >
                  {link.text}
                  <ChevronRight size={16} className="ml-0.5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

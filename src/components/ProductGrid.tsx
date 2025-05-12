
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductTileProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  links?: { text: string; url: string }[];
  textColor?: string;
  logoImage?: string;
  className?: string;
}

const ProductTile: React.FC<ProductTileProps> = ({
  title,
  subtitle,
  backgroundImage,
  links,
  textColor = 'text-black',
  logoImage,
  className
}) => {
  return (
    <div 
      className={cn(
        "relative bg-cover bg-center p-8 flex flex-col h-[500px]",
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center pt-8">
        {logoImage && (
          <img src={logoImage} alt={title} className="h-10 mx-auto mb-2" />
        )}
        <h3 className={`text-3xl font-semibold ${textColor}`}>{title}</h3>
        {subtitle && <p className={`mt-1 text-xl ${textColor}`}>{subtitle}</p>}
        {links && (
          <div className="mt-3 flex justify-center space-x-4">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className={`text-apple-blue text-lg font-medium flex items-center hover:underline`}
              >
                {link.text}
                <ChevronRight size={16} className="ml-0.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface ProductGridProps {
  tiles: ProductTileProps[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ tiles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 my-3">
      {tiles.map((tile, index) => (
        <ProductTile key={index} {...tile} />
      ))}
    </div>
  );
};

export default ProductGrid;

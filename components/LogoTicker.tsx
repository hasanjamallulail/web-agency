import React from 'react';

interface LogoTickerProps {
  title: string;
  items: string[]; // Array of names or image URLs
  type: 'text' | 'image';
  speed?: 'slow' | 'fast';
}

const LogoTicker: React.FC<LogoTickerProps> = ({ title, items, type, speed = 'slow' }) => {
  // Speed control via CSS animation duration
  const duration = speed === 'fast' ? '30s' : '60s';
  
  // Duplicate items 4 times to ensure enough length for the loop on large screens
  // The animation moves -50%, so we need 2 full logical sets. 
  // We use 4 repetitions to be safe if the list of items is short.
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="py-12 bg-slate-950 border-y border-slate-900 overflow-hidden relative pause-on-hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-[0.2em]">
          {title}
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden">
         {/* Gradient Masks for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div 
          className="flex w-max animate-marquee" 
          style={{ animationDuration: duration }}
        >
          {displayItems.map((item, index) => (
            <div key={`${index}-${item}`} className="flex items-center justify-center mx-8 min-w-[140px]">
              {type === 'image' ? (
                 <img 
                    src={item} 
                    alt="Client Logo" 
                    className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain invert brightness-200" 
                 />
              ) : (
                 <span className="text-xl font-bold text-slate-600 hover:text-white transition-colors whitespace-nowrap cursor-default">
                   {item}
                 </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
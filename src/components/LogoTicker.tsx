import React from 'react';

interface LogoTickerProps {
  title?: string;
  items: (string | React.ReactNode)[];
  type: 'text' | 'image' | 'icon';
  speed?: 'slow' | 'fast';
  className?: string;
}

const LogoTicker: React.FC<LogoTickerProps> = ({ 
  title, 
  items, 
  type, 
  speed = 'slow', 
  className = ''
}) => {
  const duration = speed === 'fast' ? '30s' : '60s';
  const displayItems = [...items, ...items, ...items, ...items];

  const getBrandName = (path: string) => {
    try {
      const fileName = path.split('/').pop() || "";
      const cleanName = fileName.split('.')[0];
      return cleanName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    } catch (e) {
      return "Brand Logo";
    }
  };

  return (
    <div className={`py-8 bg-slate-950 overflow-hidden relative pause-on-hover ${className}`}>
      
      {title && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          {/* PERUBAHAN DISINI: */}
          {/* 1. text-lg: Ukuran huruf lebih besar (sebelumnya text-sm) */}
          {/* 2. text-white: Warna jadi putih terang */}
          {/* 3. font-bold: Lebih tebal */}
          <h3 className="text-center text-lg font-bold text-white uppercase tracking-[0.2em]">
            {title}
          </h3>
        </div>
      )}
      
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee" style={{ animationDuration: duration }}>
          {displayItems.map((item, index) => (
            <div key={`${index}`} className="flex items-center justify-center mx-6 min-w-[120px]">
              
              {/* === TIPE IMAGE === */}
              {type === 'image' && typeof item === 'string' ? (
                 <img 
                    src={item} 
                    alt={`${getBrandName(item)} Logo`} 
                    title={getBrandName(item)} 
                    className="h-14 w-auto bg-white p-2 rounded-lg object-contain shadow-md transition-transform duration-300 hover:scale-105" 
                 />
              
              /* === TIPE ICON === */
              ) : type === 'icon' ? (
                 <div className="text-4xl text-slate-600 hover:text-white transition-colors duration-300">
                   {item}
                 </div>

              /* === TIPE TEXT === */
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
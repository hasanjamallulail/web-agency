import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Instagram } from 'lucide-react';
import Section from '../ui/Section';
import { FounderService } from '../../services/Repository';
import { IFounder } from '../../types';

interface FoundersSliderProps {
    darkBg?: boolean;
}

/**
 * FounderCard: Komponen kartu individu
 */
const FounderCard = ({ founder, isMobile }: { founder: IFounder, isMobile?: boolean }) => {
  // Logika: Cek apakah image itu URL (http/assets) atau hanya Inisial (HJ/A)
  const isImageUrl = founder.image.startsWith('http') || founder.image.startsWith('/') || founder.image.includes('.');

  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center h-full hover:border-blue-500/30 transition-all group relative overflow-hidden ${isMobile ? 'border-none bg-transparent shadow-none' : ''}`}>
        {/* Dekorasi Garis Atas */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Avatar Area */}
        <div className="w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full mx-auto mb-6 flex items-center justify-center ring-4 ring-slate-800 group-hover:ring-blue-500/30 transition-all shadow-2xl relative z-10 overflow-hidden">
            {isImageUrl ? (
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            ) : (
              <span className="text-4xl text-white font-black tracking-tighter bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                {founder.image}
              </span>
            )}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{founder.name}</h3>
        <p className="text-blue-500 font-bold mb-6 text-xs tracking-[0.2em] uppercase">{founder.role}</p>
        
        <p className="text-slate-400 leading-relaxed mb-8 italic text-sm">
          "{founder.bio}"
        </p>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-auto">
           {founder.socials.linkedin && (
             <a href={founder.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin size={18} strokeWidth={2.5} />
             </a>
           )}
           {founder.socials.instagram && (
             <a href={founder.socials.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={18} strokeWidth={2.5} />
             </a>
           )}
        </div>
    </div>
  );
};

const FoundersSlider: React.FC<FoundersSliderProps> = ({ darkBg = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const founders = FounderService.getAll() || [];

  const next = () => setCurrentIndex((c) => (c + 1) % founders.length);
  const prev = () => setCurrentIndex((c) => (c - 1 + founders.length) % founders.length);

  if (founders.length === 0) return null;

  return (
    <Section className={`${darkBg ? 'bg-black' : 'bg-slate-950'} border-t border-slate-900 py-32`}>
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          The <span className="text-blue-600">Minds</span> Behind Growth
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto">
          Strategis dan eksekutor berpengalaman yang siap mengawal skala bisnis Anda.
        </p>
      </div>

      {/* Desktop: Grid View */}
      <div className="hidden md:grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
        {founders.map((founder, idx) => (
           <FounderCard key={idx} founder={founder} />
        ))}
      </div>

      {/* Mobile: Slider View */}
      <div className="md:hidden relative max-w-sm mx-auto px-4">
         <div className="overflow-hidden rounded-[2.5rem] bg-slate-900/50 border border-slate-800 shadow-2xl backdrop-blur-sm">
            <div 
              className="flex transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
               {founders.map((founder, idx) => (
                  <div key={idx} className="min-w-full">
                     <FounderCard founder={founder} isMobile />
                  </div>
               ))}
            </div>
         </div>
         
         {/* Navigation Buttons */}
         <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-4 bg-blue-600 rounded-full text-white shadow-xl hover:bg-blue-700 transition-all z-20">
           <ChevronLeft size={24} strokeWidth={3} />
         </button>
         <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-4 bg-blue-600 rounded-full text-white shadow-xl hover:bg-blue-700 transition-all z-20">
           <ChevronRight size={24} strokeWidth={3} />
         </button>

         {/* Pagination Dots */}
         <div className="flex justify-center gap-3 mt-8">
            {founders.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${currentIndex === idx ? 'bg-blue-600 w-8' : 'bg-slate-800 w-2'}`}
              />
            ))}
         </div>
      </div>
    </Section>
  );
};

export default FoundersSlider;
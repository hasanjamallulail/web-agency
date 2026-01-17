import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Instagram } from 'lucide-react';
import Section from '../ui/Section';
import { FounderService } from '../../services/Repository';
import { IFounder } from '../../types';

interface FoundersSliderProps {
    darkBg?: boolean;
}

const FoundersSlider: React.FC<FoundersSliderProps> = ({ darkBg = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const founders = FounderService.getAll();

  const next = () => setCurrentIndex((c) => (c + 1) % founders.length);
  const prev = () => setCurrentIndex((c) => (c - 1 + founders.length) % founders.length);

  return (
    <Section className="bg-black border-t border-slate-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Meet The Minds</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-400">The strategists behind your growth</p>
      </div>

      {/* Desktop View: Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {founders.map((founder, idx) => (
           <FounderCard key={idx} founder={founder} />
        ))}
      </div>

      {/* Mobile View: Slider */}
      <div className="md:hidden relative max-w-sm mx-auto px-4">
         <div className="overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
               {founders.map((founder, idx) => (
                  <div key={idx} className="min-w-full">
                     <FounderCard founder={founder} isMobile />
                  </div>
               ))}
            </div>
         </div>
         
         <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 p-3 bg-slate-800 rounded-full text-white shadow-lg border border-slate-700 hover:bg-blue-600 transition-colors z-10"><ChevronLeft size={20} /></button>
         <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 p-3 bg-slate-800 rounded-full text-white shadow-lg border border-slate-700 hover:bg-blue-600 transition-colors z-10"><ChevronRight size={20} /></button>

         <div className="flex justify-center gap-2 mt-6">
            {founders.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-blue-500 w-6' : 'bg-slate-700'}`}
              />
            ))}
         </div>
      </div>
    </Section>
  );
};

const FounderCard = ({ founder, isMobile }: { founder: IFounder, isMobile?: boolean }) => (
  <div className={`bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center h-full hover:border-blue-500/30 transition-all group relative overflow-hidden ${isMobile ? 'border-none bg-transparent shadow-none' : ''}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
      
      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-white font-bold ring-4 ring-slate-800 group-hover:ring-blue-500/50 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] relative z-10">
          {founder.image}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
      <p className="text-blue-400 font-medium mb-6 text-sm tracking-wide uppercase">{founder.role}</p>
      
      <p className="text-slate-400 leading-relaxed mb-8 italic">
        "{founder.bio}"
      </p>
      
      <div className="flex justify-center gap-4 mt-auto">
         {founder.socials.linkedin && (
           <a href={founder.socials.linkedin} className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin size={18} />
           </a>
         )}
         {founder.socials.instagram && (
           <a href={founder.socials.instagram} className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
              <Instagram size={18} />
           </a>
         )}
      </div>
  </div>
);

export default FoundersSlider;
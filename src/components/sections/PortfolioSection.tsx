import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Section from '../ui/Section';
import { PortfolioService } from '../../services/Repository';

interface PortfolioSectionProps {
  mode: 'slider' | 'gallery'; // Single prop to control behavior
  title?: string;
  subtitle?: string;
  className?: string;
  limit?: number; // Optional limit for slider/home
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  mode, 
  title = "Our Projects", 
  subtitle,
  className,
  limit
}) => {
  // --- STATE ---
  // Gallery State
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Slider State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // --- DATA FETCHING (Service Layer) ---
  const categories = useMemo(() => PortfolioService.getUniqueCategories(), []);

  const projects = useMemo(() => {
    if (mode === 'gallery') {
      // Filter based on active category
      return PortfolioService.getByCategory(activeCategory);
    } else {
      // Slider usually shows Featured only
      let data = PortfolioService.getFeatured();
      if (limit) data = data.slice(0, limit);
      return data;
    }
  }, [mode, activeCategory, limit]);

  // --- SLIDER LOGIC ---
  const totalSlides = Math.ceil(projects.length / itemsPerView);

  useEffect(() => {
    if (mode === 'slider') {
      const handleResize = () => {
        if (window.innerWidth >= 1024) setItemsPerView(3);
        else if (window.innerWidth >= 768) setItemsPerView(2);
        else setItemsPerView(1);
      };
      handleResize(); 
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [mode]);

  useEffect(() => {
    if (mode === 'slider' && totalSlides > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, totalSlides, mode]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  // --- RENDER HELPERS ---
  const renderCard = (client: any, idx: number) => (
    <div 
      key={`${client.name}-${idx}`} 
      className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-xl aspect-video hover:border-blue-500/50 transition-all duration-500"
    >
      {/* Image: "Cukup Gambar Saja" - We keep the image full width/height */}
      <img 
        src={`https://placehold.co/600x400/1e293b/cbd5e1?text=${encodeURIComponent(client.name)}`} 
        alt={client.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay - Hidden by default, appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content - Hidden by default, slides up on hover */}
      <div className="absolute bottom-0 left-0 p-6 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
         <div className="flex justify-between items-center">
            {/* Minimalist: Only Name shown on hover */}
            <h3 className="text-xl font-bold text-white mb-0">
                {client.name}
            </h3>
            <div className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors">
                <ExternalLink size={18} />
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <Section className={`bg-slate-950 ${className}`}>
      {/* Shared Header */}
      <div className="text-center mb-12">
        {title && <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>}
        {subtitle && <p className="text-lg text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      {/* Mode: GALLERY (With Tabs) */}
      {mode === 'gallery' && (
        <>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {projects.map((client, idx) => renderCard(client, idx))}
          </div>
          
          {projects.length === 0 && (
            <div className="text-center py-20 text-slate-500">No projects found.</div>
          )}
        </>
      )}

      {/* Mode: SLIDER */}
      {mode === 'slider' && (
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex gap-6 px-2 box-border">
                  {projects.slice(slideIndex * itemsPerView, (slideIndex * itemsPerView) + itemsPerView).map((client, idx) => (
                    <div key={idx} className="flex-1">
                        {renderCard(client, idx)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {totalSlides > 1 && (
            <>
              <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 p-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg z-10"><ChevronLeft size={24} /></button>
              <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 p-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg z-10"><ChevronRight size={24} /></button>
            </>
          )}
        </div>
      )}
    </Section>
  );
};

export default PortfolioSection;
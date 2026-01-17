import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TestimonialService } from '../services/Repository';

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = TestimonialService.getAll();
  
  // Use 'number' or 'any' for the timer ref to be browser-safe
  const timeoutRef = useRef<any>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
  const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

  // Auto-play logic
  useEffect(() => {
    resetTimeout();
    
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        next();
      }, 5000); // 5 Seconds auto slide
    }

    return () => {
      resetTimeout();
    };
  }, [current, isPaused]); 

  const activeTestimonial = testimonials[current];

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">What Our Clients Are Saying</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div className="relative bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-800 transition-all duration-300 hover:border-blue-500/30">
        <div className="absolute top-6 left-8 text-slate-800">
           <Quote size={80} fill="currentColor" />
        </div>
        
        <div className="relative z-10 text-center animate-fade-in">
           <p className="text-xl md:text-2xl text-slate-300 italic font-medium mb-8 leading-relaxed">
             "{activeTestimonial.content}"
           </p>
           <div>
             <h4 className="font-bold text-white text-lg">{activeTestimonial.name}</h4>
             <p className="text-blue-400 text-sm font-semibold">{activeTestimonial.company}</p>
             {activeTestimonial.role && <p className="text-slate-500 text-xs">{activeTestimonial.role}</p>}
           </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
           <button onClick={prev} className="p-3 rounded-full border border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-colors" aria-label="Previous Testimonial">
             <ChevronLeft size={20} />
           </button>
           <button onClick={next} className="p-3 rounded-full border border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-colors" aria-label="Next Testimonial">
             <ChevronRight size={20} />
           </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-blue-500 w-6' : 'bg-slate-700 hover:bg-slate-600'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
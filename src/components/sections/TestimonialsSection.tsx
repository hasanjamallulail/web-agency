import React from 'react';
import Section from '../ui/Section';
import TestimonialSlider from '../TestimonialSlider';

const TestimonialsSection: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-slate-950 overflow-hidden">
       <TestimonialSlider />
    </Section>
  );
};

export default TestimonialsSection;
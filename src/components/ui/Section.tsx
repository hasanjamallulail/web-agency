import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClass?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = "bg-slate-950", // Changed default to dark
  children, 
  containerClass = "",
  fullWidth = false
}) => {
  return (
    <section id={id} className={`py-20 md:py-24 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}>
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
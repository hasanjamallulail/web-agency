import React from 'react';
import Section from '../components/ui/Section';
import FoundersSlider from '../components/sections/FoundersSlider';
import Seo from '../components/Seo';

const About: React.FC = () => {
  return (
    <>
      <Seo 
        title="About Us - PT. Bahagia Tumbuh Bersama" 
        description="Learn about Wargrowth Agency, founded by Hasan Jamalullail and Arham. We combine NLP psychology with data analytics."
      />
      {/* Story */}
      <Section className="bg-slate-950">
         <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-8 text-white">About Wargrowth Agency</h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
               PT. Bahagia Tumbuh Bersama (Wargrowth) was born from a simple belief: 
               <strong className="text-blue-400"> Growth should be predictable, not accidental.</strong>
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
               We combine the art of human persuasion (NLP) with the science of data analytics. 
               We don't just act as a vendor; we are your growth partners, obsessed with your ROI as much as you are.
            </p>
         </div>
      </Section>

      {/* Reusable Founders Slider (Dark Mode) */}
      <FoundersSlider darkBg={true} />
    </>
  );
};

export default About;
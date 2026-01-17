import React from 'react';
import { Link } from 'react-router-dom';
// Import Icon Standar
import { FaBrain, FaChartLine, FaHandshake, FaRocket } from 'react-icons/fa';
// Import Icon Brand (Tech Stack) - Bagian Baru
import { SiGoogleads, SiGoogleanalytics, SiMeta, SiReact, SiNodedotjs, SiFigma, SiPython, SiOpenai } from 'react-icons/si';

import Section from '../components/ui/Section';
import FoundersSlider from '../components/sections/FoundersSlider';
import Seo from '../components/Seo';

const About: React.FC = () => {
  
  const values = [
    {
      icon: <FaBrain className="text-4xl text-purple-500" />,
      title: "Psychology Driven",
      desc: "Marketing is about humans. We use NLP patterns to craft messages that resonate deeper than logic."
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      title: "Data Backed",
      desc: "We don't guess. Every decision is backed by real-time analytics and A/B testing frameworks."
    },
    {
      icon: <FaHandshake className="text-4xl text-emerald-500" />,
      title: "Partner Mindset",
      desc: "We are not just vendors. We act as your internal growth team, obsessed with your P&L."
    },
    {
      icon: <FaRocket className="text-4xl text-orange-500" />,
      title: "Scalable Systems",
      desc: "We build growth engines that work consistently, not just viral one-hit wonders."
    }
  ];

  const techStack = [
    { icon: <SiGoogleanalytics />, name: "G-Analytics" },
    { icon: <SiGoogleads />, name: "Google Ads" },
    { icon: <SiMeta />, name: "Meta Ads" },
    { icon: <SiOpenai />, name: "Gen AI" }, // Menguatkan klaim NLP
    { icon: <SiPython />, name: "Python" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFigma />, name: "Figma" },
  ];

  return (
    <>
      <Seo 
        title="About Us - PT. Bahagia Tumbuh Bersama" 
        description="Learn about Wargrowth Agency, founded by Hasan Jamalullail and Arham. We combine NLP psychology with data analytics."
      />

      {/* 1. HERO / STORY SECTION */}
      <Section className="bg-slate-950 pt-32 pb-20">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Our Philosophy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              About WarGrowth Agency
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
               PT. Bahagia Tumbuh Bersama (WarGrowth) was born from a simple belief: 
               <br className="hidden md:block" />
               <span className="text-white font-medium">"Growth should be predictable, not accidental."</span>
            </p>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
               In a world of noise, we combine the art of <strong>Human Persuasion (NLP)</strong> with the science of <strong>Data Analytics</strong>. 
               We bridge the gap between creative storytelling and hard ROI numbers.
            </p>
         </div>
      </Section>

      {/* 2. CORE VALUES */}
      <Section className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core DNA</h2>
            <p className="text-slate-400">What makes us different from other agencies?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-2 group">
                <div className="mb-6 bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. TECH STACK (NEW SECTION) 🔥 */}
      <Section className="bg-slate-950 border-y border-slate-800 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-blue-500 font-semibold mb-4 text-xs uppercase tracking-widest">Powered By</p>
            <h3 className="text-2xl font-bold text-white mb-10">Our Technology & Data Ecosystem</h3>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {techStack.map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="text-4xl text-slate-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 absolute -bottom-6">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
        </div>
      </Section>

      {/* 4. FOUNDERS SLIDER */}
      <FoundersSlider darkBg={true} />

      {/* 5. CTA SECTION */}
      <Section className="bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white px-4 py-10">
          <h2 className="text-3xl font-bold mb-6">Ready to scale with clarity?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Stop guessing. Start growing with data-driven psychology strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition shadow-lg"
            >
              Start Consultation
            </Link>
            <Link 
              to="/projects" 
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition border border-blue-500"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
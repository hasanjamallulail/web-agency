import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  linkTo?: string; // Optional custom link
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, desc, icon, linkTo }) => {
  const path = linkTo || `/services/${id}`;
  
  return (
    <Link to={path} className="block group h-full">
      <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300 h-full flex flex-col relative overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-[50px] group-hover:bg-blue-600/20 transition-all"></div>
        
        <div className="w-16 h-16 bg-slate-800 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner shadow-white/5">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-400 mb-6 flex-1 leading-relaxed group-hover:text-slate-300 transition-colors">{desc}</p>
        <div className="text-blue-400 font-bold flex items-center gap-2 mt-auto group-hover:gap-3 group-hover:text-blue-300 transition-all">
          Learn more <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
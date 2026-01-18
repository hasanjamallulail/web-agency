import React from 'react';
import { CheckCircle2, Globe2, ShieldCheck } from 'lucide-react';
import { statsData, segmentsData } from '../../data/pengalamanData';

const PengalamanSection: React.FC = () => {
  return (
    <section className="bg-slate-950 py-32 border-t border-slate-900 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Wargrowth Authority Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm">
                Verified Authority
              </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              The Metric of <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h3>
          </div>
          <p className="text-slate-400 text-lg lg:max-w-md leading-relaxed border-l-2 border-blue-500 pl-6">
            Wargrowth Agency menghadirkan standar eksekusi tingkat tinggi untuk institusi pemerintah dan korporasi berskala nasional.
          </p>
        </div>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {statsData.map((stat) => {
            // Kita definisikan Icon sebagai komponen di sini
            const IconComponent = stat.icon; 
            
            return (
              <div 
                key={stat.id} 
                className="relative group overflow-hidden bg-slate-900/40 border border-slate-800 p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:border-slate-700"
              >
                {/* Glow Accent on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="bg-slate-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-slate-800 group-hover:border-blue-500/50 transition-colors duration-500">
                    {/* Render Icon dengan cara memanggil komponennya */}
                    <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-5xl font-black text-white mb-4 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-lg font-bold text-slate-100 mb-2 uppercase tracking-widest text-sm">
                    {stat.label}
                  </div>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trusted Segments Footer */}
        <div className="bg-slate-900/30 border border-slate-800/50 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Globe2 className="w-6 h-6 text-slate-400" />
            <span className="text-slate-300 font-medium">Trusted by High-Level Entities:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {segmentsData.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950 border border-slate-800 py-2.5 px-6 rounded-full text-slate-400 text-sm font-semibold flex items-center gap-2 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PengalamanSection;
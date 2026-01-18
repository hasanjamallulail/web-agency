import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  // id: number; // Hapus jika tidak digunakan untuk rendering di dalam kartu
  slug: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

/**
 * ServiceCard Component
 * Mengarahkan user ke halaman detail menggunakan slug murni.
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ slug, title, desc, icon }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl group hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      
      {/* Dekorasi Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all duration-500"></div>

      {/* Container Ikon */}
      <div className="w-16 h-16 bg-slate-800 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
        {icon}
      </div>

      {/* Konten Teks */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 mb-8 flex-1 leading-relaxed">
        {desc}
      </p>
      
      {/* Tombol Navigasi - Kunci Utama Agar Tidak Undefined */}
      <Link 
        to={`/services/${slug}`} 
        className="text-blue-400 font-bold flex items-center gap-2 mt-auto group-hover:gap-4 group-hover:text-blue-300 transition-all duration-300"
      >
        Learn More <ArrowRight size={20} />
      </Link>
    </div>
  );
};

export default ServiceCard;
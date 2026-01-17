import React from 'react';
import Section from '../ui/Section';

const GrowthFramework: React.FC = () => {
  const steps = [
    { title: "1. Diagnosis", desc: "Menganalisa psikologi user dan kebocoran traffic Anda.", color: "bg-blue-900/30 text-blue-400 border-blue-500/30" },
    { title: "2. Strategic Hook", desc: "Menciptakan pesan yang membuat mereka merasa 'Aman' memilih Anda.", color: "bg-purple-900/30 text-purple-400 border-purple-500/30" },
    { title: "3. Execution", desc: "Implementasi teknologi & ads yang presisi target.", color: "bg-pink-900/30 text-pink-400 border-pink-500/30" },
    { title: "4. Scale & Optimize", desc: "Optimasi berbasis data real-time, bukan asumsi.", color: "bg-green-900/30 text-green-400 border-green-500/30" }
  ];

  return (
    <Section className="bg-slate-950 relative overflow-hidden">
       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-0 w-full h-full bg-blue-900/5 blur-[150px] pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-block px-4 py-1.5 bg-red-900/20 border border-red-500/30 text-red-400 font-bold text-sm rounded-full mb-6">
            ⚠️ The "Silent Killer" of Business
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
             Jangan Biarkan Brand Anda <span className="text-blue-500">Tenggelam</span> di Lautan Kompetitor.
          </h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
             Tahukah Anda? Website yang cantik atau iklan yang mahal <strong>tidak menjamin penjualan</strong> jika tidak memiliki "Positioning" yang menyentuh emosi. Ketakutan terbesar pebisnis bukan kehabisan modal, tapi kehabisan waktu karena salah strategi.
          </p>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
             Di Wargrowth, kami tidak sekadar membuat website atau pasang iklan. Kami menggunakan pendekatan <strong>NLP (Neuro-Linguistic Programming)</strong> untuk memicu rasa "Aman" dan "Percaya" di otak pelanggan Anda. Kami memastikan brand Anda tidak hanya mudah ditemukan, tapi menjadi satu-satunya pilihan yang masuk akal bagi mereka.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col border-l-4 border-blue-600 pl-4">
              <span className="font-bold text-2xl text-white">Safety</span>
              <span className="text-sm text-slate-500">Trigger Emosi</span>
            </div>
            <div className="flex flex-col border-l-4 border-green-500 pl-4">
              <span className="font-bold text-2xl text-white">Result</span>
              <span className="text-sm text-slate-500">Driven Data</span>
            </div>
          </div>
        </div>
        
        {/* Infographic / Steps */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative">
          <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[length:32px_32px] rounded-3xl pointer-events-none"></div>
          <h3 className="text-xl font-bold mb-8 text-center text-white relative z-10">The Wargrowth NLP Framework</h3>
          <div className="space-y-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-slate-950/50 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border ${step.color} flex-shrink-0`}>
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GrowthFramework;
import React from 'react';
import LogoTicker from '../LogoTicker';

const ClientsSection: React.FC = () => {
  // PENTING: Ini daftar nama file persis sesuai screenshot Anda
  const clientFiles = [
    "hyundai.png", "keke.png", "tepa.png", "nabawi.png", 
    "mtd.png", "exqsite.png", "9creation.png", "24owls.png", 
    "applejon.png", "dp.png", "elpis.png", "esas.png", 
    "ocbd.png", "one.png", "ovon.png", "premori.png", 
    "renodots.png", "sbdm.png", "senang.png", "sheinterior.png", 
    "tellin.png", "todz.png", "virtus.png"
  ];

  // Fungsi helper sederhana untuk bikin full path
  // Hasilnya jadi: "/assets/clients/hyundai.png"
  const row1 = clientFiles.slice(0, 12).map(file => `/assets/clients/${file}`);
  const row2 = clientFiles.slice(12).map(file => `/assets/clients/${file}`);

  return (
    <div className="bg-slate-950 border-b border-slate-900 py-12">
       {/* Baris 1 */}
       <LogoTicker 
          title="Trusted by Industry Leaders" 
          items={row1} 
          type="image" 
          speed="slow" 
          className="!border-b-0 !pb-4"
       />
       
       {/* Baris 2 */}
       <LogoTicker 
          items={row2} 
          type="image" 
          speed="slow" // Bisa diganti "fast" kalau mau ngebut
          className="!border-t-0 !pt-4"
       />
    </div>
  );
};

export default ClientsSection;
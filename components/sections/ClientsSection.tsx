import React from 'react';
import LogoTicker from '../LogoTicker';

const ClientsSection: React.FC = () => {
  const clients = [
    "Hyundai", "Keke", "Tepaselira", "Nabawi Herbal", "MT Diary Reno", "Exqsite", "9Creation", "24Owls", 
    "Universitas Indonesia", "Esas Management", "OCBD", "Renodots", "She Interiror", "Todz Terior", "Virtus", 
    "Senang Karya", "SBDM", "Premori", "Apple Jon", "Sepasang Collection", "D’Phenomenal", "Elpis", "Ovon", 
    "One Kreativerse", "Bukalapak", "Acer", "Changi Airport", "Telkomsel", "Indosat", "Kimia Farma", 
    "Klik Dokter", "Happy Fresh"
  ];

  return (
    <div className="bg-slate-950 border-b border-slate-900">
       <LogoTicker title="Trusted by Industry Leaders" items={clients} type="text" speed="fast" />
    </div>
  );
};

export default ClientsSection;
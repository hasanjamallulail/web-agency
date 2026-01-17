import React from 'react';
import LogoTicker from '../LogoTicker';

const MediaSection: React.FC = () => {
  const media = ["Kumparan", "Gatra", "Padi UMKM", "Dream", "Suara", "Tribunnews", "Kompas", "Sindonews", "CNN"];

  return (
    <div className="bg-slate-950">
        <LogoTicker 
          title="Featured In" 
          items={media} 
          type="text" 
        />
    </div>
  );
};

export default MediaSection;
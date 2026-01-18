import React from 'react';
import LogoTicker from '../LogoTicker';

const MediaSection: React.FC = () => {
  const mediaFiles = [
    "kumparan.png", 
    "gatra.png", 
    "padi.png", 
    "dream.png", 
    "suara.png", 
    "tribun.png", 
    "kompas.png", 
    "sindo.png", 
    "cnn.png" 
  ];

  // Mapping path sama persis seperti di ClientsSection
  // Pastikan folder di komputer Anda bernama "feature" (bukan features/partners)
  const mediaItems = mediaFiles.map(file => `/assets/features/${file}`);

  return (
    <div className="bg-slate-950 border-t border-slate-900">
        <LogoTicker 
          title="Featured In" 
          items={mediaItems} 
          type="image" 
          speed="slow" 
        />
    </div>
  );
};

export default MediaSection;
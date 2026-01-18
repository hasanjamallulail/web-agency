import React, { useEffect, useState } from 'react';

const notifications = [
  "Hyundai just requested a consultation",
  "Keke Busana upgraded to SEO Premium",
  "New 5-star review from Nabawi Herbal",
  "Visitor from Jakarta is viewing Services",
  "Telkomsel Project just launched"
];

const SocialProofWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showNotification = () => {
      const randomMsg = notifications[Math.floor(Math.random() * notifications.length)];
      setMessage(randomMsg);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000); 
    };

    const initialTimer = setTimeout(showNotification, 5000);
    const interval = setInterval(showNotification, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl p-4 animate-slide-up max-w-xs">
       <div className="flex items-start gap-3">
          <div className="relative">
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 border border-slate-700">
               🔔
             </div>
             <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          </div>
          <div>
             <p className="text-xs font-bold text-white">Recent Activity</p>
             <p className="text-sm text-slate-400 mt-1">{message}</p>
             <p className="text-[10px] text-slate-600 mt-1">Just now</p>
          </div>
       </div>
    </div>
  );
};

export default SocialProofWidget;
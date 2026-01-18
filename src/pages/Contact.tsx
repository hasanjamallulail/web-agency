import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';

const Contact: React.FC = () => {
  // 1. State untuk menyimpan input user
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. Cek apakah semua kolom sudah diisi?
  const isFormValid = formData.name.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.message.trim() !== '';

  // 3. Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. Fungsi Kirim ke WhatsApp
  const handleSend = () => {
    if (!isFormValid) return;

    // Nomor WA Admin (Format internasional tanpa +)
    const phoneNumber = "6281213772360"; 

    // Format pesan yang rapi
    const text = `Halo WarGrowth, saya ingin konsultasi.
    
    Nama: ${formData.name}
    Email: ${formData.email}
    Pesan: ${formData.message}`;

    // Buat Link WA
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Buka di tab baru
    window.open(url, '_blank');
  };

  return (
      <div className="bg-slate-950 py-24 min-h-screen">
         <Seo 
            title="Contact Us" 
            description="Get in touch with Wargrowth Agency for a free consultation. Contact us via WhatsApp, Email, or visit our office in Jakarta."
         />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
               <p className="text-slate-400">Have a project in mind? Let's discuss your growth strategy.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {/* Info Section (Kiri) */}
               <div className="space-y-8">
                  <a href="https://wa.me/6281213772360" target="_blank" rel="noreferrer" className="block">
                      <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900 transition-colors cursor-pointer group">
                         <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <Phone />
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-white">WhatsApp / Phone</h3>
                            <p className="text-slate-400 group-hover:text-blue-400 transition-colors">+62 812-1377-2360</p>
                         </div>
                      </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900 transition-colors">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                         <Mail />
                      </div>
                      <div>
                         <h3 className="font-bold text-lg text-white">Email</h3>
                         <p className="text-slate-400">hello@wargrowth.com</p>
                      </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900 transition-colors">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                         <MapPin />
                      </div>
                      <div>
                         <h3 className="font-bold text-lg text-white">Office</h3>
                         <p className="text-slate-400">
                            PT. Bahagia Tumbuh Bersama<br/>
                            Jakarta Selatan, Indonesia
                         </p>
                      </div>
                  </div>
               </div>

               {/* Form Section (Kanan) */}
               <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
                  <h3 className="font-bold text-xl mb-6 text-white">Send us a message</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                         <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                         <input 
                            type="text" 
                            name="name" // Penting untuk handle change
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                            placeholder="Your Name"
                         />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                         <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                            placeholder="name@company.com"
                         />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                         <textarea 
                            rows={4} 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            placeholder="Tell us about your project..."
                         ></textarea>
                      </div>
                      
                      {/* BUTTON LOGIC */}
                      <Button 
                        type="button" 
                        variant="primary" 
                        className={`w-full transition-all duration-300 ${!isFormValid ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:scale-[1.02]'}`}
                        onClick={handleSend}
                        disabled={!isFormValid} // Fitur HTML standard untuk mematikan tombol
                      >
                         {isFormValid ? 'Send Message via WhatsApp' : 'Please fill all fields'}
                      </Button>
                  </form>
               </div>
            </div>
         </div>
      </div>
  );
};

export default Contact;
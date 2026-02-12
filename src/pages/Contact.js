import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - PT Kamandanu Jaya Samudera";
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden min-h-screen pt-28 md:pt-36 bg-[#0A192F]">
      {/* BACKGROUND IMAGE KAPAL DENGAN OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2000&auto=format&fit=crop" 
          alt="Maritime Background" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/98 via-[#112240]/90 to-[#0A192F]/98" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">Hubungi <span className="text-blue-500">Kami</span></h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">Penyedia kru kapal profesional dan manajemen kapal terpercaya di Indonesia. Kami siap melayani kebutuhan maritim Anda.</p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* INFO KONTAK */}
          <div className={`lg:col-span-5 space-y-4 md:space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <div className="bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 group">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Head Office</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Jl. Warakas 3 No.23 RT 010 RW 004, Lantai 2<br />Tanjung Priok, Jakarta Utara, Indonesia</p>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 group">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all"><Phone size={24} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Telepon & WhatsApp</h4>
                  <p className="text-gray-400 text-sm">Office: (021) 43938505</p>
                  <p className="text-blue-400 text-sm font-semibold">+62 813 1192 2417</p>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 group">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={24} /></div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Email Resmi</h4>
                  <p className="text-gray-400 text-sm break-all">info@kamandanujayasamudera.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* PETA & TOMBOL AKSI */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <div className="bg-white/[0.03] backdrop-blur-md p-2 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.5140884617!2d106.878!3d-6.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f10!2sWarakas!5e0!3m2!1sid!2sid!4v123456789"
                width="100%" height="400" className="rounded-2xl h-[300px] md:h-[450px]" style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }} loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 md:hidden">
                <a href="https://wa.me/6281311922417" className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-bold text-xs"><MessageCircle size={16}/> WhatsApp</a>
                <a href="mailto:info@kamandanujayasamudera.com" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold text-xs"><Send size={16}/> Email</a>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4 mt-6">
              <a href="https://wa.me/6281311922417" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl transition-all shadow-lg font-bold"><MessageCircle /> Hubungi via WhatsApp</a>
              <a href="mailto:info@kamandanujayasamudera.com" className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl transition-all shadow-lg font-bold"><Send /> Kirim Email Resmi</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
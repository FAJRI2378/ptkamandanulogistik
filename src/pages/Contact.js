import React, { useEffect, useState } from "react";
import { MapPin,Clock, Mail, MessageCircle, Globe } from "lucide-react";
import Seo from "../components/Seo";
import backgroundImageHeader from "../img/ch.webp";
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // SEO: Structured Data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT Kamandanu Jaya Samudera",
    "image": "https://www.ptkamandanujayasamudera.com/logo.png",
    "@id": "https://www.ptkamandanujayasamudera.com",
    "url": "https://www.ptkamandanujayasamudera.com",
    "telephone": "+622143938505",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Warakas 3 No.23 RT 010 RW 004, Lantai 2",
      "addressLocality": "Tanjung Priok",
      "addressRegion": "Jakarta Utara",
      "postalCode": "14330",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.115858,
      "longitude": 106.878734
    }
  };

  return (
    <>
      <Seo 
        title="Contact Us | PT Kamandanu Jaya Samudera - Crewing Agency Jakarta"
        description="Connect with PT Kamandanu Jaya Samudera in Tanjung Priok, North Jakarta. Office location, WhatsApp recruitment, and business inquiry details."
        keywords="contact ptkjs, crewing agency jakarta contact, alamat pt kamandanu jaya samudera"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <main className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
        {/* --- HERO SECTION --- */}
        <header className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-[#0A2540] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div
    className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImageHeader})`,
      // Tambahkan WebkitMaskImage untuk dukungan browser Safari/Chrome
      WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
      maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
    }}
  />
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
                <Globe size={14} className="animate-spin-slow" /> Global Inquiry Center
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Touch</span>
              </h1>
              <p className="text-sm md:text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed px-2">
                Whether you're a ship owner or a seafarer, our team is ready to assist you. Connect with Indonesia's premier crewing agency.
              </p>
            </div>
          </div>
        </header>

        {/* --- BENTO GRID CONTENT --- */}
      {/* --- BENTO GRID CONTENT --- */}
<section className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 md:-mt-20 pb-20 relative z-20">
  {/* Gunakan flex-col untuk mobile dan lg:grid untuk desktop */}
  <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
    
    {/* Left Column: Info Cards */}
    <div className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
      
      {/* Headquarters Card */}
      <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 group">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shrink-0">
            <MapPin size={24} />
          </div>
          <div className="w-full min-w-0"> {/* min-w-0 mencegah teks memicu overflow */}
            <h3 className="text-[#0A2540] font-black text-lg mb-2 uppercase tracking-tight">Main Headquarters</h3>
            <address className="text-gray-500 not-italic text-sm leading-relaxed mb-4 block break-words">
              Jl. Warakas 3 No.23 RT 010 RW 004, 2nd Floor<br />
              Tanjung Priok, Jakarta Utara, 14330
            </address>
          </div>
        </div>
      </div>

      {/* Direct Connect Card */}
      <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 group">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 shrink-0">
            <MessageCircle size={24} />
          </div>
          <div className="w-full min-w-0">
            <h3 className="text-[#0A2540] font-black text-lg mb-4 uppercase tracking-tight">Quick Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+622143938505" className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <span className="text-gray-400 font-bold text-[10px] uppercase">Office</span>
                <span className="text-[#0A2540] font-bold text-xs md:text-sm">(021) 43938505</span>
              </a>
              <a href="https://wa.me/6281311922417" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-emerald-50">
                <span className="text-emerald-700 font-bold text-[10px] uppercase">WhatsApp</span>
                <span className="text-emerald-600 font-black text-xs md:text-sm text-right leading-tight ml-2">Connect Now</span>
              </a>
              <a href="mailto:info@kamandanujayasamudera.com" className="p-3 rounded-xl bg-blue-50/50 block">
                <span className="text-blue-400 font-bold text-[10px] uppercase block mb-1">Email</span>
                <span className="text-blue-600 font-bold text-[10px] md:text-xs break-all">info@kamandanujayasamudera.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Card */}
      <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl text-slate-600 shrink-0">
            <Clock size={24} />
          </div>
          <div className="w-full min-w-0">
            <h3 className="text-[#0A2540] font-black text-lg mb-2 uppercase tracking-tight text-nowrap">Working Hours</h3>
            <p className="text-gray-500 text-xs font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span> Mon - Fri: 08:30 - 17:30
            </p>
            <p className="text-gray-400 text-xs font-semibold ml-3.5 italic">Sat: 11:00 - 15:00 WIB</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column: Map & Satelite View */}
<div className={`lg:col-span-7 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
  <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl border border-gray-100 h-full flex flex-col">
    {/* Kontainer Peta: Menggunakan view satelit untuk kesan 'Tata Surya/Space' */}
    <div className="relative rounded-[2rem] overflow-hidden w-full h-[400px] md:h-full min-h-[350px] group">
      <iframe
  // Parameter t=k mengaktifkan mode Satelit, q=lokasi menentukan titik koordinat/alamat
  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15083.19654827613!2d106.875993!3d-6.118949!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMDguMiJTIDEwNsKwNTInNDIuOSJF!5e1!3m2!1sen!2sid!4v1771599591642!5m2!1sen!2sid"
  width="100%"
  height="100%"
  className="absolute inset-0 border-0 contrast-110 saturate-125"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Satelite View Office Location"
/>
    </div>

    {/* Desktop Buttons */}
    <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
      <a href="https://wa.me/6281311922417" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#075E54] hover:bg-[#128C7E] text-white py-5 rounded-2xl transition-all shadow-lg font-black uppercase tracking-widest text-[10px]">
        <MessageCircle size={18} /> WhatsApp
      </a>
      <a href="mailto:info@kamandanujayasamudera.com" className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl transition-all shadow-lg font-black uppercase tracking-widest text-[10px]">
        <Mail size={18} /> Email Us
      </a>
    </div>
  </div>
</div>
  </div>
</section>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        
        main { font-family: 'Plus Jakarta Sans', sans-serif; }

        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Contact;
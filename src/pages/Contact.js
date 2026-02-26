import React, { useEffect, useState } from "react";
import { MapPin, Clock, MessageCircle, Globe} from "lucide-react";
import Seo from "../components/Seo";
import backgroundImageHeader from "../img/ch.webp";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  // SEO: Structured Data
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
    }
  };

  return (
    <>
      <Seo 
        title="Contact Us | PT Kamandanu Jaya Samudera"
        description="Connect with PT Kamandanu Jaya Samudera in Tanjung Priok, North Jakarta. Office location, WhatsApp recruitment, and business inquiry details."
      />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <main className="bg-[#F8FAFC] min-h-screen text-[#0A2540]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        
        {/* --- HEADER SECTION - IDENTIK DENGAN LICENSE/GALLERY --- */}
        <section className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540]" />

          <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
            <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              {/* Badge consistent style */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
                <Globe size={14} className="animate-spin-slow" /> Global Inquiry Center
              </span>

              {/* Title consistent size with md:text-6xl */}
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg leading-tight">
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Touch</span>
              </h1>

              {/* Paragraph consistent size */}
              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Whether you're a ship owner or a seafarer, our team is ready to assist you. Connect with Indonesia's premier crewing agency.
              </p>
            </div>
          </div>
        </section>

        {/* --- BENTO GRID CONTENT --- */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 pb-20 relative z-20">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
            
            {/* Left Column: Info Cards */}
            <div className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
              
              {/* Headquarters Card */}
              <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 group">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="w-full min-w-0">
                    <h3 className="text-[#0A2540] font-black text-lg mb-2 uppercase tracking-tight">Main Headquarters</h3>
                    <address className="text-gray-500 not-italic text-sm leading-relaxed mb-4 block break-words italic">
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
                      <a href="tel:+622143938505" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="text-gray-400 font-bold text-[10px] uppercase">Office</span>
                        <span className="text-[#0A2540] font-bold text-xs md:text-sm">(021)38882473</span>
                      </a>
                      <a href="https://wa.me/6281311922417" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
                        <span className="text-emerald-700 font-bold text-[10px] uppercase">WhatsApp</span>
                        <span className="text-emerald-600 font-black text-xs md:text-sm">Connect Now</span>
                      </a>
                      <a href="mailto:info@kamandanujayasamudera.com" className="p-3 rounded-xl bg-blue-50/50 block hover:bg-blue-50 transition-colors">
                        <span className="text-blue-400 font-bold text-[10px] uppercase block mb-1">Email</span>
                        <span className="text-blue-600 font-bold text-[10px] md:text-xs break-all italic">info@kamandanujayasamudera.com</span>
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
                    <h3 className="text-[#0A2540] font-black text-lg mb-2 uppercase tracking-tight">Working Hours</h3>
                    <p className="text-gray-500 text-xs font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span> Mon - Fri: 08:30 - 17:30
                    </p>
                    <p className="text-gray-400 text-xs font-semibold ml-3.5 italic">Sat: 11:00 - 15:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Map */}
            <div className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="relative rounded-[2rem] overflow-hidden w-full h-[400px] md:h-full min-h-[450px]">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15083.19654827613!2d106.875993!3d-6.118949!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMDguMiJTIDEwNsKwNTInNDIuOSJF!5e1!3m2!1sen!2sid!4v1771599591642!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 border-0"
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        
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
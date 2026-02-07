import React, { useState, useEffect } from "react";
import {
  Users,
  Award,
  Handshake,
  Shield,
  CheckCircle,
  Globe,
} from "lucide-react";

// Import Main Featured Logos
import client1 from "../img/client1.png";
import client2 from "../img/client2.png";
import client3 from "../img/client3.png";

// Import Scroller Logos (l1 - l9)
import l1 from "../img/lclient1.jpg";
import l2 from "../img/lclient2.jpg";
import l3 from "../img/lclient3.png";
import l4 from "../img/lclient4.png";
import l5 from "../img/lclient5.png";
import l6 from "../img/lclient6.jpg";
import l7 from "../img/lclient7.jpg";
import l8 from "../img/lclient8.png";
import l9 from "../img/lclient9.png";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title =
      "Our Valued Clients & Partners | PT Kamandanu Jaya Samudera";
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Array Logo yang akan di-loop (L1 - L9)
  const scrollerLogos = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

  const featuredClients = [
    {
      name: "PT Pelni (Persero)",
      type: "National Shipping",
      logo: client1,
      desc: "Indonesia's leading passenger and cargo shipping company.",
    },
    {
      name: "PT Pertamina Trans Kontinental",
      type: "Marine Services",
      logo: client2,
      desc: "Premier Indonesian offshore support and marine logistics.",
    },
    {
      name: "Maersk Line",
      type: "Global Logistics",
      logo: client3,
      desc: "World's largest container shipping company.",
    },
  ];

  return (
    <article className="py-20 bg-slate-50 min-h-screen pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header
          className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#0A2540] mb-6">
            Our <span className="text-blue-600">Partners</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "Connecting Professional Seafarers with Global Maritime Leaders"
          </p>
        </header>

        {/* --- SECTION SCROLLER LOGO (L1 - L9) --- */}
        <section className="mb-24 relative">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase">
              Meet Our Clients
            </span>
          </div>

          {/* Wrapper Marquee 1 (Ke Kiri) */}
          <div className="flex overflow-hidden group space-x-16 mb-12 relative border-y border-gray-100 py-8 bg-white/50">
            <div className="flex animate-marquee whitespace-nowrap space-x-16 items-center">
              {/* Render logo l1-l9 dua kali agar looping mulus */}
              {[...scrollerLogos, ...scrollerLogos, ...scrollerLogos].map(
                (img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-32 md:w-48 h-20 flex items-center justify-center"
                  >
                    {/* Ubah di Marquee 1 dan Marquee 2 */}
                    <img
                      src={img}
                      alt={`Partner Logo`}
                      className="max-h-full max-w-full object-contain transition-all duration-300"
                    />
                  </div>
                ),
              )}
            </div>
            {/* Fade effect pinggir */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Wrapper Marquee 2 (Ke Kanan) */}
          <div className="flex overflow-hidden group space-x-16 relative border-b border-gray-100 py-8 bg-white/50">
            <div className="flex animate-marquee-reverse whitespace-nowrap space-x-16 items-center">
              {[...scrollerLogos, ...scrollerLogos, ...scrollerLogos]
                .reverse()
                .map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-32 md:w-48 h-20 flex items-center justify-center"
                  >
                    {/* Ubah di Marquee 1 dan Marquee 2 */}
                    <img
                      src={img}
                      alt={`Partner Logo`}
                      className="max-h-full max-w-full object-contain transition-all duration-300"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Featured Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuredClients.map((client, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className="h-20 flex items-center justify-center mb-6">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                {client.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4 font-bold uppercase">
                {client.type}
              </p>
              <p className="text-gray-600 text-sm">{client.desc}</p>
            </div>
          ))}
        </section>

        {/* Footer Benefits */}
        <section className="bg-[#0A2540] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Elevate Your Maritime Operations?
            </h2>
            <p className="text-blue-100/80 mb-10 max-w-2xl mx-auto text-lg">
              Contact us to discuss customized crew manning solutions tailored
              to your fleet's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl"
              >
                Become a Partner
              </a>
              <a
                href="/services"
                className="px-10 py-4 border-2 border-white/20 hover:bg-white/10 rounded-full font-bold transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .group:hover .animate-marquee, .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </article>
  );
};

export default Clients;

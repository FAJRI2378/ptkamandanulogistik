import React, { useState, useEffect } from "react";
import {
  Ship,
  Globe,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

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



  const partnershipBenefits = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "STCW-certified seafarers with proven track records",
    },
    {
      icon: TrendingUp,
      title: "Reliable Service",
      description: "98% client satisfaction and repeat business",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Strategic partnerships across major shipping routes",
    },
    {
      icon: Ship,
      title: "Industry Expertise",
      description: "Specialized in various vessel types and operations",
    },
  ];

  return (
    <article className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <header
          className={`text-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          {/* Decorative Background Elements */}
          <div
            className="absolute top-20 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-float"
            aria-hidden="true"
          ></div>
          <div
            className="absolute top-32 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10 animate-float-delayed"
            aria-hidden="true"
          ></div>

          {/* Badge */}
          <div className="mb-4 sm:mb-6 px-4">
            <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg border border-blue-400/20">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              <span>Trusted by Industry Leaders</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A2540] mb-4 sm:mb-6 leading-tight px-4">
            Our Valued{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Partners
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Connecting Professional Seafarers with Global Maritime Leaders
          </p>

          <blockquote className="max-w-2xl mx-auto bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg italic text-sm sm:text-base text-gray-700 shadow-sm px-4">
            "Building lasting partnerships through excellence, reliability, and
            unwavering commitment to maritime safety and professionalism."
          </blockquote>

          <div
            className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto mt-6 sm:mt-8 rounded-full shadow-lg"
            aria-hidden="true"
          />
        </header>

        

        {/* Partnership Benefits Section */}
        <section
          className={`mb-16 sm:mb-20 md:mb-24 ${isVisible ? "scale-in" : "opacity-0"}`}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] mb-3 sm:mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of working with PT Kamandanu Jaya Samudera
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Partner Logos Section - Enhanced */}
        <section
  className={`mb-16 sm:mb-20 md:mb-24 relative ${isVisible ? "scale-in" : "opacity-0"}`}
>
  <div className="text-center mb-6 sm:mb-8 md:mb-12 px-4">
    <span className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">
      Trusted by Industry Leaders
    </span>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] mb-3 sm:mb-4">
      Our <span className="text-blue-600">Esteemed Partners</span>
    </h2>
    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
      Collaborating with leading shipping companies worldwide
    </p>
  </div>

  {/* Marquee 1 - Moving Left */}
  <div className="relative mb-6 sm:mb-8 md:mb-12">
    <div className="flex overflow-hidden bg-white rounded-xl sm:rounded-2xl border-2 border-gray-100 py-4 sm:py-6 md:py-8 shadow-lg">
      <div className="flex animate-marquee whitespace-nowrap space-x-8 sm:space-x-12 md:space-x-16 items-center px-4 sm:px-8">
        {[...scrollerLogos, ...scrollerLogos, ...scrollerLogos].map(
          (img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 h-14 sm:h-16 md:h-20 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <img
                src={img}
                alt={`Partner Logo ${index + 1}`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ),
        )}
      </div>
    </div>
    {/* Gradient Fade */}
    <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none rounded-l-xl sm:rounded-l-2xl"></div>
    <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none rounded-r-xl sm:rounded-r-2xl"></div>
  </div>

  {/* Marquee 2 - Moving Right */}
  <div className="relative">
    <div className="flex overflow-hidden bg-white rounded-xl sm:rounded-2xl border-2 border-gray-100 py-4 sm:py-6 md:py-8 shadow-lg">
      <div className="flex animate-marquee-reverse whitespace-nowrap space-x-8 sm:space-x-12 md:space-x-16 items-center px-4 sm:px-8">
        {[...scrollerLogos, ...scrollerLogos, ...scrollerLogos]
          .reverse()
          .map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 h-14 sm:h-16 md:h-20 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <img
                src={img}
                alt={`Partner Logo ${index + 1}`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </div>
    {/* Gradient Fade */}
    <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none rounded-l-xl sm:rounded-l-2xl"></div>
    <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none rounded-r-xl sm:rounded-r-2xl"></div>
  </div>
</section>
        {/* Call to Action - Mobile Optimized */}
        <section
          className={`pb-12 sm:pb-16 md:pb-20 lg:pb-24 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}
        >
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div
              className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl -z-0"
              aria-hidden="true"
            ></div>
            <div
              className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-cyan-400/10 rounded-full blur-3xl -z-0"
              aria-hidden="true"
            ></div>

            <div className="relative z-10">
              <Ship className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 mx-auto mb-3 sm:mb-4 md:mb-6 text-cyan-300" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
                Become Our Partner
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed px-4">
                Join our network of global maritime leaders and experience
                world-class crew manning solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  Contact Us Today
                </a>
                <a
                  href="/services"
                  className="inline-block bg-transparent text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-bottom {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .slide-in-bottom {
          animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .scale-in {
          animation: scale-in 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </article>
  );
};

export default Clients;

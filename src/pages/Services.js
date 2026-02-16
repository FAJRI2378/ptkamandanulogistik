import React, { useState, useEffect } from "react";
import {
  Ship,
  Users,
  FileCheck,
  Anchor,
  Wrench,
  Plane,
} from "lucide-react";
import Seo from "../components/Seo";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Users,
      title: "Crew Manning Services",
      description:
        "We provide high-quality seafarers for all ranks — from deck & engine officers to ratings. Our experienced crew management team is ready to meet your specific vessel requirements.",
      features: [
        "Officers & Engineers",
        "Ratings & Support Crew",
        "Complete Vessel Manning",
        "Experienced Crew Managers",
      ],
    },
    {
      icon: Ship,
      title: "Vessel Types We Serve",
      description:
        "We serve various types of commercial vessels, tankers, offshore fleets, and specialized ships with personnel compliant with international maritime regulations.",
      features: [
        "Bulk, Container & General Cargo",
        "Tankers (Crude, Product, Chem-Oil, LPG)",
        "FPSO & Offshore Fleets",
        "Cruise & Specialized Vessels",
      ],
    },
    {
      icon: Wrench,
      title: "Repair & Maintenance Teams",
      description:
        "Our certified technical teams are ready for rapid deployment for ship repairs, maintenance, and offshore projects — including welders, fitters, and painters.",
      features: [
        "Welders, Fitters & Platers",
        "Engine & Electrical Fitters",
        "Painters, Blasters & Insulators",
        "Certified & Travel-Ready Personnel",
      ],
    },
    {
      icon: FileCheck,
      title: "Documentation & Flag State Services",
      description:
        "We assist with maritime documentation, certifications, and international regulatory compliance through our affiliations with various maritime administrations.",
      features: [
        "Flag State Documents",
        "Seaman Books & Certificates",
        "Marlins Testing",
        "STCW Compliance",
      ],
    },
    {
      icon: Plane,
      title: "Travel & Visa Assistance",
      description:
        "Comprehensive services for visa processing, flight ticketing, and crew travel logistics to ensure smooth mobilization and demobilization worldwide.",
      features: [
        "US C1/D & Transit Visas",
        "Flight Booking",
        "Travel Documentation",
        "Short-Notice Deployment",
      ],
    },
    {
      icon: Anchor,
      title: "Training & Additional Services",
      description:
        "We support seafarer competency through specialized training programs and other support services tailored to the needs of the maritime industry.",
      features: [
        "English & Mandarin Short Courses",
        "Seafarer Training Programs",
        "Juridical Assistance",
        "Seafarer Advisory Services",
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Our Services | PT Kamandanu Jaya Samudera - Crew Manning Agency"
        description="Quality crew manning services, ship repair teams, maritime documentation, crew visa & travel, and seafarer training for global operations."
        url="/services"
      />

         <section
  className="min-h-screen pt-36 sm:pt-40 md:pt-48 lg:pt-56 py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50"
  aria-labelledby="licenses-heading"
>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 md:mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540] tracking-tight">
              Our Services
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reliable crew manning solutions and maritime support for commercial, tanker, offshore, and specialized vessels worldwide.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`
                    bg-white rounded-2xl shadow-md hover:shadow-xl 
                    transition-all duration-300 hover:-translate-y-2
                    border border-gray-100 overflow-hidden
                    ${isVisible ? "animate-scale-in" : "opacity-0 translate-y-8"}
                    stagger-${index + 1}
                  `}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                      {/* Icon */}
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl flex-shrink-0 mx-auto sm:mx-0">
                        <Icon className="h-9 w-9 sm:h-10 sm:w-10 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
                          {service.description}
                        </p>

                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                          {service.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scale-in {
            from { opacity: 0; transform: scale(0.95) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          .animate-scale-in {
            animation: scale-in 0.7s ease-out forwards;
          }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
          .stagger-5 { animation-delay: 0.5s; }
          .stagger-6 { animation-delay: 0.6s; }

          @media (max-width: 640px) {
            .animate-scale-in {
              animation-duration: 0.6s;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Services;
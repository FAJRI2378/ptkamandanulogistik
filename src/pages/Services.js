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
        "The main objective of PT Kamandanu Jaya Samudera is to provide quality assured crew manning services by supplying qualified, capable, and experienced seafarers of all ranks, from officers and engineers to ratings. Our experienced crew managers are able to fulfill individual crew requests or provide complete vessel manning.",
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
        "We provide officers and ratings for a wide range of vessels managed or owned by our clients, covering commercial shipping, tanker fleets, offshore vessels, and specialized marine units.",
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
        "We supply highly qualified and experienced repair teams consisting of certified technical personnel for ship repair, maintenance, and offshore projects. All personnel hold valid STCW certificates, valid visas, and are available for short-notice deployment.",
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
        "We assist our clients in obtaining all required maritime documents and certifications. As affiliated agents of several maritime administrations, we ensure full compliance with international regulations.",
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
        "Our company provides complete travel and visa assistance services to ensure smooth crew mobilization and demobilization worldwide.",
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
        "We support continuous improvement of seafarer competence through training programs and advisory services tailored to industry requirements.",
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
      {/* ✅ SEO */}
      <Seo
        title="Our Services | PT Kamandanu Jaya Samudera - Crew Manning Agency"
        description="PT Kamandanu Jaya Samudera provides quality assured crew manning services, vessel staffing, repair teams, maritime documentation, visa assistance, and seafarer training for global maritime operations."
        url="/services"
      />

      <section className="py-20 bg-white min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 ${
              isVisible ? "slide-in-bottom" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality assured crew manning and maritime support services for
              commercial, offshore, and specialized vessels worldwide
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 1}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-4 rounded-lg flex-shrink-0">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#0A2540] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animations */}
        <style>
          {`
            @keyframes slide-in-bottom {
              from { transform: translateY(50px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            @keyframes scale-in {
              from { transform: scale(0.85); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .slide-in-bottom {
              animation: slide-in-bottom 0.8s ease-out forwards;
            }
            .scale-in {
              animation: scale-in 0.8s ease-out forwards;
            }
            .stagger-1 { animation-delay: 0.1s; }
            .stagger-2 { animation-delay: 0.2s; }
            .stagger-3 { animation-delay: 0.3s; }
            .stagger-4 { animation-delay: 0.4s; }
            .stagger-5 { animation-delay: 0.5s; }
            .stagger-6 { animation-delay: 0.6s; }
          `}
        </style>
      </section>
    </>
  );
};

export default Services;

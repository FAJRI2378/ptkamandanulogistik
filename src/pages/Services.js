import React, { useState, useEffect } from "react";
import { Ship, Users, FileCheck, Anchor } from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Our Services - PT Kamandanu Jaya Samudera";
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      icon: Ship,
      title: "Ship Management Services",
      description:
        "Comprehensive vessel management including technical operations, maintenance planning, regulatory compliance, and crew management. We ensure your vessels operate at peak efficiency with full adherence to international maritime standards including ISM Code and SOLAS requirements.",
      features: [
        "Technical Management",
        "Crew Management",
        "Safety & Compliance",
        "Maintenance Planning",
      ],
    },
    {
      icon: Users,
      title: "Crew Manning Solutions",
      description:
        "Professional seafarer recruitment, training, and deployment services. Our extensive network provides qualified, STCW-certified crew members for all vessel types. We handle complete crew management from recruitment to repatriation with 24/7 support.",
      features: [
        "STCW Certified Crew",
        "Global Deployment",
        "Training Programs",
        "24/7 Crew Support",
      ],
    },
    {
      icon: FileCheck,
      title: "Maritime Documentation",
      description:
        "Complete documentation processing for seafarers and vessels including certifications, licenses, visa processing, and regulatory compliance. We streamline all paperwork to ensure smooth operations and full legal compliance for international voyages.",
      features: [
        "Certificate Processing",
        "Visa Services",
        "License Renewal",
        "Flag State Compliance",
      ],
    },
    {
      icon: Anchor,
      title: "Vessel Operations",
      description:
        "Full operational support for commercial vessels including voyage planning, port operations, bunker procurement, and logistics coordination. Our experienced team ensures efficient, cost-effective vessel operations across global trade routes.",
      features: [
        "Voyage Planning",
        "Port Operations",
        "Bunker Management",
        "Logistics Support",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Our Maritime Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive shipping solutions for vessel owners, operators, and charterers
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
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
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

      <style>
        {`
          @keyframes slide-in-bottom {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes scale-in {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .slide-in-bottom { animation: slide-in-bottom 0.8s ease-out forwards; }
          .scale-in { animation: scale-in 0.8s ease-out forwards; }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
        `}
      </style>
    </section>
  );
};

export default Services;
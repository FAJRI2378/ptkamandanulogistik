import React, { useState, useEffect } from "react";
import { Award, Globe, Users, CheckCircle } from "lucide-react";
import Seo from "../components/Seo";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "ISO Certified Operations",
      description:
        "Full compliance with international quality, safety, and environmental standards",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Extensive reach across Southeast Asia, Middle East, and international waters",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Highly experienced maritime professionals and STCW-certified seafarers",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Over 15 years of excellence in crew manning and ship management services",
    },
  ];

  return (
    <>
      {/* ✅ SEO META */}
      <Seo
        title="About Us - PT Kamandanu Jaya Samudera | Crew Manning Agency"
        description="PT Kamandanu Jaya Samudera is a trusted crew manning agency and ship management company in Indonesia, providing certified seafarers and professional maritime services since 2008."
        url="/about"
      />

      <section className="py-20 bg-gray-50 min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${
              isVisible ? "slide-in-bottom" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              About PT Kamandanu Jaya Samudera
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in maritime excellence since 2008
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={isVisible ? "slide-in-left" : "opacity-0"}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6">
                Premier Crew Manning & Ship Management Company
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                PT Kamandanu Jaya Samudera is a professional crew manning agency
                and ship management company based in Jakarta, Indonesia. With
                over 15 years of industry experience, we provide comprehensive
                maritime solutions for vessel owners and operators worldwide.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Our core services include crew manning with STCW-certified
                seafarers, vessel management, maritime documentation processing,
                and operational support for cargo ships, tankers, bulk carriers,
                and container vessels.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We operate under ISO-certified management systems and strictly
                comply with international maritime regulations including ISM
                Code, SOLAS, and MLC standards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {whyChooseUs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                        isVisible ? "scale-in" : "opacity-0"
                      } stagger-${idx + 1}`}
                    >
                      <Icon className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[#0A2540] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`space-y-6 ${isVisible ? "slide-in-right" : "opacity-0"}`}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-blue-500" />
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as the most trusted crew manning and ship
                  management company in Indonesia and Southeast Asia.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-blue-500" />
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Delivering reliable maritime services through professional
                  crew management, operational excellence, and strict adherence
                  to international safety and environmental standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes slide-in-left {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-in-right {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-in-bottom {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes scale-in {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
          .slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
          .slide-in-bottom { animation: slide-in-bottom 0.8s ease-out forwards; }
          .scale-in { animation: scale-in 0.8s ease-out forwards; }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
        `}</style>
      </section>
    </>
  );
};

export default About;

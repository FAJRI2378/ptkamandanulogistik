import React, { useEffect, useState } from "react";
import { Award, Globe, Users, CheckCircle } from "lucide-react";
import Seo from "../components/Seo";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    "Recruitment and selection of qualified seafarers",
    "Coordination of global manning offices",
    "Crew training and development programs",
    "Payroll and accounting services",
    "Cost control and budget monitoring",
    "Protection & Indemnity (P&I) insurance follow-up",
    "Compliance monitoring (medical, visa, certificates)",
    "Travel arrangements and crew change coordination",
  ];

  return (
    <>
      {/* SEO */}
      <Seo
        title="Our Company - PT Kamandanu Jaya Samudera | Crewing & Manning Agency"
        description="PT Kamandanu Jaya Samudera is a professional crewing and manning agency based in North Jakarta, Indonesia, providing certified seafarers and full crew management services."
        url="/about"
      />

      <section className="py-20 bg-gray-50 min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className={`text-center mb-16 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Company
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-4" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud of our history and committed to the future
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* LEFT */}
            <div className={isVisible ? "slide-in-left" : "opacity-0"}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6">
                Crewing & Manning Agency
              </h2>

              <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                <strong>PT Kamandanu Jaya Samudera</strong> is located at Jl. Warakas 3
                No.23, RT.010 RW.004, 2nd Floor, North Jakarta, Indonesia.
              </p>

              <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                We are in the business of attracting, developing, and retaining
                the best set of crew for our clients. Our management centers are
                supported by global manning offices to recruit skilled seafarers
                and coordinate all crewing requirements efficiently.
              </p>

              <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                With an extensive crewing network and access to a large pool of
                qualified seafarers, we are able to supply competent crew for a
                wide range of vessel types operating in domestic and
                international waters.
              </p>
            </div>

            {/* RIGHT */}
            <div className={`space-y-6 ${isVisible ? "slide-in-right" : "opacity-0"}`}>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-blue-500" />
                  Extensive Crewing Network
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With a pool of thousands of registered seafarers and access to
                  multiple manning offices, we provide reliable and competent
                  crew tailored to vessel requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-blue-500" />
                  Crew Management System
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our centralized crew management system stores all seafarer
                  data including certificates, medical records, visas, and
                  training history, ensuring full compliance with international
                  maritime regulations.
                </p>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className={`mb-20 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-8 text-center">
              Our Crewing Services Include
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-lg transition-all"
                >
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VISION & MISSION */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Award className="h-6 w-6 mr-3 text-blue-500" />
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
               We strive to be the most successful maritime manning agency, delivering excellence in seaman recruitment and professional crew management services worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                <Globe className="h-6 w-6 mr-3 text-blue-500" />
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
• Continuously deliver high-quality products and services that meet and exceed customer needs through a rigorous and professional selection process.</p>

<p>• Develop competent and skilled employees by creating a positive and supportive working environment that encourages performance excellence and ensures customer satisfaction.</p>

<p>• Provide the best customer service by valuing individuals, fostering strong cooperation, and consistently striving to achieve the highest standards of service quality.</p>
              
            </div>
          </div>
        </div>

        {/* ANIMATION */}
        <style>{`
          @keyframes slide-in-left {
            from { transform: translateX(-80px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-in-right {
            from { transform: translateX(80px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-in-bottom {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
          .slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
          .slide-in-bottom { animation: slide-in-bottom 0.8s ease-out forwards; }
        `}</style>
      </section>
    </>
  );
};

export default About;

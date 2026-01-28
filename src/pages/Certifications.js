import React, { useState, useEffect } from "react";
import { Camera, X } from "lucide-react";
import Seo from "../components/Seo";

import serti from "../img/serti.png";
import onboard1 from "../img/onboard1.png";
import onboard2 from "../img/onboard2.png";
import onboard3 from "../img/onboard3.png";
import onboard4 from "../img/onboard4.png";
import onboard5 from "../img/onboard5.png";
import onboard6 from "../img/onboard6.png";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const certifications = [
    {
      name: "ISO 9001:2015",
      issuer: "BSI Group",
      validUntil: "14 January 2026",
      category: "Quality Management",
      image: serti,
      description:
        "ISO 9001:2015 certification demonstrates our commitment to quality management systems and consistent excellence in crew manning and ship management services.",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Seo
        title="Certifications | PT Kamandanu Jaya Samudera"
        description="PT Kamandanu Jaya Samudera holds internationally recognized certifications including ISO 9001:2015, demonstrating compliance with global maritime quality and crew management standards."
        url="/certifications"
      />

      <section className="py-20 bg-white min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "slide-in-bottom" : "opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Certifications & Compliance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications demonstrating our commitment to quality,
              safety, and maritime excellence.
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4" />
          </div>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCertificate(cert)}
                className={`bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer ${
                  isVisible ? "scale-in" : "opacity-0"
                }`}
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`ISO Certificate ${cert.name}`}
                    className="h-full w-full object-contain bg-white p-4 transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-bold text-[#0A2540]">
                      {cert.name}
                    </h2>
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                      {cert.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {cert.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Issuer</span>
                      <span className="font-semibold text-gray-700">
                        {cert.issuer}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Valid Until</span>
                      <span className="font-semibold text-gray-700">
                        {cert.validUntil}
                      </span>
                    </div>
                  </div>

                  <button className="mt-5 w-full flex items-center justify-center border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 rounded-lg font-semibold transition-all duration-300">
                    <Camera className="h-4 w-4 mr-2" />
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#0A2540]">
                    {selectedCertificate.name}
                  </h3>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <img
                    src={selectedCertificate.image}
                    alt={`Official certificate ${selectedCertificate.name}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <p className="text-gray-700 mb-6">
                  {selectedCertificate.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                  <div><strong>Issuer:</strong> {selectedCertificate.issuer}</div>
                  <div><strong>Valid Until:</strong> {selectedCertificate.validUntil}</div>
                  <div><strong>Category:</strong> {selectedCertificate.category}</div>
                </div>

                <h4 className="font-bold text-[#0A2540] mb-4 flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-blue-500" />
                  Documentation & Verification Process
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[onboard1, onboard2, onboard3, onboard4, onboard5, onboard6].map(
                    (img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Certification documentation ${i + 1}`}
                        className="rounded-lg object-cover hover:scale-105 transition"
                        loading="lazy"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ANIMATION */}
        <style>{`
          @keyframes slide-in-bottom {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes scale-in {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .slide-in-bottom { animation: slide-in-bottom .8s ease-out forwards; }
          .scale-in { animation: scale-in .6s ease-out forwards; }
        `}</style>
      </section>
    </>
  );
};

export default Certifications;

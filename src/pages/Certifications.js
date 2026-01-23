import React, { useState, useEffect } from "react";
import { Camera, X } from "lucide-react";
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
    document.title = "Certifications - PT Kamandanu Jaya Samudera";
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const certifications = [
    {
      name: "ISO 9001:2015",
      issuer: "BSI Group",
      validUntil: "2026-01-14",
      category: "Quality Management",
      image: serti,
      description:
        "International standard for quality management systems ensuring consistent quality in ship management services",
    },
  ];

  return (
    <section className="py-20 bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Our Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Internationally recognized certifications demonstrating our commitment to excellence
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCertificate(cert)}
              className={`bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group cursor-pointer ${
                isVisible ? "scale-in" : "opacity-0"
              } stagger-${index + 1}`}
            >
              <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={cert.image}
                  alt={`Maritime Certificate ${cert.name}`}
                  className="h-full w-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-[#0A2540]">{cert.name}</h3>
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    {cert.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Issuer:</span>
                    <span className="font-semibold text-gray-700">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Valid Until:</span>
                    <span className="font-semibold text-gray-700">{cert.validUntil}</span>
                  </div>
                </div>

                <button className="mt-5 w-full text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-500 py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <Camera className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                    {selectedCertificate.name}
                  </h3>
                  <p className="text-gray-600">{selectedCertificate.category} Certificate</p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="h-96 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedCertificate.image}
                  alt={`Official Document ${selectedCertificate.name}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <p className="text-gray-700 mb-4">{selectedCertificate.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                <div>
                  <span className="font-semibold">Issuer:</span> {selectedCertificate.issuer}
                </div>
                <div>
                  <span className="font-semibold">Valid Until:</span>{" "}
                  {selectedCertificate.validUntil}
                </div>
                <div>
                  <span className="font-semibold">Category:</span> {selectedCertificate.category}
                </div>
              </div>

              {/* Collection Documentation */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-bold text-[#0A2540] mb-4 flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-blue-500" />
                  Collection & Verification Documentation
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[onboard1, onboard2, onboard3, onboard4, onboard5, onboard6].map(
                    (img, index) => (
                      <div
                        key={index}
                        className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200"
                      >
                        <img
                          src={img}
                          alt={`Collection documentation ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )
                  )}
                </div>

                <div className="mt-4 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="text-xs text-blue-700">
                    * The photos above show our professional crew members during the certificate
                    verification and collection process at our headquarters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
        `}
      </style>
    </section>
  );
};

export default Certifications;
import React, { useState, useEffect } from "react";
import {
  Monitor,
  GraduationCap,
  Coffee,
  Shield,
  Users,
  Car,
  CheckCircle,
  ChevronRight,
  X,
  Building,
} from "lucide-react";

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    document.title = "Our Facilities - PT Kamandanu Jaya Samudera";
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const officeFacilities = [
    {
      name: "Operations Control Center",
      description:
        "24/7 monitoring and control center equipped with advanced tracking systems",
      icon: Monitor,
      features: [
        "Real-time Vessel Tracking",
        "Weather Monitoring",
        "Communication Systems",
        "Emergency Response",
      ],
    },
    {
      name: "Training Facility",
      description:
        "State-of-the-art training center for seafarer certification and skill development",
      icon: GraduationCap,
      features: [
        "Simulator Room",
        "Classroom Training",
        "Safety Drills",
        "STCW Certification",
      ],
    },
    {
      name: "Crew Lounge",
      description:
        "Comfortable lounge area for crew rest and recreation during office visits",
      icon: Coffee,
      features: [
        "Refreshment Area",
        "Entertainment System",
        "WiFi Access",
        "Rest Rooms",
      ],
    },
    {
      name: "Medical Center",
      description:
        "Fully-equipped medical facility for crew health check-ups and emergency care",
      icon: Shield,
      features: [
        "Medical Check-ups",
        "First Aid",
        "Health Records",
        "Emergency Care",
      ],
    },
    {
      name: "Conference Rooms",
      description:
        "Modern meeting spaces equipped with video conferencing capabilities",
      icon: Users,
      features: [
        "Video Conference",
        "Presentation Systems",
        "Capacity 50 people",
        "Catering Service",
      ],
    },
    {
      name: "Transportation",
      description: "Company transportation for crew and staff mobility",
      icon: Car,
      features: [
        "Airport Transfer",
        "Port Shuttle",
        "City Transport",
        "24/7 Availability",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Our Office Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities designed to support our maritime operations and crew
            welfare
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeFacilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer ${
                  isVisible ? "scale-in" : "opacity-0"
                } stagger-${index + 1}`}
                onClick={() => setSelectedFacility(facility)}
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-24 w-24 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 text-blue-500 hover:text-blue-700 font-semibold text-sm flex items-center group">
                    View Details{" "}
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Facility Modal */}
      {selectedFacility && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                    {selectedFacility.name}
                  </h3>
                  <p className="text-gray-600">Office Facility</p>
                </div>
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="h-96 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <Building className="h-32 w-32 text-gray-400" />
              </div>
              <p className="text-gray-700 mb-4">{selectedFacility.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg mb-2">Features:</h4>
                {selectedFacility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    {feature}
                  </div>
                ))}
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
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
          .stagger-5 { animation-delay: 0.5s; }
          .stagger-6 { animation-delay: 0.6s; }
        `}
      </style>
    </section>
  );
};

export default Facilities;
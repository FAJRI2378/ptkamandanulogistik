import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail,Clock } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - PT Kamandanu Jaya Samudera";
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#0A2540] via-blue-900 to-[#0A2540] relative overflow-hidden min-h-screen pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 md:mb-16 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 px-4">
            Contact PT Kamandanu Jaya Samudera
          </h2>
          <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto px-4">
            Visit our office location and get in touch for maritime services
          </p>
          <div className="w-20 md:w-24 h-1 bg-blue-400 mx-auto mt-3 md:mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* GOOGLE MAPS */}
          <div
            className={`bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
              isVisible ? "slide-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Office Location
            </h3>

            <div className="rounded-lg md:rounded-xl overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3967.087314341997!2d106.87599327498948!3d-6.118948593867709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMDguMiJTIDEwNsKwNTInNDIuOSJF!5e0!3m2!1sen!2sid!4v1768891106036!5m2!1sen!2sid"
                width="100%"
                height="300"
                className="md:h-[450px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="PT Kamandanu Jaya Samudera Office Location"
              />
            </div>
          </div>

          {/* CONTACT INFO */}
          <div
            className={`space-y-4 md:space-y-6 ${isVisible ? "slide-in-right" : "opacity-0"}`}
          >
            <div className="bg-white/10 backdrop-blur-md p-5 md:p-8 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 md:space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="bg-blue-500 p-2.5 md:p-3 rounded-lg group-hover:bg-blue-400 transition-colors flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                      Head Office
                    </h4>
                    <p className="text-blue-100 text-sm md:text-base">Jakarta, Indonesia</p>
                    <p className="text-blue-100 text-sm md:text-base">
                     	Jl. Warakas 3 No.23 RT 010 RW 004 2nd floor North Jakarta, Indonesia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="bg-blue-500 p-2.5 md:p-3 rounded-lg group-hover:bg-blue-400 transition-colors flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                      Phone & WhatsApp
                    </h4>
                    <a
                      href="tel:+6281311922417"
                      className="text-blue-100 text-sm md:text-base hover:text-blue-200 transition-colors block"
                    >
                      Office: (021) 43938505 
                    </a>
                    <a
                      href="https://wa.me/6281311922417"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 text-sm md:text-base hover:text-blue-200 transition-colors block"
                    >
                      WhatsApp: +62 813 1192 2417
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="bg-blue-500 p-2.5 md:p-3 rounded-lg group-hover:bg-blue-400 transition-colors flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-base md:text-lg mb-1">Email</h4>
                    <a
                      href="mailto:info@kamandanujayasamudera.com"
                      className="text-blue-100 text-sm md:text-base hover:text-blue-200 transition-colors block break-all"
                    >
                      info@kamandanujayasamudera.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
<div className="flex items-start space-x-3 md:space-x-4 group">
  <div className="bg-blue-500 p-2.5 md:p-3 rounded-lg group-hover:bg-blue-400 transition-colors flex-shrink-0">
    <Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />
  </div>
  <div className="flex-1 min-w-0">
    <h4 className="text-white font-semibold text-base md:text-lg mb-1">
      Business Hours
    </h4>
    <p className="text-blue-100 text-sm md:text-base">
     	Monday – Saturday 9:00-17:00 Sunday we closed
    </p>
  </div>
</div>


              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6 md:mt-8">
                <a
                  href="https://wa.me/6281311922417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg text-sm md:text-base font-semibold"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:info@kamandanujayasamudera.com"
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg text-sm md:text-base font-semibold"
                >
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
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
          .slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
          .slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
          .slide-in-bottom { animation: slide-in-bottom 0.8s ease-out forwards; }
        `}
      </style>
    </section>
  );
};

export default Contact;
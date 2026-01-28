import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { Award, Ship, Users, TrendingUp } from "lucide-react";
import Seo from "../components/Seo";

const Home = () => {
  const [statsValue, setStatsValue] = useState({});
  const [animated, setAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const stats = useMemo(
    () => [
      { number: 15, suffix: "+", label: "Years Experience", icon: Award },
      { number: 50, suffix: "+", label: "Vessels Served", icon: Ship },
      { number: 10000, suffix: "+", label: "Seafarers Pool", icon: Users },
      { number: 98, suffix: "%", label: "Client Satisfaction", icon: TrendingUp },
    ],
    []
  );

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const animateStats = useCallback(() => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 60;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setStatsValue((prev) => ({
          ...prev,
          [index]: Math.floor(current),
        }));
      }, 16);
    });
  }, [stats]);

  useEffect(() => {
    if (isVisible && !animated) {
      animateStats();
      setAnimated(true);
    }
  }, [isVisible, animated, animateStats]);

  return (
    <>
      {/* ✅ SEO */}
      <Seo
        title="PT Kamandanu Jaya Samudera | Crew Manning Agency Indonesia"
        description="PT Kamandanu Jaya Samudera is a professional crew manning agency engaged in recruitment, deployment, and management of qualified seafarers for domestic and international vessels."
        url="/"
      />

      <div className="min-h-screen bg-white">
        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex flex-col justify-center bg-[#0A2540] overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
            >
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <h1
              className={`text-5xl lg:text-7xl font-bold text-white ${
                isVisible && "slide-in-left"
              }`}
            >
              PT Kamandanu Jaya Samudera
              <span className="block text-2xl mt-4 text-blue-300 font-normal">
                CREW MANNING & SEAFARER RECRUITMENT AGENCY
              </span>
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-2xl leading-relaxed">
              A professional service company engaged in the recruitment,
              deployment, and management of qualified and experienced seafarers,
              supporting maritime operations and global economic growth.
            </p>

            <Link
              to="/about"
              className="inline-block mt-10 px-10 py-4 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition"
            >
              Learn More
            </Link>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center"
                  >
                    <Icon className="mx-auto mb-3 text-blue-400" />
                    <div className="text-3xl font-bold text-white">
                      {statsValue[index] ?? stat.number}
                      {stat.suffix}
                    </div>
                    <div className="text-blue-200 text-xs uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= COMPANY PROFILE ================= */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
                Company Profile
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                KAMANDANU JAYA SAMUDERA is a professional service company engaged
                in the recruitment and deployment of seafarers, as well as other
                supporting services related to maritime operations.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We exist in the midst of global economic development and
                increasing competition in the maritime industry. Therefore, we
                position ourselves as a key supporting factor in driving global
                economic growth by fulfilling the increasing demand for
                professional and competent seafarers, especially in the energy
                and shipping sectors.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our company is supported by experienced professionals in their
                respective fields, maritime experts who provide consultation,
                and a fully computerized system that ensures accurate, up-to-date
                information related to all our operational activities.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to delivering excellent service with the smile
                of our entire staff, providing reliable, professional, and
                work-ready seafarers while ensuring full compliance with
                applicable regulations and safeguarding all entrusted assets.
              </p>
            </div>

            <div className="bg-blue-600 text-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <ul className="space-y-4 text-lg">
                <li>✔ Professional and experienced seafarers</li>
                <li>✔ Strong commitment to service excellence</li>
                <li>✔ Computerized and transparent management system</li>
                <li>✔ Compliance with maritime regulations</li>
                <li>✔ Reliable support for your maritime operations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "./service.constants";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-700 mb-4 font-sans">
          Specialized Services
        </h2>
        <p class="text-lg text-slate-500 mb-12 font-mono">
          Tailored Solutions for Unique Research Needs
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* <!-- Cards --> */}
          {services.map((service) => (
            <div
              key={service.title}
              data-aos="fade-up"
              class="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div class="w-full h-60 overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  class="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <div class="p-6">
                <h3 class="text-xl font-semibold text-slate-700 mb-2 text-center font-sans">
                  {service.title}
                </h3>
                <p class="text-slate-500 text-center font-mono">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

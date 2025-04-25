import React from "react";
import { Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
          Transforming Healthcare Through Innovation
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Pioneering breakthroughs in clinical research to advance patient care and 
          pharmaceutical development across India and beyond.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-12 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Clinical Research Excellence</h3>
          <p className="text-slate-600 leading-relaxed">
            Leading the way in conducting high-quality clinical trials and developing 
            innovative pharmaceutical solutions that meet global standards.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Healthcare Innovation</h3>
          <p className="text-slate-600 leading-relaxed">
            Leveraging cutting-edge technology and research methodologies to transform 
            healthcare delivery and patient outcomes.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Global Collaboration</h3>
          <p className="text-slate-600 leading-relaxed">
            Fostering partnerships with healthcare providers, research institutions, and 
            industry experts to drive medical advancement.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 mb-20 text-white">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg opacity-90">Clinical Trials</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-lg opacity-90">Research Partners</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default AboutPage;

import React from "react";

const Mission = () => {
  return (
    <div>
      {/* Mission Overview Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">
          Our Mission and Purpose
        </h2>
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="mb-6 leading-relaxed">
            Our mission at Ziola Research is to advance medical science through rigorous 
            clinical research, fostering collaboration between healthcare providers and 
            research institutions while maintaining the highest standards of patient care 
            and ethical practices.
          </p>
        </div>
      </div>

      {/* Key Focus Areas */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Research Excellence</h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Conducting high-quality clinical trials</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Developing innovative research methodologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Ensuring data integrity and compliance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Implementing rigorous quality control</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Patient Care</h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Prioritizing patient safety and well-being</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Developing patient-centric solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Improving treatment outcomes</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Enhancing healthcare accessibility</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl text-white">
          <h3 className="text-xl font-bold mb-4">Quality</h3>
          <p className="opacity-90">
            Maintaining the highest standards in research methodology and execution
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-8 rounded-xl text-white">
          <h3 className="text-xl font-bold mb-4">Ethics</h3>
          <p className="opacity-90">
            Upholding integrity and transparency in all our operations
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 rounded-xl text-white">
          <h3 className="text-xl font-bold mb-4">Innovation</h3>
          <p className="opacity-90">
            Continuously pushing boundaries to develop breakthrough solutions
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white p-12 rounded-xl shadow-lg text-center">
        <h3 className="text-3xl font-bold text-slate-800 mb-6">
          Join Us in Our Mission
        </h3>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Together, we can advance medical science and improve healthcare outcomes 
          for patients across India and beyond.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Partner With Us
        </button>
      </div>
    </div>
  );
};

export default Mission;

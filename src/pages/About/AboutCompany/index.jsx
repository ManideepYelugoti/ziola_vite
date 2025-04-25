import React from "react";

const AboutCompany = () => {
  return (
    <div>
      {/* Company Overview Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">
          Ziola Research is a name and a movement
        </h2>
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="mb-6 leading-relaxed">
            Founded in 2015, Ziola Research emerged from a vision to revolutionize healthcare 
            through precision medicine and innovative clinical research. Our name represents our 
            commitment to bringing advanced medical solutions to patients in need across India 
            and beyond.
          </p>
          <p className="leading-relaxed">
            We are built to provide specialized expertise and capabilities that can help realize 
            the life-changing potential of the latest medical discoveries. Our state-of-the-art 
            facilities and dedicated team of experts work tirelessly to advance medical science 
            and improve patient outcomes.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Research Services</h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Clinical trials management and execution</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Biomarker development and validation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Advanced data analytics and reporting</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Regulatory compliance and documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Quality assurance and control</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Expertise</h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Oncology and rare disease research</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Pharmaceutical development</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Biospecimen management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Clinical data management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Research collaboration</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Patients in need have no time to waste
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let's work together to advance medical science and improve patient care.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutCompany;

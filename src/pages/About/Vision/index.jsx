import React from "react";

const Vision = () => {
  return (
    <div>
      {/* Vision Overview Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">
          Our Vision for the Future
        </h2>
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="mb-6 leading-relaxed">
            At Ziola Research, we envision a future where innovative clinical research 
            transforms healthcare delivery and patient outcomes. Our vision is to be the 
            leading force in advancing medical science through groundbreaking research 
            and collaboration.
          </p>
        </div>
      </div>

      {/* Vision Pillars */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Innovation Leadership</h3>
          <p className="text-slate-600">
            Leading the development of innovative research methodologies and 
            breakthrough medical solutions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Global Impact</h3>
          <p className="text-slate-600">
            Expanding our reach beyond India to make a lasting impact on 
            global healthcare through research excellence.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Collaborative Growth</h3>
          <p className="text-slate-600">
            Building strong partnerships with healthcare providers and research 
            institutions to accelerate medical advancement.
          </p>
        </div>
      </div>

      {/* Strategic Goals */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-white mb-20">
        <h3 className="text-2xl font-bold mb-8">Strategic Goals</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <span>Establish centers of excellence in key therapeutic areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <span>Develop cutting-edge research infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <span>Foster international research collaborations</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <span>Accelerate drug development timelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <span>Enhance patient care through research</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <span>Lead in adopting innovative technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

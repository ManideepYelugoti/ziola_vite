import React from 'react';

const Management = () => {
  return (
    <section className="my-20 px-4 md:px-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white font-sans">Our Management</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* First Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image path
            alt="Dr. Ramya Muthyala"
            className="mx-auto rounded-full mb-6 w-32 h-32 object-cover"
          />
          <h3 className="text-2xl font-semibold text-slate-800">Dr. Ramya Muthyala</h3>
          <p className="text-lg text-slate-600 font-mono">CEO & Managing Director</p>
        </div>

        {/* Second Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image path
            alt="MVS Pavan Kumar"
            className="mx-auto rounded-full mb-6 w-32 h-32 object-cover"
          />
          <h3 className="text-2xl font-semibold text-slate-800">MVS Pavan Kumar</h3>
          <p className="text-lg text-slate-600 font-mono">Executive Director</p>
        </div>
      </div>
    </section>
  );
};

export default Management;

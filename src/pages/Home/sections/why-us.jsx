import React from "react";
import {
  FaCheckCircle,
  FaRegHandshake,
  FaFlask,
  FaUserMd,
} from "react-icons/fa";

const WhyUs = () => {
  const reasons = [
    {
      title: "Comprehensive IRB/EC Compliance",
      description:
        "We ensure all research activities are compliant with ethical standards, providing peace of mind for study sponsors and stakeholders.",
      icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    },
    {
      title: "Wide Range of Sample Processing Capabilities",
      description:
        "ZIOLA is equipped to process a diverse variety of biological samples, ensuring flexibility for any research study.",
      icon: <FaFlask className="text-blue-600 text-3xl" />,
    },
    {
      title: "Proven Track Record in Clinical Trials",
      description:
        "Our extensive experience in managing clinical trials from inception to completion establishes our reliability and success.",
      icon: <FaRegHandshake className="text-blue-600 text-3xl" />,
    },
    {
      title: "Specialized Expertise in PBMC and Tissue Processing",
      description:
        "Our focused expertise in relevant processing techniques is a key differentiator that enhances research outcomes.",
      icon: <FaUserMd className="text-blue-600 text-3xl" />,
    },
  ];

  return (
    <section className="my-20 px-4 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 font-sans">
          Why Choose Ziola?
        </h2>
        <p className="text-slate-500 mt-2 font-mono">
          We stand out for our commitment to quality and expertise in research
          support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="mb-6">{reason.icon}</div>
            <h3 className="text-2xl font-semibold text-slate-800 font-sans">
              {reason.title}
            </h3>
            <p className="text-slate-600 mt-4 font-mono">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

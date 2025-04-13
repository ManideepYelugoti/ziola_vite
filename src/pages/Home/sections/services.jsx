import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { services } from "./constants/main-services.constants";

import "./styles/cube.css";
import ServiceSVG from "../../../assets/svg/Retrospective.jpg";
import ClinicalTrailsJPG from "../../../assets/svg/services01.jpg";
import ProspectiveIMG from "../../../assets/svg/Prospective.jpg";
import { ReactTyped } from "react-typed";
import {
  clinicalTrailItems,
  prospectiveItems,
  retrospectiveItems,
} from "./constants/service.constants";
import Accordions from "@/components/Accordions";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isVisible] = useScrollReveal();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="mt-24 px-6 sm:px-10 md:px-20 lg:px-32">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-700 mb-4 font-sans">
          Our Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 mb-4 sm:mb-6 font-mono leading-snug sm:leading-relaxed">
          At Ziola Research Labs, we provide a comprehensive range of research
          support services tailored to meet the diverse needs of academic,
          clinical, and pharmaceutical research.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 mb-4 sm:mb-8 font-mono leading-snug sm:leading-relaxed">
          Our offerings are categorized into three core areas:{" "}
          <ReactTyped
            strings={["Retrospective", "Prospective", "Clinical Trials"]}
            typeSpeed={40}
            backSpeed={30}
            loop
            style={{
              fontFamily: "Space Mono",
              fontSize: "1.25rem",
              color: "rgb(51 65 85)",
            }}
          >
            <input type="text" readOnly className="border-none text-center" />
          </ReactTyped>
        </p>
      </div>

      <div className="mt-12 flex flex-col-reverse md:flex-row gap-8">
        {/* Left Section (Text + Accordion) */}
        <div className="md:w-1/2">
          <h5 className="text-xl md:text-2xl text-center md:text-left font-bold text-slate-700 mb-4 font-sans">
            Retrospective
          </h5>
          <p className="font-mono text-sm md:text-base text-center md:text-left text-slate-500 mb-6">
            Our retrospective services involve the use of pre-existing data and
            biological samples to support research and analysis. This includes:
          </p>

          <Accordions data={retrospectiveItems} />
        </div>

        {/* Right Section (Optional image/illustration placeholder) */}
        <div className="md:w-1/2 flex justify-center items-center">
          {/* Optional: Insert an image, SVG or animation here */}
          <img
            src={ServiceSVG}
            alt="Retrospective Illustration"
            className={`w-[75%] h-[95%] hidden md:block mt-10 rounded-[50%]`}
          />
        </div>
      </div>
      <div className="mt-12 flex flex-col-reverse md:flex-row gap-8">
        <div className="md:w-1/2 flex justify-center items-center ">
          {/* Optional: Insert an image, SVG or animation here */}
          <img
            src={ProspectiveIMG}
            alt="Retrospective Illustration"
            className={`w-[80%] h-[95%] hidden md:block rounded-[50%]`}
          />
        </div>
        <div className="md:w-1/2">
          <h5 className="text-xl md:text-2xl text-center md:text-left font-bold text-slate-700 mb-4 font-sans">
            Prospective
          </h5>
          <p className="font-mono text-sm md:text-base text-center md:text-left text-slate-500 mb-6">
            Our prospective services support forward-looking research studies,
            designed to collect new data and samples in real time, with full
            regulatory and ethical compliance. This includes:
          </p>

          <Accordions data={prospectiveItems} />
        </div>
      </div>
      <div className="mt-12 flex flex-col-reverse md:flex-row gap-8">
        <div className="md:w-1/2">
          <h5 className="text-xl md:text-2xl text-center md:text-left font-bold text-slate-700 mb-4 font-sans">
            Clinical Trails
          </h5>
          <p className="font-mono text-sm md:text-base text-center md:text-left text-slate-500 mb-6">
            We offer end-to-end support for clinical research through a
            comprehensive suite of services tailored to ensure quality,
            compliance, and efficiency at every stage of the trial lifecycle:
          </p>

          <Accordions data={clinicalTrailItems} />
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          {/* Optional: Insert an image, SVG or animation here */}
          <img
            src={ClinicalTrailsJPG}
            alt="Retrospective Illustration"
            className={`max-w-full h-auto hidden md:block mt-10`}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

export const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Remove if you only want it to trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

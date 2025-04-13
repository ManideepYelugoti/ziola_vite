import { useScrollReveal } from '@/pages/Home/sections/services';
import React, { useState } from 'react'

const Accordions = ({data}) => {
      const [openIndex, setOpenIndex] = useState(null);
      const [ref, isVisible] = useScrollReveal();
    
      const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className="space-y-4">
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      ref={ref}
                      className={`
            border border-slate-300 rounded-lg overflow-hidden shadow-sm 
            transition-all duration-700 ease-out
            ${isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-[-20px]"}
          `}
                      style={{
                        animationDelay: `${index * 150}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <button
                        onClick={() => toggle(index)}
                        className="w-full text-left px-4 py-3 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 font-semibold font-sans text-slate-800 flex justify-between items-center"
                      >
                        {item.title}
                        <span className="text-xl">
                          {openIndex === index ? "−" : "+"}
                        </span>
                      </button>
                      {openIndex === index && (
                        <div className="px-4 py-3 font-mono text-slate-600 text-sm sm:text-base bg-white">
                          {item.description}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
  )
}

export default Accordions
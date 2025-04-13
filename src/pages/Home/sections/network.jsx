import React from 'react';
import NetworkJPG from '../../../assets/network2.jpg';
import { useInView } from 'react-intersection-observer';

const Network = () => {
    const { ref, inView } = useInView({
      threshold: 0.4,
      triggerOnce: false, // animate every time on scroll
    });
  
    const oncologists = useCountUpOnView(75, inView);
    const pathologists = useCountUpOnView(45, inView);
    const surgical = useCountUpOnView(30, inView);
    const diagnostic = useCountUpOnView(20, inView);
  
    return (
      <section ref={ref} className="my-20 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 font-sans">Our Network</h2>
          <p className="text-slate-500 mt-2 font-mono">we are Present across <strong>6 continents</strong> and <strong>10 countries</strong></p>
        </div>
  
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-slate-600 font-mono leading-relaxed">
              We have established partnerships with over <strong>50+</strong> cancer and multispecialty hospitals across India.
              Our extensive investigator network includes:
            </p>
  
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-700">{oncologists}+</h3>
                <p className="text-slate-500 text-sm font-mono">Oncologists</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-700">{pathologists}+</h3>
                <p className="text-slate-500 text-sm font-mono">Pathologists</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-700">{surgical}+</h3>
                <p className="text-slate-500 text-sm font-mono">Surgical Pathologists</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-700">{diagnostic}+</h3>
                <p className="text-slate-500 text-sm font-mono">Diagnostic Centers</p>
              </div>
            </div>
  
            <p className="text-slate-600 font-mono mt-16 leading-relaxed">
              In addition, we collaborate with more than <strong>20+</strong> pharmaceutical companies, biotechnology firms, CROs,
              and research institutes. Our clients are globally distributed across <strong>6 continents</strong> and <strong>10 countries</strong>.
            </p>
          </div>
  
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={NetworkJPG}
              alt="Network Illustration"
              className="max-w-full h-auto hidden md:block rounded-3xl"
            />
          </div>
        </div>
      </section>
    );
  };
export default Network;


// hooks/useCountUp.js
import { useEffect, useState } from 'react';

const useCountUpOnView = (target, inView, duration = 2000) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!inView) {
        setCount(0); // reset count when not in view
        return;
      }
  
      let start = 0;
      const end = parseInt(target);
      if (start === end) return;
  
      const incrementTime = Math.floor(duration / end);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
  
      return () => clearInterval(timer);
    }, [target, duration, inView]);
  
    return count;
  };



import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import React from "react";

import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import Projects from "./sections/projects";
import Services from "./sections/services";
import SpecializedServices from "./sections/specialized-services";
import Network from "./sections/network";
import Management from "./sections/management";
import WhyUs from "./sections/why-us";

3;
const images = [slider1, slider2, slider3, slider4];

const Home = () => {
  return (
    <div>
      <div class="flex flex-wrap max-w-8xl mx-auto px-4 sm:px-4 lg:px-8 mt-3">
        <div class="w-full md:w-2/4 p-4 flex-col items-center justify-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-600 leading-relaxed text-center md:text-left max-w-xl opacity-0 animate-fade-in">
            Revolutionizing Patient Care Innovations
          </h1>

          <p class="mt-10 font-mono text-xl text-slate-600 text-center md:text-left opacity-0 animate-fade-in delay-200">
            Pioneering breakthroughs in clinical research for enhanced patient
            care and advanced pharmaceutical innovations in India.
          </p>
          <button class="mt-10 text-white bg-blue-700 px-6 py-3 font-mono rounded-sm mx-auto md:mx-0 block">
            Explore Innovations
          </button>
        </div>

        <div class="w-full md:w-1/4 p-2 ">
          <AutoScrollCarousel
            images={images}
            direction="top"
            size="w-full h-96"
          />
        </div>
        <div class="w-full md:w-1/4 p-2 ">
          <AutoScrollCarousel
            images={images}
            direction="bottom"
            size="w-full h-96"
          />
        </div>
      </div>
      <Services  width={1000} height={600} />
      <SpecializedServices/>
     <Projects />
     <Network/>
     <Management/>
     <WhyUs/>
    </div>
  );
};

export default Home;

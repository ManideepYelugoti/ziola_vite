import AOS from "aos";
import React, { useEffect } from "react";

import projectsImage from '../../../assets/projects/projects.jpg'
import { projects } from "./constants/projects.constants";

import "./styles/project.style.css";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section class="py-12 bg-gray-50">
      <div class="text-center mb-8 px-4">
        <h2 class="text-3xl font-bold text-slate-800 font-sans">Our Projects</h2>
        <p class="text-slate-500 mt-2 font-mono">Our completed projects catalog</p>
      </div>

      <div class="relative py-10">
    <img src={projectsImage} alt="Projects Background" class="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
    <div class="overflow-hidden relative">
      <div class="flex space-x-6 animate-scroll px-4 hover:[animation-play-state:paused] w-max">
        {projects.map((project) => (
          <div key={project.title} class="flex-shrink-0 text-center w-72 sm:w-80">
            <div class="bg-white p-6 rounded-full shadow-md mx-auto w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-4 text-2xl sm:text-3xl">
              {project.icon}
            </div>
            <h4 class="font-semibold text-slate-700 text-lg px-2 font-sans">{project.title}</h4>
            <p class="text-sm text-slate-500 px-2 font-mono">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
    </section>
  );
};

export default Projects;

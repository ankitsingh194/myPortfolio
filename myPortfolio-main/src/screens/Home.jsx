import React  from "react";
import LandingPageComponent from "../components/landingpage";

import MernStackInfo from "../components/TechStack";
import FAQ from "../components/FandQsection";

import avatar from '../assets/avatar.webp'


// https://portfolioofankitsingh.netlify.app/

const LandingPage = () => {

 

  const scrollToFooter = () => {
    window.open("https://www.linkedin.com/in/ankit-singh-8583ab192/", "_blank");
  }



  return (
<section className="p-1">
  <div className="relative flex flex-col items-center text-white py-2 bg-transparent bg-cover bg-center">
    {/* Background animation */}
    <div className="area absolute inset-0 z-0 overflow-hidden">
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>

    {/* Main content */}
    <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl px-2 lg:mt-[36px] gap-10 mt-1 mb-10">
      {/* Text Section */}
      <div className="w-[90%] lg:w-[55%] text-center lg:text-left lg:ml-2">
        <h1 className="lg:text-4xl  text-2xl md:text-5xl font-bold leading-tight">
          MERN Stack Developer
        </h1>
        <p className="mt-4 p-3 text-md lg:text-lg md:text-xl">
          Hey there! I'm Ankit Singh, a <span className="font-bold">dedicated MERN stack developer</span> who loves turning complex ideas into elegant, <span className="font-bold">full-stack web solutions.</span>
        </p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <button
            className="bg-blue-500 px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform"
            onClick={() => scrollToFooter()}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[45%] flex justify-center">
        <img
          src={avatar}
          alt="Ankit Singh"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-lg transition-transform hover:scale-105 object-cover"
        />
      </div>
    </div>
  </div>

  {/* Other Components */}
  <div className="mt-10">
    <LandingPageComponent />
  </div>
  <div className="pt-4 lg:mt-[-40px] 2xl:mt-[-40px]  w-full">
    <MernStackInfo />
  </div>
  <div className="mt-6">
    <FAQ />
  </div>
</section>

  );
};

export default LandingPage;

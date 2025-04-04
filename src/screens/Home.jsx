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
    <section className=" p-1" >
    <div className=" bg-transparent   flex flex-col items-center    bg-cover bg-center text-white py-3 " >
    <div class="area">
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
      <div className="flex flex-col md:flex-row items-center justify-between w-10/12 mt-10 ml-[10%] my-[92px] mb-[10px]">
        <div className="md:w-1/2 text-center md:text-left pb-[9rem]   ">
          <h1 className="text-5xl font-bold text-white leading-tight">
            MERN Stack Developer
          </h1>
          <p className="mt-4  text-white text-2xl">
          Hey there! I'm Ankit Singh a  <span className="font-bold">dedicated MERN stack developer </span> who loves turning complex ideas into elegant,  <span className="font-bold"> full-stack web solutions.</span> 
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-500 p-3 border-none rounded-md shadow-md hover:scale-105 cursor-pointer" onClick={() => scrollToFooter()}>Get in Touch</button>
          </div>
        </div>
        <div className="md:w-1/2   justify-center  md:mt-0  flex mt-[20px] ml-[-25px] ">
          {/* Image or Avatar here */}
          <img src={avatar} alt="Background" className="lg:w-[45%] lg:h-[45%] w-[70%] h-[70%] rounded-full max-w-md  shadow-lg   transition-transform   hover:scale-105" />
        </div>

      </div>
      
    </div>
    <div className=" mt-[20px] lg:mt-[50px]">
    <LandingPageComponent/>
    </div>
   <div className="  mt-[-10px] md:mt-[-80px] md:py-0 lg:py-0 2xl:py-0 w-full">
   <MernStackInfo/>
   </div>
   <div>
   <FAQ />
   </div>
 
    
   
    
    

    </section>
  );
};

export default LandingPage;

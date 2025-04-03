import React  from "react";
import LandingPageComponent from "../components/landingpage";
import ServiceOfferings from "../components/ServiceWeoffer";
import MernStackInfo from "../components/TechStack";
import FAQ from "../components/FandQsection";
import ContactForm from "../components/GetinTouchFrom";
import avatar from '../assets/avatar.png'
import Footer from "../components/Footer";



const LandingPage = () => {

 

  const scrollToFooter = () => {
    window.open("https://www.linkedin.com/in/ankit-singh-8583ab192/", "_blank");
  }



  return (
    <section className=" p-1" >
    <div className=" bg-transparent min-[60vh] flex flex-col items-center    bg-cover bg-center text-white py-10" >
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
      <div className="flex flex-col md:flex-row items-center justify-between w-10/12 mt-10 ml-[10%] my-[92px]">
        <div className="md:w-1/2 text-center md:text-left z-10 ">
          <h1 className="text-6xl font-bold text-white leading-tight">
            MERN Stack Developer
          </h1>
          <p className="mt-4  text-white text-2xl">
          Hello i am   <span className="font-bold">MERN stack developer </span> and My name is  <span className="font-bold">Ankit Singh.</span> 
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-500 p-3 border-none rounded-md shadow-md hover:scale-105 cursor-pointer" onClick={() => scrollToFooter()}>Get in Touch</button>
          </div>
        </div>
        <div className="md:w-1/2   justify-center mt-[-40px] md:mt-0  hidden lg:flex m-[20px]">
          {/* Image or Avatar here */}
          <img src={avatar} alt="Background" className="w-[45%] h-[45%] rounded-full max-w-md  shadow-lg z-10  transition-transform   hover:scale-105" />
        </div>

      </div>
      
    </div>
    <div>
    <LandingPageComponent/>
    </div>
   <div className=" py-[30px] md:py-0 lg:py-0 2xl:py-0">
   <MernStackInfo/>
   </div>
   <div>
   <FAQ />
   </div>
 
    
   
    
    

    </section>
  );
};

export default LandingPage;

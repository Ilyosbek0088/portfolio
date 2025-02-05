import React from "react";
import "../../App.css";
import { FaTelegramPlane, FaLinkedin, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiHtml5, SiRedux, SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { MdJavascript } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoJava, BiLogoJavascript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";

export default function MainPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-4">
      <div className="text-center max-w-4xl w-full relative">
        {/* Greeting Section */}
        <div className="">
        <div data-aos="fade-down-right" data-aos-delay="100" className="absolute top-8 scale-150 left-[-10%]">
          <h1 className=" flex flex-col bg-white  p-2 rounded-lg drop-shadow-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            <span className="text-[15px]">Hello, I am</span> <span className="text-blue-500">👋ILYAAA</span>
          </h1>
          <p data-aos="fade-up-right" data-aos-delay="200" className="scale-75 relative left-8 font-[500] md:text-base lg:text-lg bg-white p-2 rounded-md drop-shadow-2xl text-gray-600 mt-2">
            FRONTEND/REACT DEVELOPER
            
          </p>
        </div>
        {/* Download CV Button */}
        
        <div data-aos="fade-up-right"  data-aos-delay="300" className="absolute top-50 left-18">
          <button className="bg-blue-900  text-white py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Download CV
          </button>
        </div>
        </div>
        {/* 3D Illustration Placeholder */}
        <div className="mt-60 ml-36 ">
          <div data-aos="zoom-in" data-aos-delay="200" className=" image border-[2px] border-solid shadow-2xl border-black scale-150 rounded-full w-48 h-48 mx-auto flex items-center justify-center">
            <span className="text-gray-500"></span>
          </div>
        </div>

        {/* Technology Icons */}
        <div  className="absolute right-10 top-20 flex flex-col gap-10">
          <div  data-aos="fade-down-left" data-aos-delay="400" className="bg-gray-100 p-6 rounded-full shadow-lg w-24 h-24 flex items-center justify-center">
            <RiJavascriptFill  className="text-yellow-500 text-5xl" />
          </div>
          <div  data-aos="fade-left" data-aos-delay="500" className="  relative left-10 bg-gray-100 p-6 rounded-full shadow-lg w-24 h-24 flex items-center justify-center">
            <FaReact  className="text-blue-500 text-5xl" />
          </div>
          <div  data-aos="fade-left" data-aos-delay="600" className=" relative left-10 bg-gray-100 p-6 rounded-full shadow-lg w-24 h-24 flex items-center justify-center">
            <SiHtml5  className="text-orange-600 text-5xl" />
          </div>
          <div  data-aos="fade-up-left" data-aos-delay="700" className="bg-gray-100 p-6 rounded-full shadow-lg w-24 h-24 flex items-center justify-center">
            <FaCss3Alt  className="text-blue-600 text-5xl" />
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div  className="fixed bottom-4 left-4 flex flex-col gap-4">
        <a data-aos="fade-up-right" data-aos-delay="800" href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200">
          <FaTelegramPlane className="text-blue-400 text-3xl" />
        </a>
        <a data-aos="fade-up-right" data-aos-delay="900" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200">
          <FaLinkedin className="text-blue-600 text-3xl" />
        </a>
      </div>
    </div>
  );
}

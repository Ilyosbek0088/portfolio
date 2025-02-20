import React from "react";
import "../../App.css";
import { FaTelegramPlane, FaLinkedin, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

export default function MainPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-4">
      <div className="text-center max-w-6xl w-full relative flex flex-col items-center">
        <div className="mt-20 flex flex-col items-center">
          <h1
            data-aos="fade-down-right"
            data-aos-delay="100"
            className="bg-white p-4 rounded-lg shadow-2xl text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800"
          >
            <span className="text-sm md:text-base">Hello, I am</span> <br />
            <span className="text-blue-500">👋Ilyosbek</span>
          </h1>
          <p
            data-aos="fade-up-right"
            data-aos-delay="200"
            className="bg-white p-3 rounded-md shadow-xl text-gray-600 mt-2 text-sm md:text-lg"
          >
            FRONTEND/REACT DEVELOPER
          </p>
        </div>

        <div data-aos="fade-up-right" data-aos-delay="300" className="mt-6">
          <button className="bg-blue-900 text-white py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Download CV
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="image border-2 shadow-2xl border-black rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 flex items-center justify-center bg-white overflow-hidden"
          ></div>
        </div>

        <div className="mt-20 flex flex-col gap-6 absolute right-2 top-40 md:right-20 md:top-48 lg:right-32 lg:top-56">
          <div data-aos="fade-down-left" data-aos-delay="400" className="bg-gray-100 p-5 md:p-6 lg:p-8 rounded-full shadow-lg w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
            <RiJavascriptFill className="text-yellow-500 text-3xl md:text-4xl lg:text-5xl" />
          </div>
          <div data-aos="fade-left" data-aos-delay="500" className="bg-gray-100 p-5 md:p-6 lg:p-8 rounded-full shadow-lg w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
            <FaReact className="text-blue-500 text-3xl md:text-4xl lg:text-5xl" />
          </div>
          <div data-aos="fade-left" data-aos-delay="600" className="bg-gray-100 p-5 md:p-6 lg:p-8 rounded-full shadow-lg w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
            <SiHtml5 className="text-orange-600 text-3xl md:text-4xl lg:text-5xl" />
          </div>
          <div data-aos="fade-up-left" data-aos-delay="700" className="bg-gray-100 p-5 md:p-6 lg:p-8 rounded-full shadow-lg w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
            <FaCss3Alt className="text-blue-600 text-3xl md:text-4xl lg:text-5xl" />
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-4 md:gap-6 lg:gap-8 bottom-10 left-10">
        <a data-aos="fade-up-right" data-aos-delay="800" href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200">
          <FaTelegramPlane className="text-blue-400 text-2xl md:text-3xl lg:text-4xl" />
        </a>
        <a data-aos="fade-up-right" data-aos-delay="900" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200">
          <FaLinkedin className="text-blue-600 text-2xl md:text-3xl lg:text-4xl" />
        </a>
      </div>
    </div>
  );
}
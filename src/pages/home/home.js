import React from "react";
import "../../App.css";
import { FaTelegramPlane, FaLinkedin, FaReact, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export default function MainPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center">
        {/* Левая часть: текст */}
        <div className="flex flex-col items-start text-left space-y-4">
          <h1 className="bg-white p-4 rounded-lg shadow-xl text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
            <span className="text-2xl mr-2">👋</span> Hello, I am <br />
            <span className="text-black text-3xl font-bold">Ilyosbek</span>
          </h1>
          <p className="bg-white p-3 rounded-md shadow-lg text-gray-600 text-sm md:text-lg">
            FRONTEND/REACT DEVELOPER
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-500 transition">
            Download CV
          </button>
        </div>

        {/* Центральная часть: картинка */}
        <div className="flex justify-center items-center mt-10 md:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white shadow-2xl rounded-full overflow-hidden flex items-center justify-center">
            {/* Тут можно вставить изображение */}
            <img src="/images/developer.png" alt="Developer" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Правая часть: иконки технологий */}
        <div className="flex flex-col space-y-6 items-center mt-10 md:mt-0">
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
            <RiJavascriptFill className="text-yellow-500 text-4xl" />
          </div>
          <div className="w-36 h-36 bg-white rounded-full shadow-lg flex items-center justify-center">
            <FaReact className="text-blue-500 text-8xl" />
          </div>
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
            <FaCss3Alt className="text-blue-600 text-4xl" />
          </div>
        </div>
      </div>

      {/* Соцсети */}
      <div className="fixed bottom-10 left-10 flex flex-col space-y-4">
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200">
          <FaTelegramPlane className="text-blue-400 text-2xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-200">
          <FaLinkedin className="text-blue-600 text-2xl" />
        </a>
      </div>
    </div>
  );
}

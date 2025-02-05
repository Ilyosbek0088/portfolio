import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden w-full flex justify-between items-center px-5 py-4">
      <h1 className="text-xl font-bold">Ekaterina.</h1>
      <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-5">
          <li className="hover:text-black cursor-pointer">HOME</li>
          <li className="hover:text-black cursor-pointer">SKILLS & EXPERIENCE</li>
          <li className="hover:text-black cursor-pointer">MY WORKS</li>
          <li className="hover:text-black cursor-pointer">CONTACT</li>
          <div className="flex gap-2 text-gray-500">
            <span className="text-blue-600 cursor-pointer">EN</span>
            <span className="cursor-pointer">RU</span>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default NavbarMobile;

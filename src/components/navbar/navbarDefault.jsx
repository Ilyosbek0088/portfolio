import React from 'react';

const NavbarDefault = () => {
  return (
    <nav className="hidden lg:flex w-full justify-between items-center px-10 py-4">
      <h1 className="text-xl font-bold">Ilya_beliy</h1>
      <ul className="flex gap-6 text-gray-500">
        <li className="hover:text-black cursor-pointer">HOME</li>
        <li className="hover:text-black cursor-pointer">SKILLS & EXPERIENCE</li>
        <li className="hover:text-black cursor-pointer">MY WORKS</li>
        <li className="hover:text-black cursor-pointer">CONTACT</li>
      </ul>
      <div className="flex gap-2 text-gray-500">
        <span className="text-blue-600 cursor-pointer">EN</span>
        <span className="cursor-pointer">RU</span>
      </div>
    </nav>
  );
};

export default NavbarDefault;

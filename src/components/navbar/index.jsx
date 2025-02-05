import React from 'react';

// Navbar components
import NavbarDefault from './navbarDefault';
import NavbarMobile from './navbarMobile';

const Navbar = () => {
  return (
    <div className="w-full font-[600] flex justify-center items-center">
      <div data-aos="fade-down" className="container mb-5 z-10 backdrop-blur-md bg-transparent w-full h-auto lg:h-[80px] flex justify-center items-center">
        <NavbarDefault />
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;

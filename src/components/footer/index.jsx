import React from 'react';

// footers
import FooterDefault from './footerDefault';
import FooterMobile from './footerMobile';
import Bar2025 from './../../assets/Bar2025.jpg';

const Footer = () => {
  return (
    <div className='w-full mt-10 flex justify-center items-center'>
      <FooterDefault />
      <FooterMobile />
      {/* <span className='text-[20px]'>University-</span>
      <img className='w-16' src={Bar2025} alt="Bar2025" />
      <span className='text-[20px]'>-by-Sweetie</span>
      <br />
      <p className='text-[10px]'>Topper by Sweetie</p>
      <p className='text-[5px]'>designed by myself :)</p> */}
    </div>
  );
};

export default Footer;

import React from 'react';

const FooterLinks = () => {
  return (
    <div className="w-full bg-[#282c34] text-white py-6 flex flex-col items-center">
      {/* Links Section */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        <a href="#about" className="text-sm hover:underline">About</a>
        <a href="#contact" className="text-sm hover:underline">Contact Us</a>
        <a href="#faqs" className="text-sm hover:underline">FAQs</a>
        <a href="#terms" className="text-sm hover:underline">Terms and Conditions</a>
        <a href="#cookie" className="text-sm hover:underline">Cookie Policy</a>
        <a href="#privacy" className="text-sm hover:underline">Privacy</a>
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#facebook" aria-label="Facebook" className="hover:text-blue-400">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#instagram" aria-label="Instagram" className="hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#twitter" aria-label="Twitter" className="hover:text-blue-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#linkedin" aria-label="LinkedIn" className="hover:text-blue-600">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-center">
        Copyright © 2028 - by Sweetie
      </p>
    </div>
  );
};

export default FooterLinks;

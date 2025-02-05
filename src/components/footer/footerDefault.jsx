import React from 'react';
import FooterLinks from './FooterLinks';

const FooterDefault = () => {
  return (
    <div className="hidden md:flex flex-col w-full">
      {/* Newsletter Section */}
      <div className="flex flex-col items-center bg-[#282c34] text-white py-10">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to our newsletter</h2>
        <p className="text-center text-sm mb-6">
          Get expert advice for your journey to university delivered to your inbox each month.
          It's short, and worthwhile – we promise!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 w-80 rounded-md border border-gray-300 focus:outline-none text-black"
          />
          <div className="flex items-start space-x-2">
            <input type="checkbox" id="agree" className="mt-1" />
            <label htmlFor="agree" className="text-sm">
              I confirm I am over 16 and I agree to the Terms and Conditions and Privacy Notice.
            </label>
          </div>
          <button className="bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-blue-600">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* Links Section */}
      <FooterLinks />
    </div>
  );
};

export default FooterDefault;

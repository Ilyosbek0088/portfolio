import React from 'react';

const FooterMobile = () => {
  return (
    <div className="md:hidden w-full flex flex-col items-center bg-gray-700 text-white py-4">
      <h2 className="text-base font-semibold">Subscribe</h2>
      <p className="text-xs text-center mb-3">
        Expert university advice, straight to your inbox.
      </p>
      <div className="flex flex-col items-center space-y-2">
        <input
          type="email"
          placeholder="Email address"
          className="w-11/12 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Subscribe
        </button>
      </div>
      <p className="text-xs mt-3 text-center">
        By subscribing, you agree to the Terms & Conditions.
      </p>
    </div>
  );
};

export default FooterMobile;

import React from "react";
import calendary from '../../assets/calendary-icon-com.png'

const Card2 = () => {
  return (
    <div className="w-80 m-3 bg-[white] border gap-x-2 rounded-sm p-6 shadow-md text-center flex">

{/* ong tomoni  */}

      <div className="flex justify-center mb-4 mt-1 text-4xl text-gray-600 ">
        <span role="img" aria-label="search">
          <img src={calendary} className="w-24" ></img>
        </span>
      </div>

{/* chap tomni uzb sila */}

<div className="">
      <h3 className="text-lg font text-left text-gray-800 mb-2">Find a course</h3>
      <p className="text-sm text-gray-600 mb-4 text-left text-[15px]">
        Search by subject, course or region to find the right course for you.
      </p>
      <a href="#" className= " text-yellow-500 text-left font-semibold text-sm hover:underline" >
        GET STARTED →
      </a> 
</div>


    </div>
  );
};

export default Card2;

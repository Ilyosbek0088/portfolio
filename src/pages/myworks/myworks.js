import React from 'react'

const Myworks = () => {
  return (
    <div className='w-full flex flex-col gap-y-10 bg-blue-50 items-center justify-center py-10 px-4 md:px-10 text-center'>
      <h2 className="text-4xl md:text-6xl font-bold">
        My <span className="text-blue-600">Idols</span>
      </h2>

      <div data-aos="flip-up" className=' img1 w-full max-w-4xl shadow-2xl rounded-lg h-[60vh] md:h-[80vh] bg-white'></div>
      <div data-aos="flip-up" className=' img2 w-full max-w-4xl shadow-2xl rounded-lg h-[60vh] md:h-[80vh] bg-white'></div>
      <div data-aos="flip-up" className=' img3 w-full max-w-4xl shadow-2xl rounded-lg h-[60vh] md:h-[80vh] bg-white'></div>
      <div data-aos="flip-up" className=' img4 w-full max-w-4xl shadow-2xl rounded-lg h-[60vh] md:h-[80vh] bg-white'></div>
      <div data-aos="flip-up" className=' img5 w-full max-w-4xl shadow-2xl rounded-lg h-[60vh] md:h-[80vh] bg-white'></div>
    </div>
  )
}

export default Myworks

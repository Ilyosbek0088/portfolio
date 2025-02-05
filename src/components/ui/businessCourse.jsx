import React from 'react'
import photo from '../../assets/business.png'

const Business = () => {
  return (
    <div className='card container mt-16  max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:flex'>
        <div>
            <img src={photo}></img>
            <h1 className='text-[20px] font-[500]'>Business management</h1>
            <a href="#" className= " uppercase text-yellow-500 text-left font-semibold text-sm hover:underline" >
            SEE COURSE GUIDE →
  </a> 
        </div>
    </div>
  )
}

export default Business
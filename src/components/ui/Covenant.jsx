import React from 'react'
import photo from '../../assets/univer-img-3.png'

const Covenant = () => {
  return (
    <div className='card max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:flex container mt-16'>
        <div>
            <img src={photo}></img>
            <h1 className='text-[20px] font-[500]'>Stanford University</h1>
            <a href="#" className= " uppercase text-yellow-500 text-left font-semibold text-sm hover:underline" >
    See university →
  </a> 
        </div>
    </div>
  )
}

export default Covenant
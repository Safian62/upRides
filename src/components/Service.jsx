import React, { useState } from 'react'
import Data from './CardData'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";

 ""
function Service() {
   const [slide,setSlide]=useState(0)

    const nextSlice=()=>{
        if(Data.length -3 == slide) return false;
        setSlide(slide + 1)
    }
    const prevSlice=()=>{
        if(slide == slide) return false;
        setSlide(slide - 1)
    }

  return (
    <>
    <div className='md:mx-20 mt-20 ml-[30px] ' >
         <div className='px-4 sm:px-8 md:px-16 lg:px-20 mt-20'>
      <div>
        <h3 className='text-sm sm:text-base px-4 py-1 rounded bg-gray-200 inline-block'>
          Our Services
        </h3>

        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold max-w-4xl mt-6 mb-8 leading-tight'>
          Explore Our Various Mobility Solutions for You and Your Business{' '}
          <FaArrowRight className='inline ml-2 text-teal-500' />
        </h1>
      </div>
    </div>
    </div>
     <div className=' flex mr-[50px]  md:flex gap-2 mx-20  '>
            <div onClick={()=>setSlide(prevSlice)} className=' cursor-pointer w-[30px] h-[30px] flex justify-center items-center bg-gray-500  rounded-full'><FaArrowLeft /></div>
            <div onClick={()=> setSlide(nextSlice)} className=' cursor-pointer w-[30px] h-[30px] flex justify-center items-center bg-gray-500 rounded-full'><FaArrowRight /></div>

        </div>
    <div className='flex mb-20 gap-20 overflow-hidden mx-20 mt-20  '>
        {
            Data.map((data,index)=>(
               <div
  className="min-w-[500px] md:min-w-[400px] border-none pt-10 rounded-lg bg-white  
             transition-transform duration-300 ease-in-out 
             hover:-translate-y-3 "
  key={index}
>
  <img className="rounded-xl" src={data.img} alt="" />
  <h1 className="font-bold text-2xl mt-5">{data.name}</h1>
  <p className="mt-5 text-gray-500">{data.description}</p>
  <button className="mt-20 mx-5 border border-teal-400 w-[300px] h-[50px] rounded-xl ml-12 text-teal-400 text-xl">
    Learn More <span><FaArrowUpRightFromSquare className="inline" /></span>
  </button>
</div>


            ))
        }
    </div>

      </>
  )
}

export default Service
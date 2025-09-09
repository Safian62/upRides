
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <div className='w-full h-screen flex flex-col   justify-center items-center '>
      <h1 className='text-5xl text-center font-bold mt-[-10px]  md:px-20 '>Connecting You Globally Using Innovative Technology</h1>
      <button className='h-[60px] bg-teal-400  w-[230px] rounded-3xl mt-[60px] text-white text-xl font-bold duration-300 hover:w-[210px] hover:h-[50px] '>Know More <FaArrowRight className='inline' /> </button>
    </div>
  )
}

export default Header
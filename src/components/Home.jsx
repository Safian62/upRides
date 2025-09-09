import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowRight } from "react-icons/fa";


function Home() {
  return (
   <>
 <div className="h-full flex flex-col sm:flex-row justify-around items-center py-10 px-4 sm:py-20 bg-teal-400">
 
  <div className="flex flex-col justify-around text-center text-white w-full sm:w-1/2 mb-10 sm:mb-0">
    <div className="text-3xl sm:text-5xl lg:text-[65px] font-bold leading-tight">
      Why search when you can see what's trending nearby?
    </div>
    <div className=" flex gap-4 sm:gap-10 text-xl sm:text-3xl ml-[80px] font-bold mt-6">
      <h1>Let's</h1>
      <h1>Take You</h1>
      <h1>There</h1>
    </div>
  </div>


  <div className="h-[400px] sm:w-1/2 flex justify-center">
    <img className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[300px]" src={assets.Home} alt="Trending Nearby" />
  </div>
</div>
    <div className='mt-20 h-[300px] mb-20  sm:mb-10 '>
        <h1 className=' text-center text-[48px] font-bold '>0% Commission. Keep 100% of Your Earnings!</h1>
        <p className='px-10 mt-5 text-center  md:px-[140px]  '>Drive with Uprides and enjoy 0% commission on your trips. Keep everything you earn while benefiting from our advanced platform. Maximise your income and drive with confidence, knowing your hard work pays off every mile, every ride.</p>
        </div>
    <div className='mx-5 mt-[130px] md:mt-[-70px] ' >
        <img src={assets.Driver} alt="" />
    </div>
    <div className='md:flex mt-10 mx-10 sm:flex-row   '>
        <div className='md:w-[45%] sm:w-full  '>
            <h1 className='md:text-5xl  font-bold    '>Affordable Rides, Exceptional Value</h1>
            <p className='md:text-2xl max-w-[450px] mt-5  '>We make getting around easier on your wallet. Enjoy reliable, low-cost trips without compromising comfort or safety. With transparent pricing, no hidden fees, and options that fit every budget, you ride more and spend less.</p>
        </div>
        <div className='md:w-[45%]  sm:w-full mt-[20px] '> <img src={assets.Ride} alt="" /></div>
    </div>
     <div className='md:flex justify-around mx-10 mb-20 mt-20 '>
         <div className='md:w-[45%]'> <img src={assets.Fleet} alt="" /></div>
        <div className='md:w-[45%]'>
            <h1 className='text-2xl  md:text-5xl font-bold mt-20  '>Grow Your Fleet with Uprides</h1>
            <p className='  md:text-2xl text-start max-w-[500px] mt-5 '>Maximise profitability by partnering with Uprides as a fleet owner. Manage multiple vehicles, optimise earnings, and access a steady stream of ride and delivery requests. With our advanced dashboard and seamless payouts, scaling your business has never been easier.</p>
            <button className='mt-5 text-2xl font-bold hover:text-teal-300'>Start Exploring with Uprides <span><FaArrowRight className='inline' /></span></button>
        </div>
       
    </div>
    <div className='m-4 '>
        <img className='rounded' src={assets.Building} alt="" />
    </div>
   </>
  )
}

export default Home

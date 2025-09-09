import React from 'react'
import { assets } from '../assets/assets'

function Explore() {
  return (
    <div>
      <div className='  md:flex px-14 bg-teal-500  '>
        <div className=''><h1 className=' w-full text-2xl   md:text-[50px] mt-10 font-bold text-white'>Explore More with Uprides</h1>
        <p className=' md:w-[80%] font-bold text-xl text-start mt-10 mb-20 text-white  ' >Discover trending locations and hidden gems near you with ease. From must-visit spots to local favourites, We help you navigate the best places effortlessly. Plan your next adventure today and let Uprides take you there!</p>
        </div>
        <div className='md:w-[600px] h-[300px]]'><img className='h-[400px]' src={assets.Explore_i} alt="" /></div>
      </div>
      <div className='md:flex justify-around mx-10 mb-20 mt-20 '>
             <div className='md:w-[40%]'> <img src={assets.Book} alt="" /></div>
              <div className=' md:w-[45%] mt-[100px]'>
                  <h1 className=' text-2xl text-center md:text-5xl font-bold '>Book Rides and Explore The World Around You</h1>
                  <p className='text-center md:text-2xl max-w-[700px] mt-5 '>We see a future where mobility and logistics are boundless, eco-friendly, and accessible. Uprides was created to empower you to explore with purpose and care. When you choose Uprides, you contribute to a more eco-friendly world. Get our app today and experience seamless, sustainable living.</p>
              </div>
             
      </div>
      <div className='mx-5 md:mx-20'>
        <h1 className='text-center font-bold text-5xl'>Move Cleaner And Smarter With Uprides</h1>
        <p className='my-10 text-xl text-center '>We're dedicated to providing a seamless experience for individuals, businesses, and drivers. Take a step and join us on our mission to revolutionise transportation, logistics, and rentals.</p>
        <div className='flex gap-5'>
            <div className='flex flex-col gap-5'> <img className=' transition-all duration-300 transform hover:scale-105 hover:shadow-lg' src={assets.Tree} alt="" />
                  <img className=' transition-all duration-300 transform hover:scale-105 hover:shadow-lg' src={assets.Polester} alt="" />
            </div>
            <div> <img className=' transition-all duration-300 transform hover:scale-105 hover:shadow-lg' src={assets.Toy} alt="" /></div>
            <div className='flex flex-col gap-5' >
                <img className=' transition-all duration-300 transform hover:scale-105 hover:shadow-lg' src={assets.Honda} alt="" />
                <img className=' transition-all duration-300 transform hover:scale-105 hover:shadow-lg' src={assets.Alto} alt="" />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Explore
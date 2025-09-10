import React from 'react'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <>
      <div className="mt-20 py-10 bg-gray-900 text-white w-full">
        
        <div className="max-w-7xl mx-auto px-6 sm:flex sm:flex-col items-center text-center">
          <h2 className="text-2xl font-bold">Ride Smart, Go Anywhere — Download the App Today!</h2>
          <p className="text-xl text-gray-400 mt-4 max-w-xl sm:px-0">
            Book Rides instantly, Track in real-time, and travel safe and hassle-free. Download now and ride smart!
          </p>
        </div>

        
        <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2  md:grid-cols-4 gap-12 font-semibold text-gray-300">
          <div>
            <p className="mb-4 text-white">// Company</p>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-teal-400">About us</a></li>
              <li><a href="#" className="hover:text-teal-400">Newsletter</a></li>
              <li><a href="#" className="hover:text-teal-400">Company Culture</a></li>
              <li><a href="#" className="hover:text-teal-400">Blogs</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-white">// Product</p>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-teal-400">Ride</a></li>
              <li><a href="#" className="hover:text-teal-400">Drive</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-white">// Join Uprides</p>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-teal-400">Franchise</a></li>
              <li><a href="#" className="hover:text-teal-400">Uprides Business</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-white">// Resources</p>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-teal-400">Sustainability</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mt-12 max-w-7xl mx-auto px-6" />

        
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
          <h1 className="font-bold text-3xl mb-4 text-white">Never miss any update</h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Get all the latest news, blog posts and product updates from Uprides delivered directly in your inbox. We only send important emails.
          </p>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center font-bold h-[100px] px-6 sm:px-20 text-white bg-black">
        <h1 className="mb-4 md:mb-0 text-center md:text-left">© 2025 | All rights reserved.</h1>
        <div className="flex justify-center space-x-6 text-4xl">
          <FaFacebookSquare className="cursor-pointer hover:text-teal-400 transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-teal-400 transition-colors" />
        </div>
      </div>
    </>
  )
}

export default Footer

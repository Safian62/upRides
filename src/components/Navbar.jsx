
import { assets } from '../assets/assets.js';
import { IoReorderThree } from "react-icons/io5";


function Navbar() {
  

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black text-gray-300">
      <div className="flex justify-between items-center px-6 py-4 md:px-16">
        
        <div>
          <img className="h-12" src={assets.Logo} alt="Logo" />
        </div>

        
        <ul className="hidden md:flex gap-6 text-lg">
          <a href="Ride">Ride</a>
          <a href="#Drive">Drive</a>
          <a href="">BOLD Miles</a>
          <a href="">Logistics</a>
          <a href="">Business</a>
          <a href="">About</a>
        </ul>

        
        <div className="hidden md:flex gap-6 items-center">
          <a href="">En-Us</a>
          <a href="">Support</a>
          <a href="">Login</a>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-md">Sign Up</button>
        </div>
        <div><IoReorderThree className='md:hidden text-xl' /></div>
</div>
 
        <div className="hidden md:hidden  flex-col gap-4 px-6 pb-6 text-lg bg-black">
          <a href="">Ride</a>
          <a href="">Drive</a>
          <a href="">BOLD Miles</a>
          <a href="">Logistics</a>
          <a href="">Business</a>
          <a href="">About</a>
          <a href="">En-Us</a>
          <a href="">Support</a>
          <a href="">Login</a>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-md w-full">Sign Up</button>
        </div>
       
</div>
       

    
  )};


export default Navbar;


      
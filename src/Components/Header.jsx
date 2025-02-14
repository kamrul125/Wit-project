import React from 'react';
import { CiMail, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='bg-[#7E33E0] text-white py-4'>
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap justify-between items-center">
          
          {/* Left: Email & Phone */}
          <div className="flex flex-wrap items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <CiMail />
              <p className="hidden sm:block">mhhasanul@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FiPhoneCall />
              <p className="hidden sm:block">(12345)67890</p>
            </div>
          </div>

          {/* Right: Language, Currency, Login, Icons */}
          <div className="flex flex-wrap items-center gap-4 text-lg">
            <div>
              <select className="bg-transparent border-none outline-none">
                <option className='bg-[#7E33E0] text-white'>English</option>
                <option className='bg-[#7E33E0] text-white'>Bangla</option>
                <option className='bg-[#7E33E0] text-white'>Arabic</option>
                <option className='bg-[#7E33E0] text-white'>Hindi</option>
              </select>
            </div>

            <div>
              <select className="bg-transparent border-none outline-none">
                <option className='bg-[#7E33E0] text-white'>USD</option>
                <option className='bg-[#7E33E0] text-white'>BDT</option>
                <option className='bg-[#7E33E0] text-white'>RIYAL</option>
              </select>
            </div>

            <div className="flex items-center gap-0.5">
              <CiUser className='text-xl' />
              <p className="hidden lg:block">Login</p>
            </div>

            <div className="flex items-center gap-0.5">
              <CiHeart className='text-xl' />
              <p className="hidden sm:block">Wishlist</p>
            </div>

            <div className="flex items-center">
              <CiShoppingCart className='text-xl' />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;

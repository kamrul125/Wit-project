import React from 'react'
import { CiMail, CiUser,CiHeart, CiShoppingCart } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";


const Header = () => {
  return (
    <header className='bg-[#7E33E0] text-white py-3'>
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <div className=" flex items-center gap-2">
            <CiMail />
            <p>mhhasanul@gmail.com</p>
            </div>
            <div className=" flex items-center gap-2">
            <FiPhoneCall/>
              <p>(12345)67890</p>
            </div>
          </div>
          <div className=" ">
            <ul className='flex items-center gap-4'>
              <li className='flex items-center gap-2'>
              <select name="" id="" className='bg-transparent'>
                  <option value="" className='bg-[#7E33E0]' >English <FaAngleDown /></option>
                  <option value="" className='bg-[#7E33E0]' > Bangla <FaAngleDown /></option>
                  <option value="" className='bg-[#7E33E0]' > Arabic <FaAngleDown /></option>
                  <option value="" className='bg-[#7E33E0]' > Hindi <FaAngleDown /></option>
                </select>
              </li>
              <li className='flex items-center gap-2'> 
                <select name="" id="" className='bg-transparent'>
                  <option value="" className='bg-[#7E33E0]' >USD <FaAngleDown /></option>
                  <option value="" className='bg-[#7E33E0]' >BDT <FaAngleDown /></option>
                  <option value="" className='bg-[#7E33E0]' >RIYAL <FaAngleDown /></option>
                </select>
               </li>
              <li className='flex items-center gap-2'>Login <CiUser/></li>
              <li className='flex items-center gap-2'>Wishlist <CiHeart/></li>
              <li className='flex items-center gap-2'> <CiShoppingCart className='text-[ 25px ]' /></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

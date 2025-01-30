import React from 'react'

import Hekto from '../assets/images/Hekto.png'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
   
    <nav  className=' py-4' >
       <div className="container mx-auto">
         <div className=" flex items-center gap-20 justify-between">
         <div className="">
            <img src= {Hekto} alt="Hekto" />
        </div>
        <div className="  ">
            <ul className='  flex items-center gap-10'>
                <li >Home </li>
                <li> Page </li>
                <li> Products</li>
                <li>Blog</li>
                <li> Shop </li>
                <li> Contact </li>
            </ul>
        </div>
        <div className=" flex items-center">
            <input type=" email" className='border-2 text-[#E7E6EF] outline-none w-64 h-8 pl-4 ' />
            <button className='h-8 w-14 bg-[#FB2E86] flex justify-center items-center' ><CiSearch className='text [25px] text-white'/>
            </button>
        </div>
         </div>
       </div>
    </nav>

  )
}

export default Navbar

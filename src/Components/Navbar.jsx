import React from 'react'

import Hekto from '../assets/images/Hekto.png'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

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
            <li><Link to="/">Home</Link></li>
                <li><Link to="/ProductPage">Products</Link></li>
                <li> Pages</li>
                <li><Link to="/BlogPage">Blog</Link></li>
                <li><Link to="/ShopPage">Shop</Link></li>
                <li><Link to="/ContactPage">Contact</Link></li>
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

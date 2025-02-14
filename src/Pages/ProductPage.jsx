import React from 'react'
import Daco from '../assets/images/Daco.png'
import Rectangle from '../assets/images/Rectangle.png'
import RectangleOne from '../assets/images/RectangleOne.png'
import RectangleTwo from '../assets/images/RectangleTwo.png'
import Bag from '../assets/images/Bag.png'
import Mens from '../assets/images/Mens.png'
import Mestonix from '../assets/images/Mestonix.png'


import { FaRegStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const ProductPage = () => {
  return (
    <>
       <section className=' flex items-center bg-[#F6F5FF] h-[286px]'>
       <div className="container mx-auto ">
        <h2 className=' font-semibold text-[36px]'>Product Details</h2>
        <div className="">
        <ul className='flex gap-2'>
          <li >Home</li>
          <li>Page</li>
          <li className='text-primary' >Product Details</li>
        </ul>

        </div>
      </div>
       </section>
       <section className='py-20 flex '>
        <div className="container mx-auto flex items-center justify-center ">
          <div className="flex shadow-2xl shadow-gray-200 rounded-2xl p-6 bg-white   gap-8 w-[1170px] h-[460px] items-center  ">
          <div className=" flex items-center gap-4 ">
            <div className=" ">
               <img className='mb-4 ' src= {Rectangle} alt="#" />
               <img className='mb-4' src= {RectangleOne} alt="RectangleOne" />
               <img src={RectangleTwo} alt="RectangleTwo" />
            </div>
            <div className="  ">
            <img className='h-[425px] w-[400px] ' src={Bag} alt="Bag" />
            </div>
          </div>
          <div className="  ">
             <h1 className=' josefin Sans font-semibold text-[36px]  ' >Playwood arm chair</h1>
             <div className=" flex items-center text-amber-400 gap-2 mb-2  "><FaRegStar  /><FaRegStar />
             <FaRegStar /><FaRegStar /><FaRegStar /><p className='text-[#151875]  ' >(22)</p></div>
            <div className="flex gap-4 mb-4 ">
            <p className='text-[#151875] text-[12px] ' >$32.00 </p>
            <p className='text-primary text-[12px] ' >$32.00</p>
            </div>
            <div className="">
              <h1 className=' josefin Sans font-semibold text-[16px] mb-4 ' >Color</h1>
              <p className=' text-[#A9ACC6] mb-4 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
            </div>
            <div className=" flex items-center gap-4 ml-14 mb-2">
              <h3 className='text-[#151875] font-semibold ' >Add To cart</h3>
              <CiHeart />
            </div>
            <div className="">
              <h3 className=' font-semibold text-[#151875] ' >Categories:</h3>
              <h3 className=' font-semibold text-[#151875]  ' >Tags</h3>
            </div>
            <div className=" flex items-center gap-4 ">
              <h3 className='text-[#151875] ' >Share</h3>
              < FaFacebook className='text-[#151875] ' />
              <FaLinkedin className='text-primary' />
              <FaTwitter className='text-[#151875] ' />
            </div>
          </div>
          </div>
        </div>
       </section>
       <section className='bg-[#F9F8FE] py-20 '>
        <div className="container mx-auto  ">
          <div className=" flex items-center relative left-20  gap-16 text-[24px] text-[#151875] mb-10 font-semibold ">
            <h1 className='underline'>Description</h1>
            <h1>Additional Info</h1>
            <h1>Reviews</h1>
            <h1>Video</h1>
          </div>
          <div className="  mb-10 text-center ">
            <h1 className=' text-start relative left-20 text-[24px] text-[#151875] mb-4 font-semibold ' >Varius tempor.</h1>
            <p className='text-[#A9ACC6] text-[16px] ' >Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.</p> 
            <p className='text-[#A9ACC6] text-[16px]' >Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus</p>
            <p className='text-[#A9ACC6] text-[16px] ' >cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              
          </div>
          <div className="">
            <h1 className=' relative left-20  mb-4 text-[#151875] text-[24px] font-semibold ' >More details</h1>
            <div className=" relative left-20  ">
             <p className='flex items-center gap-2 text-[#A9ACC6] mb-2  '> <FaArrowRight className='text-black' /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . </p>
            <p className='flex items-center gap-2 text-[#A9ACC6] mb-2 ' > <FaArrowRight className='text-black' />  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . </p>
             <p className='flex items-center gap-2 text-[#A9ACC6] mb-2 ' > <FaArrowRight className='text-black' />  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . </p>
            <p className='flex items-center gap-2 text-[#A9ACC6] mb-2 ' > <FaArrowRight className='text-black' />  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr . </p>
            </div>
          </div>

        </div>
       </section>
       <section className='py-20' >
        <div className="container mx-auto  ">
          <h1 className=' relative left-20 font-semibold text-[36px] mb-8 ' >Related Products</h1>
          <div className=" flex items-center gap-4 mb-20 justify-center ">
            <div className="">
            <img className='mb-' src={Mens} alt="Mens" />
           <div className=" flex items-center gap-11 ">
           <div className="">
            <h1 className='mt-2 mb-2 text-[16px] font-semibold text-[#151875] ' >Mens Fashion Wear</h1>
            <h6 className='text-[#151875] ' >$43.00</h6>
            </div>
            
            <div className=" flex items-center text-[13px] text-amber-400 gap-1 mt-[-25px]  ">
              <FaRegStar  /><FaRegStar /> <FaRegStar /><FaRegStar /><FaRegStar className='text-[#B2B2B2]' />
            </div>
            
           </div>
            </div>
            <div className="">
            <img className='mb-' src={Mens} alt="Mens" />
           <div className=" flex items-center gap-11 ">
           <div className="">
            <h1 className='mt-2 mb-2 text-[16px] font-semibold text-[#151875] ' >Mens Fashion Wear</h1>
            <h6 className='text-[#151875] ' >$43.00</h6>
            </div>
            
            <div className=" flex items-center text-[13px] text-amber-400 gap-1 mt-[-25px]  ">
              <FaRegStar  /><FaRegStar /> <FaRegStar /><FaRegStar /><FaRegStar className='text-[#B2B2B2]' />
            </div>
            
           </div>
            </div>

            <div className="">
            <img className='mb-' src={Mens} alt="Mens" />
           <div className=" flex items-center gap-11 ">
           <div className="">
            <h1 className='mt-2 mb-2 text-[16px] font-semibold text-[#151875] ' >Mens Fashion Wear</h1>
            <h6 className='text-[#151875] ' >$43.00</h6>
            </div>
            
            <div className=" flex items-center text-[13px] text-amber-400 gap-1 mt-[-25px]  ">
              <FaRegStar  /><FaRegStar /> <FaRegStar /><FaRegStar /><FaRegStar className='text-[#B2B2B2]' />
            </div>
            
           </div>
            </div>
            <div className="">
            <img className='mb-' src={Mens} alt="Mens" />
           <div className=" flex items-center gap-11 ">
           <div className="">
            <h1 className='mt-2 mb-2 text-[16px] font-semibold text-[#151875] ' >Mens Fashion Wear</h1>
            <h6 className='text-[#151875] ' >$43.00</h6>
            </div>
            
            <div className=" flex items-center text-[13px] text-amber-400 gap-1 mt-[-25px]  ">
              <FaRegStar  /><FaRegStar /> <FaRegStar /><FaRegStar /><FaRegStar className='text-[#B2B2B2]' />
            </div>
            
           </div>
            </div>
           
          </div>
          <div className=" flex justify-center ">
            <img src={Mestonix} alt="Mestonix" />
          </div>
        </div>
       </section>


    </>
  )
}

export default ProductPage

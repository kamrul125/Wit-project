import React from 'react'
import { FaCircle } from "react-icons/fa";

import Doll from '../assets/images/Doll.png'



const ContactPage = () => {
  return (
    <>
      <section className=' flex items-center bg-[#F6F5FF] h-[286px]'>
       <div className="container mx-auto ">
        <h2 className=' font-semibold text-[36px]'> Contact Us </h2>
        <div className="">
        <ul className='flex gap-2'>
          <li >Home</li>
          <li>Page</li>
          <li className='text-primary' >Contact Us </li>
        </ul>

        </div>
      </div>
       </section>
       <section>
        <div className="container mx-auto py-20 ">
           <div className=" flex   gap-20  w-[1190px] h-[440px]  mx-auto ">
           <div className=" w-[545px]  mb-2  ">
          <h1 className=' font-semibold text-[36px] text-[#151875] ' >Information About us</h1>
          <p className='text-[#8A8FB9] text-[15px] mb-10 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
             Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
             <div className=" flex gap-2  mb-40 ">
             <FaCircle className='text-[#151875]' />
             <FaCircle className='text-primary' />
             <FaCircle className='text-[#37DAF3]' />

             </div>
             <div className="  ">
              <h1 className=' text-[36px] font-semibold text-[#151875] ' >Get In Touch</h1>
              <p className='text-[#8A8FB9] text-[15px]  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
             </div>
         </div>

         <div className=" w-[545px]  mb-2 ">
          <div className="">
          <h1 className=' font-semibold text-[36px] text-[#151875] mb-4 ' >Contact Way</h1>
          </div>
           <div className=" flex items-center gap-8 ">
            <div className="">

            <div className=" mb-8 ">
        
           <div className=" flex gap-4  ">
          <div className=" text-[42px]  text-[#151875]  ">
          <FaCircle />
          </div>
           <div className=" text-[#8A8FB9] ">
           <p>Tel: 877-67-88-99</p>
           <p>E-Mail: shop@store.com</p>

           </div>
           </div>
           </div>
           <div className=" mb-8 ">
        
        <div className=" flex gap-4  ">
       <div className=" text-[42px]  text-[#FFB265]  ">
       <FaCircle />
       </div>
        <div className=" text-[#8A8FB9] ">
        <p>Tel: 20 Margaret st, London</p>
        <p>Great britain, 3NM98-LK</p>

        </div>
        </div>
        </div>

            </div>
            <div className="">
            <div className=" mb-8 ">
        
        <div className=" flex gap-4  ">
       <div className=" text-[42px]  text-primary">
       <FaCircle />
       </div>
        <div className=" text-[#8A8FB9] ">
        <p>Support Forum</p>
        <p>For over 24hr</p>

        </div>
        </div>
        </div>
        <div className=" mb-8 ">
        
        <div className=" flex gap-4  ">
       <div className=" text-[42px]  text-[#1BE982]  ">
       <FaCircle />
       </div>
        <div className=" text-[#8A8FB9] ">
        <p>Free standard shipping</p>
        <p>on all orders.</p>

        </div>
        </div>
        </div>
            </div>
            
          </div>

           
          
         </div>
           </div>
           <div className=" flex gap-4  ">
           <div className=" relative left-11 top-4 "> 
            <form className='space-y-4'>
            {/* Name & Email */}
             <div className=" flex gap-4 mb-6 ">
              <input type="text" placeholder='Your Name' className='w-[255px] py-2 px-2 border border-gray-300 ' />
              <input type="text" placeholder='Your E-mail' className='w-[255px] py-2 px-2 border border-gray-300 ' />
             </div>
              <div className="">
              <input type="text" placeholder='Subject' className='w-[525px] py-2 px-2 border border-gray-300 ' />
              </div>
              <div className=" mb-4 ">
               <textarea  placeholder="Type Your Message*" className='w-[525px] h-[166px] border border-gray-300 px-4 py-4 '  ></textarea>

              </div>
              <div >
                <button className=" bg-primary py-2 px-8 text-white " >Send Mail</button>
              </div>
            </form>
           </div>
           <div className="relative top-[-150px] ">
            <img src={Doll} alt="Doll" />
           </div>
           </div>
        </div>
       </section>
       
    </>
  )
}

export default ContactPage

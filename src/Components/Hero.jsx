import React from 'react'
import Sofa from '../assets/images/Sofa.png'


const Hero = () => {
  return (
   <section className='bg-[#F2F0FF] py-9 '>
      
    <div className="container mx-auto ">
      <div className=" flex items-center justify-between">
      <div className=" w-[60%]">
         <h4 className=' font-lato font-bold text-[16px] text-primary pb-3'>Best Furniture For Your Castle....</h4>
         <h1 className=' font-josefin-sans font-bold text-[56px] pb-3'>New Furniture Collection Trends in 2020</h1>
         <p className=' font-lato font-bold text-[16px] pr-48 text-[#8A8FB9] pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
         in phasellus non in justo.</p>
         <button className='font-josefin-sans font-semibold text-[17px] text-white bg-primary py-4 px-10 ' >Shop now</button>
      </div>
      <div className=" w-[40%]">
        <img className='w-full' src= {Sofa} alt="Sofa" />
      </div>
      </div>
     
    </div>
   </section>
  )
}

export default Hero

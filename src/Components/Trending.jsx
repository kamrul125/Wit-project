import React from 'react'
import Sofachair from '../assets/images/Sofachair.png'

const Trending = () => {
  return (
    
   <section className='bg-[#F1F0FF]'>
     <div className="container mx-auto ">
        <div className='flex items-center w-[1050px] m-auto '>
        <div className=" w-60% w-[550px] h-[550px] l-[-9px]">
            <img src= { Sofachair } alt="" />
        </div>
        <div className=" w-[40%] w-[500px] ">
         <h2 className=' text-[#151875] font-josefin Sans font-semibold text-[35px] pb-3  '>Unique Features Of leatest &
         Trending Poducts</h2>
         <p className=' text-[#ACABC3] font-lato text-[16px] pb-3'>All frames constructed with hardwood solids and laminates</p>
         <p className=' text-[#ACABC3] font-lato text-[16px] pb-3  ' >Reinforced with double wood dowels, glue, screw - nails corner 
         blocks and machine nails</p>
         <p className=' text-[#ACABC3] font-lato text-[16px] pb-4  '>Arms, backs and seats are structurally reinforced</p>
        <div className=' flex gap-3  '>
        <button className=' font-josefin-sans font-semibold text-[17px] text-white bg-primary py-3 px-8 ' >Add To Cart</button>
          <div>
          <h6 className=' font-josefin Sans text-[ 14px ] ' >B&B Italian Sofa </h6>
          <p className=' text-[#ACABC3] '>$32.00</p>
          </div>
        </div>
        </div>
      


        </div>

    </div>

   </section>

  )
}

export default Trending

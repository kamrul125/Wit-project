import React from 'react'
import clock from '../assets/images/clock.png'
import { TiTick } from "react-icons/ti";
import Mestonix from '../assets/images/Mestonix.png'

const OrderPage = () => {
  return (
    <>
      <section className="flex items-center bg-[#F6F5FF] h-[286px] mb-20 text-center md:text-left">
        <div className="container mx-auto px-4">
          <h2 className=" josefin Sans font-semibold text-[36px] text-[#151875] ">Order Completed</h2>
          <ul className="flex gap-2 justify-center md:justify-start">
            <li>Home</li>
            <li>Page</li>
            <li className="text-primary  ">Order Completed</li>
          </ul>
        </div>
      </section>
      
      <section className='mb-30' >
        <div className="container mx-auto ">
            <div className=" relative top-28 left-40 ">
                <img src= {clock} alt="" />
            </div>
            <div className=" w-[625px] h-[300px] text-center mx-auto mb-20 ">
            <TiTick className='mx-auto text-primary text-[70px] mb-6 ' />
            <h1 className='text-[#101750] text-[36px]  font-semibold mb-4 ' >Your Order Is Completed! </h1>
            <p className='text-[#8D92A7] mb-4 text-[15px] ' >Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.</p>
            <button className='bg-primary px-6 py-3 text-white rounded-sm ' >Continue Shopping</button>

            </div>
            <div className=" flex justify-center ">
                <img src={Mestonix} alt=" Mestonix " />
            </div>

        </div>
      </section>



    </>
  )
}

export default OrderPage

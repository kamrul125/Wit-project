import React from 'react'
import Group from '../assets/images/Group.png'
import Delivery from '../assets/images/Delivery.png'
import cashback from '../assets/images/cashback.png'
import premium from '../assets/images/premium.png'
import hours from '../assets/images/hours.png'
import Grouptwo from '../assets/images/Grouptwo.png'


const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center bg-[#F6F5FF] h-[286px] mb-20 text-center md:text-left">
        <div className="container mx-auto px-4">
          <h2 className=" josefin Sans font-semibold text-[36px] text-[#151875] ">About Us</h2>
          <ul className="flex gap-2 justify-center md:justify-start">
            <li>Home</li>
            <li>Page</li>
            <li className="text-primary  ">Blog Page</li>
          </ul>
        </div>
      </section>

      <section className='mb-20'>
        <div className="container mx-auto ">
          <div className=" flex items-center gap-8 justify-center  mb-25 ">
            <div className=" w-1/2 justify-center ">
              <img src= { Group } alt="Group" />
            </div>
            <div className=" w-1/2 ">
              <h1 className=' josefin Sans font-semibold text-[40px] text-[#151875] mb-4 ' >Know About Our Ecomerce
              Business, History</h1>
              <p className=' text-[#8A8FB9] mb-8 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem 
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
              <button className='bg-primary px-4.5 py-1.5 text-white ' >Contact Us</button>
            </div>

           

          </div>
             <div className="flex justify-center mb-20 ">
              <h1 className=' text-4xl josefin Sans font-semibold  ' >Our Features</h1>
              
        </div>
       <div className=" flex items-center gap-8 justify-center ">

       <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Card Image */}
       <div className='flex justify-center  mb-30 '>
       <img className=' absolute top-15 mb-10 '  src={ Delivery } alt="Card Image" />
       </div>

      {/* Card Content */}
      <div className="p-4 ">
        <h2 className=" flex justify-center  text-xl font-bold text-[#151875] mb-4 ">Free Delivery</h2>
        <p className=" text-[#1A0B5B4D] mt-2 text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
    </div>
    <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Card Image */}
       <div className='flex justify-center  mb-30 '>
       <img className=' absolute top-15 mb-10 '  src={ cashback } alt="Card Image" />
       </div>

      {/* Card Content */}
      <div className="p-4 ">
        <h2 className=" flex justify-center  text-xl font-bold text-[#151875] mb-4 ">Free Delivery</h2>
        <p className=" text-[#1A0B5B4D] mt-2 text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
    </div>
    <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Card Image */}
       <div className='flex justify-center  mb-30 '>
       <img className=' absolute top-15 mb-10 '  src={ premium } alt="Card Image" />
       </div>

      {/* Card Content */}
      <div className="p-4 ">
        <h2 className=" flex justify-center  text-xl font-bold text-[#151875] mb-4 ">Free Delivery</h2>
        <p className=" text-[#1A0B5B4D] mt-2 text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
    </div>
    <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Card Image */}
       <div className='flex justify-center  mb-30 '>
       <img className=' absolute top-15 mb-10 '  src={ hours } alt="Card Image" />
       </div>

      {/* Card Content */}
      <div className="p-4 ">
        <h2 className=" flex justify-center  text-xl font-bold text-[#151875] mb-4 ">Free Delivery</h2>
        <p className=" text-[#1A0B5B4D] mt-2 text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
        </p>
      </div>
    </div>
       </div>

        </div>
      </section>
      <section className='  bg-[#F6F5FF] h-[486px] mb-20  ' >
        <div className="container mx-auto  ">
        <div className=" text-center mb-20  ">
          <h1 className=' relative top-10 text-[42px] josefin San font-semibold '>Our Client Say!</h1>
          </div>
          <div className=" w-[689px] mx-auto ">
         
          <div className=" text-center ">
          <img className='mx-auto mb-6 ' src={Grouptwo} alt="Grouptwo" />
          <h1 className='text-[22px] font-semibold text-[#151875] ' >Selina Gomez</h1>
          <p className='text-[#151875] text-[10px] mb-4' >Ceo At Webecy Digital</p>
          </div>
          <div className="text-center">
          <p className='text-[#8A8FB9]' >psum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. 
          Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent. Lorem i</p>
          </div>
          </div>

        </div>
      </section>


    </>
  )
}

export default AboutPage

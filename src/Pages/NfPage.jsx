import React from 'react'
import NotF  from '../assets/images/NotF.png'
import Mestonix from '../assets/images/Mestonix.png'

const NfPage = () => {
  return (
    <>
      

      <section className=' flex items-center bg-[#F6F5FF] h-[286px]'>
       <div className="container mx-auto ">
        <h2 className=' font-semibold text-[36px]'> 404 Not Found </h2>
        <div className="">
        <ul className='flex gap-2'>
          <li >Home</li>
          <li>Page</li>
          <li className='text-primary' > 404 Not Found </li>
        </ul>

        </div>
      </div>
       </section>
       <section className='mb-20' >
           <div className="container mx-auto ">
            <div className=" text-center mb-20 ">
                <img className='mx-auto' src= {NotF} alt="NotF " />
                <button className='bg-primary py-2 px-6 text-white ' >Back To Home</button>
            </div>
            <div className=" flex items-center justify-center ">
                <img src= {Mestonix} alt=" Mestonix " />
            </div>
           </div>


       </section>

    </>
  )
}

export default NfPage

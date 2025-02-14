import React from 'react'
import Mestonix from '../assets/images/Mestonix.png'

const AccountPage = () => {
  return (
    <>
      
      <section className=' flex items-center bg-[#F6F5FF] h-[286px]'>
       <div className="container mx-auto ">
        <h2 className=' font-semibold text-[36px]'> My Account </h2>
        <div className="">
        <ul className='flex gap-2'>
          <li >Home</li>
          <li>Page</li>
          <li className='text-primary' > My Account </li>
        </ul>

        </div>
      </div>
       </section>

       <section className='py-30 px-20' >
        <div className="container mx-auto ">
            <form className='w-[544px] h-[420px] shadow-2xl rounded-sm py-8 mx-auto  mb-20 ' >
                <div className=" ">
                <div className=" text-center mb-6 ">
                    <h1 className='text-[32px] font-semibold ' >Login</h1>
                    <p className='text-[#9096B2] text-[17px] ' >Please login using account detail bellow.</p>
                </div>
                <div className="mb-6 text-center ">
                    <input type="text" placeholder='Email Address' className='w-[432px] h-[45px] border border-gray-300 rounded-sm px-2 ' />
                </div>
                <div className="mb-2 text-center ">
                    <input type="text" placeholder='Password' className='w-[432px] h-[45px] border border-gray-300 rounded-sm px-2 mb-2 ' />
                    <p className=' text-start relative left-14 text-[#9096B2] mb-4 text-[17px] ' >Forgot your password?</p>
                </div>
               
                <div className=" text-center ">
                    <button className='bg-primary py-2 px-48 text-white mb-4 ' >Sign in</button>
                    <p className=' text-[#9096B2] text-[17px] ' >Don’t have an Account?Create account</p>
                </div>
                </div>

            </form>
            <div className=" flex items-center justify-center ">
                <img src={Mestonix} alt="Mestonix" />
            </div>
        </div>
       </section>


    </>
  )
}

export default AccountPage

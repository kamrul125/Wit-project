import React from 'react'
import Daco from '../assets/images/Daco.png'

const ProductPage = () => {
  return (
    <>
       <section className=' flex items-center bg-[#F6F5FF] h-[286px]'>
       <div className="container mx-auto ">
        <h2 className=' font-semibold text-[36px]'>Shop Grid Default</h2>
        <div className="">
        <ul className='flex gap-2'>
          <li >Home</li>
          <li>Page</li>
          <li className='text-primary' >Shop Grid Default</li>
        </ul>

        </div>
      </div>
       </section>
    </>
  )
}

export default ProductPage

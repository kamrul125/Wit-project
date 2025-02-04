import React from 'react'
import Bruc from '../assets/images/Bruc.png'
import { CiSearch } from "react-icons/ci";
import { BsVectorPen } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa"
import { MdGroupWork } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";


import Mestonix from '../assets/images/Mestonix.png'
import Rectangle from '../assets/images/Rectangle.png'
import brucem from '../assets/images/brucem.png'
import bruceFW from '../assets/images/bruceFW.png'
import Mask from '../assets/images/Mask.png'

const BlogPage = () => {
  return (
    <>
       <section className=' flex items-center bg-[#F6F5FF] h-[286px] mb-20 '>
       <div className="container mx-auto ">
        <h2 className=' font-semibold text-[36px]'> Blog Page </h2>
        <div className="">
        <ul className='flex gap-2'>
          <li >Home</li>
          <li>Page</li>
          <li className='text-primary' >Blog Page</li>
        </ul>

        </div>
      </div>
       </section>
         <section className='mb-20'>
         <div className="container mx-auto">
             <div className=" flex gap-30 ">

              {/* Blog Page Hero Section left */}

              <div className="mb-10">

               <div className=" mb-10">
               <img className='mb-10' src={Bruc} alt="#" />
               <div className="flex items-center gap-8 mb-6">
                <div className=" flex items-center gap-2">
                <BsVectorPen className='text-[#FB2E86]' />
                <button className='bg-[#FFE7F9] text-[#151875] px-4 ' >Surf Auxion</button>
                </div>
                <div className=" flex items-center gap-2 ">
                <FaRegCalendarAlt className='bg-[#FFA454]' />
               <button className='bg-[#FFE7F9] text-[#151875] px-4 ' >Jan 03 2025 </button>
                </div>
               </div>
               <div className="">
                <h1 className=' text-[#151875] text-[30px] mb-6 ' >Aenean vitae in aliquam ultrices lectus. Etiam.</h1>
                <p className='mb-4 text-[#151875]  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
                   eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                   <button className='mb-4 text-[#151875] text-[22px] '>Read More</button>
              </div>
               </div>

               <div className="mb-10">

               <img className='mb-10' src={brucem} alt="#" />
               <div className="flex items-center gap-8 mb-6">
                <div className=" flex items-center gap-2">
                <BsVectorPen className='text-[#FB2E86]' />
                <button className='bg-[#FFE7F9] text-[#151875] px-4 ' >Surf Auxion</button>
                </div>
                <div className=" flex items-center gap-2 ">
                <FaRegCalendarAlt className='bg-[#FFA454]' />
               <button className='bg-[#FFE7F9] text-[#151875] px-4 ' >Jan 03 2025 </button>
                </div>
               </div>
               <div className="">
                <h1 className=' text-[#151875] text-[30px] mb-6 ' >Aenean vitae in aliquam ultrices lectus. Etiam.</h1>
                <p className='mb-4 text-[#151875]  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
                   eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                   <button className='mb-4 text-[#151875] text-[22px] '>Read More</button>
              </div>
               </div>
               <div className=" mb-10 ">
                 <div className=" ">

               <img className='mb-10' src={bruceFW} alt="#" />
               <div className="flex items-center gap-8 mb-6">
                <div className=" flex items-center gap-2">
                <BsVectorPen className='text-[#FB2E86]' />
                <button className='bg-[#FFE7F9] text-[#151875] px-4 ' >Surf Auxion</button>
                </div>
                <div className=" flex items-center gap-2 ">
                <FaRegCalendarAlt className='bg-[#FFA454]' />
               <button className='bg-[#FFE7F9] text-[#151875] px-4 ' >Jan 03 2025 </button>
                </div>
               </div>
               <div className="">
                <h1 className=' text-[#151875] text-[30px] mb-6 ' >Sit nam congue feugiat nisl, mauris amet nisi. </h1>
                <p className='mb-4 text-[#151875]  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
                   eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                   <button className='mb-4 text-[#151875] text-[22px] '>Read More</button>
              </div>
               </div>
               <div className=" flex items-center gap-6 justify-center ">
               <a href="#" class=" text-white w-10 h-10 flex items-center justify-center bg-primary border border-[#E0D3F5] font-semibold rounded-sm hover:bg-pink-100 transition"> 1</a>
                <a href="#" class=" text-[#E0D3F5] w-10 h-10 flex items-center justify-center border border-[#E0D3F5] font-semibold rounded-sm hover:bg-pink-100 transition"> 2</a>
                <a href="#" class=" text-[#E0D3F5] w-10 h-10 flex items-center justify-center border border-[#E0D3F5]  font-semibold rounded-sm hover:bg-pink-100 transition"> 3</a>
                <a href="#" class=" text-[#E0D3F5] w-10 h-10 flex items-center justify-center border border-[#E0D3F5] font-semibold rounded-sm hover:bg-pink-100 transition"> 4</a>
               </div>
                

               </div>
              

              </div>

              
              
          {/* Blog Page Hero Section right */}

              <div className=" ">

                  {/* Search  */}

                 <div className="mb-8">

                 <h1 className=' text-[22px] text-[#3F509E] mb-2.5'>Search</h1>
                <div className='flex items-center'>
                <input type="text" placeholder='Search for Post' className=' w-60 border-2 border-[#BDBDD8]  py-1 px-2 rounded-sm ' />
               <span className=' absolute right-[85px] text-[#BDBDD8] text-[22px] '>
               <CiSearch />
               </span>
                </div>
                 </div>
                   
                   {/* Category */}

                <div className=" text-[22px] text-[#3F509E] ">
                  <h1 className='mb-4'>Categores</h1>
                   <div className="flex items-center gap-8 mb-4 ">
                    <button className='bg-primary  px-2 py-0.5 ' >Hobbies(14)</button>
                    <button>Women(21)</button>
                   </div>
                   <div className="flex items-center gap-14 mb-4 ">
                    <button>Women(21)</button>
                    <button>Women(21)</button>
                   </div>
                   <div className="flex items-center gap-14 mb-4 ">
                    <button>Women(21)</button>
                    <button>Women(21)</button>
                   </div>
                </div>

                 {/* Recent Post */}

                <div className="">
                <h1 className='mb-10 text-[22px]  text-[#3F509E] font-semibold ' >Recent Post</h1>
                <div className='flex items-center gap-2.5 text-[#3F509E] mb-8  ' >
                  <img src= {Rectangle} alt="Rectangle" />
                  <div  >
                   <p>It is a long established fact</p>
                    <p>Aug 09 2020</p>
                  </div>

                  
                </div>
                <div className='flex items-center gap-2.5 text-[#3F509E] mb-8 ' >
                  <img src= {Rectangle} alt="Rectangle" />
                  <div  >
                   <p>It is a long established fact</p>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
                <div className='flex items-center gap-2.5 text-[#3F509E] mb-8 ' >
                  <img src= {Rectangle} alt="Rectangle" />
                  <div  >
                   <p>It is a long established fact</p>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
                <div className='flex items-center gap-2.5 text-[#3F509E] mb-8 ' >
                  <img src= {Rectangle} alt="Rectangle" />
                  <div  >
                   <p>It is a long established fact</p>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
             
                </div>

                {/* Sale Product */}

                <div className="">
                <h1 className='mb-10 text-[22px]  text-[#3F509E] font-semibold ' >Sale Product</h1>
                <div className='flex items-center gap-2.5 text-[#3F509E] mb-8  ' >
                  <img src= {Rectangle} alt="Rectangle" />
                  <div  >
                   <p>It is a long established fact</p>
                    <p>Aug 09 2020</p>
                  </div>

                  
                </div>
                <div className='flex items-center gap-2.5 text-[#3F509E] mb-8 ' >
                  <img src= {Rectangle} alt="Rectangle" />
                  <div  >
                   <p>It is a long established fact</p>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
                <div className='flex items-center gap-2.5 text-[#3F509E] mb-8 ' >
                  <img src= {Rectangle} alt="Rectangle" />
                  <div  >
                   <p>It is a long established fact</p>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
              
                </div>
                <div className="mb-6">
                  <h1 className='mb-10 text-[#3F509E] font-semibold text-[22px] '>Offer Product</h1>
                  <div className=" flex items-center gap-4 text-center ">
                  <div className="">
                    <img className='mb-2' src= {Mask} alt="#" />
                    <div className=" ">
                    <h3 className='text-[#3F509E] font-semibold' >Duis lectus est.</h3>
                    <p className=' text-[#8A8FB9] text-[12px] ' >$12.00 - $15.00</p>
                    </div>
                  </div>
                  <div className="">
                    <img className='mb-2' src= {Mask} alt="#" />
                    <div className=" ">
                    <h3 className='text-[#3F509E] font-semibold' >Duis lectus est.</h3>
                    <p className=' text-[#8A8FB9] text-[12px] ' >$12.00 - $15.00</p>
                    </div>
                  </div>
                  
                  </div>
                
                </div>
                <div className=" mb-10 ">
                  <div className=" flex items-center gap-4 text-center ">
                  <div className="">
                    <img className='mb-2' src= {Mask} alt="#" />
                    <div className=" ">
                    <h3 className='text-[#3F509E] font-semibold' >Duis lectus est.</h3>
                    <p className=' text-[#8A8FB9] text-[12px] ' >$12.00 - $15.00</p>
                    </div>
                  </div>
                  <div className="">
                    <img className='mb-2' src= {Mask} alt="#" />
                    <div className=" ">
                    <h3 className='text-[#3F509E] font-semibold' >Duis lectus est.</h3>
                    <p className=' text-[#8A8FB9] text-[12px] ' >$12.00 - $15.00</p>
                    </div>
                  </div>
                  
                  </div>
                
                </div>
                 
                 {/* Social Media */}

                <div className="mb-10">
                  <h1 className='text-[#3F509E] font-semibold text-[22px] mb-4 ' >Follow</h1>
                  <div className="flex items-center gap-4">
                  <FaFacebook className='text-[#3F509E] text-[25px]' />
                  <MdGroupWork className='text-primary text-[25px]' />
                  <FaTwitter className='text-[#3F509E] text-[25px]' />

                  
                  </div>
                </div>
               
               {/* Tags */}

                <div className="">
                  <h1 className=' font-semibold text-[22px] mb-6 ' >Tags</h1>
                  <div className="flex items-center gap-8 mb-4 ">
                  <div className="">
                  <a href="#" class="text-indigo-900 font-semibold border-b-2 border-indigo-900 "> General </a>
                  </div>
                  <div className="">
                  <a href="#" class="text-primary font-semibold border-b-2 border-primary "> Atsanil </a>
                  </div>
                  <div className="">
                  <a href="#" class="text-indigo-900 font-semibold border-b-2 border-indigo-900 "> Insas. </a>
                  </div>
                  </div>
                  <div className=" flex items-center gap-8 ">
                  <div className="">
                  <a href="#" class="text-indigo-900 font-semibold border-b-2 border-indigo-900 "> Bibsaas </a>
                  </div>

                  <div className="">
                  <a href="#" class="text-indigo-900 font-semibold border-b-2 border-indigo-900 "> Nulla. </a>
                  </div>
                  </div>
                </div>
           
              </div>
             </div>
           
           <div className=" flex items-center justify-center ">
            <img src= {Mestonix} alt="Mestonix" />
           </div>


          </div>
         </section>
         
    </>
  )
}

export default BlogPage

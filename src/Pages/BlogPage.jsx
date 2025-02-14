import React from 'react';
import Bruc from '../assets/images/Bruc.png';
import { CiSearch } from "react-icons/ci";
import { BsVectorPen } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdGroupWork } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

import Mestonix from '../assets/images/Mestonix.png';
import Rectangle from '../assets/images/Rectangle.png';
import brucem from '../assets/images/brucem.png';
import bruceFW from '../assets/images/bruceFW.png';
import Mask from '../assets/images/Mask.png';

const BlogPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center bg-[#F6F5FF] h-[286px] mb-20 text-center md:text-left">
        <div className="container mx-auto px-4">
          <h2 className="font-semibold text-[36px]">Blog Page</h2>
          <ul className="flex gap-2 justify-center md:justify-start">
            <li>Home</li>
            <li>Page</li>
            <li className="text-primary">Blog Page</li>
          </ul>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left Side (Blog Posts) */}
            <div className="lg:col-span-2">
              {[Bruc, brucem, bruceFW].map((image, index) => (
                <div key={index} className="mb-10">
                  <img className="mb-6 w-full h-auto rounded-lg" src={image} alt="Blog" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <BsVectorPen className="text-[#FB2E86]" />
                      <button className="bg-[#FFE7F9] text-[#151875] px-4 py-1 rounded-md">Surf Auxion</button>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegCalendarAlt className="text-[#FFA454]" />
                      <button className="bg-[#FFE7F9] text-[#151875] px-4 py-1 rounded-md">Jan 03 2025</button>
                    </div>
                  </div>
                  <h1 className="text-[#151875] text-[24px] md:text-[30px] mb-4 font-semibold">
                    Aenean vitae in aliquam ultrices lectus. Etiam.
                  </h1>
                  <p className="text-[#151875] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.
                  </p>
                  <button className="text-[#151875] text-lg font-semibold hover:underline">Read More</button>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex items-center gap-4 justify-center">
                {[1, 2, 3, 4].map((num) => (
                  <a key={num} href="#" className={`w-10 h-10 flex items-center justify-center border font-semibold rounded-sm transition 
                    ${num === 1 ? 'bg-primary text-white' : 'text-[#E0D3F5] border-[#E0D3F5] hover:bg-pink-100'}`}>
                    {num}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side (Sidebar) */}
            <div className="lg:col-span-1 space-y-8">

              {/* Search */}
              <div>
                <h1 className="text-[22px] text-[#3F509E] mb-2.5">Search</h1>
                <div className="relative">
                  <input type="text" placeholder="Search for Post" className="w-full border-2 border-[#BDBDD8] py-2 px-4 rounded-md" />
                  <span className="absolute right-4 top-3 text-[#BDBDD8] text-[22px]">
                    <CiSearch />
                  </span>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h1 className="text-[22px] text-[#3F509E] mb-4">Categories</h1>
                <div className="grid grid-cols-2 gap-4">
                  {['Hobbies(14)', 'Women(21)', 'Men(18)', 'Kids(10)'].map((cat) => (
                    <button key={cat} className="border px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h1 className="text-[22px] text-[#3F509E] font-semibold mb-4">Recent Posts</h1>
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-[#3F509E] mb-4">
                    <img src={Rectangle} alt="Rectangle" className="w-16 h-16" />
                    <div>
                      <p>It is a long established fact</p>
                      <p className="text-sm text-gray-500">Aug 09 2020</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h1 className="text-[22px] text-[#3F509E] font-semibold mb-4">Follow Us</h1>
                <div className="flex gap-4">
                  <FaFacebook className="text-[#3F509E] text-[25px]" />
                  <MdGroupWork className="text-primary text-[25px]" />
                  <FaTwitter className="text-[#3F509E] text-[25px]" />
                </div>
              </div>

              {/* Tags */}
              <div>
                <h1 className="font-semibold text-[22px] mb-4">Tags</h1>
                <div className="flex flex-wrap gap-2">
                  {['General', 'Atsanil', 'Insas', 'Bibsaas', 'Nulla'].map((tag) => (
                    <a key={tag} href="#" className="border px-3 py-1 rounded-md hover:bg-primary hover:text-white transition">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Ad Banner */}
          <div className="flex items-center justify-center mt-10">
            <img src={Mestonix} alt="Mestonix" className="max-w-full rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

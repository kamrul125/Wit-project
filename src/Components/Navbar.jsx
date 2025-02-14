import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons
import Hekto from '../assets/images/Hekto.png';
import { apiData } from './ContextAPI';

const Navbar = () => {
  const data = useContext(apiData);
  const [searchResult, setSearchResult] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchResult([]);
      return;
    }
    const filterProducts = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(filterProducts);
  };

  return (
    <nav className='py-4 shadow-md bg-white'>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={Hekto} alt="Hekto" className="w-24 md:w-32" />
          </div>

          {/* Desktop Menu */}
          <ul className="text-[20px] hidden md:flex items-center gap-8">
  {/* Home Menu with Dropdown */}
  <li className="relative group">
    <Link to="/" className="hover:text-[#FB2E86]">Home</Link>
    {/* Dropdown Menu */}
    <ul className="absolute left-0 mt-2 hidden w-40 bg-white shadow-lg rounded-md border border-gray-200 group-hover:flex flex-col z-10">
      <li>
        <Link to="/AboutPage" className="block px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100">
          About
        </Link>
      </li>
      <li>
        <Link to="/AccountPage" className="block px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100">
          Account
        </Link>
      </li>
      <li>
        <Link to="/NfPage" className="block px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100">
          404
        </Link>
      </li>
      <li>
        <Link to="/OrderPage" className="block px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100">
          Order
        </Link>
      </li>
    </ul>
  </li>

  {/* Other Menu Items */}
  <li>
        <Link to="/ProductPage" className="hover:text-[#FB2E86]">Products</Link>
        </li>
        <li className="hover:text-[#FB2E86] cursor-pointer">Pages</li>
       <li>
        <Link to="/BlogPage" className="hover:text-[#FB2E86]">Blog</Link>
       </li>
        <li>
        <Link to="/ShopPage" className="hover:text-[#FB2E86]">Shop</Link>
       </li>
       <li>
       <Link to="/ContactPage" className="hover:text-[#FB2E86]">Contact</Link>
       </li>
      </ul>


          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className='border-2 text-gray-300 outline-none w-48 md:w-64 h-8 pl-4 '
            />
            <button className='h-8 w-12 bg-[#FB2E86] flex justify-center items-center '>
              <CiSearch className='text-white text-lg' />
            </button>
            {searchResult.length > 0 && (
              <ul className="absolute top-10 left-0 w-full bg-white border shadow-md z-50">
                {searchResult.map((item) => (
                  <li key={item.id} className="flex items-center gap-2 p-2 hover:bg-gray-100">
                    <img src={item.thumbnail} alt={item.title} className="w-10 h-10 object-cover" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col items-center gap-4 bg-white p-4 shadow-lg rounded-md">
              <li><Link to="/" className="hover:text-[#FB2E86]" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/ProductPage" className="hover:text-[#FB2E86]" onClick={() => setIsOpen(false)}>Products</Link></li>
              <li className="hover:text-[#FB2E86] cursor-pointer" onClick={() => setIsOpen(false)}>Pages</li>
              <li><Link to="/BlogPage" className="hover:text-[#FB2E86]" onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li><Link to="/ShopPage" className="hover:text-[#FB2E86]" onClick={() => setIsOpen(false)}>Shop</Link></li>
              <li><Link to="/ContactPage" className="hover:text-[#FB2E86]" onClick={() => setIsOpen(false)}>Contact</Link></li>

              {/* Mobile Search Bar */}
              <div className="flex items-center relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className='border-2 text-gray-600 outline-none w-40 h-8 pl-4 rounded-l-md'
                />
                <button className='h-8 w-12 bg-[#FB2E86] flex justify-center items-center rounded-r-md'>
                  <CiSearch className='text-white text-lg' />
                </button>
                {searchResult.length > 0 && (
                  <ul className="absolute top-10 left-0 w-full bg-white  shadow-md z-50">
                    {searchResult.map((item) => (
                      <li key={item.id} className="flex items-center gap-2 p-2 hover:bg-gray-100">
                        <img src={item.thumbnail} alt={item.title} className="w-10 h-10 object-cover" />
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

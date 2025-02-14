import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F1F0FF] py-10">
      <div className="container mx-auto px-6 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Left Section (Logo + Newsletter) */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">Hekto</h2>
            <div className="flex items-center w-full max-w-xs">
              <input 
                type="email"  
                placeholder="Enter Email Address" 
                className="border outline-none w-full h-10 pl-4 text-sm" 
              />
              <button className="h-10 px-4 bg-[#FB2E86] text-white text-sm font-medium">
                Sign Up
              </button>
            </div>
            <p className="text-gray-600 mt-4">Contact Info</p>
            <p className="text-gray-500 text-sm">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Care</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Pages</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-500 text-sm">&copy; Webecy - All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-lg">🌐</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-lg">🔵</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-lg">🐦</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

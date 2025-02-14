import React, { useContext, useEffect, useState } from "react";
import Featured from "../Components/Featured";
import { MdViewList } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { apiData } from "../Components/ContextAPI";
import ProductCard from "../Components/ProductCard";

const ShopPage = () => {
  const data = useContext(apiData) || [];
  const [category, setCategory] = useState([]);
  const [categoryItem, setCategoryItems] = useState([]);
  const [catShow, setCatShow] = useState(true);
  const [priceShow, setPriceShow] = useState(true);

  // Pagination & Sorting States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState("best-match");

  useEffect(() => {
    if (data.length) {
      setCategory([...new Set(data.map((item) => item.category))]);
      setCategoryItems(data);
    }
  }, [data]);

  // Sorting function
  const sortProducts = (products) => {
    let sortedProducts = [...products];
    if (sortBy === "price-low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      sortedProducts.sort((a, b) => b.id - a.id);
    }
    return sortedProducts;
  };

  // Category Filtering
  const handleCategoryProduct = (cat) => {
    const filtered = data.filter((item) => item.category === cat);
    setCategoryItems(filtered);
    setCurrentPage(1);
  };

  // Price Filtering
  const handlePriceFilter = (min, max) => {
    const filtered = data.filter((item) => item.price >= min && item.price <= max);
    setCategoryItems(filtered);
    setCurrentPage(1);
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const sortedCategoryItems = sortProducts(categoryItem);
  const currentItems = sortedCategoryItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categoryItem.length / itemsPerPage);

  return (
    <>
      {/* Sorting & Filters */}
      <section className="container mx-auto relative left-[50px] top-[50px] flex flex-col md:flex-row gap-6 items-center mb-20 pb-4 h-[150px] ">
        <div className="w-1/3">
          <h2 className="text-xl font-semibold text-blue-900">Ecommerce Accessories & Fashion Items</h2>
          <p className="text-sm text-gray-500">About {categoryItem.length} results</p>
        </div>

        <div className="flex items-center gap-4 w-2/3">
          {/* Per Page */}
          <div className="flex items-center gap-2 w-1/3">
            <span className="text-gray-700">Per Page:</span>
            <input
              type="number"
              className="w-12 border border-gray-300 rounded-md px-2 py-1 text-gray-700"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value) || 1)}
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 w-1/3">
            <span className="text-gray-700">Sort By:</span>
            <select
              className="border border-gray-300 rounded-md px-2 py-1"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="best-match">Best Match</option>
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          {/* View Icons */}
          <div className="flex items-center gap-2 w-1/3">
            <span className="text-gray-700">View:</span>
            <IoGrid className="text-[#151875] text-[40px]" />
            <MdViewList className="text-[#151875] text-[55px]" />
          </div>
        </div>
      </section>

      <div className="container mx-auto flex">
        {/* Sidebar - Categories & Price Filtering */}
        <div className="w-1/4 pr-6  ">
          {/* Product Categories */}
          <div className="mb-6">
            <h1 onClick={() => setCatShow(!catShow)} className="text-[20px] font-semibold text-[#151875] cursor-pointer  pb-2">
              Product Categories
            </h1>
            {catShow && (
              <ul className="mt-4 space-y-2">
                {category.length > 0 ? (
                  category.map((item, index) => (
                    <li
                      onClick={() => handleCategoryProduct(item)}
                      key={index}
                      className="capitalize text-gray-600 cursor-pointer py-2 border-b hover:text-blue-600 transition"
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400">Loading categories...</li>
                )}
              </ul>
            )}
          </div>

          {/* Product Price */}
          <div>
            <h1 onClick={() => setPriceShow(!priceShow)} className="text-[20px] font-semibold text-[#151875] cursor-pointer  pb-2">
              Product Price
            </h1>
            {priceShow && (
              <ul className="mt-4 space-y-2">
                <li onClick={() => handlePriceFilter(0, 100)} className="capitalize text-gray-600 cursor-pointer py-2 border-b hover:text-blue-600 transition">
                  $0 - $100
                </li>
                <li onClick={() => handlePriceFilter(100, 200)} className="capitalize text-gray-600 cursor-pointer py-2 border-b hover:text-blue-600 transition">
                  $100 - $200
                </li>
                <li onClick={() => handlePriceFilter(200, 500)} className="capitalize text-gray-600 cursor-pointer py-2 border-b hover:text-blue-600 transition">
                  $200 - $500
                </li>
                <li onClick={() => handlePriceFilter(500, 1000)} className="capitalize text-gray-600 cursor-pointer py-2 border-b hover:text-blue-600 transition">
                  $500 - $1000
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Product Listing */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.length > 0 ? currentItems.map((product) => <ProductCard key={product.id} product={product} />) : <Featured />}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-20 mb-20 ">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 mx-1 rounded-md bg-blue-500 text-white">
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)} className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 mx-1 rounded-md bg-blue-500 text-white">
          Next
        </button>
      </div>
    </>
  );
};

export default ShopPage;

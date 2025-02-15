import { useContext } from "react";
import { apiData } from "./ContextAPI";

export default function ProductsSection() {
  const products = useContext(apiData);
  
  const featuredProducts = products?.slice(0, 30) || [];

  return (
    <div className="  py-12">
      {/* Featured Products */}
      <Section title="Featured Products" products={featuredProducts} />
    </div>
  );
}

function Section({ title, products }) {
  return (
    <div className="mb-12 px-6 bg-white py-11">
      <h2 className="text-3xl font-josefin font-semibold text-center text-[#1A0B5B] mb-20 text-[42px]">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="p-4 text-center">
        <h3 className="text-[#1A0B5B] font-semibold">{product.title}</h3>
        <p className="text-gray-600">Code - {product.id}</p>
        <p className="text-black font-bold">${product.price}</p>
      </div>
    </div>
  );
}

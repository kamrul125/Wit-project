import { useContext } from "react";
import { apiData } from "./ContextAPI";

export default function ProductsSection() {
  const products = useContext(apiData);
  
  const featuredProducts = products.slice(0, 22);
  const trendingProducts = products.slice(22, 26);
  const offerProducts = products.slice(26, 30);

  return (
    <div className="bg-gray-100 py-12">
      {/* Featured Products */}
      <Section title="Featured Products" products={featuredProducts} />
      {/* Trending Products */}
      <Section title="Trending Products" products={trendingProducts} highlight />
      {/* Offer Products */}
      <Section title="Offer Products" products={offerProducts} offer />
    </div>
  );
}

function Section({ title, products, highlight, offer }) {
  return (
    <div className="mb-12 px-6 bg-[#e2e2e2] py-11">
      <h2 className="text-3xl font-josefin font-semibold text-center text-[#1A0B5B] mb-20 text-[42px]">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} highlight={highlight} offer={offer} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, highlight, offer }) {
  return (
    <div
      className={`p-4 rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 ${
        highlight ? "border-2 border-blue-500" : ""
      }`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="p-4 text-center">
        <h3 className="text-[#1A0B5B] font-semibold">{product.title}</h3>
        <p className="text-gray-600">Code - {product.id}</p>
        <p className="text-black font-bold">${product.price}</p>
        {highlight && (
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            View Details
          </button>
        )}
        {offer && (
          <div className="mt-2 text-sm font-semibold text-red-500">🔥 Limited Offer!</div>
        )}
      </div>
    </div>
  );
}
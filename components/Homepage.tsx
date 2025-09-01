"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Homepage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=10&skip=0");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error while fetching data of products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section className="relative w-screen h-[90vh]">
        <Image
          src="/main3.webp"
          alt="Beauty Products"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
            Beauty That Inspires ✨
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover our exclusive collection of makeup & skincare products
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </section>

      <main className="py-12 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <h1 className="text-5xl font-extrabold tracking-wide mb-12 text-center uppercase text-pink-700">
          Our Collection
        </h1>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse h-80 bg-gradient-to-r from-pink-100 via-white to-purple-100 rounded-2xl shadow-lg"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col items-center text-center bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="relative w-full h-80 overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 space-y-2 px-4">
                  <div className="flex justify-between gap-8">
                    <h2 className="text-xl font-semibold text-gray-900 truncate">
                      {product.title}
                    </h2>
                    <p className="text-lg font-bold text-pink-700">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
                <button className="mt-4 mb-7 px-8 py-2 border-2 border-pink-600 text-pink-700 rounded-full font-bold uppercase hover:bg-pink-700 hover:text-white transition duration-200">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
        <button className="fixed bottom-6 right-6 bg-pink-700 text-white px-6 py-3 rounded-full shadow-xl z-50 hover:bg-pink-800 uppercase font-bold transition">
          View Cart
        </button>
      </main>
    </>
  );
};

export default Homepage;

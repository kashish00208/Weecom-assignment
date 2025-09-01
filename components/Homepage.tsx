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
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=10&skip=0");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error while fetching data:", error);
      setLoading(false);
    }
  };

  const handleCart = (product: Product) => {
    setCart((prev) => [...prev, product]); 
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      <section className="relative w-screen h-[90vh]">
        <Image
          src="/main3.webp"
          alt="Beauty Products"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-pink-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="bg-gradient-to-r from-pink-300 to-purple-300 text-transparent bg-clip-text text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
            Beauty That Inspires ✨
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl opacity-90">
            Discover our exclusive collection of makeup & skincare products
          </p>
          <button className="px-10 py-4 rounded-full font-semibold uppercase tracking-wide bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-pulse">
            Shop Now
          </button>
        </div>
      </section>

     <main className="py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative z-10">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold uppercase mb-16 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-transparent hover:border-pink-300 transition-all duration-300"
              >
                <div className="relative w-full h-80 overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900 truncate">
                      {product.title}
                    </h2>
                    <p className="text-lg font-bold text-pink-600 drop-shadow">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button
                    onClick={() => handleCart(product)}
                    className="w-full py-3 font-bold uppercase bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-b-2xl hover:opacity-90 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 px-6 py-3 rounded-full font-bold uppercase bg-white/80 backdrop-blur-md shadow-xl border border-pink-400 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
        >
          View Cart ({cart.length})
        </button>
      </main>

      {showCart && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="bg-white w-96 h-full shadow-xl p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Your Cart 🛒</h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-pink-600">₹{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6">
              <p className="text-lg font-bold">
                Total: ₹
                {cart.reduce((acc, item) => acc + item.price, 0)}
              </p>
              <button className="w-full mt-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-lg hover:opacity-90">
                Checkout
              </button>
              <button
                onClick={() => setShowCart(false)}
                className="w-full mt-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;

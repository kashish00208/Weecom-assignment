"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "./Couresel"

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Homepage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      console.log("fetching data here");
      const res = await fetch("https://dummyjson.com/products?limit=10&skip=0");
      console.log("hahahhaah");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error while fetching data of products:", error);
    }
  };
  console.log();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
   <Carousel images={products.map((product) => product.thumbnail)} />

    <main className="p-6 mx-16">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={400}
              className="w-full h-48 object-fit rounded-md"
            />
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
    </>
  );
};

export default Homepage;

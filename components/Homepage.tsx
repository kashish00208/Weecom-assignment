"use client"
import React from 'react'
import { Button } from './ui/button'
const Homepage = () => {

const handleSubmit = async () => {
  try {
    const data = await fetch("https://dummyjson.com/products?limit=10&skip=0", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const results = await data.json(); 
    console.log(results);             
    console.log(results.products);   
  } catch (error) {
    console.error("Error while fetching data of products:", error);
  }
};

  return (
    <div>
      <Button onClick={handleSubmit}>get data</Button>
    </div>
  )
}

export default Homepage

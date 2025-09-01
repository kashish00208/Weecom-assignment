"use client";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

interface Nav {
  title: string;
  href: string;
}

const navitems: Nav[] = [
  { title: "Home", href: "/" },
  { title: "Contact Us", href: "/" },
  { title: "Premium Products", href: "/" },
  { title: "Cart", href: "/cart" },
];

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <button
          className="text-3xl cursor-pointer md:hidden text-gray-700"
          onClick={handleNav}
        >
          <IoMenu />
        </button>
        <span className="text-2xl md:text-3xl font-extrabold text-pink-600 tracking-wide cursor-pointer">
          beauty<span className="text-gray-800">Store</span>
        </span>
        <nav className="hidden md:flex gap-8 text-lg font-medium font-sans">
          {navitems.map((item, id) => (
            <a
              key={id}
              href={item.href}
              className="relative text-gray-700 hover:text-pink-600 transition"
            >
              {item.title}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <Button className="hidden md:block rounded-full px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold">
          Sign In
        </Button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          openNav ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 border-t border-gray-200 bg-white">
          <ul className="flex flex-col gap-4 text-lg font-medium font-sans">
            {navitems.map((item, id) => (
              <li key={id}>
                <a
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-pink-600 transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <Button className="w-full mt-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold">
                Sign In
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

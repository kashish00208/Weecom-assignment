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
    <header className="w-screen bg-white shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 font-mono">
        <button
          className="text-4xl cursor-pointer md:hidden"
          onClick={handleNav}
        >
          <IoMenu />
        </button>
        <span className="text-2xl font-extrabold text-pink-600 tracking-wide cursor-pointer">
          beauty
        </span>
        <nav className="hidden md:flex gap-8 text-lg font-semibold font-sans">
          {navitems.map((key, id) => (
            <a
              key={id}
              href={key.href}
              className="px-3 py-2 rounded-md text-gray-700 hover:text-pink-600 hover:font-bold transition"
            >
              {key.title}
            </a>
          ))}
        </nav>

        <Button className="hidden md:block">Sign In</Button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          openNav ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg font-semibold font-sans">
            {navitems.map((key, id) => (
              <li key={id}>
                <a
                  href={key.href}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-pink-600 hover:font-bold transition"
                >
                  {key.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

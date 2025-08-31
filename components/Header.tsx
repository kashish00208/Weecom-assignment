"use client";
import { Button } from "./ui/button";
import React from "react";

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
  return (
    <header className="w-screen bg-white shadow-md group transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 font-mono">
        <span className="text-2xl font-extrabold text-pink-600 tracking-wide cursor-pointer">
          beauty
        </span>
        <Button >
          Toggle Menu
        </Button>
      </div>
      <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-start">
          <ul className="flex justify-center gap-8 text-2xl font-semibold font-sans">
            {navitems.map((key, id) => (
              <li key={id}>
                <a
                  href={key.href}
                  className="px-3 py-2 rounded-md text-gray-700 hover:text-pink-600 hover:font-bold transition "
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

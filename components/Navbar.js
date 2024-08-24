import React, { useState } from 'react';
import Link from "next/link";
import logo from "../public/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-black shadow-lg z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 h-20">
        <Link href="/">
          <figure className="flex items-center cursor-pointer">
            <img
              src="/Logo.svg"
              className="mr-4 w-14 invert"
              alt="BalanceAI Logo"
            />
            <h6 className="text-2xl font-medium text-white">BalanceAI</h6>
          </figure>
        </Link>
        <button className="block md:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-0.5 bg-white relative">
            <span className="absolute top-[-8px] left-0 w-6 h-0.5 bg-white"></span>
            <span className="absolute bottom-[-8px] left-0 w-6 h-0.5 bg-white"></span>
          </span>
        </button>
        <ul className={`flex-col md:flex-row md:flex items-center absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent ${isOpen ? 'flex' : 'hidden'}`}>
          <Link href="/">
            <li className="m-3 text-white transition duration-100 ease-in-out hover:text-gray-400 cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="m-3 text-white transition duration-100 ease-in-out hover:text-gray-400 cursor-pointer">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="m-3 text-white transition duration-100 ease-in-out hover:text-gray-400 cursor-pointer">
              Contact
            </li>
          </Link>
          <Link href="/technology">
            <li className="m-3 text-white transition duration-100 ease-in-out hover:text-gray-400 cursor-pointer">
              Technology
            </li>
          </Link>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="px-5 py-2 text-lg font-medium border-2 border-white rounded-full bg-black bg-opacity-75 text-white transition duration-100 ease-in-out hover:bg-white hover:text-gray-400">
            Login
          </button>
          <button className="px-5 py-2 text-lg font-medium border-2 border-white rounded-full bg-black bg-opacity-75 text-white transition duration-100 ease-in-out hover:bg-white hover:text-gray-400">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
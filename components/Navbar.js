import React, { useState } from 'react';
import Link from "next/link";
import logo from "../public/Logo.svg";
import navstyles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


return (
  <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-[99999] h-20">
  <div className="bg-gray-800 h-2 w-full absolute top-0"></div>
  <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-6">
    <Link href="/">
      <figure className="flex items-center">
        <img
          src="/Logo.svg"
          className="mr-4 w-14 invert"
          alt="BalanceAI Logo"
        />
        <h6 className="text-white text-2xl font-medium">BalanceAI</h6>
      </figure>
    </Link>
    <button
      className="md:hidden text-white focus:outline-none"
      onClick={toggleMenu}
    >
      <span className="block w-6 h-0.5 bg-white mb-1"></span>
      <span className="block w-6 h-0.5 bg-white mb-1"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
    </button>
    <ul
      className={`${
        isOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 bg-gray-900 md:bg-transparent w-full md:w-auto absolute md:static top-20 md:top-auto left-0 md:left-auto p-4 md:p-0`}
    >
      <Link href="/">
        <li className="text-white hover:text-gray-400 transition ease-in-out duration-100 cursor-pointer">
          Home
        </li>
      </Link>
      <Link href="/about">
        <li className="text-white hover:text-gray-400 transition ease-in-out duration-100 cursor-pointer">
          About
        </li>
      </Link>
      <Link href="/contact">
        <li className="text-white hover:text-gray-400 transition ease-in-out duration-100 cursor-pointer">
          Contact
        </li>
      </Link>
      <Link href="/technology">
        <li className="text-white hover:text-gray-400 transition ease-in-out duration-100 cursor-pointer">
          Technology
        </li>
      </Link>
    </ul>
    <div className="hidden md:flex space-x-4">
      <Link href= "/login">
      <button className="px-5 py-2 text-white font-medium border border-white rounded-full bg-opacity-75 hover:bg-white hover:text-gray-800 transition ease-in-out duration-100">
        Login
      </button>
      </Link>
      <button className="px-5 py-2 text-white font-medium border border-white rounded-full bg-opacity-75 hover:bg-white hover:text-gray-800 transition ease-in-out duration-100">
        Sign Up
      </button>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
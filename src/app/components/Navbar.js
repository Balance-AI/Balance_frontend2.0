"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import navstyles from "@/styles/Navbar.module.css";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // This is to toggle the menu by using the state
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false); // This is to toggle the About menu by using the state
  const [isClientMenuOpen, setIsClientMenuOpen] = useState(false); // This is to toggle the Client menu by using the state
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false); // This is to toggle the Resources menu by using the state
  const dropdownRef = useRef(null); //useRef is used to get the reference of the dropdown menu by using the ref attribute
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleAboutMenu = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
  };

  const toggleClientMenu = () => {
    setIsClientMenuOpen(!isClientMenuOpen);
  };

  const toggleResourcesMenu = () => {
    setIsResourcesMenuOpen(!isResourcesMenuOpen);
  };

  useOutsideClick(dropdownRef, () => {
    setIsAboutMenuOpen(false);
    setIsClientMenuOpen(false);
    setIsResourcesMenuOpen(false);
  });

  return (
    // <nav className={navstyles.nav}>
    //   <div className={`${navstyles.nav__row} row`}>
    //     <div className={navstyles.nav__lefthalf}>
    //       <Link href="/">
    //         <figure className={navstyles.nav__logo}>
    //           <img
    //             src="/Logo.svg"
    //             className={`${navstyles["nav__logo--img"]} logo-invert`}
    //             alt=""
    //           />
    //           Balance AI
    //           {/* <h6 className={navstyles["nav__logo--text"]}>BalanceAI</h6> */}
    //         </figure>
    //       </Link>
    //       <div className={navstyles.nav__spacer}></div>
    //       <ul
    //         className={`${navstyles.nav__list} ${
    //           isOpen ? navstyles.nav__list__open : ""
    //         }`}
    //       >
    //         <li
    //           className={`${navstyles.nav__link} ${navstyles["nav__link--analytics"]}`}
    //         >
    //           Analytics Suite
    //         </li>
    //         <li
    //           className={`${navstyles.nav__link} ${navstyles["nav__link--pbai"]}`}
    //         >
    //           Powered By AI
    //         </li>
    //         {/* <Link href="/analyticspage"> */}

    //         <li
    //           onClick={toggleAboutMenu}
    //           className={`${navstyles.nav__link} ${navstyles["nav__link--toggulus"]}`}
    //         >
    //           About Balance AI
    //           <FontAwesomeIcon
    //             className={navstyles.fachevdown}
    //             icon={faChevronDown}
    //           />
    //           {isAboutMenuOpen && (
    //             <ul ref={dropdownRef} className={navstyles.dropdown}>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Get Started</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Analytics Suite</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Industry Leading AI System</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Research & Methodology</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Security & Governance</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Partner Platforms</a>
    //               </li>
    //             </ul>
    //           )}
    //         </li>

    //         {/* </Link> */}
    //         {/* <Link href="/about"> */}
    //         <li
    //           onClick={toggleClientMenu}
    //           className={`${navstyles.nav__link} ${navstyles["nav__link--toggulus"]}`}
    //         >
    //           Client Assistance
    //           <FontAwesomeIcon
    //             className={navstyles.fachevdown}
    //             icon={faChevronDown}
    //           />
    //           {isClientMenuOpen && (
    //             <ul ref={dropdownRef} className={navstyles.dropdown}>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">FAQ</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Contact Us</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/tos">Terms of Service</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Submit Service Ticket</a>
    //               </li>
    //             </ul>
    //           )}
    //         </li>
    //         {/* </Link> */}
    //         <Link href="/contact">
    //           <li className={navstyles.nav__link}>Pricing</li>
    //         </Link>
    //         {/* <Link href="/resources"> */}
    //         <li onClick={toggleResourcesMenu} className={navstyles.nav__link}>
    //           Resources
    //           <FontAwesomeIcon
    //             className={navstyles.fachevdown}
    //             icon={faChevronDown}
    //           />
    //           {isResourcesMenuOpen && (
    //             <ul ref={dropdownRef} className={navstyles.dropdown}>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Documentation</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Developer Integration Assistance</a>
    //               </li>
    //               <li className={navstyles.dropdown__item}>
    //                 <a href="/">Submit API Integration Request</a>
    //               </li>
    //             </ul>
    //           )}
    //         </li>
    //         {/* </Link> */}
    //       </ul>
    //     </div>

    //     <div className={navstyles["nav__button--container"]}>
    //       <button
    //         className={`${navstyles.nav__button} bai__button bai__button--white bai__button--hover bai__button--focus`}
    //       >
    //         Buy Now
    //       </button>
    //       <button
    //         className={`${navstyles.nav__button} ${navstyles.nav__buttonmid} bai__button bai__button--black bai__button--hover bai__button--focus`}
    //       >
    //         Start Free
    //       </button>
    //       <button
    //         className={`${navstyles.nav__button} bai__button bai__button--white bai__button--hover bai__button--focus`}
    //       >
    //         Sign Up
    //       </button>
    //     </div>
    //   </div>
    // </nav>
    <nav className="flex justify-center mx-auto h-10 bg-white fixed w-full shadow-xl z-50">
      <div className="flex justify-between items-center w-full max-w-screen-2xl px-6">
        {/* Left Half */}
        <div className="flex items-center">
          <Link href="/">
            <figure className="flex items-center text-black">
              <Image
                className="mr-4"
                width={28}
                height={28}
                src="/Logo.svg"
                alt="Logo"
              />
              Balance AI
            </figure>
          </Link>
          {/* divider */}
          <div className="mx-6 h-6 border-l-2 border-black" />
          {/* Nav List */}
          <ul
            className={`hidden md:flex items-center ${
              isOpen ? "flex-col" : ""
            }`}
          >
            <li className="text-black font-semibold text-[16px] mx-3 cursor-pointer hover:text-gray-400">
              Analytics Suite
            </li>
            <li className="text-black font-semibold text-[14px] mx-3 cursor-pointer hover:text-gray-400">
              Powered By AI
            </li>

            <li
              onClick={toggleAboutMenu}
              className="hidden xl:block relative text-black font-normal text-[13px] mx-3 cursor-pointer hover:border-b-2 border-black flex items-center transition-all duration-100 ease-in-out"
            >
              About Balance AI
              <Image
                src="/chevron-down-solid.svg"
                className="inline ml-1 mb-1 w-3"
                width={4}
                height={4}
              />
              {isAboutMenuOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute top-full mt-2 bg-white shadow-lg w-48"
                >
                  {[
                    "Get Started",
                    "Analytics Suite",
                    "Industry Leading AI System",
                    "Research & Methodology",
                    "Security & Governance",
                    "Partner Platforms",
                  ].map((item) => (
                    <li key={item} className="px-5 py-2 hover:bg-gray-100">
                      <a href="/" className="block text-black">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li
              onClick={toggleClientMenu}
              className="hidden xl:block relative text-black font-normal text-[13px] mx-3 cursor-pointer hover:border-b-2 border-black flex items-center transition-all duration-100 ease-in-out"
            >
              Client Assistance
              <Image
                src="/chevron-down-solid.svg"
                className="inline ml-1 mb-1 w-3"
                width={4}
                height={4}
              />
              {isClientMenuOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute top-full mt-2 bg-white shadow-lg w-48"
                >
                  {[
                    "FAQ",
                    "Contact Us",
                    "Terms of Service",
                    "Submit Service Ticket",
                  ].map((item, index) => (
                    <li key={index} className="px-5 py-2 hover:bg-gray-100">
                      <a href="/" className="block text-black">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="text-black font-normal text-[13px] mx-3 cursor-pointer hover:text-gray-400">
              Pricing
            </li>
            <li
              onClick={toggleResourcesMenu}
              className="hidden xl:block relative text-black font-normal text-[13px] mx-3 cursor-pointer hover:border-b-2 border-black flex items-center transition-all duration-100 ease-in-out"
            >
              Resources
              <Image
                src="/chevron-down-solid.svg"
                className="inline ml-1 mb-1 w-3"
                width={4}
                height={4}
              />
              {isResourcesMenuOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute top-full mt-2 bg-white shadow-lg w-48"
                >
                  {[
                    "Documentation",
                    "Developer Integration Assistance",
                    "Submit API Integration Request",
                  ].map((item) => (
                    <li key={item} className="px-5 py-2 hover:bg-gray-100">
                      <a href="/" className="block text-black">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        {/* three buttons */}
        <div className="hidden md:flex items-center">
          <button className="hidden xl:block ml-2 px-3 py-1 border border-black text-black text-sm font-normal rounded transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-blue-300">
            Buy Now
          </button>
          <button className="ml-2 px-3 py-1 border border-[#BB955F] text-[#BB955F] text-sm font-normal rounded bg-black transition-all duration-300 hover:bg-white focus:ring-2 focus:ring-blue-300">
            Start Free
          </button>
          <button className="hidden xl:block ml-2 px-3 py-1 border border-black text-black text-sm font-normal rounded transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-blue-300">
            Sign Up
          </button>
        </div>
        {/* mobile menu open */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-black text-2xl focus:outline-none"
        >
          <Image src="/bars-solid.svg" alt="Menu Icon" width={24} height={24} />
        </button>
      </div>
      {/* mobile menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;

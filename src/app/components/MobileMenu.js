import React, { useEffect, useState } from "react";
import Image from "next/image";

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isClientMenuOpen, setIsClientMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);

  const toggleAboutMenu = () => setIsAboutMenuOpen((prev) => !prev);
  const toggleClientMenu = () => setIsClientMenuOpen((prev) => !prev);
  const toggleResourcesMenu = () => setIsResourcesMenuOpen((prev) => !prev);

  useEffect(() => {
    // Add or remove the `overflow-hidden` class on the <body> element
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={`rounded-lg invisible fixed top-0 right-0 left-0 mx-4 bg-white shadow-lg transform ${
        isMobileMenuOpen ? "translate-x-0 visible" : "translate-x-full"
      } transition-all duration-300 ease-in-out md:hidden`}
    >
      {/* Close Button */}
      <button
        onClick={toggleMobileMenu}
        className="absolute top-4 right-4 text-black focus:outline-none"
      >
        <Image
          src="/xmark-solid.svg" // Close icon
          alt="Close Menu"
          width={24}
          height={24}
        />
      </button>

      {/* Menu Items */}
            <ul className="flex flex-col items-start px-4 py-8 space-y-4">
        <li>
          <a href="/" className="text-black hover:text-gray-600">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-black hover:text-gray-600">
            About
          </a>
        </li>

        {/* About Balance AI Dropdown */}
        <li
          onClick={toggleAboutMenu}
          className="relative text-black font-normal text-[13px] cursor-pointer hover:text-gray-600 flex items-center"
        >
          About Balance AI
          <Image
            src="/chevron-down-solid.svg"
            className={`inline ml-1 mb-1 w-3 transform ${
              isAboutMenuOpen ? "rotate-180" : ""
            }`}
            width={4}
            height={4}
            alt="Chevron Down"
          />
          {isAboutMenuOpen && (
            <ul className="mt-2 ml-4 space-y-2">
              {[
                "Get Started",
                "Analytics Suite",
                "Industry Leading AI System",
                "Research & Methodology",
                "Security & Governance",
                "Partner Platforms",
              ].map((item) => (
                <li key={item} className="text-black hover:text-gray-600">
                  <a href="/" className="block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Client Assistance Dropdown */}
        <li
          onClick={toggleClientMenu}
          className="relative text-black font-normal text-[13px] cursor-pointer hover:text-gray-600 flex items-center"
        >
          Client Assistance
          <Image
            src="/chevron-down-solid.svg"
            className={`inline ml-1 mb-1 w-3 transform ${
              isClientMenuOpen ? "rotate-180" : ""
            }`}
            width={4}
            height={4}
            alt="Chevron Down"
          />
          {isClientMenuOpen && (
            <ul className="mt-2 ml-4 space-y-2">
              {[
                "FAQ",
                "Contact Us",
                "Terms of Service",
                "Submit Service Ticket",
              ].map((item) => (
                <li key={item} className="text-black hover:text-gray-600">
                  <a href="/" className="block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Resources Dropdown */}
        <li
          onClick={toggleResourcesMenu}
          className="relative text-black font-normal text-[13px] cursor-pointer hover:text-gray-600 flex items-center"
        >
          Resources
          <Image
            src="/chevron-down-solid.svg"
            className={`inline ml-1 mb-1 w-3 transform ${
              isResourcesMenuOpen ? "rotate-180" : ""
            }`}
            width={4}
            height={4}
            alt="Chevron Down"
          />
          {isResourcesMenuOpen && (
            <ul className="mt-2 ml-4 space-y-2">
              {[
                "Documentation",
                "Developer Integration Assistance",
                "Submit API Integration Request",
              ].map((item) => (
                <li key={item} className="text-black hover:text-gray-600">
                  <a href="/" className="block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <a href="/pricing" className="text-black hover:text-gray-600">
            Pricing
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

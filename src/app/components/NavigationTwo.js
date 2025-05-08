import navstyles from "@/styles/NavigationTwo.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavigationTwo = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex justify-between items-center  py-2">
        {/* Left Half */}
        <div className="mx-auto flex items-center">
          {/* Logo */}
          <Link href="/">
            <figure className="flex items-center cursor-pointer">
              <img
                src="/Logo.svg"
                className="h-8 w-auto invert"
                alt="Balance AI Logo"
              />
              <span className="ml-2 text-lg font-bold text-gray-800">
                Balance AI
              </span>
            </figure>
          </Link>
          {/* Spacer */}
          <div className="mx-6 border-l border-gray-300 h-6"></div>
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6">
            <li className="text-gray-800 font-medium text-sm cursor-pointer hover:text-gray-600">
              Platform
            </li>
            <li className="text-gray-800 font-medium text-sm cursor-pointer hover:text-gray-600">
              Partners
            </li>
            <li className="text-gray-800 font-medium text-sm cursor-pointer hover:text-gray-600">
              Use Cases
            </li>
            <li className="text-gray-800 font-medium text-sm cursor-pointer hover:text-gray-600">
              Resources
            </li>
            <Link href="/contact">
              <li className="text-gray-800 font-medium text-sm cursor-pointer hover:text-gray-600">
                Pricing
              </li>
            </Link>
            <li className="text-gray-800 font-medium text-sm cursor-pointer hover:text-gray-600">
              Demo Registration
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationTwo;

import Link from "next/link";
import logo from "../public/Logo.svg";
import footerstyles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto">
    <div className="flex flex-col items-center justify-between">
      <a href="#" className="relative mb-5">
        <figure>
          <img
            className="w-20 invert"
            src="/Logo.svg"
            alt="BalanceAI Logo"
          />
        </figure>
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 font-bold opacity-0 transition-all duration-300 ease-in-out text-white group-hover:translate-x-16 group-hover:opacity-100">
          Top
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </a>
      <div className="w-full max-w-lg flex justify-around my-7">
        <Link href="/about" className="hover:text-gray-400 transition ease-in-out duration-100">About</Link>
        <Link href="/contact" className="hover:text-gray-400 transition ease-in-out duration-100">Contact</Link>
        <Link href="/technology" className="hover:text-gray-400 transition ease-in-out duration-100">Technology</Link>
        <Link href="/" className="hover:text-gray-400 transition ease-in-out duration-100">Newsletter</Link>
        <Link href="/tos" className="hover:text-gray-400 transition ease-in-out duration-100">Terms of Service</Link>
      </div>
      <div className="text-center">
        Copyright © 2024 BalanceAI
      </div>
    </div>
  </div>
</footer>
  );
}

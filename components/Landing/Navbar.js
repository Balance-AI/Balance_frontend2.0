import React, { useRef, useState } from "react";
import Link from "next/link";
import logo from "../../public/Logo.svg";
import navstyles from "../../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // This is to toggle the menu by using the state
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false); // This is to toggle the About menu by using the state
  const [isClientMenuOpen, setIsClientMenuOpen] = useState(false); // This is to toggle the Client menu by using the state
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false); // This is to toggle the Resources menu by using the state
  const dropdownRef = useRef(null);

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
    <nav className={navstyles.nav}>
      <div className={`${navstyles.nav__row} row`}>
        <div className={navstyles.nav__lefthalf}>
          <Link href="/">
            <figure className={navstyles.nav__logo}>
              <img
                src="/Logo.svg"
                className={`${navstyles["nav__logo--img"]} logo-invert`}
                alt=""
              />
              Balance AI
              {/* <h6 className={navstyles["nav__logo--text"]}>BalanceAI</h6> */}
            </figure>
          </Link>
          <div className={navstyles.nav__spacer}></div>
          <ul
            className={`${navstyles.nav__list} ${
              isOpen ? navstyles.nav__list__open : ""
            }`}
          >
            <li
              className={`${navstyles.nav__link} ${navstyles["nav__link--analytics"]}`}
            >
              Analytics Suite
            </li>
            <li
              className={`${navstyles.nav__link} ${navstyles["nav__link--pbai"]}`}
            >
              Powered By AI
            </li>
            {/* <Link href="/analyticspage"> */}

            <li
              onClick={toggleAboutMenu}
              className={`${navstyles.nav__link} ${navstyles["nav__link--toggulus"]}`}
            >
              About Balance AI
              <FontAwesomeIcon
                className={navstyles.fachevdown}
                icon={faChevronDown}
              />
              {isAboutMenuOpen && (
                <ul ref={dropdownRef} className={navstyles.dropdown}>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Get Started</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Analytics Suite</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Industry Leading AI System</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Research & Methodology</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Security & Governance</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Partner Platforms</a>
                  </li>
                </ul>
              )}
            </li>

            {/* </Link> */}
            {/* <Link href="/about"> */}
            <li
              onClick={toggleClientMenu}
              className={`${navstyles.nav__link} ${navstyles["nav__link--toggulus"]}`}
            >
              Client Assistance
              <FontAwesomeIcon
                className={navstyles.fachevdown}
                icon={faChevronDown}
              />
              {isClientMenuOpen && (
                <ul ref={dropdownRef} className={navstyles.dropdown}>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">FAQ</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Contact Us</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/tos">Terms of Service</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Submit Service Ticket</a>
                  </li>
                </ul>
              )}
            </li>
            {/* </Link> */}
            <Link href="/contact">
              <li className={navstyles.nav__link}>Pricing</li>
            </Link>
            {/* <Link href="/resources"> */}
            <li onClick={toggleResourcesMenu} className={navstyles.nav__link}>
              Resources
              <FontAwesomeIcon
                className={navstyles.fachevdown}
                icon={faChevronDown}
              />
              {isResourcesMenuOpen && (
                <ul ref={dropdownRef} className={navstyles.dropdown}>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Documentation</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Developer Integration Assistance</a>
                  </li>
                  <li className={navstyles.dropdown__item}>
                    <a href="/">Submit API Integration Request</a>
                  </li>
                </ul>
              )}
            </li>
            {/* </Link> */}
          </ul>
        </div>

        <div className={navstyles["nav__button--container"]}>
          <button
            className={`${navstyles.nav__button} bai__button bai__button--white bai__button--hover bai__button--focus`}
          >
            Buy Now
          </button>
          <button
            className={`${navstyles.nav__button} ${navstyles.nav__buttonmid} bai__button bai__button--black bai__button--hover bai__button--focus`}
          >
            Start Free
          </button>
          <button
            className={`${navstyles.nav__button} bai__button bai__button--white bai__button--hover bai__button--focus`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

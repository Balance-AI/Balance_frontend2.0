import React, { useState } from 'react';
import Link from "next/link";
import logo from "../../public/Logo.svg";
import navstyles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


return (
    <nav className={navstyles.nav}>
      <div className={navstyles.nav__row}>
        <Link href="/">
          <figure className={navstyles.nav__logo}>
            <img
              src="/Logo.svg"
              className={`${navstyles["nav__logo--img"]} logo-invert`}
              alt=""
            />
            {/* <h6 className={navstyles["nav__logo--text"]}>BalanceAI</h6> */}
          </figure>
        </Link>
        <button className={navstyles.nav__toggle} onClick={toggleMenu}>
          <span className={navstyles.nav__toggle__icon}></span>
        </button>
        <ul className={`${navstyles.nav__list} ${isOpen ? navstyles.nav__list__open : ''}`}>
          <Link href="/">
            <li className={`${navstyles.nav__link} ${navstyles["nav__link--home"]}`}>
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className={navstyles.nav__link}>About</li>
          </Link>
          <Link href="/contact">
            <li className={navstyles.nav__link}>Contact</li>
          </Link>
          <Link href="/technology">
            <li className={navstyles.nav__link}>Technology</li>
          </Link>
        </ul>
        <div className={navstyles["nav__button--container"]}>
          <button className={`${navstyles.nav__button} bai__button--hover bai__button--focus`}>Login</button>
          <button className={`${navstyles.nav__button} bai__button--hover bai__button--focus`}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
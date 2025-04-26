import navstyles from "@/styles/NavigationTwo.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavigationTwo = () => {
  return (
    <nav className={navstyles.nav}>
      <div className={`${navstyles.nav__row} row`}>
        <div className={navstyles.nav__lefthalf}>
          <Link href="/">
            <figure className={navstyles.nav__logo}>
              <img
                src="/Logo.svg"
                className={`${navstyles["nav__logo--img"]} logo-invert`}
                alt="Balance AI Logo"
              />
              <span className={`${navstyles["nav__logo--text"]}`}>
                Balance AI
              </span>
              {/* <h6 className={navstyles["nav__logo--text"]}>BalanceAI</h6> */}
            </figure>
          </Link>
          <div className={navstyles.nav__spacer}></div>
          <ul className={navstyles.nav__list}>
            {/* functionality incoming */} 
            <li
              className={`${navstyles.nav__link} ${navstyles["nav__link--analytics"]}`}
            >
              Platform
            </li>
            <li
              className={`${navstyles.nav__link} ${navstyles["nav__link--pbai"]}`}
            >
              Partners
            </li>
            <li
              className={`${navstyles.nav__link} ${navstyles["nav__link--toggulus"]}`}
            >
              Use Cases
            </li>
            <li
              className={`${navstyles.nav__link} ${navstyles["nav__link--toggulus"]}`}
            >
              Resources
            </li>
            <Link href="/contact">
              <li className={navstyles.nav__link}>Pricing</li>
            </Link>
            <li className={navstyles.nav__link}>Demo Registration</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationTwo;

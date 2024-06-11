import Link from "next/link";
import logo from "../public/Logo.svg";
import footerstyles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className={`container`}>
        <div className={`row ${footerstyles.footer__row}`}>
          <a href="#" className={footerstyles.footer__anchor}>
            <figure>
              <img
                className={`${footerstyles["footer__logo--img"]} logo-invert`}
                src="/Logo.svg"
                alt=""
              />
            </figure>
            <span className={footerstyles["footer__logo--popper"]}>
              <FontAwesomeIcon icon={faArrowUp} />{" "}
            </span>
          </a>
          <div className={footerstyles["footer__social--list"]}>
            <a
              href="https://github.com/MahdiT54"
              target="_blank"
              className={footerstyles["footer__social--link"]}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahditanzim/"
              target="_blank"
              className={footerstyles["footer__social--link"]}
            >
              LinkedIn
            </a>
            <a
              href="#"
              onclick="toggleModal()"
              className={footerstyles["footer__social--link"]}
            >
              Contact
            </a>
            <a
              href="./assets/MahdiTanzimResume.pdf"
              target="_blank"
              className={footerstyles["footer__social--link"]}
            >
              Resume
            </a>
          </div>
          <div className={footerstyles.footer__copyright}>Copyright © 2024 BalanceAI</div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../assets/icon/ArrowIcon.svg";
import "./Footer.css";

function Footer() {
  const [dropdownList, setDropdownList] = useState(false);
  const handleDropdownList = () => setDropdownList(!dropdownList);
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <nav className="footer__nav">
          <ul>
            <li className="footer__section footer__section--information">
              <div className="footer__section-text" onClick={handleDropdownList}>
                <h6>Informacje</h6>
                <i
                  className={
                    dropdownList ? "footer__section-icon active" : "footer__section-icon"
                  }
                >
                  <ArrowIcon />
                </i>
              </div>
              <ul
                className={
                  dropdownList ? "footer__section-list active" : "footer__section-list"
                }
              >
                <li onClick={handleDropdownList}>
                  <Link to="/onas">O nas</Link>
                </li>
                <li onClick={handleDropdownList}>
                  <Link to="/regulamin">Regulamin</Link>
                </li>
                <li onClick={handleDropdownList}>
                  <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
                </li>
                <li onClick={handleDropdownList}>
                  <Link to="/zwrot">Wymiana, Zwrot i Reklamacja</Link>
                </li>
                <li onClick={handleDropdownList}>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </li>
            <li className="footer__section footer__section--find-us">
              <h6>Dołącz do nas</h6>
              <ul>
                <li className="footer__section-fid-us-item">
                  <a href="/">
                    <i className="fab fa-facebook-square footer__social-image"></i>
                  </a>
                </li>
                <li className="footer__section-fid-us-item">
                  <a href="/">
                    <i className="fab fa-instagram footer__social-image"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

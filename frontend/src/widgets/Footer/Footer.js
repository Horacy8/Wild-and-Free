import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                    dropdownList
                      ? "fas fa-chevron-down footer__section-icon active"
                      : "fas fa-chevron-down footer__section-icon"
                  }
                ></i>
              </div>
              <ul
                className={
                  dropdownList ? "footer__section-list active" : "footer__section-list"
                }
              >
                <li>
                  <Link to="/onas">O nas</Link>
                </li>
                <li>
                  <Link to="/regulamin">Regulamin</Link>
                </li>
                <li>
                  <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
                </li>
                <li>
                  <Link to="/zwrot">Wymiana, Zwrot i Reklamacja</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </li>
            <li className="footer__section footer__section--find-us">
              <h6>Dołącz do nas</h6>
              <ul>
                <li className="footer__section-fid-us-item">
                  <a href="https://www.facebook.com/NARAVEpl-101341795684552">
                    <i className="fab fa-facebook-square footer__social-image"></i>
                  </a>
                </li>
                <li className="footer__section-fid-us-item">
                  <a href="https://www.instagram.com/narave_pl/">
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

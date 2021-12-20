import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul>
          <li className="footer__section footer__section--information">
            <h6>Informacje</h6>
            <ul>
              <li>
                <Link to="/onas">O nas</Link>
              </li>
              <li>
                <Link to="/regulamin">Regulamin</Link>
              </li>
              <li>
                <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
              </li>
              <li>
                <Link to="/zwrot">Wymiana Zwrot i Reklamacja</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </li>
          <li className="footer__section footer__section--find-us">
            <h6>Dołącz do nas</h6>
            <ul>
              <li>
                <a href="https://www.facebook.com/NARAVEpl-101341795684552">
                  <i className="fab fa-facebook-square footer__social-image"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/narave_pl/">
                  <i className="fab fa-instagram footer__social-image"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;

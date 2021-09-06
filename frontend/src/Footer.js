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
                <Link to="/about">O nas</Link>
              </li>
              <li>
                <Link to="/regulamin">Regulamin</Link>
              </li>
              <li>
                <Link to="regulamin">Polityka prywatności</Link>
              </li>
              <li>
                <Link to="/regulamin">Wymiana Zwrot i Reklamacja</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </li>
          <li className="footer__section footer__section--find-us">
            <h6>Dołącz do nas</h6>
            <ul>
              <li>
                <Link to="/adres-na-fb">
                  <i className="fab fa-facebook-square footer__social-image"></i>
                </Link>
              </li>
              <li>
                <Link to="/adres-na-ig">
                  <i className="fab fa-instagram footer__social-image"></i>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;

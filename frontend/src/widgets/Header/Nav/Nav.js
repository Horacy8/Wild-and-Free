import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import HamburgerIcon from "./HamburgerIcon";
import NavItem from "./NavItem";
import { ReactComponent as Skirt } from "../../../assets/icon/Skirt.svg";
import { ReactComponent as Dress } from "../../../assets/icon/Dress.svg";
import { ReactComponent as Joggers } from "../../../assets/icon/Joggers.svg";
import { ReactComponent as Hoodie } from "../../../assets/icon/Hoodie.svg";

function Nav() {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const handleDropdownMenu = () => {
    setDropdownMenu(!dropdownMenu);
  };

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <>
      <div className="header__btn" onClick={handleDropdownMenu}>
        <HamburgerIcon isActive={dropdownMenu} />
      </div>

      <nav
        className={dropdownMenu ? "header-nav active" : "header-nav"}
        style={{ height: menuHeight }}
      >
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <>
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <div
                  className="header-nav__item-collection"
                  onClick={() => setActiveMenu("collection")}
                >
                  <span>Kolekcja</span>
                  <span className="header-nav__right-icon">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </div>
              </li>
              <NavItem to="/nowosci">Nowości</NavItem>
              <NavItem to="/bestseller">Bestseller</NavItem>
              <NavItem to="/onas">O nas</NavItem>
              <li className="header-nav__social-media">
                <Link to="/adres-na-fb">
                  <i className="fab fa-facebook-square"></i>
                </Link>
                <Link to="/adres-na-ig">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "collection"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <div
                className="header-nav__item-collection--open"
                onClick={() => setActiveMenu("main")}
              >
                <span className="header-nav__left-icon">
                  <i className="fas fa-chevron-left"></i>
                </span>
                <span>Kolekcja</span>
              </div>
            </li>
            <NavItem leftIcon={<Dress />} to="/kolekcja/sukienki">
              Sukienki
            </NavItem>
            <NavItem leftIcon={<Hoodie />} to="/kolekcja/bluzy">
              Bluzy
            </NavItem>
            <NavItem leftIcon={<Joggers />} to="/kolekcja/spodnie">
              Spodnie
            </NavItem>
            <NavItem leftIcon={<Skirt />} to="/kolekcja/spodnice">
              Spódnice
            </NavItem>
          </ul>
        </CSSTransition>
      </nav>
    </>
  );
}

export default Nav;

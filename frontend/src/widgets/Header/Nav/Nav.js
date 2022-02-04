import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../../../components/Backdrop/Backdrop";
// import HamburgerIcon from "./HamburgerIcon";
import NavItem from "./NavItem";
import { ReactComponent as HamburgerIcon } from "../../../assets/icon/HamburgerIcon.svg";
import { ReactComponent as Skirt } from "../../../assets/icon/Skirt.svg";
import { ReactComponent as Dress } from "../../../assets/icon/Dress.svg";
import { ReactComponent as Joggers } from "../../../assets/icon/Joggers.svg";
import { ReactComponent as Hoodie } from "../../../assets/icon/Hoodie.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icon/CloseIcon.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icon/ArrowIcon.svg";
import { useRef } from "react";

function Nav() {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  let menuRef = useRef();

  const handleDropdownMenu = () => {
    if (!dropdownMenu) {
      setDropdownMenu(true);
      document.body.style.overflow = "hidden";
    } else {
      setDropdownMenu(false);
      document.body.style.overflow = "unset";
    }
    // setDropdownMenu(!dropdownMenu);
  };

  // const stopScroll = () => {
  //   if (dropdownMenu) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // };

  useEffect(() => {
    let closeHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdownMenu(false);
        document.body.style.overflow = "unset";
      }
    };
    document.addEventListener("mousedown", closeHandler);

    return () => {
      document.removeEventListener("mousedown", closeHandler);
    };
  }, []);

  return (
    <>
      <div className="header__btn" onClick={handleDropdownMenu}>
        <HamburgerIcon />
      </div>

      <nav ref={menuRef} className={dropdownMenu ? "header-nav active" : "header-nav"}>
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
        >
          <>
            <ul className="header-nav__list">
              <div className="header-nav__close-icon-wrapper">
                <div className="header-nav__close-icon" onClick={handleDropdownMenu}>
                  <CloseIcon />
                </div>
              </div>
              <li className="header-nav__item">
                <div
                  className="header-nav__item-collection"
                  onClick={() => setActiveMenu("collection")}
                >
                  <span>Kolekcja</span>
                  <span className="header-nav__right-icon">
                    <ArrowIcon />
                  </span>
                </div>
              </li>
              <NavItem to="/kolekcja/nowosci" closeMenu={handleDropdownMenu}>
                Nowości
              </NavItem>
              <NavItem to="/kolekcja/bestseller" closeMenu={handleDropdownMenu}>
                Bestseller
              </NavItem>
              <NavItem to="/onas" closeMenu={handleDropdownMenu}>
                O nas
              </NavItem>
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
        >
          <ul className="header-nav__list">
            <li className="header-nav__item header-nav__item-collection-wrapper">
              <div
                className="header-nav__item-collection--open"
                onClick={() => setActiveMenu("main")}
              >
                <span className="header-nav__collection-left-icon">
                  <ArrowIcon />
                </span>
                <span>Kolekcja</span>
              </div>
            </li>
            <NavItem
              leftIcon={<Dress />}
              to="/kolekcja/sukienki"
              closeMenu={handleDropdownMenu}
            >
              Sukienki
            </NavItem>
            <NavItem
              leftIcon={<Hoodie />}
              to="/kolekcja/bluzy"
              closeMenu={handleDropdownMenu}
            >
              Bluzy
            </NavItem>
            <NavItem
              leftIcon={<Joggers />}
              to="/kolekcja/spodnie"
              closeMenu={handleDropdownMenu}
            >
              Spodnie
            </NavItem>
            <NavItem
              leftIcon={<Skirt />}
              to="/kolekcja/spodnice"
              closeMenu={handleDropdownMenu}
            >
              Spódnice
            </NavItem>
          </ul>
        </CSSTransition>
      </nav>
      <Backdrop backdropHandler={dropdownMenu} />
    </>
  );
}

export default Nav;

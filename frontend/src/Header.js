import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [sidebarDropdown, setSidebarDtopdown] = useState(false);
  const [basketDropdown, setBasketDropdown] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const dropdownMenu = () => setSidebarDtopdown(!sidebarDropdown);
  const showBasket = () => setBasketDropdown(!basketDropdown);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <header className="header">
      <div className="header__btn" onClick={showSidebar}>
        <i className="fas fa-bars"></i>
      </div>

      <nav className={sidebar ? "header-nav active" : "header-nav"}>
        <div className="header-nav__menu">
          <div className="header-nav__close">
            <i className="fas fa-times" onClick={showSidebar}></i>
          </div>
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <Link to="/news">Nowości</Link>
            </li>

            <li className="header-nav__item header-nav__dropdown">
              <span onClick={dropdownMenu}>
                Kolekcja
                <i
                  className={
                    sidebarDropdown
                      ? "fas fa-chevron-down header-nav__dropdown-icon header-nav__dropdown-icon--rotate"
                      : "fas fa-chevron-down header-nav__dropdown-icon"
                  }
                ></i>
              </span>
              <ul
                className={
                  sidebarDropdown
                    ? "header-nav__dropdown-list header-nav__dropdown-list--open"
                    : "header-nav__dropdown-list"
                }
              >
                <li className="header-nav__dropdown-item">
                  <Link to="/collection">Cała kolekcja</Link>
                </li>
                <li className="header-nav__dropdown-item">
                  <Link to="/collection/dress">Sukienki</Link>
                </li>
                <li className="header-nav__dropdown-item">
                  <Link to="/collection/skirt">Bluzy</Link>
                </li>
                <li className="header-nav__dropdown-item">
                  <Link to="/collection/tshirt">Spodnie</Link>
                </li>
                <li className="header-nav__dropdown-item">
                  <Link to="/collection/tshirt">Spódnice</Link>
                </li>
              </ul>
            </li>

            <li className="header-nav__item">
              <Link to="/bestseller">Bestseller</Link>
            </li>
            <li className="header-nav__item">
              <Link to="/about">O Nas</Link>
            </li>
          </ul>
        </div>
        <div className="header-nav__social-media">
          <Link to="/adres-na-fb">
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link to="/adres-na-ig">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </nav>

      <div className="header__logo">
        <Link to="/">NARAVE</Link>
      </div>

      <div className="header__option">
        <div className="header__basket" onClick={showBasket}>
          <i className="fas fa-shopping-bag"></i>
          {cartItems.length > 0 && (
            <span className="header__basket-count">{cartItems.length}</span>
          )}
        </div>
        <div
          className={
            basketDropdown
              ? "header__basket-dropdown active"
              : "header__basket-dropdown"
          }
        >
          <div className="header__basket-item-list"></div>
          <div className="header__basket-bottom">
            <div className="header__basket-summary">
              <span>Razem:</span>
              <span className="header__basket-summary--price">200,00$</span>
            </div>
            <button className="header__basket-btn">
              <Link to="/cart">Do koszyka</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

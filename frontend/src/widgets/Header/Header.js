import React from "react";
import { Link } from "react-router-dom";
import Basket from "./Basket/Basket";
import Nav from "./Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Nav></Nav>

      <div className="header__logo">
        <Link to="/">
          <img src="./img/name.jpg" alt="" />
        </Link>
      </div>

      <Basket></Basket>
    </header>
  );
}

export default Header;

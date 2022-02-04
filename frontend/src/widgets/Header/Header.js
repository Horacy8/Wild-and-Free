import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Name } from "../../assets/icon/Nazwa.svg";
import TopBar from "./TopBar/TopBar";
import Basket from "./Basket/Basket";
import Nav from "./Nav/Nav";
import "./Header.css";

function Header() {
  return (
    <>
      <TopBar />
      <header className="header">
        <Nav></Nav>

        <div className="header__logo">
          <Link to="/">
            <Name />
          </Link>
        </div>

        <Basket></Basket>
      </header>
    </>
  );
}

export default Header;

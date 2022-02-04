import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li className="header-nav__item" onClick={() => props.closeMenu()}>
      <Link to={props.to}>
        {props.leftIcon === undefined ? null : (
          <span className="header-nav__left-icon">{props.leftIcon}</span>
        )}
        <span>{props.children}</span>
        {props.rightIcon === undefined ? null : (
          <span className="header-nav__right-icon">{props.rightIcon}</span>
        )}
      </Link>
    </li>
  );
}

export default NavItem;

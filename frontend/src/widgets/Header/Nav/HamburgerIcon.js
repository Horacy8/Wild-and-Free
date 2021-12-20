import React from "react";
import "./HamburgerIcon.css";

function HamburgerIcon(props) {
  return (
    <button
      className={
        props.isActive
          ? "hamburger hamburger--spin is-active"
          : "hamburger hamburger--spin"
      }
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}

export default HamburgerIcon;

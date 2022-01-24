import React from "react";
import "./Backdrop.css";

function Backdrop(props) {
  return <div className={props.backdropHandler ? "backdrop visible" : "backdrop"}></div>;
}

export default Backdrop;

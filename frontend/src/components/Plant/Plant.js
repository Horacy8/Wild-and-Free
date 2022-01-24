import React from "react";
import { ReactComponent as PlantIcon } from "../../assets/icon/PlantIcon.svg";
import "./Plant.css";

function Plant() {
  return (
    <div className="plant__icon-wrapper">
      <span className="plant__line-left"></span>
      <PlantIcon />
      <span className="plant__line-right"></span>
    </div>
  );
}

export default Plant;

import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage(props) {
  return (
    <div className="not-found">
      <Link to="/">
        <button className="btn not-fount__btn">Przejdź do strony głównej</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;

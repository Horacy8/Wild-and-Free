import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <div className="main__baner">
        <img src="./img/main.jpg" alt="Zdjęcie banerowe" />
        <span className="main__baner-text">Udanych zakupów</span>
        <span className="main__baner-btn">
          <Link to="/collection">Zobacz kolekcję</Link>
        </span>
      </div>
      <section className="main__news">
        <h6 className="main__news-text">Nowości</h6>
      </section>
      <section className="main__ig">
        <h6 className="main__ig-text">Instagram</h6>
      </section>
    </main>
  );
}

export default Main;

import React, { useEffect } from "react";
import data from "../data";
import Product from "./Product";
import "./Collection.css";

function Collection() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="collection">
      <h2 className="collection__title">Kolekcja</h2>
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Collection;

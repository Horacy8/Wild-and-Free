import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  return (
    <div>
      <div key={product._id} className="collection-page__card">
        <Link to={`/product/${product._id}`}>
          <img
            className="collection-page__card-img"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <div className="collection-page__card-title">
          <a href={`/product/${product._id}`}>
            <h3>{product.name}</h3>
          </a>
        </div>
        <div className="collection-page__price">{product.price} zł</div>
      </div>
    </div>
  );
}

export default Product;

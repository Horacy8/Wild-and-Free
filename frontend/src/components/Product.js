import React from "react";

function Product(props) {
  const { product } = props;
  return (
    <div>
      <div key={product._id} className="collection__card">
        <a href={`/product/${product._id}`}>
          <img
            className="collection__card-img"
            src={product.image}
            alt={product.name}
          />
        </a>
        <div className="collection__card-title">
          <a href={`/product/${product._id}`}>
            <h3>{product.name}</h3>
          </a>
        </div>
        <div className="collection__price">{product.price} zł</div>
      </div>
    </div>
  );
}

export default Product;

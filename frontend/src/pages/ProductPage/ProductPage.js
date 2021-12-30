import React, { useState } from "react";
import data from "../../data";

import ProductPageSlider from "./ProductPageSlider";
import ProductPageOptions from "./ProductPageOptions";
import "./ProductPage.css";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/features/cart/cartSlice";

function ProductPage(props) {
  const product = data.products.find((item) => item._id === props.match.params.id);

  const [selectedSize, setSelectedSize] = useState("");

  const handleSelectedSize = (size) => setSelectedSize(size);

  const dispatch = useDispatch();
  const addToCart = () => {
    if (selectedSize) {
      dispatch(
        addProductToCart({
          _id: product._id,
          name: product.name,
          price: product.price,
          image: product.image[0],
          size: selectedSize,
        })
      );
    } else {
      alert("Wybierz rozmiar");
    }
  };

  return (
    <div className="product-page">
      <ProductPageSlider product={product} />
      <div className="product-page__panel">
        <div className="product-page__title">
          <h2 className="product-page__name">{product.name}</h2>
          <strong className="product-page__price">{product.price},00 zł</strong>
        </div>
        <div className="product-page__color">
          <span className="product-page__color-name">Kolor</span>
          <div
            className="product-page__color-item"
            style={{ backgroundColor: product.color }}
          ></div>
        </div>
        <div className="product-page__size">
          <span className="product-page__size-name">Rozmiar</span>
          <ul className="product-page__size-list">
            {product.sizes.map((item) =>
              item.countInStock > 0 ? (
                <li
                  onClick={() => handleSelectedSize(item.size)}
                  key={item.size}
                  className={
                    selectedSize === item.size
                      ? "product-page__size-item active"
                      : "product-page__size-item"
                  }
                >
                  {item.size}
                </li>
              ) : (
                <li
                  key={item.size}
                  className="product-page__size-item product-page__size-item--disabled"
                >
                  {item.size}
                </li>
              )
            )}
          </ul>
        </div>
        <button className="btn product-page__btn" onClick={addToCart}>
          Do Koszyka
        </button>
        <ProductPageOptions product={product} />
      </div>
    </div>
  );
}

export default ProductPage;

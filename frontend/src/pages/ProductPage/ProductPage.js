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
  const [quantity, setQuantity] = useState(1);

  const checkCountInStock = product.sizes.find((item) => item.size === selectedSize);
  const countInStock = checkCountInStock ? checkCountInStock.countInStock : 0;

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
    setQuantity(1);
  };

  const handleQuantity = (action) => {
    if (selectedSize) {
      switch (action) {
        case "plus":
          if (quantity < countInStock && quantity < 10) {
            setQuantity(quantity + 1);
          } else return;
          break;
        case "minus":
          if (quantity >= 2) {
            setQuantity(quantity - 1);
          } else return;
          break;
        default:
          return;
      }
    } else {
      alert("Wybierz rozmiar");
    }
  };

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
          qty: quantity,
        })
      );
    } else {
      alert("Wybierz rozmiar");
    }
  };

  return (
    <>
      <div className="product-page">
        <ProductPageSlider product={product} />
        <div className="product-page__panel">
          <div className="product-page__title">
            <h2 className="product-page__name">{product.name}</h2>
            <strong className="product-page__price">{product.price},00 zł</strong>
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
                    onClick={() => handleSelectedSize(item.size)}
                  >
                    {item.size}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="product-page__qty">
            <span className="product-page__qty-name">Ilość</span>
            <div className="product-page__counter-wrapper">
              <button
                className="product-page__counter-btn-minus"
                onClick={() => handleQuantity("minus")}
              >
                -
              </button>
              <span className="product-page__counter">{quantity}</span>
              <button
                className="product-page__counter-btn-plus"
                onClick={() => handleQuantity("plus")}
              >
                +
              </button>
            </div>
          </div>
          {countInStock || selectedSize === "" ? (
            <button className="btn" onClick={addToCart}>
              Do Koszyka
            </button>
          ) : (
            <button className="btn btn-disabled" disabled>
              Produkt wyprzedany
            </button>
          )}
        </div>
        <ProductPageOptions product={product} />
      </div>
    </>
  );
}

export default ProductPage;

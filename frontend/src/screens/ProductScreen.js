import React, { useState } from "react";
import data from "../data";
import "./ProductScreen.css";

function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);

  const [descriptionDropdown, setDescriptionDropdown] = useState(false);
  const dropdownDescription = () =>
    setDescriptionDropdown(!descriptionDropdown);

  const [deliveryDropdown, setDeliveryDropdown] = useState(false);
  const dropdownDelivery = () => setDeliveryDropdown(!deliveryDropdown);

  return (
    <div className="product-screen">
      <div className="product-screen__col-1">
        <img
          className="product-screen__img"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="product-screen__col-2">
        <ul className="product-screen__list">
          <li>
            <h2 className="product-screen__name">{product.name}</h2>
          </li>
          <li>
            <span className="product-screen__price">{product.price} zł</span>
          </li>
          <li className="product-screen__color">
            <span>Kolor:</span>
            <ul>
              <li>
                <div className="product-screen__color-option"></div>
              </li>
              <li>
                <div className="product-screen__color-option"></div>
              </li>
              <li>
                <div className="product-screen__color-option"></div>
              </li>
            </ul>
          </li>
          <li className="product-screen__size">
            <span>Rozmiar:</span>
            <ul>
              <li>
                <div className="product-screen__size-option">XS</div>
              </li>
              <li>
                <div className="product-screen__size-option">S/M</div>
              </li>
              <li>
                <div className="product-screen__size-option">L/XL</div>
              </li>
            </ul>
          </li>
          <li>
            <div>
              {product.countInStock > 0 ? (
                <button className="product-screen__btn">Do Koszyka</button>
              ) : (
                <button className="product-screen__btn">
                  Powiadom o dostępności
                </button>
              )}
            </div>
          </li>
          <li className="product-screen__delivery">
            <span onClick={dropdownDelivery}>
              Dostawa i Płatność
              <i
                className={
                  deliveryDropdown
                    ? "fas fa-chevron-down product-screen__dropdown-icon product-screen__dropdown-icon--rotate"
                    : "fas fa-chevron-down product-screen__dropdown-icon"
                }
              ></i>
            </span>
            <p
              className={
                deliveryDropdown
                  ? "product-screen__dropdown-delivery product-screen__dropdown-delivery--open"
                  : "product-screen__dropdown-delivery"
              }
            >
              {product.description}
            </p>
          </li>
          <li className="product-screen__description">
            <span onClick={dropdownDescription}>
              Opis Produktu wraz ze składem
              <i
                className={
                  descriptionDropdown
                    ? "fas fa-chevron-down product-screen__dropdown-icon product-screen__dropdown-icon--rotate"
                    : "fas fa-chevron-down product-screen__dropdown-icon"
                }
              ></i>
            </span>
            <p
              className={
                descriptionDropdown
                  ? "product-screen__dropdown-description product-screen__dropdown-description--open"
                  : "product-screen__dropdown-description"
              }
            >
              {product.description}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductScreen;

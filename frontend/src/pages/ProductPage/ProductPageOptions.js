import React, { useState } from "react";

function ProductPageOptions(props) {
  const product = props.product;
  const [descriptionDropdown, setDescriptionDropdown] = useState(false);
  const [dimensionsDropdown, setDimensionsDropdown] = useState(false);
  const [deliveryAndPaymentDropdown, setDeliveryAndPaymentDropdown] = useState(false);

  const dropdownDescription = () => setDescriptionDropdown(!descriptionDropdown);
  const dropdownDimensions = () => setDimensionsDropdown(!dimensionsDropdown);
  const dropdownDeliveryAndPayment = () =>
    setDeliveryAndPaymentDropdown(!deliveryAndPaymentDropdown);
  return (
    <ul className="product-page__options">
      <li className="product-page__options-item">
        <div className="product-page__description" onClick={dropdownDescription}>
          <span className="product-page__option-name">Opis Produktu</span>
          <i
            className={
              descriptionDropdown
                ? "fas fa-chevron-down product-page__dropdown-icon product-page__dropdown-icon--rotate"
                : "fas fa-chevron-down product-page__dropdown-icon"
            }
          ></i>
        </div>
        <p
          className={
            descriptionDropdown
              ? "product-page__dropdown-description product-page__dropdown-description--open"
              : "product-page__dropdown-description"
          }
        >
          {product.description}
        </p>
      </li>
      <li className="product-page__options-item">
        <div className="product-page__dimensions" onClick={dropdownDimensions}>
          <span className="product-page__option-name">Tabela Rozmiarów</span>
          <i
            className={
              dimensionsDropdown
                ? "fas fa-chevron-down product-page__dropdown-icon product-page__dropdown-icon--rotate"
                : "fas fa-chevron-down product-page__dropdown-icon"
            }
          ></i>
        </div>
        <p
          className={
            dimensionsDropdown
              ? "product-page__dropdown-dimensions product-page__dropdown-dimensions--open"
              : "product-page__dropdown-dimensions"
          }
        >
          {product.description}
        </p>
      </li>
      <li className="product-page__options-item">
        <div
          className="product-page__delivery-and-payment"
          onClick={dropdownDeliveryAndPayment}
        >
          <span className="product-page__option-name">Dostawa i Płatność</span>
          <i
            className={
              deliveryAndPaymentDropdown
                ? "fas fa-chevron-down product-page__dropdown-icon product-page__dropdown-icon--rotate"
                : "fas fa-chevron-down product-page__dropdown-icon"
            }
          ></i>
        </div>
        <p
          className={
            deliveryAndPaymentDropdown
              ? "product-page__dropdown-delivery-and-payment product-page__dropdown-delivery-and-payment--open"
              : "product-page__dropdown-delivery-and-payment"
          }
        >
          {product.description}
        </p>
      </li>
    </ul>
  );
}

export default ProductPageOptions;

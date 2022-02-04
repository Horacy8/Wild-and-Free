import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icon/ArrowIcon.svg";

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
          <div
            className={
              descriptionDropdown
                ? "product-page__dropdown-icon product-page__dropdown-icon--rotate"
                : "product-page__dropdown-icon"
            }
          >
            <ArrowIcon />
          </div>
        </div>
        <div
          className={
            descriptionDropdown
              ? "product-page__dropdown product-page__dropdown--open"
              : "product-page__dropdown"
          }
        >
          {product.description.map((item) => (
            <>
              {item.list ? (
                <>
                  <strong className="product-page__dropdown-list-name">
                    {item.big ? item.big : item.text}
                  </strong>
                  <ul className="product-page__dropdown-list-wrapper">
                    {item.list.map((listItem) => (
                      <li className="product-page__dropdown-list-item">{listItem}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <strong className="product-page__dropdown-list-name">{`${item.big} `}</strong>
                  <p className="product-page__dropdown-text">{item.text}</p>
                </>
              )}
            </>
          ))}
        </div>
      </li>
      <li className="product-page__options-item">
        <div className="product-page__dimensions" onClick={dropdownDimensions}>
          <span className="product-page__option-name">Tabela Rozmiarów</span>
          <div
            className={
              dimensionsDropdown
                ? "product-page__dropdown-icon product-page__dropdown-icon--rotate"
                : "product-page__dropdown-icon"
            }
          >
            <ArrowIcon />
          </div>
        </div>
        <div
          className={
            dimensionsDropdown
              ? "product-page__dropdown product-page__dropdown--open"
              : "product-page__dropdown"
          }
        >
          <p className="product-page__dropdown-text">Ubrania mierzone na płasko:</p>
          {product.dimensions.map((item) => (
            <>
              <strong className="product-page__dropdown-list-name">
                {item.sizeName}
              </strong>
              <ul className="product-page__dropdown-list-wrapper product-page__dropdown-list-wrapper--dimensions">
                {item.sizeDimensions.map((listItem) => (
                  <li className="product-page__dropdown-list-item">
                    {listItem.dimensionName}: <span>{listItem.dimensionValue} cm</span>
                  </li>
                ))}
              </ul>
            </>
          ))}
          <p className="product-page__dropdown-text">
            Nasze ubrania szyjemy lokalnie, w Polsce w niewielkiej pracowni krawieckiej. Z
            racji tego, iż każda rzecz odszywana jest ręcznie, wartości w tabeli wymiarów
            mogą różnić się +/- 2 cm.
          </p>
        </div>
      </li>
      <li className="product-page__options-item">
        <div
          className="product-page__delivery-and-payment"
          onClick={dropdownDeliveryAndPayment}
        >
          <span className="product-page__option-name">Dostawa i Płatność</span>
          <div
            className={
              deliveryAndPaymentDropdown
                ? "product-page__dropdown-icon product-page__dropdown-icon--rotate"
                : "product-page__dropdown-icon"
            }
          >
            <ArrowIcon />
          </div>
        </div>
        <div
          className={
            deliveryAndPaymentDropdown
              ? "product-page__dropdown product-page__dropdown--open"
              : "product-page__dropdown"
          }
        >
          <strong className="product-page__dropdown-list-name">Formy dostawy:</strong>
          <ul className="product-page__dropdown-list-wrapper">
            <li className="product-page__dropdown-list-item">InPost Paczkomaty</li>
            <li className="product-page__dropdown-list-item">InPost Kurier</li>
          </ul>
          <p className="product-page__dropdown-text">
            Wysyłka w ciągu 1-3 dni roboczych (Poniedziałek - Piątek) od zaksięgowania
            płatności.
          </p>
          <strong className="product-page__dropdown-list-name">Formy Płatności:</strong>
          <ul className="product-page__dropdown-list-wrapper">
            <li className="product-page__dropdown-list-item">Płatności Online PayU</li>
            <li className="product-page__dropdown-list-item">BLIK</li>
            <li className="product-page__dropdown-list-item">
              Przelew na rachunek bankowy
            </li>
          </ul>
          <p className="product-page__dropdown-text">
            Nasze produkty szyjemy na bieżąco, dlatego w szczególnych przypadkach
            realizacja zamówienia może się przedłóżyć do 7-14 dni roboczych.
          </p>
          <p className="product-page__dropdown-text">
            Wysyłka zamówień tylko na terenie Polski.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default ProductPageOptions;

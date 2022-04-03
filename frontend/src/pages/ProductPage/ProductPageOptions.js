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
          <p className="product-page__dropdown-text">Lorem ipsum dolor, sit amet</p>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            voluptatem mollitia sed ut dicta! Fugiat dolor deserunt rerum itaque
            voluptatem? Facilis nobis dolor architecto labore rem distinctio deleniti,
            assumenda aliquam?
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
          <strong className="product-page__dropdown-list-name">Lorem ipsum:</strong>
          <ul className="product-page__dropdown-list-wrapper">
            <li className="product-page__dropdown-list-item">Lorem ipsum - 30 zł</li>
            <li className="product-page__dropdown-list-item">Lorem ipsum - 80 zł</li>
          </ul>
          <p className="product-page__dropdown-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptas
            maiores placeat
          </p>
          <strong className="product-page__dropdown-list-name">Lorem ipsum:</strong>
          <ul className="product-page__dropdown-list-wrapper">
            <li className="product-page__dropdown-list-item">Lorem ipsum</li>
            <li className="product-page__dropdown-list-item">Lorem</li>
            <li className="product-page__dropdown-list-item">
              Lorem ipsum dolor, sit amet
            </li>
          </ul>
          <p className="product-page__dropdown-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veritatis
            repudiandae est voluptatibus at ea cupiditate, ius
          </p>
        </div>
      </li>
    </ul>
  );
}

export default ProductPageOptions;

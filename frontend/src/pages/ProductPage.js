import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../redux/actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "./ProductPage.css";

function ProductPage(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [descriptionDropdown, setDescriptionDropdown] = useState(false);
  const dropdownDescription = () =>
    setDescriptionDropdown(!descriptionDropdown);

  const [deliveryDropdown, setDeliveryDropdown] = useState(false);
  const dropdownDelivery = () => setDeliveryDropdown(!deliveryDropdown);

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}`);
  };

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="product-page">
          <div className="product-page__col-1">
            <img
              className="product-page__img"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="product-page__col-2">
            <ul className="product-page__list">
              <li>
                <h2 className="product-page__name">{product.name}</h2>
              </li>
              <li>
                <span className="product-page__price">{product.price} zł</span>
              </li>
              <li className="product-page__color">
                <span>Kolor:</span>
                <ul>
                  <li>
                    <div className="product-page__color-option"></div>
                  </li>
                  <li>
                    <div className="product-page__color-option"></div>
                  </li>
                  <li>
                    <div className="product-page__color-option"></div>
                  </li>
                </ul>
              </li>
              <li className="product-page__size">
                <span>Rozmiar:</span>
                <ul>
                  <li>
                    <div className="product-page__size-option">XS</div>
                  </li>
                  <li>
                    <div className="product-page__size-option">S/M</div>
                  </li>
                  <li>
                    <div className="product-page__size-option">L/XL</div>
                  </li>
                </ul>
              </li>
              <li>
                <div>
                  {product.countInStock > 0 ? (
                    <button
                      onClick={addToCartHandler}
                      className="product-page__btn"
                    >
                      Do Koszyka
                    </button>
                  ) : (
                    <button className="product-page__btn">
                      Powiadom o dostępności
                    </button>
                  )}
                </div>
              </li>
              <li className="product-page__delivery">
                <span onClick={dropdownDelivery}>
                  Dostawa i Płatność
                  <i
                    className={
                      deliveryDropdown
                        ? "fas fa-chevron-down product-page__dropdown-icon product-page__dropdown-icon--rotate"
                        : "fas fa-chevron-down product-page__dropdown-icon"
                    }
                  ></i>
                </span>
                <p
                  className={
                    deliveryDropdown
                      ? "product-page__dropdown-delivery product-page__dropdown-delivery--open"
                      : "product-page__dropdown-delivery"
                  }
                >
                  {product.description}
                </p>
              </li>
              <li className="product-page__description">
                <span onClick={dropdownDescription}>
                  Opis Produktu wraz ze składem
                  <i
                    className={
                      descriptionDropdown
                        ? "fas fa-chevron-down product-page__dropdown-icon product-page__dropdown-icon--rotate"
                        : "fas fa-chevron-down product-page__dropdown-icon"
                    }
                  ></i>
                </span>
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
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;

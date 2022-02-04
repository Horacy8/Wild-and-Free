import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Backdrop from "../../../components/Backdrop/Backdrop";
import { ReactComponent as EmptyBasketIcon } from "../../../assets/icon/EmptyBagIcon.svg";
import { ReactComponent as BasketIcon } from "../../../assets/icon/shoppingBag.svg";
import { ReactComponent as Dumpster } from "../../../assets/icon/Dumpster.svg";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../../redux/features/cart/cartSlice";

function Basket() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allQty = cartItems.reduce((a, c) => a + c.qty, 0);
  const priceForAllProducts = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const [basketDropdown, setBasketDropdown] = useState(false);
  const showBasket = () => setBasketDropdown(!basketDropdown);

  const dispatch = useDispatch();
  const removeFromCart = (_id, size) => {
    dispatch(removeProductFromCart({ _id, size }));
  };

  const handleQuantity = (product, action) => {
    switch (action) {
      case "plus":
        if (product.qty < 10) {
          dispatch(
            addProductToCart({
              _id: product._id,
              name: product.name,
              price: product.price,
              image: product.image,
              size: product.size,
              qty: product.qty + 1,
            })
          );
        } else return;
        break;
      case "minus":
        if (product.qty >= 2) {
          dispatch(
            addProductToCart({
              _id: product._id,
              name: product.name,
              price: product.price,
              image: product.image,
              size: product.size,
              qty: product.qty - 1,
            })
          );
        } else return;
        break;
      default:
        return;
    }
  };

  let basketRef = useRef();
  useEffect(() => {
    let closeHandler = (e) => {
      if (!basketRef.current.contains(e.target)) {
        setBasketDropdown(false);
      }
    };
    document.addEventListener("mousedown", closeHandler);

    return () => {
      document.removeEventListener("mousedown", closeHandler);
    };
  }, []);

  // FIXME zatrzymanie otwierania koszyka po odświeżeniu

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("produkt")) {
      if (cartItems.length !== 0) {
        setBasketDropdown(true);
      }
    }
  }, [cartItems]);

  return (
    <>
      <div className="header__option">
        <div className="header__basket" onClick={showBasket}>
          <BasketIcon />
          {cartItems.length ? <span className="header__basket-count">{allQty}</span> : ""}
        </div>
        <div
          ref={basketRef}
          className={
            basketDropdown ? "header__basket-dropdown active" : "header__basket-dropdown"
          }
        >
          {cartItems.length === 0 ? (
            <div className="header__basket-empty">
              {/* <BasketIcon /> */}
              <EmptyBasketIcon />
              <h3 className="header__basket-empty-title">Twój koszyk jest pusty</h3>
              <p className="header__basket-empty-text">
                Dodaj produkty do koszyka, aby złożyć zamówienie.
              </p>
              <Link to="/kolekcja/cala">
                <button className="btn" onClick={showBasket}>
                  Zobacz kolekcję
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="header__basket-item-list">
                <ul className="header__basket-products-wrapper">
                  {cartItems.map((item) => (
                    <li key={item._id} className="header__basket-product">
                      <div className="header__basket-img">
                        <Link to={`/produkt/${item._id}`}>
                          <img src={item.image} alt={item.name} onClick={showBasket} />
                        </Link>
                      </div>
                      <div className="header__basket-product-description">
                        <Link to={`/produkt/${item._id}`}>
                          <h2
                            className="header__basket-product-name"
                            onClick={showBasket}
                          >
                            {item.name}
                          </h2>
                        </Link>
                        <h5 className="header__basket-product-size">{`Rozmiar: ${item.size}`}</h5>
                      </div>
                      <div className="header__basket-product-quantity">
                        <div className="header__basket-product-counter-wrapper">
                          <button
                            className="header__basket-product-btn-minus"
                            onClick={() => handleQuantity(item, "minus")}
                          >
                            -
                          </button>
                          <span className="header__basket-product-counter">
                            {item.qty}
                          </span>
                          <button
                            className="header__basket-product-btn-plus"
                            onClick={() => handleQuantity(item, "plus")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="header__basket-product-icon">
                        <div
                          className="header__basket-product-icon-wrapper"
                          onClick={() => removeFromCart(item._id, item.size)}
                        >
                          <Dumpster />
                        </div>
                      </div>
                      <div className="header__basket-product-price">
                        <span>{item.price},00 zł</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="header__basket-bottom">
                <div className="header__basket-summary">
                  <span>Razem:</span>
                  <span className="header__basket-summary--price">
                    {priceForAllProducts},00 zł
                  </span>
                </div>
                <Link to="/koszyk">
                  <button className="btn" onClick={() => showBasket()}>
                    Do koszyka
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Backdrop backdropHandler={basketDropdown} />
    </>
  );
}

export default Basket;

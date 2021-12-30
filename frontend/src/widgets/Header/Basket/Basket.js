import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as BasketIcon } from "../../../assets/icon/shoppingBag.svg";

function Basket() {
  const [basketDropdown, setBasketDropdown] = useState(false);
  const showBasket = () => setBasketDropdown(!basketDropdown);

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div className="header__option">
      <div className="header__basket" onClick={showBasket}>
        <BasketIcon />
        {cartItems.length ? (
          <span className="header__basket-count">{cartItems.length}</span>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          basketDropdown ? "header__basket-dropdown active" : "header__basket-dropdown"
        }
      >
        <div className="header__basket-item-list"></div>
        <div className="header__basket-bottom">
          <div className="header__basket-summary">
            <span>Razem:</span>
            <span className="header__basket-summary--price">200,00 zł</span>
          </div>
          <Link to="/koszyk">
            <button className="btn">Do koszyka</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Basket;

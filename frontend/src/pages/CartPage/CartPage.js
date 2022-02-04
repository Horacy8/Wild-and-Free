import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Plant from "../../components/Plant/Plant";
import { ReactComponent as EmptyBasketIcon } from "../../assets/icon/EmptyBagIcon.svg";
import { ReactComponent as Dumpster } from "../../assets/icon/Dumpster.svg";
import "./CartPage.css";
import {
  removeProductFromCart,
  addProductToCart,
} from "../../redux/features/cart/cartSlice";

function CartPage(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const deliveryCost = 14;

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

  const priceForAllProducts = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const discountCodeHandler = (e) => {
    e.preventDefault();
  };

  const checkoutHandler = () => {
    props.history.push(`/dane-adresowe`);
  };

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <div className="cart-page__empty">
          <EmptyBasketIcon />
          <h3 className="cart-page__empty-title">Twój koszyk jest pusty</h3>
          <p className="cart-page__empty-text">
            Dodaj produkty do koszyka, aby złożyć zamówienie.
          </p>
          <Link to="/kolekcja/cala">
            <button className="btn">Zobacz kolekcję</button>
          </Link>
        </div>
      ) : (
        <>
          <h3 className="cart-page__title">Koszyk</h3>
          <Plant />
          <div className="cart-page__columns">
            <div className="cart-page__col1">
              <ul className="cart-page__products">
                {cartItems.map((item) => (
                  <li key={item._id} className="cart-page__product">
                    <div className="cart-page__image">
                      <Link to={`/produkt/${item._id}`}>
                        <img src={item.image} alt={item.name} />
                      </Link>
                    </div>
                    <div className="cart-page__description">
                      <Link to={`/produkt/${item._id}`}>
                        <h2 className="cart-page__name">{item.name}</h2>
                      </Link>
                      <h5 className="cart-page__size">{`Rozmiar: ${item.size}`}</h5>
                    </div>
                    <div className="cart-page__quantity">
                      <div className="product-page__counter-wrapper">
                        <button
                          className="product-page__counter-btn-minus"
                          onClick={() => handleQuantity(item, "minus")}
                        >
                          -
                        </button>
                        <span className="product-page__counter">{item.qty}</span>
                        <button
                          className="product-page__counter-btn-plus"
                          onClick={() => handleQuantity(item, "plus")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-page__icon">
                      <div
                        className="cart-page__icon-wrapper"
                        onClick={() => removeFromCart(item._id, item.size)}
                      >
                        <Dumpster />
                      </div>
                    </div>
                    <div className="cart-page__price">
                      <span>{item.price},00 zł</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cart-page__col2">
              <div className="cart-page__discount-code">
                <form
                  className="cart-page__discount-code-form"
                  onSubmit={discountCodeHandler}
                >
                  <div className="cart-page__discount-code-input-wrapper">
                    <input type="text" required />
                    <label>Kod rabatowy:</label>
                  </div>
                  <button className="btn cart-page-discount-code-btn" type="submit">
                    Zatwierdź
                  </button>
                </form>
              </div>
              <div className="cart-page__costs">
                <div className="cart-page__products-price">
                  <span>Wartość produktów:</span>
                  <span>{priceForAllProducts},00 zł</span>
                </div>
                <div className="cart-page__delivery">
                  <span>Koszt dostawy od:</span>
                  <span>+{deliveryCost},00 zł</span>
                </div>
                <div className="cart-page__subtotal">
                  <span>Razem:</span>
                  <span>{priceForAllProducts + deliveryCost},00 zł</span>
                </div>
              </div>
              <button
                className="btn"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
              >
                Do Kasy
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

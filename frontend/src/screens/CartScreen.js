import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import "./CartScreen.css";

function CartScreen(props) {
  const productId = props.match.params.id;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const qty = cartItems.qty;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push(`/shipping`);
  };

  const priceForAllProducts = cartItems.reduce(
    (a, c) => a + c.price * c.qty,
    0
  );
  return (
    <div className="cart-screen">
      {cartItems.length === 0 ? (
        <div className="cart-screen__empty">
          <i class="fas fa-shopping-bag cart-screen__empty-icon"></i>
          <h3 className="cart-screen__empty-title">Twój koszyk jest pusty</h3>
          <p className="cart-screen__empty-text">
            Dodaj produkty do koszyka, aby złożyć zamówienie
          </p>
          <Link to="/collection">Zobacz kolekcję</Link>
        </div>
      ) : (
        <ul className="cart-screen__columns">
          <div className="cart-screen__col1">
            <h2 className="cart-screen__title">Koszyk</h2>
            <ul className="cart-screen__products">
              {cartItems.map((item) => (
                <li key={item.product} className="cart-screen__product">
                  <div className="cart-screen__image">
                    <Link to={`/product/${item.product}`}>
                      <img src={item.image} alt={item.name} />
                    </Link>
                  </div>
                  <div className="cart-screen__description">
                    <Link to={`/product/${item.product}`}>
                      <h2 className="cart-screen__name">{item.name}</h2>
                    </Link>
                    <h5 className="cart-screen__size">Rozmiar: One Size</h5>
                  </div>
                  <div className="cart-screen__quantity">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="cart-screen__icon">
                    <i
                      className="fas fa-times"
                      onClick={() => removeFromCartHandler(item.product)}
                    ></i>
                  </div>
                  <div className="cart-screen__price">
                    <span>{item.price} zł</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-screen__col2">
            <div className="cart-screen__products-price">
              <span>Wartość produktów:</span>
              <span>{priceForAllProducts},00 zł</span>
            </div>
            <div className="cart-screen__delivery">
              <span>Koszt dostawy od:</span>
              <span>{priceForAllProducts > 400 ? "0,00 zł" : "+12,00 zł"}</span>
            </div>
            <div className="cart-screen__subtotal">
              <span>Razem:</span>
              <span>
                {priceForAllProducts > 400
                  ? priceForAllProducts
                  : priceForAllProducts + 12}
                ,00 zł
              </span>
            </div>
            <button
              className="cart-screen__btn"
              onClick={checkoutHandler}
              disabled={cartItems.length === 0}
            >
              Do Kasy
            </button>
          </div>
        </ul>
      )}
    </div>
  );
}

export default CartScreen;

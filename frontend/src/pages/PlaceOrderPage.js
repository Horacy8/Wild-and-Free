import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PlaceOrderPage.css";

function PlaceOrderPage(props) {
  const cart = useSelector((state) => state.cart);

  if (!cart.deliveryPayment.deliveryMethod) {
    props.history.push("/payment");
  }

  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );

  cart.shippingPrice = cart.itemsPrice > 400 ? toPrice(0) : toPrice(14);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;

  const placeOrderHandler = () => {
    // TODO: dispatch place order action
  };
  return (
    <div className="place-order-page">
      <div className="place-order-page__col1">
        <ul>
          <li className="place-order-page__li">
            <div>
              <h2 className="place-order-page__title">Podsumowanie</h2>
            </div>
          </li>
          <li className="place-order-page__li">
            <div className="place-order-page__address">
              <h4>Dane Adresowe</h4>
              <p>
                <strong>Imię i Nazwisko:</strong> {cart.shippingAddress.name}{" "}
                {cart.shippingAddress.surname}
              </p>
              <p>
                <strong>Adres:</strong> {cart.shippingAddress.address},{" "}
                {cart.shippingAddress.postalCode}, {cart.shippingAddress.city}
              </p>
            </div>
          </li>
          <li className="place-order-page__li">
            <div>
              <h4>Dane kontaktowe</h4>
              <p>
                <strong>Adres e-mail:</strong> {cart.shippingAddress.email}
              </p>
              <p>
                <strong>Telefon:</strong> {cart.shippingAddress.phone}
              </p>
            </div>
          </li>
          <li className="place-order-page__li">
            <div className="place-order-page__address">
              <h4>Sposób dostawy i płatność</h4>
              <p>
                <strong>Dostawa:</strong>{" "}
                {cart.deliveryPayment.deliveryMethod === "ParcelLocker"
                  ? "Paczkomaty InPost"
                  : "Przesyłka kurierska"}
              </p>
              <p>
                <strong>Płatność:</strong>{" "}
                {cart.deliveryPayment.paymentMethod === "AccountPayment"
                  ? "Przelew tradycyjny"
                  : "Przelew tradycyjny"}
              </p>
            </div>
          </li>
          <li className="place-order-page__li">
            <div>
              <h4>Przedmioty</h4>
              <div className="cart-page__col1">
                <ul className="cart-page__products">
                  {cart.cartItems.map((item) => (
                    <li key={item.product} className="cart-page__product">
                      <div className="cart-page__image">
                        <Link to={`/product/${item.product}`}>
                          <img src={item.image} alt={item.name} />
                        </Link>
                      </div>
                      <div className="cart-page__description">
                        <Link to={`/product/${item.product}`}>
                          <h2 className="cart-page__name">{item.name}</h2>
                        </Link>
                        <h5 className="cart-page__size">Rozmiar: One Size</h5>
                      </div>
                      <div className="cart-page__price">
                        <span>
                          {item.qty} x {item.price} zł = {item.qty * item.price}{" "}
                          zł
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="place-order-page__col2">
        <div className="cart-page__products-price">
          <span>Wartość produktów:</span>
          <span>{cart.itemsPrice.toFixed(2)} zł</span>
        </div>
        <div className="cart-page__delivery">
          <span>Koszt dostawy od:</span>
          <span>{cart.shippingPrice.toFixed(2)} zł</span>
        </div>
        <div className="cart-page__subtotal">
          <span>Razem:</span>
          <span>{cart.totalPrice.toFixed(2)} zł</span>
        </div>
        <button
          className="cart-page__btn"
          type="button"
          onClick={placeOrderHandler}
          disabled={cart.cartItems.length === 0}
        >
          Zatwierdź
        </button>
      </div>
    </div>
  );
}

export default PlaceOrderPage;

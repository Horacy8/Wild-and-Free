import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PlaceOrderScreen.css";

function PlaceOrderScreen(props) {
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
    <div className="place-order-screen">
      <div className="place-order-screen__col1">
        <ul>
          <li className="place-order-screen__li">
            <div>
              <h2 className="place-order-screen__title">Podsumowanie</h2>
            </div>
          </li>
          <li className="place-order-screen__li">
            <div className="place-order-screen__address">
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
          <li className="place-order-screen__li">
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
          <li className="place-order-screen__li">
            <div className="place-order-screen__address">
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
          <li className="place-order-screen__li">
            <div>
              <h4>Przedmioty</h4>
              <div className="cart-screen__col1">
                <ul className="cart-screen__products">
                  {cart.cartItems.map((item) => (
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
                      <div className="cart-screen__price">
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
      <div className="place-order-screen__col2">
        <div className="cart-screen__products-price">
          <span>Wartość produktów:</span>
          <span>{cart.itemsPrice.toFixed(2)} zł</span>
        </div>
        <div className="cart-screen__delivery">
          <span>Koszt dostawy od:</span>
          <span>{cart.shippingPrice.toFixed(2)} zł</span>
        </div>
        <div className="cart-screen__subtotal">
          <span>Razem:</span>
          <span>{cart.totalPrice.toFixed(2)} zł</span>
        </div>
        <button
          className="cart-screen__btn"
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

export default PlaceOrderScreen;

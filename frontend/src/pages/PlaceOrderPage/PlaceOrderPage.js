import React from "react";
import { useSelector } from "react-redux";
import "./PlaceOrderPage.css";
// FIXME wyswietlanie dostawy jesli kurier to kurier jesli paczkomat to jego dane
// FIXME poprawne wyswietlanie sposobu platnosci
// TODO Po nacisnieciu zamawiam przekierowanie do strony platnosci

function PlaceOrderPage() {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const totalPrice = 100;

  return (
    <div className="place-order-page">
      <h3 className="place-order-page__title">Podsumowanie</h3>
      <div className="place-order-page__shipping-address">
        <h4 className="place-order-page__name">Dane:</h4>
        <p className="place-order-page__shipping-address-item">{`${shippingAddress.name} ${shippingAddress.surname}`}</p>
        <p className="place-order-page__shipping-address-item">{`${shippingAddress.address}`}</p>
        <p className="place-order-page__shipping-address-item">{`${shippingAddress.postalCode} ${shippingAddress.city}`}</p>
        <p className="place-order-page__shipping-address-item">{`tel.: ${shippingAddress.phone}`}</p>
        <p className="place-order-page__shipping-address-item">{`e-mail: ${shippingAddress.email}`}</p>
        <div className="place-order-page__business">
          {shippingAddress.business ? (
            <p className="place-order-page__shipping-address-item">
              {`Firma: ${shippingAddress.business}`}
            </p>
          ) : (
            ""
          )}
          {shippingAddress.nip ? (
            <p className="place-order-page__shipping-address-item">
              {`NIP: ${shippingAddress.nip}`}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="place-order-page__delivery-and-payment">
        <h4 className="place-order-page__name">Dostawa:</h4>
        <p className="place-order-page__delivery">
          <span>{shippingAddress.deliveryMethod}</span>
          <span>14,00 zł</span>
        </p>
        <h4 className="place-order-page__name place-order-page__name--payment">
          Płatność:
        </h4>
        <p className="place-order-page__payment">{shippingAddress.paymentMethod}</p>
      </div>
      <div className="place-order-page__products-and-total-price">
        <h4 className="place-order-page__name">Zamówione Produkty:</h4>
        <ul className="place-order-page__products-list">
          {cartItems.map((item) => (
            <li key={item._id} className="place-order-page__product">
              <div className="place-order-page__product-description">
                <p className="place-order-page__product-name">{item.name}</p>
                <p className="place-order-page__size">{`Rozmiar: ${item.size}`}</p>
              </div>
              <div className="place-order-page__quantity">
                <span>1 szt.</span>
              </div>
              <div className="place-order-page__product-price">
                <span>{item.price},00 zł</span>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="place-order-page__total-price">
          {/* FIXME prawidlowe przeliczanie calkowitej ceny */}
          <span>Do Zapłaty:</span>
          <span>{totalPrice},00 zł</span>
        </h3>
      </div>
      <button className="btn place-order-page__btn">Zamawiam</button>
    </div>
  );
}

export default PlaceOrderPage;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDeliveryPayment } from "../actions/cartActions";
import "./DeliveryPaymentScreen.css";

function DeliveryPaymentScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }

  const [deliveryMethod, setDeliveryMethod] = useState("ParcelLocker");
  const [paymentMethod, setPaymentMethod] = useState("AccountPayment");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveDeliveryPayment({ deliveryMethod, paymentMethod }));
    props.history.push("/placeorder");
  };
  return (
    <div className="delivery-payment-screen">
      <form onSubmit={submitHandler}>
        <div>
          <h1 className="delivery-payment-screen__title">Dostawa i płatność</h1>
        </div>
        <div className="delivery-payment-screen__delivery">
          <span>Sposób dostawy:</span>
          <div className="delivery-payment-screen__delivery-box">
            <div className="delivery-payment-screen__delivery-parcel">
              <input
                type="radio"
                id="parcelLocker"
                value="ParcelLocker"
                name="deliveryMethod"
                required
                checked
                onClick={(e) => setDeliveryMethod(e.target.value)}
              />
              <label
                className="delivery-payment-screen-label"
                htmlFor="parcelLocker"
              >
                Paczkomaty InPost{" "}
                <span className="delivery-payment-screen-span">+14.00zł</span>
              </label>
            </div>
            <div className="delivery-payment-screen__delivery-courier">
              <input
                type="radio"
                id="courier"
                value="Courier"
                name="deliveryMethod"
                required
                onClick={(e) => setDeliveryMethod(e.target.value)}
              />
              <label
                className="delivery-payment-screen-label"
                htmlFor="courier"
              >
                Kurier{" "}
                <span className="delivery-payment-screen-span">+16.00zł</span>
              </label>
            </div>
          </div>
        </div>
        <div className="delivery-payment-screen__payment">
          <span>Sposób płatności:</span>
          <div className="delivery-payment-screen__payment-box">
            <div className="delivery-payment-screen__payment-account">
              <input
                type="radio"
                id="accountPayment"
                value="AccountPayment"
                name="paymentMethod"
                required
                checked
                onClick={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="accountPayment">Wpłata na konto</label>
            </div>
          </div>
        </div>
        <div>
          <button className="delivery-payment-screen__btn" type="submit">
            Podsumowanie
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeliveryPaymentScreen;

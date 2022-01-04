import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveShippingAddress } from "../../redux/features/cart/cartSlice";
import "./ShippingAddressPage.css";

// TODO dodac sprawdzenie poprawnosci wpisywanych danych w zaleznosci od inputa
// TODO opcjonalne inputy jak w koszyku plus dodanie napisu (Opcjonalne)
function ShippingAddressPage(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [business, setBusiness] = useState("");
  const [nip, setNip] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [acceptShopRegulations, setAcceptShopRegulations] = useState(false);

  const [deliveryMethod, setDeliveryMethod] = useState("");
  const handleDeliveryMethod = (e) => setDeliveryMethod(e.target.value);

  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentMethod = (e) => setPaymentMethod(e.target.value);

  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(
      saveShippingAddress({
        name,
        surname,
        business,
        nip,
        address,
        postalCode,
        city,
        phone,
        email,
        acceptShopRegulations,
        deliveryMethod,
        paymentMethod,
      })
    );
    props.history.push(`/podsumowanie`);
  };

  console.log(paymentMethod);

  return (
    <div className="shipping-address-page">
      <h3 className="shipping-address-page__title">Dane Adresowe</h3>
      <form className="shipping-address-page__form" onSubmit={submitHandler}>
        <div className="shipping-address-page__address-inputs">
          <div className="shipping-address-page__input-wrapper">
            <input
              className="shipping-address-page__input-text"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="shipping-address-page__label" htmlFor="name">
              Imię
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper">
            <input
              className="shipping-address-page__input-text"
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            <label className="shipping-address-page__label" htmlFor="surname">
              Nazwisko
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper">
            <input
              className="shipping-address-page__input-text"
              type="text"
              id="business"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              required
            />
            <label className="shipping-address-page__label" htmlFor="business">
              Firma
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper">
            <input
              className="shipping-address-page__input-text"
              type="text"
              id="nip"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
              required
            />
            <label className="shipping-address-page__label" htmlFor="nip">
              NIP
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper">
            <input
              className="shipping-address-page__input-text"
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label className="shipping-address-page__label" htmlFor="address">
              Ulica i numer domu
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper-two-input">
            <div className="shipping-address-page__input-wrapper shipping-address-page__input-wrapper--short">
              <input
                className="shipping-address-page__input-text"
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
              <label className="shipping-address-page__label" htmlFor="postalCode">
                Kod Pocztowy
              </label>
            </div>
            <div className="shipping-address-page__input-wrapper shipping-address-page__input-wrapper--short">
              <input
                className="shipping-address-page__input-text"
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <label className="shipping-address-page__label" htmlFor="city">
                Miasto
              </label>
            </div>
          </div>
          <div className="shipping-address-page__input-wrapper">
            <input
              className="shipping-address-page__input-text"
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label className="shipping-address-page__label" htmlFor="phone">
              Telefon
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper">
            <input
              className="shipping-address-page__input-text"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="shipping-address-page__label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper-checkbox">
            <input
              className="shipping-address-page__input-checkbox"
              type="checkbox"
              id="AcceptShopRegulations"
              value={acceptShopRegulations}
              onChange={(e) => setAcceptShopRegulations(!acceptShopRegulations)}
              required
            />
            <label
              className="shipping-address-page__label-checkbox"
              htmlFor="AcceptShopRegulations"
            >
              Akceptuje <Link to="/regulamin">Regulamin</Link> i{" "}
              <Link to="/polityka-prywatnosci">Polityke Prywatności</Link>
            </label>
          </div>
        </div>
        <div className="shipping-address-page__delivery-inputs">
          <h3 className="shipping-address-page__title">Dostawa</h3>
          <div className="shipping-address-page__input-wrapper-checkbox">
            <input
              className="shipping-address-page__input-checkbox"
              name="delivery"
              type="radio"
              id="deliveryMethodParcelLocker"
              value={"parcelLocker"}
              checked={deliveryMethod === "parcelLocker"}
              onChange={handleDeliveryMethod}
              required
            />
            <label
              className="shipping-address-page__label-checkbox"
              htmlFor="deliveryMethodParcelLocker"
            >
              InPost Paczkomaty
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper-checkbox">
            <input
              className="shipping-address-page__input-checkbox"
              name="delivery"
              type="radio"
              id="deliveryMethodCourier"
              value={"courier"}
              checked={deliveryMethod === "courier"}
              onChange={handleDeliveryMethod}
            />
            <label
              className="shipping-address-page__label-checkbox"
              htmlFor="deliveryMethodCourier"
            >
              InPost Kurier
            </label>
          </div>
        </div>
        <div className="shipping-address-page__delivery-inputs">
          <h3 className="shipping-address-page__title">Płatność</h3>
          <div className="shipping-address-page__input-wrapper-checkbox">
            <input
              className="shipping-address-page__input-checkbox"
              name="payment"
              type="radio"
              id="paymentMethodOnlineTransfer"
              value={"onlineTransfer"}
              checked={paymentMethod === "onlineTransfer"}
              onChange={handlePaymentMethod}
              required
            />
            <label
              className="shipping-address-page__label-checkbox"
              htmlFor="paymentMethodOnlineTransfer"
            >
              Przelew Online
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper-checkbox">
            <input
              className="shipping-address-page__input-checkbox"
              name="payment"
              type="radio"
              id="paymentMethodBlik"
              value={"blik"}
              checked={paymentMethod === "blik"}
              onChange={handlePaymentMethod}
            />
            <label
              className="shipping-address-page__label-checkbox"
              htmlFor="paymentMethodBlik"
            >
              BLIK
            </label>
          </div>
        </div>
        <button className="btn" type="submit">
          Do Podsumowania
        </button>
      </form>
    </div>
  );
}

export default ShippingAddressPage;

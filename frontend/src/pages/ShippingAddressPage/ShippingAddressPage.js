import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveShippingAddress } from "../../redux/features/cart/cartSlice";
import Plant from "../../components/Plant/Plant";
import "./ShippingAddressPage.css";

// TODO ceny przy dostawach
// TODO customowe powiadomienie o błędnym wpisaniu
// TODO poprawić sprawdzenie poprawnosci wpisywania
// TODO API InPosta, wybór paczkomatu na mapie

function ShippingAddressPage(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  if (cartItems.length === 0) {
    props.history.push("/koszyk");
  }

  const [name, setName] = useState(shippingAddress.name);
  const [surname, setSurname] = useState(shippingAddress.surname);
  const [business, setBusiness] = useState(shippingAddress.business);
  const [nip, setNip] = useState(shippingAddress.nip);
  const [address, setAddress] = useState(shippingAddress.address);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [city, setCity] = useState(shippingAddress.city);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [email, setEmail] = useState(shippingAddress.email);

  const [acceptShopRegulations, setAcceptShopRegulations] = useState(false);

  const [deliveryMethod, setDeliveryMethod] = useState("");
  const handleDeliveryMethod = (e) => setDeliveryMethod(e.target.value);

  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentMethod = (e) => setPaymentMethod(e.target.value);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
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

  return (
    <div className="shipping-address-page">
      <h3 className="shipping-address-page__title">Dane Adresowe</h3>
      <Plant />
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
              required={nip}
            />
            <label
              className={
                business
                  ? "shipping-address-page__label-no-req active"
                  : "shipping-address-page__label-no-req"
              }
              htmlFor="business"
            >
              Firma* <span className="shipping-address-page__optional">(Opcjonalne)</span>
            </label>
          </div>
          <div className="shipping-address-page__input-wrapper">
            <input
              className="shipping-address-page__input-text"
              type="number"
              inputMode="decimal"
              id="nip"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
              required={business}
            />
            <label
              className={
                nip
                  ? "shipping-address-page__label-no-req active"
                  : "shipping-address-page__label-no-req"
              }
              htmlFor="nip"
            >
              NIP* <span className="shipping-address-page__optional">(Opcjonalne)</span>
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
                pattern="[0-9]{2}[-][0-9]{3}"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
              <label
                className={
                  postalCode
                    ? "shipping-address-page__label-no-req active"
                    : "shipping-address-page__label-no-req"
                }
                htmlFor="postalCode"
              >
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
              type="number"
              inputMode="tel"
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
              type="email"
              inputMode="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              className={
                email
                  ? "shipping-address-page__label-no-req active"
                  : "shipping-address-page__label-no-req"
              }
              htmlFor="email"
            >
              E-mail
            </label>
          </div>
          <p className="shipping-address__info">* Nie wystawiamy Faktur VAT</p>
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
              Akceptuję <Link to="/regulamin">Regulamin</Link> i{" "}
              <Link to="/polityka-prywatnosci">Politykę Prywatności</Link>
            </label>
          </div>
        </div>
        <div className="shipping-address-page__delivery-inputs">
          <h3 className="shipping-address-page__title shipping-address-page__title--margin">
            Dostawa
          </h3>
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
          <h3 className="shipping-address-page__title shipping-address-page__title--margin">
            Płatność
          </h3>
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
        <button className="btn shipping-addres-page__btn" type="submit">
          Do Podsumowania
        </button>
      </form>
    </div>
  );
}

export default ShippingAddressPage;

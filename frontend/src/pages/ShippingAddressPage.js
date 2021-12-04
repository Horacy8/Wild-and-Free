import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../redux/actions/cartActions";
import "./ShippingAddressPage.css";

function ShippingAddressPage(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [name, setName] = useState(shippingAddress.name);
  const [surname, setSurname] = useState(shippingAddress.surname);
  const [email, setEmail] = useState(shippingAddress.email);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        name,
        surname,
        email,
        phone,
        address,
        city,
        postalCode,
      })
    );
    props.history.push("/payment");
  };
  return (
    <div className="shipping-address-page">
      <form className="" onSubmit={submitHandler}>
        <div>
          <h1 className="shipping-address-page__title">Adres Dostawy</h1>
        </div>
        <div className="shipping-address-page__from-item">
          <label htmlFor="name">Imię</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="shipping-address-page__from-item">
          <label htmlFor="surname">Nazwisko</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="shipping-address-page__from-item">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="shipping-address-page__from-item">
          <label htmlFor="phone">Telefon</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="shipping-address-page__from-item">
          <label htmlFor="address">Ulica i numer domu</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="shipping-address-page__from-item">
          <label htmlFor="city">Miasto</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="shipping-address-page__from-item">
          <label htmlFor="postal Code">Kod pocztowy</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label />
          <button className="shipping-address-page__btn" type="submit">
            Przejdź dalej
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShippingAddressPage;

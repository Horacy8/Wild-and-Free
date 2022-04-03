import React, { useState } from "react";
import "./Popup.css";

function Popup(props) {
  const [notificationEmail, setNotificationEmail] = useState("");
  const submitHandler = () => {};

  return (
    <div className={props.popupHandler ? "popup visible" : "popup"}>
      <i
        class="fas fa-times popup__close-icon"
        onClick={() => props.closePopupHandler()}
      ></i>
      <h4 className="popup__title">{props.name}</h4>
      <p className="popup__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, officia
        exercitationem, ab reprehenderit aliquam fuga ullam aperiam blanditiis sunt quis
        beatae facilis quae assumenda dolorum illum esse, reiciendis nesciunt consequatur.
      </p>
      <form className="popup__form" onSubmit={submitHandler}>
        <div className="popup__input-wrapper">
          <input
            type="email"
            id="notification-email"
            className="popup__input-text"
            value={notificationEmail}
            onChange={(e) => setNotificationEmail(e.target.value)}
            required
          />
          <label htmlFor="notification-email" className="popup__label">
            E-mail
          </label>
        </div>
        <button className="btn" type="submit">
          Powiadom o dostępności
        </button>
      </form>
    </div>
  );
}

export default Popup;

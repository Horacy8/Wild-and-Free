import React from "react";
import Plant from "../../components/Plant/Plant";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h3 className="contact-page__name">Kontakt</h3>
      <Plant />
      <div className="contact-page__list">
        <p className="contact-page__text">
          Masz do nas pytanie? Zapraszamy do kontaktu na adres e-mail lub na naszych
          social mediach:
        </p>
        <a href="mailto:naravepl@gmail.com" className="contact-page__list-item">
          <i className="far fa-envelope"></i>
          <span>naravepl@gmail.com</span>
        </a>
        <a
          href="https://www.instagram.com/narave_pl/"
          className="contact-page__list-item"
        >
          <i className="fab fa-instagram"></i>
          <span>narave_pl</span>
        </a>
        <a
          href="https://www.facebook.com/NARAVEpl-101341795684552"
          className="contact-page__list-item"
        >
          <i className="fab fa-facebook-square"></i>
          <span>NARAVE.pl</span>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;

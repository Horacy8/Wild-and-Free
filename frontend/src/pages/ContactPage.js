import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h3 className="contact-page__name">Kontakt</h3>
      <div className="contact-page__list">
        <a href="narave@gmail.com" className="contact-page__list-item">
          <i class="far fa-envelope"></i>
          <span>narave@gmail.com</span>
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

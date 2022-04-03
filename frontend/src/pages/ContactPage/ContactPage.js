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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aperiam
        </p>
        <a href="mailto:example@example.com" className="contact-page__list-item">
          <i className="far fa-envelope"></i>
          <span>example@example.com</span>
        </a>
        <a href="#ig" className="contact-page__list-item">
          <i className="fab fa-instagram"></i>
          <span>example</span>
        </a>
        <a href="#fb" className="contact-page__list-item">
          <i className="fab fa-facebook-square"></i>
          <span>example</span>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;

import React from "react";
import images from "../../constants/images";
import Plant from "../../components/Plant/Plant";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page__item">
        <div className="about-page__text">
          <h4>Lorem</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, doloremque
            nemo aliquid soluta minus, illum quidem accusamus a, error earum delectus
            provident laudantium beatae repudiandae totam eligendi accusantium architecto
            quisquam?
          </p>
        </div>
        <img src={images.about} alt="Opis firmy" />
      </div>
      <div className="about-page__item">
        <div className="about-page__text">
          <h4>Lorem</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nisi ratione
            delectus officia vel voluptas. Explicabo saepe sed accusantium! Esse fuga at
            impedit illum, pariatur illo in officia. Necessitatibus, impedit! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Accusamus velit rem, ducimus
            necessitatibus facilis fuga possimus ipsum. Nesciunt, iure excepturi voluptas
            hic dolore repellat doloremque, quasi soluta necessitatibus magni minima!
          </p>
          <div className="about-page__material-list">
            <h5>Lorem ipsum</h5>
            <ul className="about-page__list">
              <li className="about-page__list-item">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo deleniti
                  eius consequuntur sequi ducimus, quisquam rerum, numquam
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo deleniti
                  eius consequuntur sequi ducimus, quisquam rerum, numquam
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nostrum
                  dolores laboriosam, dolor provident ad ullam minus, non reprehenderit
                  quasi possimus officiis. Hic, dicta? Quod veritatis vero hic ad quaerat.
                </p>
              </li>
              <li className="about-page__list-item">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo deleniti
                  eius consequuntur sequi ducimus, quisquam rerum, numquam
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-page__item">
        <div className="about-page__text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat
            aperiam delectus beatae minus, blanditiis repellendus labore odio excepturi
            fuga illo voluptatibus iure nihil voluptatem? Ducimus minima praesentium earum
            ab.
          </p>
          <p className="about-page__text--hug">Lorem,</p>
          <p className="about-page__text--narave">Lorem ipsum</p>
          <Plant />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

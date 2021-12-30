import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.js";
import SwiperCore, { Pagination } from "swiper";
import { Swiper } from "swiper/react/swiper.js";
import { SwiperSlide } from "swiper/react/swiper-slide";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "./Main.css";
SwiperCore.use([Pagination]);

function Main() {
  return (
    <main className="main">
      <div className="main__baner">
        <img src="./img/main.jpg" alt="Zdjęcie banerowe" />
        <Link to="/kolekcja/cala">
          <button className="btn">Zobacz kolekcję</button>
        </Link>
      </div>
      <section className="main__news">
        <div className="main__header-text">
          <span className="main__header-text-span-left"></span>
          <h3 className="main__header-text--h">Nowości</h3>
          <span className="main__header-text-span-right"></span>
        </div>
        <Swiper slidesPerView={"auto"} spaceBetween={20} className="mySwiper">
          {data.products.map((item) => {
            return (
              item.isNew && (
                <SwiperSlide key={item._id}>
                  <Link to={`/produkt/${item._id}`}>
                    <div className="main__product">
                      <img
                        className="main__product-img"
                        src={item.image[0]}
                        alt={item.category}
                      />
                      <p className="main__product-name">{item.name}</p>
                      <strong className="main__product-price">{item.price},00 zł</strong>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </section>
      <section className="main__ig">
        <div className="main__header-text">
          <span className="main__header-text-span-left"></span>
          <h3 className="main__header-text--h">Instagram</h3>
          <span className="main__header-text-span-right"></span>
        </div>
        <Swiper slidesPerView={"auto"} spaceBetween={20} className="mySwiper">
          {data.instagram.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <a href={item.url}>
                  <img className="main__instagram-img" src={item.image} alt="Instagram" />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
}

export default Main;

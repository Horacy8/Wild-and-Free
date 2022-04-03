import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data.js";
import Plant from "../../components/Plant/Plant.js";
// import SwiperCore, { Pagination } from "swiper";
import { Swiper } from "swiper/react/swiper.js";
import { SwiperSlide } from "swiper/react/swiper-slide";
import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";
import "./Main.css";
// SwiperCore.use([Pagination]);

function Main() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="main">
      <div className="main__baner">
        <div className="main__baner-img">
          <img
            src="./img/main.jpg"
            alt="Zdjęcie banerowe"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          />
        </div>
        <Link to="/kolekcja/cala">
          <button className="btn">Zobacz kolekcję</button>
        </Link>
      </div>
      <section className="main__news">
        <div className="main__header-text">
          <h3 className="main__header-text--h">Nowości</h3>
        </div>
        <Plant />
        <Swiper slidesPerView={"auto"} spaceBetween={20} className="main__Swiper">
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
      <Plant />
      <div className="main__description">
        <div className="main__description-item">
          <div className="main__description-img">
            <img src="/img/description1.jpg" alt="Opis firmy" />
          </div>
          <div className="main__description-text">
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic delectus
              corrupti laudantium quibusdam molestias minima inventore, voluptate sapiente
              ipsam qui aliquid quisquam accusamus sit autem, ut saepe culpa eveniet.
            </p>
          </div>
        </div>
        <div className="main__description-item">
          <div className="main__description-img">
            <img src="/img/description2.jpg" alt="Opis firmy" />
          </div>
          <div className="main__description-text">
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
              officia eius dolorem quis, voluptatum aut ipsum perferendis iste dolore
              deserunt aliquam quibusdam
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

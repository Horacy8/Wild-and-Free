import React, { useState } from "react";

import { Swiper } from "swiper/react/swiper.js";
import { SwiperSlide } from "swiper/react/swiper-slide";
import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/thumbs/thumbs.min.css";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
SwiperCore.use([FreeMode, Navigation, Thumbs]);

function ProductPageSlider(props) {
  const product = props.product;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-page__slider">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="product-page__slider-top"
      >
        {product.image.map((item) => (
          <SwiperSlide>
            <img src={item} alt="Zdjęcie produktowe" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        className="product-page__slider-bottom"
      >
        {product.image.map((item) => (
          <SwiperSlide>
            <img src={item} alt="Zdjęcie produktowe" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductPageSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ButtonArticles } from "../../../../ui/button/btn-articles/btn-articles";
import { Card } from "./card/card";
import styles from "./news.module.css";

export const News = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>Browse our latest news</h2>
      </div>

      <div className={styles.desktopGrid}>
        <Card />
        <Card />
        <Card />
      </div>

      {/* <div className={styles.mobileSlider}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={20}
        >
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
      </div> */}

      <div className={styles.mobileSlider}>
  <div className={styles.sliderWrapper}>
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={20}
    >
      <SwiperSlide className={styles.slide}>
        <Card />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Card />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Card />
      </SwiperSlide>
    </Swiper>
  </div>
</div>

      <div className={styles.articles}>
        <ButtonArticles text="View All Articles" />
      </div>
    </section>
  );
};

import styles from "./projects.module.css"
import { postData } from "../../blog/constant/constants"
import { Link } from "react-router-dom"

import img from "../../../assets/img/laptop.png"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export const Projectt = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Projects</h1>

      {/* <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={26}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className={styles.postCards}
      > */}

      <Swiper
  modules={[Pagination]}
  spaceBetween={26}
  slidesPerView={3}
  pagination={{ clickable: true }}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1020: { slidesPerView: 3 },
  }}
>
        {postData.map((info, index) => (
          <SwiperSlide key={index}>
            <Link to={info.link}>
              <div className={styles.postCard}>
                <img
                  className={styles.postCardImg}
                  src={img}
                  alt="image"
                />
                <button className={styles.postCardButton}>
                  {info.btnText}
                </button>
                <h3 className={styles.postCardTitle}>{info.title}</h3>
                <p className={styles.postCardDescription}>
                  {info.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
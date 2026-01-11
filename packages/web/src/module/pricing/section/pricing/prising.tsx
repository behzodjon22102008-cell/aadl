import styles from "./prising.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export const Prising = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Pricing</h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Feugiat nulla suspendisse tortor aenean dis placerat.
        </p> */}
      </div>

      <div className={styles.mobile}>
        <Swiper spaceBetween={20} slidesPerView={1}>
          <SwiperSlide><Card type="BASIC" /></SwiperSlide>
          <SwiperSlide><Card type="PRO" /></SwiperSlide>
          <SwiperSlide><Card type="EXPERT" /></SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.desktop}>
        <div className={styles.usd}>
          <Card type="BASIC" />
          <Card type="PRO" />
          <Card type="EXPERT" />
        </div>
      </div>
    </div>
  )
}

const Card = ({ type }) => (
  <div className={styles.card}>
    <span className={styles.badge}>{type}</span>
    <h2>$ 100 USD</h2>
    <p>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit.</p>

    <h3>FEATURES</h3>
    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>

    <button>CONTACT US</button>
  </div>
)

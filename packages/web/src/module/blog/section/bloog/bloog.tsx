import styles from "./bloog.module.css";

import img from "../../../../assets/img/laptop.png";
import { postData } from "../../constant/constants";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Bloog() {
  return (
    <>
      <section>
        <div className={`${styles.blog} ${styles.container}`}>
          <h1 className={styles.blogTitle}>Blog</h1>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.head}>
          <div className={styles.headCard}>
            <button className={styles.headCardBtn}>Featured</button>
            <h2 className={styles.headCardTitle}>
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
            </h2>
            <p className={styles.headCardDescription}>
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
              Scelerisque viverra donec diammeo.
            </p>
          </div>
          <img className={styles.headImg} src={img} alt="img" />
        </div>
      </section>

      <section>
        <div className={`${styles.posts} ${styles.container}`}>
          <div className={styles.postHead}>
            <h1 className={styles.postHeadTitle}>Latest Posts</h1>
            <div className={styles.postBtns}>
              <button className={styles.postButton}>All</button>
              <button className={styles.postButton}>Apps</button>
              <button className={styles.postButton}>Products</button>
              <button className={styles.postButton}>Tutorial</button>
            </div>
          </div>

          <div className={styles.mobileCarousel}>
            <Swiper
              spaceBetween={26}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {postData.map((info, index) => (
                <SwiperSlide key={index}>
                  <Link to={info.link}>
                    <div className={styles.postCard}>
                      <img
                        className={styles.postCardImg}
                        src={info.img}
                        alt="image"
                      />
                      <button className={styles.postCardButton}>
                        {info.btnText}
                      </button>
                      <h3 className={styles.postCardTitle}>{info.title}</h3>
                      <p className={styles.postCardDescription}>
                        {info.description}
                      </p>
                      <hr className={styles.postCardLine} />
                      <div className={styles.user}>
                        <img
                          className={styles.avatarIcon}
                          src={info.avatar}
                          alt="avatar"
                        />
                        <div className={styles.userInfo}>
                          <h4 className={styles.userFullName}>
                            {info.full_name}
                          </h4>
                          <h5 className={styles.aboutUser}>
                            {info.about_user}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.desktopGrid}>
            <div className={styles.postCards}>
              {postData.map((info, index) => (
                <Link key={index} to={info.link}>
                  <div className={styles.postCard}>
                    <img
                      className={styles.postCardImg}
                      src={info.img}
                      alt="image"
                      />
                    <button className={styles.postCardButton}>
                      {info.btnText}
                    </button>
                    <h3 className={styles.postCardTitle}>{info.title}</h3>
                    <p className={styles.postCardDescription}>
                      {info.description}
                    </p>
                    <hr className={styles.postCardLine} />
                    <div className={styles.user}>
                      <img
                        className={styles.avatarIcon}
                        src={info.avatar}
                        alt="avatar"
                      />
                      <div className={styles.userInfo}>
                        <h4 className={styles.userFullName}>
                          {info.full_name}
                        </h4>
                        <h5 className={styles.aboutUser}>
                          {info.about_user}
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
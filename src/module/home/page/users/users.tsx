import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import woman from "../../../../assets/img/woman.png"
import man from "../../../../assets/img/man.png"

import styles from "./users.module.css";
import { ButtonUsers } from "../../../../ui/button/btn-users/btn-users";

export const Testimonials = () =>  {
  const testimonials = [
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: woman,
    },
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: woman,
    },
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: man,
    },
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: man,
    },
        {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: woman,
    },
        {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: woman,
    },
        {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: man,
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What our users say?</h2>
      <ButtonUsers text="VIEW ALL COMMENTS" />

             <Swiper
             modules={[Pagination]}
             pagination={{ clickable: true }}
             spaceBetween={-115}
             centeredSlides={false}
             slidesPerView={2}
             slidesPerGroup={2}
             breakpoints={{
             0: {
             slidesPerView: 1,
             slidesPerGroup: 1,
             spaceBetween: 20,
             },
             768: {
             slidesPerView: 2,
             slidesPerGroup: 2,
             spaceBetween: -115,
            }
            }}
            >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.testimonial_card}>
              <p>{item.text}</p>

              <div className={styles.author}>
                <img src={item.img} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
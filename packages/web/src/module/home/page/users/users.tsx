import { useState } from "react";
import styles from "./users.module.css";
import { ButtonUsers } from "../../../../ui/button/btn-users/btn-users";

import woman from "../../../../assets/img/woman.png";
import man from "../../../../assets/img/man.png";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus.”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: woman,
    },
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus.”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: woman,
    },
    {
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus.”",
      name: "JOHN CARTER",
      role: "ROLE, COMPANY",
      img: man,
    },
  ];

  const [active, setActive] = useState(0);

  const slidesPerView = window.innerWidth < 768 ? 1 : 2;
  const maxIndex = testimonials.length - slidesPerView;

  const next = () => {
    setActive((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : prev));
  };

  /* ===== Wheel scroll (как Swiper) ===== */
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (e.deltaY > 20 || e.deltaX > 20) next();
    if (e.deltaY < -20 || e.deltaX < -20) prev();
  };

  return (
    <section className={styles.testimonials}>
      <h2>What our users say?</h2>
      <ButtonUsers text="VIEW ALL COMMENTS" />

      <div className={styles.slider}>

        <div
          className={styles.window}
          onWheel={onWheel}
        >
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${active * (100 / slidesPerView)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div className={styles.slide} key={index}>
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
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* pagination */}
      <div className={styles.pagination}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === active ? styles.active : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
};

import { useState } from "react";
import { ButtonArticles } from "../../../../ui/button/btn-articles/btn-articles";
import { Card } from "./card/card";
import styles from "./news.module.css";

export const News = () => {
  const cards = [1, 2, 3];
  const [active, setActive] = useState(0);

  const maxIndex = cards.length - 1;

  const next = () => {
    setActive((p) => (p < maxIndex ? p + 1 : p));
  };

  const prev = () => {
    setActive((p) => (p > 0 ? p - 1 : p));
  };

  /* wheel как swiper */
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (e.deltaY > 20 || e.deltaX > 20) next();
    if (e.deltaY < -20 || e.deltaX < -20) prev();
  };

  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>Browse our latest news</h2>
      </div>

      {/* desktop */}
      <div className={styles.desktopGrid}>
        <Card />
        <Card />
        <Card />
      </div>

      {/* mobile slider */}
      <div className={styles.mobileSlider}>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.window}
            onWheel={onWheel}
          >
            <div
              className={styles.track}
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {cards.map((_, i) => (
                <div className={styles.slide} key={i}>
                  <Card />
                </div>
              ))}
            </div>
          </div>

          {/* pagination */}
          <div className={styles.pagination}>
            {cards.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${
                  i === active ? styles.active : ""
                }`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.articles}>
        <ButtonArticles text="View All Articles" />
      </div>
    </section>
  );
};

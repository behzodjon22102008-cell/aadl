import { useState } from "react"
import styles from "./users.module.css"
import { ButtonUsers } from "../../../../ui/button/btn-users/btn-users"

import woman from "../../../../assets/img/woman.png"
import man from "../../../../assets/img/man.png"

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
  ]

  const [active, setActive] = useState(0)

  // --- Состояния для свайпа ---
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const slidesPerView = window.innerWidth < 768 ? 1 : 2
  const maxIndex = testimonials.length - slidesPerView

  const next = () => {
    setActive((prev) => (prev < maxIndex ? prev + 1 : prev))
  }

  const prev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : prev))
  }

  /* ===== Логика Свайпа (Touch & Mouse) ===== */
  const minSwipeDistance = 50 // Минимальное расстояние для считывания свайпа

  const onTouchStart = (e: any) => {
    setTouchEnd(null) // Сбрасываем конец
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) next()
    if (isRightSwipe) prev()
  }

  // Для мышки (Desktop)
  const onMouseDown = (e: any) => {
    setTouchEnd(null)
    setTouchStart(e.clientX)
  }

  const onMouseMove = (e: any) => {
    // Обновляем только если кнопка мыши зажата (buttons === 1 левая кнопка)
    if (e.buttons === 1) {
      setTouchEnd(e.clientX)
    }
  }

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) next()
    if (isRightSwipe) prev()

    // Сброс
    setTouchStart(null)
    setTouchEnd(null)
  }

  /* ===== Wheel scroll ===== */
  const onWheel = (e: any) => {
    // Убираем preventDefault, чтобы не блокировать вертикальный скролл страницы,
    // если скроллим сам сайт, но можно оставить, если нужен строгий захват.
    // e.preventDefault();

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // Если скроллим вбок - блокируем поведение браузера
      e.preventDefault()
      if (e.deltaX > 20) next()
      if (e.deltaX < -20) prev()
    }
  }

  return (
    <section className={styles.testimonials}>
      <h2>What our users say?</h2>
      <ButtonUsers text="VIEW ALL COMMENTS" />

      <div className={styles.slider}>
        <div
          className={styles.window}
          onWheel={onWheel}
          // Добавляем события для мобильных
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          // Добавляем события для мыши
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp} // Если мышка ушла за пределы слайдера
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
  )
}

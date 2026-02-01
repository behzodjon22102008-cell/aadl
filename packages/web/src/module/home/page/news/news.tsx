import { useState } from "react"
import { Card } from "./card/card"
import styles from "./news.module.css"

export const News = () => {
  const cards = [1, 2, 3]
  const [active, setActive] = useState(0)

  // --- Состояния для свайпа ---
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const maxIndex = cards.length - 1
  const minSwipeDistance = 50 // Чувствительность свайпа

  const next = () => {
    setActive((p) => (p < maxIndex ? p + 1 : p))
  }

  const prev = () => {
    setActive((p) => (p > 0 ? p - 1 : p))
  }

  /* ===== Логика Свайпа (Touch) ===== */
  const onTouchStart = (e: any) => {
    setTouchEnd(null)
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

  /* ===== Логика Мыши (Mouse - чтобы тестировать на ПК в режиме мобайл) ===== */
  const onMouseDown = (e: any) => {
    setTouchEnd(null)
    setTouchStart(e.clientX)
  }

  const onMouseMove = (e: any) => {
    if (e.buttons === 1) setTouchEnd(e.clientX)
  }

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) next()
    if (distance < -minSwipeDistance) prev()
    setTouchStart(null)
    setTouchEnd(null)
  }

  /* wheel как swiper (оставил как было) */
  const onWheel = (e: any) => {
    // Блокируем скролл страницы только если свайпаем явно вбок
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault()
      if (e.deltaX > 20) next()
      if (e.deltaX < -20) prev()
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>Browse our latest news</h2>
      </div>

      {/* desktop grid (остается статичным) */}
      <div className={styles.desktopGrid}>
        <Card />
        <Card />
        <Card />
      </div>

      {/* mobile slider (теперь работает с руками) */}
      <div className={styles.mobileSlider}>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.window}
            onWheel={onWheel}
            // События касания
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            // События мыши
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
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
                className={`${styles.dot} ${i === active ? styles.active : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

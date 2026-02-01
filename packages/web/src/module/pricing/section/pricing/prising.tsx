import { useState } from "react"
import styles from "./prising.module.css"

export const Prising = () => {
  const cards = ["BASIC", "PRO", "EXPERT"]
  const [active, setActive] = useState(0)

  // --- Состояния для свайпа ---
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const maxIndex = cards.length - 1
  const minSwipeDistance = 50

  const next = () => {
    setActive((p) => (p < maxIndex ? p + 1 : p))
  }

  const prev = () => {
    setActive((p) => (p > 0 ? p - 1 : p))
  }

  /* ===== Логика Свайпа ===== */
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) next()
    if (distance < -minSwipeDistance) prev()
  }

  /* ===== Логика Мыши (для мобильной версии на ПК) ===== */
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null)
    setTouchStart(e.clientX)
  }

  const onMouseMove = (e: React.MouseEvent) => {
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

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault()
      if (e.deltaX > 20) next()
      if (e.deltaX < -20) prev()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Pricing</h1>
      </div>

      {/* MOBILE — SLIDER (с поддержкой рук) */}
      <div className={styles.mobile}>
        <div
          className={styles.window}
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div
            className={styles.track}
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {cards.map((type) => (
              <div className={styles.slide} key={type}>
                <Card type={type} />
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

      {/* DESKTOP (Оставляем как есть, без слайдера) */}
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

const Card = ({ type }: { type: string }) => (
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

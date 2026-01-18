import { useState } from "react"
import styles from "./prising.module.css"

export const Prising = () => {
  const cards = ["BASIC", "PRO", "EXPERT"]
  const [active, setActive] = useState(0)

  const maxIndex = cards.length - 1

  const next = () => {
    setActive((p) => (p < maxIndex ? p + 1 : p))
  }

  const prev = () => {
    setActive((p) => (p > 0 ? p - 1 : p))
  }

  /* wheel / touchpad — как Swiper */
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault()

    if (e.deltaY > 20 || e.deltaX > 20) next()
    if (e.deltaY < -20 || e.deltaX < -20) prev()
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Pricing</h1>
      </div>

      {/* MOBILE — SLIDER */}
      <div className={styles.mobile}>
        <div className={styles.window} onWheel={onWheel}>
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

        {/* pagination как у swiper */}
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

      {/* DESKTOP */}
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

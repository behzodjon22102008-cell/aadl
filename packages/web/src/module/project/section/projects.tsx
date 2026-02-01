import { useState, useEffect } from "react"
import styles from "./projects.module.css"
import { postData } from "../../blog/constant/constants"
import { Link } from "react-router-dom"
import img from "../../../assets/img/laptop.png"

export const Projectt = () => {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)

  // --- Состояния для свайпа ---
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) setPerView(1)
      else if (window.innerWidth < 1020) setPerView(2)
      else setPerView(3)
    }
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const maxIndex = postData.length - perView
  const minSwipeDistance = 50

  const next = () => setIndex((p) => (p < maxIndex ? p + 1 : p))
  const prev = () => setIndex((p) => (p > 0 ? p - 1 : p))

  /* ===== Обработка рук (Touch & Mouse) ===== */
  const handleStart = (clientX: number) => {
    setTouchEnd(null)
    setTouchStart(clientX)
  }

  const handleMove = (clientX: number) => {
    setTouchEnd(clientX)
  }

  const handleEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) next()
    if (distance < -minSwipeDistance) prev()
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
      <h1 className={styles.text}>Projects</h1>

      <div
        className={styles.slider}
        onWheel={onWheel}
        // Мобильные события
        onTouchStart={(e) => handleStart(e.targetTouches[0].clientX)}
        onTouchMove={(e) => handleMove(e.targetTouches[0].clientX)}
        onTouchEnd={handleEnd}
        // Мышь для десктопа
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => {
          if (e.buttons === 1) handleMove(e.clientX)
        }}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${(100 / perView) * index}%)`,
          }}
        >
          {postData.map((info, i) => (
            <div
              className={styles.slide}
              style={{ width: `${100 / perView}%` }}
              key={i}
            >
              <Link
                to={info.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className={styles.postCard}>
                  <img className={styles.postCardImg} src={img} alt="" />
                  <button className={styles.postCardButton}>
                    {info.btnText}
                  </button>
                  <h3 className={styles.postCardTitle}>{info.title}</h3>
                  <p className={styles.postCardDescription}>
                    {info.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* pagination */}
      <div className={styles.pagination}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

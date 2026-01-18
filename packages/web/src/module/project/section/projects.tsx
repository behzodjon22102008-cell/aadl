import { useState, useEffect } from "react"
import styles from "./projects.module.css"
import { postData } from "../../blog/constant/constants"
import { Link } from "react-router-dom"
import img from "../../../assets/img/laptop.png"

export const Projectt = () => {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)

  /* как breakpoints у swiper */
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

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault()

    if (e.deltaY > 20 && index < maxIndex) {
      setIndex((p) => p + 1)
    }

    if (e.deltaY < -20 && index > 0) {
      setIndex((p) => p - 1)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Projects</h1>

      <div className={styles.slider} onWheel={onWheel}>
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
              <Link to={info.link}>
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
            className={`${styles.dot} ${
              i === index ? styles.active : ""
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

import styles from "./projects.module.css"
import { postData } from "../../blog/constant/constants"
import { Link } from "react-router-dom"

import img from "../../../assets/img/laptop.png"

export const Projectt = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Projects</h1>
            <div className={styles.postCards}>
            {postData.map((info, index) => (
              <Link to={info.link}>
                <div key={index} className={styles.postCard}>
                  <img
                    className={styles.postCardImg}
                    src={img}
                    alt="image"
                  />
                  <button className={styles.postCardButton}>
                    {info.btnText}
                  </button>
                  <h3 className={styles.postCardTitle}>{info.title}</h3>
                  <p className={styles.postCardDescription}>
                    {info.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          </div>
)}
import styles from "./card.module.css"

import laptop from "../../../../../assets/img/laptop.png"
import avatar from "../../../../../assets/img/avatar.png"

export const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card_img_wrapper}>
            <img src={laptop} alt="image" className={styles.card_img} />
            <span className={styles.tag}>PRODUCTS</span>
            </div>
  
  <div className={styles.blog_card}>
      <h3 className={styles.title}>The Basics about IT</h3>

  <p className={styles.desc}>
    Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.
  </p>

  <div className={styles.line}></div>

  <div className={styles.author}>
    <img src={avatar} alt="avatar" className={styles.avatar} />
    <div>
      <h4>Alex Turner</h4>
      <p>August 2, 2021</p>
    </div>
  </div>
  </div>

</div>        
    )
}
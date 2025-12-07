import styles from "./bloog.module.css"

import Laptop from "../../../../assets/img/laptop.png"

export const Bloog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blog}>
                <div className={styles.text}>
                <h1>Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.</p>
            </div>
            <div className={styles.card_img}>
                <div className={styles.featured}>
                    <span className={styles.badge}>Featured</span>
                    <h2>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.</h2>
                    <p>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                </div>
                <div className={styles.image}>
                    <img src={Laptop} alt="laptop" className={styles.laptop} />
                </div>
            </div>
            </div>
        </div>
    )
}
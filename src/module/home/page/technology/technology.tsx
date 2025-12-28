import { ButtonTechnology } from "../../../../ui/button/btn-technology/btn-technology"
import styles from "./technology.module.css"

import phone from "../../../../assets/img/phone.png"


export const Technology = () => {
    return (
        <div className={styles.technology_section}>
            <div className={styles.text}>
                <h2 className={styles.desktop_text}>Build the Future of Technology with Us</h2>
                <p className={styles.desktop_p}>Partner with our team to create innovative, secure, and <br /> scalable IT solutions that drive real business results.</p>
                <h3 className={styles.mobile_text}>Explore endless possibilities with FinanceFlow</h3>
                <p className={styles.mobile_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                <ButtonTechnology text="START NOW"/>
            </div>
            <div className={styles.phones}>
                <img src={phone} alt="" />    
            </div>   
        </div>
    )
}
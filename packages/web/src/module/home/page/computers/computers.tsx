import styles from "./computers.module.css"

import FullIcon from "../../../../assets/icons/full.svg"
import PercentageIcon from "../../../../assets/icons/percentage.svg"
import MessageIcon from "../../../../assets/icons/message.svg"
import computer from "../../../../assets/img/Apple Computers.png"

export const Computer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Why Choose Us</h2>
                <p className={styles.description}>
                    We empower businesses with cutting-edge IT solutions that drive success and innovation.
                </p>
                <ul className={styles.list}>
                    <li>
                        <img src={FullIcon} alt="" />
                        Full confidentiality powered by advanced  
                        security standards.
                    </li>

                    <li>
                        <img src={PercentageIcon} alt="" />
                        Reliable systems built for continuous, 
                        stable performance.
                    </li>

                    <li>
                        <img src={MessageIcon} alt="" />
                        Professional assistance whenever your 
                        business needs it.
                    </li>
                </ul>
            </div>
            <div className={styles.computer}>
                <img 
                src={computer}
                className={styles.apple_computer}
                alt="apple computer" 
                />
            </div>
        </div>
    )
}
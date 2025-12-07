import styles from "./advantage.module.css"

import phones from "../../../../assets/img/phones.png"
import CashIcon from "../../../../assets/icons/cash.svg"
import HighIcon from "../../../../assets/icons/high.svg"
import LockIcon from "../../../../assets/icons/lock.svg"

export const Advantage = () => {
    return(
        <div className={styles.advantages_section}>

  <div className={styles.phones_block}>
    <div className={styles.green_glow}></div>

    <img 
      src={phones} 
      className={styles.phone}
      alt="phone"
    />
  </div>


  <div className={styles.text_block}>
    <h2>Our Advantages</h2>

    <p className={styles.description}>
      We turn technology into growth. 
      Our solutions deliver speed, reliability, and security — 
      built for modern digital businesses.
    </p>

    <ul className={styles.advantages_list}>
      <li>
        <img src={CashIcon} alt="cash" />
        Save more with our optimized infrastructure costs.
      </li>

      <li>
        <img src={HighIcon} alt="high" />
        High-performance systems ensuring speed and data protection.
      </li>

      <li>
        <img src={LockIcon} alt="lock" />
        Enterprise-grade security for all your operations.
      </li>
    </ul>
  </div>

</div>
    )
}
import styles from "./phonemockup.module.css";
import phone from "../../../../../assets/img/iPhones.png"

export const PhoneMockup =() => {
  return <div className={styles.phone}>
    <h3>iOS & Android App</h3>
    <p>Native iOS/Android solutions with offline mode, QR  scanning, integrations, and push notifications.</p>
  <img src={phone} alt="ipone" />
  </div>;
}


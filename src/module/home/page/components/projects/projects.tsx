  import styles from "./projects.module.css"


  import LaptopIcon from "../../../../../assets/icons/laptop.svg"
  import CashIcon from "../../../../../assets/icons/cash.svg"
  import AiIcon from "../../../../../assets/icons/AI.svg"
  import SecureIcon from "../../../../../assets/icons/Secure.svg"
  import phone from "../../../../../assets/img/iPhones.png"




  export const Projects = () => {
      return(
        <section className={styles.section}>
        <h2 className={styles.title}>Build your project</h2>
        <p className={styles.subtitle}>
          We help bring your project to life — from concept and design to a complete
          web solution or app.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={LaptopIcon} alt="" />
            </div>
            <h3>BUILDING WEB-SAIT</h3>
            <p>
              Modern and responsive website development — from concept and design
              to a fully functional solution.
            </p>
          </div>

          <div className={`${styles.card} ${styles.center}`}>
            <h3>IOS & ANDROID APP</h3>
            <p>
              Native iOS/Android solutions with offline mode, QR scanning,
              integrations, and push notifications.
            </p>

            <div className={styles.phone}>
              <img src={phone} alt="" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={AiIcon} alt="" />
            </div>
            <h3>AI INTEGRATION</h3>
            <p>
              ChatGPT-like assistants, answer generation, voice/chat features,
              learning scenarios, and user query analysis.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={CashIcon} alt="" />
            </div>
            <h3>WEB PRODUCT DEVELOPMENT</h3>
            <p>
              We build modern web solutions (SPA, MPA) that help your business grow.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={SecureIcon} alt="" />
            </div>
            <h3>SECURE AUTHENTICATION</h3>
            <p>
              Implementation of modern user authentication and protection methods.
            </p>
          </div>
        </div>
      </section>
      )
  }
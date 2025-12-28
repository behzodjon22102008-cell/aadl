  import styles from "./projects.module.css"


  import img1 from "../../../../../assets/icons/laptop.svg"
  import img2 from "../../../../../assets/icons/cash.svg"
  import img3 from "../../../../../assets/icons/AI.svg"
  import img4 from "../../../../../assets/icons/Secure.svg"
  import img5 from "../../../../../assets/img/iPhones.png"
import clsx from "clsx"

const servicesData = [
  {
    icon: img1,
    title: "BUILDING WEB-SAIT",
    description:
      "Modern and responsive website development — from concept and design to a fully functional solution.",
  },
  {
    icon: img2,
    title: "WEB PRODUCT DEVELOPMENT",
    description:
      "We build modern web solutions (SPA, MPA) that help your business grow, boost efficiency, and deliver an exceptional user experience.",
  },
  {
    icon: img5,
    title: "IOS & ANDROID APP",
    description:
      "Native iOS/Android solutions with offline mode, QR scanning, integrations, and push notifications.",
  },
  {
    icon: img3,
    title: "AI INTEGRATION",
    description:
      "ChatGPT-like assistants, answer generation, voice/chat features, learning scenarios, and user query analysis.",
  },
  {
    icon: img4,
    title: "SECURE AUTHENTICATION",
    description:
      "Implementation of modern user authentication and protection methods.",
  },
];



  export const Projects = () => {
      return(
      //   <section className={styles.section}>
      //   <h2 className={styles.title}>Build your project</h2>
      //   <p className={styles.subtitle}>
      //     We help bring your project to life — from concept and design to a complete
      //     web solution or app.
      //   </p>

      //   <div className={styles.grid}>
      //     <div className={styles.card}>
      //       <div className={styles.icon}>
      //         <img src={LaptopIcon} alt="" />
      //       </div>
      //       <h3>BUILDING WEB-SAIT</h3>
      //       <p>
      //         Modern and responsive website development — from concept and design
      //         to a fully functional solution.
      //       </p>
      //     </div>

      //     <div className={`${styles.card} ${styles.center}`}>
      //       <h3>IOS & ANDROID APP</h3>
      //       <p>
      //         Native iOS/Android solutions with offline mode, QR scanning,
      //         integrations, and push notifications.
      //       </p>

      //       <div className={styles.phone}>
      //         <img src={phone} alt="" />
      //       </div>
      //     </div>

      //     <div className={styles.card}>
      //       <div className={styles.icon}>
      //         <img src={AiIcon} alt="" />
      //       </div>
      //       <h3>AI INTEGRATION</h3>
      //       <p>
      //         ChatGPT-like assistants, answer generation, voice/chat features,
      //         learning scenarios, and user query analysis.
      //       </p>
      //     </div>

      //     <div className={styles.card}>
      //       <div className={styles.icon}>
      //         <img src={CashIcon} alt="" />
      //       </div>
      //       <h3>WEB PRODUCT DEVELOPMENT</h3>
      //       <p>
      //         We build modern web solutions (SPA, MPA) that help your business grow.
      //       </p>
      //     </div>

      //     <div className={styles.card}>
      //       <div className={styles.icon}>
      //         <img src={SecureIcon} alt="" />
      //       </div>
      //       <h3>SECURE AUTHENTICATION</h3>
      //       <p>
      //         Implementation of modern user authentication and protection methods.
      //       </p>
      //     </div>
      //   </div>
      // </section>

      <section className={styles.yourProject}>
        <div>
          <h2 className={styles.projectTitle}>Build your project</h2>
          <p className={styles.projectDescription}>
            We help bring your project to life — from concept and design to a
            complete web solution or app.
          </p>

          <div className={styles.content}>
            {servicesData.map((service) => (
              <div
                key={service.title}
                className={clsx(styles.card, {
                  [styles.bigCard]: service.title === "IOS & ANDROID APP",
                })}
              >
                <div className={styles.icons}>
                  <img className={styles.icon} src={service.icon} alt="icon" />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      )
  }
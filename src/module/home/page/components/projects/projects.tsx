import styles from "./projects.module.css"
import { Card } from "../card/card";
import { PhoneMockup } from "../phonemockup/phonemockup";

import LaptopIcon from "../../../../../assets/icons/laptop.svg"
import CashIcon from "../../../../../assets/icons/cash.svg"
import AiIcon from "../../../../../assets/icons/AI.svg"
import SecureIcon from "../../../../../assets/icons/Secure.svg"




export const Projects = () => {
    return(
        <div className={styles.home}>
      <h1>Build your project</h1>
      <p className={styles.subtitle}>
        We help bring your project to life — from concept and  design
        to a complete web solution or app.
      </p>

      <div className={styles.content}>
        <div className={styles.side_cards}>
          <Card
            icon={<img src={LaptopIcon} alt="icon"/>}
            title="BUILDING WEB-SAIT"
            text="Modern and responsive website development — from concept and design to a fully functional solution."
          />
          <Card
            icon={<img src={CashIcon} alt="icon" />}
            title="WEB PRODUCT DEVELOPMENT"
            text="We build modern web solutions (SPA, MPA) that help your business grow, boost efficiency, and deliver an exceptional user experience."
          />
        </div>

        <PhoneMockup />

        <div className={styles.side_cards}>
          <Card
            icon={<img src={AiIcon} alt="icon" />}
            title="AI INTEGRATION"
            text="ChatGPT-like assistants, answer generation, voice/chat features, learning scenarios, and user query analysis."
          />
          <Card
            icon={<img src={SecureIcon} alt="icon" />}
            title="SECURE AUTHENTICATION"
            text="Implementation of modern user authentication and protection methods."
          />
        </div>
      </div>
    </div>
    )
}
import styles from "./projects.module.css"

import Laptop from "../../../assets/img/laptop.png"

export const Projectss = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
            <h1>Projects</h1>
            <p>Most of our projects are closed due to their confidential nature and are covered by NDAs or other non-disclosure agreements.</p>                
            </div>
            <div className={styles.products_section}>
  <div className={styles.product_card}>
    <img src={Laptop} alt="Laptop" className={styles.product_img} />
    <span className={styles.badge}>PRODUCTS</span>
    <h3>SENSEI–GPT</h3>
    <p>
      AI-based educational app with Google Search integration, offering scheduling,
      lesson planning, chat, voice, user, and payment features on AWS.
    </p>
  </div>

  <div className={styles.product_card}>
    <img src={Laptop} alt="Laptop" className={styles.product_img} />
    <span className={styles.badge}>PRODUCTS</span>
    <h3>Doc-Med</h3>
    <p>
      A mobile application for online consultations with doctors and messaging.
    </p>
  </div>

  <div className={styles.product_card}>
    <img src={Laptop} alt="Laptop" className={styles.product_img} />
    <span className={styles.badge}>PRODUCTS</span>
    <h3>DEVI-HUB</h3>
    <p>
      AI-powered platform that instantly builds optimized tech teams from top experts.
    </p>
  </div>
  </div>
  <div className={styles.productss_section}>
  <div className={styles.productt_card}>
    <img src={Laptop} alt="Laptop" className={styles.product_img} />
    <span className={styles.badge}>PRODUCTS</span>
    <h3>AUTO-BID</h3>
    <p>
      A global website for selling cars from the USA with transparent transactions
      and direct connection with auctions.
    </p>
  </div>

  <div className={styles.productt_card}>
    <img src={Laptop} alt="Laptop" className={styles.product_img} />
    <span className={styles.badge}>PRODUCTS</span>
    <h3>Green-Tech</h3>
    <p>
        Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. 
        Scelerisque viverra donec diammeo.
    </p>
  </div>

  <div className={styles.productt_card}>
    <img src={Laptop} alt="Laptop" className={styles.product_img} />
    <span className={styles.badge}>PRODUCTS</span>
    <h3>NSEA</h3>
    <p>
      Developed a React Native app to track production stages via QR codes and
      photo-based defect reporting.
    </p>
  </div>
  </div>

        </div>
    )
}
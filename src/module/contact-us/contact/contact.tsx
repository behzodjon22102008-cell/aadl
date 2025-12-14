import styles from "./contact.module.css"

import Gmail from "../../../assets/icons/div.svg"

export const Contact =  () => {
    return (
         <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.contact_title}>Get in touch</h2>

        <div className={styles.contact_grid}>
          {/* LEFT FORM */}
          <form className={styles.contact_form}>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label>NAME</label>
                <input type="text" placeholder="Full Name" />
              </div>

              <div className={styles.form_group}>
                <label>EMAIL</label>
                <input type="email" placeholder="email@example.com" />
              </div>
            </div>

            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label>COMPANY</label>
                <input type="text" placeholder="Company Name" />
              </div>

              <div className={styles.form_group}>
                <label>SUBJECT</label>
                <input type="text" placeholder="How can we help?" />
              </div>
            </div>

            <div className={` ${styles.form_group} ${styles.full}`}>
              <label>MESSAGE</label>
              <textarea placeholder="Your Message"></textarea>
            </div>

            <button className={styles.btn_send}>SEND MESSAGE</button>
          </form>

          {/* RIGHT SIDE */}
          <div className={styles.contact_info}>
            <h3>Want to reach us directly?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              pharetra elementum sit id sagittis non donec egestas.
            </p>

            <div className={styles.example}>
                <div className={styles.com}>
                <img src={Gmail} alt="" /> 
                <p>contact@example.com</p>                    
                </div>
                <div className={styles.com}>
                <img src={Gmail} alt="" /> 
                <p>contact@example.com</p>                    
                </div>
                <div className={styles.com}>
                <img src={Gmail} alt="" />
                <p>contact@example.com</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    )
}
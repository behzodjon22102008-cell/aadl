import styles from "./prising.module.css"

export const Prising = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Pricing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque</p>
            </div>
            <div className={styles.usd}>
            <div className={styles.card}>
    <span className={styles.badge}>BASIC</span>
    <h2>$ 100 USD</h2>
    <p>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

    <h3>FEATURES</h3>
    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>

    <button>CONTACT US</button>
  </div>

  <div className={styles.card}>
    <span className={styles.badge}>PRO</span>
    <h2>$ 100 USD</h2>
    <p>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

    <h3>FEATURES</h3>
    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>

    <button>CONTACT US</button>
  </div>

  <div className={styles.card}>
    <span className={styles.badge}>EXPERT</span>
    <h2>$ 100 USD</h2>
    <p>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>

    <h3>FEATURES</h3>
    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet</li>
    </ul>

    <button>CONTACT US</button>
  </div>
  </div>
        </div>
    )
}
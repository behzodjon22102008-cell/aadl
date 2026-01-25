import styles from "./header.module.css"
import logo from "../../assets/img/logo adl 1.png"
import { Button } from "../../ui/button/btn-header/btn-header"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.top_nav}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.line}></div>

          <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
            <span>☰</span>
          </div>
          <div className={styles.navigation}>
            <Link to={"/"}>HOME</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/pricing"}>PRICING</Link>
            <Link to={"/projects"}>PROJECTS</Link>
            <Link to={"/blog"}>BLOG</Link>
            <Link to={"/contact"}>CONTACT US</Link>
          </div>
        </div>
        <div className={styles.btn}>
          <Button text="DOWLOAD OUR CV" />
        </div>
        {menuOpen && (
          <div className={styles.mobile_menu}>
            <Link to={"/"}>HOME</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/pricing"}>PRICING</Link>
            <Link to={"/projects"}>PROJECTS</Link>
            <Link to={"/blog"}>BLOG</Link>
            <Link to={"/contact"}>CONTACT US</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

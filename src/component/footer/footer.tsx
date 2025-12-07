import styles from "./footer.module.css"

import logo from "../../assets/img/logo adl 6.png"
import insta from "../../assets/icons/insta.svg"
import facebook from "../../assets/icons/facebook (2).svg"
import linked from "../../assets/icons/linked in (1).svg"
import { ButtonFooter } from "../../ui/button/btn-footer/btn-footer"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>

                <div className={styles.logo_block}>
                    <img src={logo} alt="logo" className={styles.logo} />

                    <div className={styles.socials}>
                        <img src={insta} alt="instagram"/>
                        <img src={facebook} alt="facebook"/>
                        <img src={linked} alt="linkedin"/>
                    </div>
                </div>

                <div className={styles.footer_menu}>
                    <h3>MENU</h3>
                    <div className={styles.line}></div>

                    <ul className={styles.menu_grid}>
                        <li><Link to={"/"}>HOME</Link></li>
                        <li><Link to={"/projects"}>PROJECTS</Link></li>

                        <li><Link to={"/about"}>ABOUT</Link></li>
                        <li><Link to={"/blog"}>BLOG</Link></li>

                        <li><Link to={"/pricing"}>PRICING</Link></li>
                        <li><Link to={"/contact"}>CONTACT US</Link></li>
                    </ul>
                </div>

                <div className={styles.footer_card}>
                    <h4>DOWNLOAD OUR COMPANY PROFILE</h4>
                    <p className={styles.desktop_p}>
                        Explore our innovative projects, tech expertise,
                        and digital solutions.
                    </p>
                    <p className={styles.mobile_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer </p>
                    <ButtonFooter text="Download" />
                </div>
                <div className={styles.lines}></div>
                <p className={styles.rights}>All rights reserved</p>
            </div>
        </footer>
    )
}
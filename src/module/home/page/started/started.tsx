import { useState } from "react"
import styles from "./started.module.css"

import ContactIcon from "../../../../assets/icons/contact.svg"
import DetailsIcon from "../../../../assets/icons/details.svg"
import BuildingIcon from "../../../../assets/icons/building.svg"
import SubtractIcon from "../../../../assets/icons/Subtract.svg"
import Vidio from "../../../../assets/vidio/HP.mp4"

export const GetStarted = () => {
    const [play, setPlay] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Get started today</h2>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                </p>
                <ul className={styles.list}>
                    <li>
                        <img src={ContactIcon} alt="" />
                        Contact with us
                    </li>

                    <li>
                        <img src={DetailsIcon} alt="" />
                        Discuss the details
                    </li>

                    <li>
                        <img src={BuildingIcon  } alt="" />
                        Start building
                    </li>
                </ul>
            </div>
            <div className={styles.vidio_container} onClick={() => setPlay(true)}>
                {play ? (
                    <video src={Vidio} controls autoPlay></video>
                ) : (
                    <div className={styles.play_button}>
                        <div className={styles.play_icon}><img src={SubtractIcon} alt="" /></div>
                    </div>
                )}
            </div>         
        </div>
    )
}
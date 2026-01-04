import { Card } from "./card/card"
import styles from "./principle.module.css"

import ResponsibilityIcon from "../../../../assets/icons/responsibility.svg"
import LoopIcon from "../../../../assets/icons/loop.svg"
import RespecIcon from "../../../../assets/icons/respec.svg"
import TransparencyIcon from "../../../../assets/icons/transparency.svg"

export const Principle = () => {
    return (
        <div className={styles.principle}>
            <div className={styles.text}>
                <h3>Our principles</h3>
                {/* <p>Our principles are quality, transparency, responsibility, and a personalized approach to every project.</p> */}
            </div>
            <div className={styles.cards}>
            <Card
            icon={<img src={ResponsibilityIcon} alt="icon"/>}
            title="Ethics and Responsibility"
            text="We build safe, ethical products, avoiding illegal or adult content, gambling, and trivial projects, focusing on meaningful experiences for users."
          />
          
            <Card
            icon={<img src={RespecIcon} alt="icon"/>}
            title="Contract and Respec"
            text="We sign formal contracts before projects and value mutual respect and trust; we reserve the right to end partnerships if our team is disrespected."
          />

            <Card
            icon={<img src={LoopIcon} alt="icon"/>}
            title="We Hold Client Calls"
            text="We hold calls with clients to clarify project details, align expectations, and ensure desired results, allowing us to respond quickly to changes and build trust."
          />

            <Card
            icon={<img src={TransparencyIcon} alt="icon"/>}
            title="Transparency and accountability"
            text="We keep clients informed throughout the project and provide reports at each stage."
          />
            </div>
        </div>
    )
}
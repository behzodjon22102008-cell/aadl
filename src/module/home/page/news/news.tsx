import { ButtonArticles } from "../../../../ui/button/btn-articles/btn-articles"
import { Card } from "./card/card"
import styles from "./news.module.css"

export const News = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Browse our latest news</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sit non neque orci amet, amet.
                </p>
            </div>

            <div className={styles.about_it}>
                <Card />
                <Card />
                <Card />
            </div>

            <div className={styles.articles}>
                <ButtonArticles text="View All Articles" />
            </div>
        </div>
    );
};
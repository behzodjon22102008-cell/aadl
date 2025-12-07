import styles from "./brn-articles.module.css"

interface ButtonProps {
  text: string;
}


export const ButtonArticles = ({ text }: ButtonProps) => {
    return (
        <button className={styles.btn_articles}>
            {text}
        </button>
    )
}
import styles from "./btn-technology.module.css"

interface ButtonProps {
  text: string;
}

export const ButtonTechnology = ({ text }: ButtonProps) => {
    return (
        <button className={styles.btn_technology}>
            {text}
        </button>
    )
}
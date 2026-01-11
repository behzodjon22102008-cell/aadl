import styles from "./btn-header.module.css"

interface ButtonProps {
  text: string;
}


export const Button = ({ text }: ButtonProps) => {
    return(
        <button className={styles.header_btn}>
            {text}
        </button>
    )
}
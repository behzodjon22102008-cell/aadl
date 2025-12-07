import styles from "./btn-footer.module.css"

interface ButtonProps {
  text: string;
}


export const ButtonFooter = ({ text }: ButtonProps) => {
    return(
        <button className={styles.footer_btn}>
            {text}
        </button>
    )
}
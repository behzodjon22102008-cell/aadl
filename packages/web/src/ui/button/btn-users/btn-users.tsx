import styles from "./btn-users.module.css";

interface ButtonProps {
  text: string;
}

export const ButtonUsers = ({ text }: ButtonProps) => {
  return <button className={styles.btn_users}>{text}</button>;
};
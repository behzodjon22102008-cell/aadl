import styles from "./card.module.css"
import React from "react"

interface CardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}


export const Card: React.FC<CardProps> =  ({icon, title, text}) => {
    return(
    <div className={styles.card}>
    <div className={styles.icon}>{icon}</div>
    <h3>{title}</h3>
    <p >{text}</p>
    </div>
    )
}
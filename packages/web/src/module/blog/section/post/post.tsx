import { Card } from "../../../home/page/news/card/card"
import { Pagination } from "./pagination/pagination";
import styles from "./post.module.css"
import  { useState } from "react";

export const Post = () => {
    const[page,setPage]=useState(1)
    return (
        <div className={styles.container}>
            <div className={styles.post_description}>
                <h2>Latest Posts</h2>
                <div className={styles.badges}>
                <span className={styles.badgee}>All</span>
                <span className={styles.badge}>Apps</span>
                <span className={styles.badge}>Products</span>
                <span className={styles.badge}>Tutorial</span>
                </div>
            </div>
            <div className={styles.card}>
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.card}>
                <Card />
                <Card />
                <Card />
            </div>
            <div>
                <Pagination 
                currentPage={page}
        totalPages={3}
        onPageChange={(p:any) => setPage(p)}
                />
            </div>
        </div>
    )
}
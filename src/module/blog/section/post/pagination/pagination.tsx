// import React from "react";
import styles from "./pagination.module.css"

export const Pagination = ({currentPage, totalPages, onPageChange}:any) => {
    const pages =[];

    for (let i = 1; i <=totalPages; i++){
        pages.push(i)
    }
    return (
    <div className={styles.pagination}>
      
      {/* Prev */}
      <button
        className={styles.arrow_btn}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <span>&lt;</span>
      </button>

      {/* Numbers */}
      {pages.map((pg) => (
        <button
          key={pg}
          className={styles.page_btn}
          onClick={() => onPageChange(pg)}
        >
          {pg}
        </button> 
      ))}

      {/* Next */}
      <button
        className={styles.arrow_btn}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <span>&gt;</span>
      </button>
    </div>    
    )
}
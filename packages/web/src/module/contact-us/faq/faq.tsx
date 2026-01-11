import  { useState } from "react"
import styles from "./faq.module.css"


const faqData = [
  { question: "Question 1", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas." },
  { question: "Question 2", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas." },
  { question: "Question 3", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas." },
  { question: "Question 4", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas." },
  { question: "Question 5", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas." },
];

export const Faq = () => {
     const [openItems, setOpenItems] = useState({}); 

  const toggle = (index:any) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  return (
    <div className={styles.faq}>
      <h2>FAQ</h2>

      {faqData.map((item, index) => (
        <div key={index} className={styles.faq_item}>
          <div className={styles.faq_question} onClick={() => toggle(index)}>
            <span>{item.question}</span>

            <span className={styles.icon}>
              {openItems[index] ? "-" : "+"}
            </span>
          </div>

          {openItems[index] && (
            <p className={styles.faq_answer}>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
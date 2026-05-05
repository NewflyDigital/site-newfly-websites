import React from "react";
import styles from "../styles/Index.module.css";

function FaqItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={`${styles.faqItem} ${open ? styles.open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.faqHeader}>
        <h4>{question}</h4>
        <span>{open ? "-" : "+"}</span>
      </div>

      <div className={styles.faqContent}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;

import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapperFooter}>
        <div className={styles.quoteBlock}>
            <h2 className={styles.quoteText}>Each antique piece carries the legacy of the hands that crafted it and the souls that cherished it.</h2>
            <h1 className={styles.quoteOpen}>“</h1>
            <h1 className={styles.quoteClose}>”</h1>
        </div>
    </div>
  )
};

export default Footer;
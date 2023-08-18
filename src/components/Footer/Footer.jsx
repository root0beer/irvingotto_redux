import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.wrapperFooter}>
      <div className={styles.quoteBlock}>
        <h2 className={styles.quoteText}>
          Each antique piece carries the legacy of the hands that crafted it and
          the souls that cherished it.
        </h2>
        <Image
          className={styles.quoteOpen}
          src={"/quoteopen.png"}
          alt={"quoteopen"}
          width={74}
          height={67}
          quality={100}
        />
        <Image
          className={styles.quoteClose}
          src={"/quoteclose.png"}
          alt={"quoteclose"}
          width={74}
          height={67}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Footer;

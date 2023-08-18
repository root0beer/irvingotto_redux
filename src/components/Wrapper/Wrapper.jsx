import React from "react";
import styles from "./Wrapper.module.scss";
import Image from "next/image";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapperGlobal}>
      <div className={styles.backgroundNoise}></div>
        <Image
          className={styles.lighterImage}
          src={"/products/streetlight.png"}
          alt={"street light"}
          width={331}
          height={466}
          placeholder="blur"
          blurDataURL="/products/streetlightBlur.png"
        />
        <Image
          className={styles.letterImage}
          src={"/products/letter.png"}
          alt={"letter"}
          width={359}
          height={355}
          placeholder="blur"
          blurDataURL="/products/letterBlur.png"
        />
          <Image
            className={styles.starImage}
            src={"/products/star.svg"}
            alt={"letter"}
            width={230}
            height={230}
            quality={100}
          />
      {children}
    </div>
  );
};

export default Wrapper;

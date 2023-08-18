import React from "react";
import styles from "./Wrapper.module.scss";
import Image from "next/image";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapperGlobal}>
      <div className={styles.backgroundNoise}></div>
      <Image
        className={styles.heroImage}
        src={"/hero/hero.png"}
        alt={"heroStreet"}
        width={224}
        height={541}
        placeholder="blur"
        blurDataURL="/hero/heroBlur.png"
      />
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
      <Image
        className={styles.doorImage}
        src={"/door.png"}
        alt={"door"}
        width={543}
        height={562}
        placeholder="blur"
        blurDataURL="/doorBlur.png"
      />
      <Image
        className={styles.letterFooterImage}
        src={"/letterfooter.png"}
        alt={"letterfooter"}
        width={389}
        height={355}
        placeholder="blur"
        blurDataURL="/letterfooterBlur.png"
      />
      {children}
    </div>
  );
};

export default Wrapper;

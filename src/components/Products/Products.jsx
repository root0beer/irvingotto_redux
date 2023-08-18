import React from "react";
import styles from "./Products.module.scss";
import Image from "next/image";

const Products = () => {
  return (
    <div className={styles.wrapperForImage}>
      <div className={styles.cornerImageBlock}>
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
          width={389}
          height={355}
          placeholder="blur"
          blurDataURL="/products/letterBlur.png"
        />
        <div className={styles.topPickAd}>
          <Image
            className={styles.starImage}
            src={"/products/star.svg"}
            alt={"letter"}
            width={389}
            height={355}
            quality={100}
          />
          <p className={styles.titleTopPick}>Top Picks</p>
        </div>
      </div>
      <div className={styles.productWrapper}></div>
    </div>
  );
};

export default Products;

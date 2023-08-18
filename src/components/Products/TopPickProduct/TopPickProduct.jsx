import React from "react";
import styles from "./TopPickProduct.module.scss";
import Image from "next/image";

const TopPickProduct = ({likeToggler, liked}) => {
  return (
    <>
      <div className={styles.topPickCard}>
        {/* <div className={styles.woodOverlay}></div> */}
        <Image
          className={styles.woodOverlay}
          src={"/products/woodBg.png"}
          alt="woodBackground"
          fill
          quality={100}
          placeholder="blur"
          blurDataURL={"/products/woodBgBlur.png"}
        />
        <div className={styles.toppickBanner}>
          <p className={styles.toppickBannerText}>#1 PICK</p>
        </div>
        <div className={styles.productImageBlock}>
          <Image
            className={styles.productImage}
            src={"/products/toppick1.png"}
            alt="toppick1"
            width={640}
            height={640}
            placeholder="blur"
            blurDataURL={"/products/toppick2.png"}
          />
        </div>
        <div className={styles.productTable}>
          <div className={styles.productTableColumn}>
            <div className={styles.productTableElement}>
              <h4>ORIGIN:</h4>
              <p>Tenerif</p>
            </div>
            <div className={styles.productTableElement}>
              <h4>AGE:</h4>
              <p>87 years</p>
            </div>
          </div>
          <div className={styles.productTableColumn}>
            <div className={styles.productTableElement}>
              <h4>MATERIAL:</h4>
              <p>Clay</p>
            </div>
            <div className={styles.productTableElement}>
              <h4>DIMENSIONS:</h4>
              <p>7" x 7" x 10"</p>
            </div>
          </div>
        </div>
        <h2 className={styles.productTitle}>9th century style Tenerif Vase</h2>
        <div className={styles.barcodeBlock}>
          <div className={styles.barcodeCircle}>
            <p className={styles.barcodeTitle}>BC:</p>
          </div>
          <p className={styles.barcode}>UIwys3221-2ewse32</p>
        </div>
        <div className={styles.lineBreak}> </div>
        <div className={styles.productFooterBlock}>
          <p className={styles.price}>$ 1005</p>
          <div className={styles.favandGet}>
            <button className={styles.favorites} onClick={likeToggler}>
              {liked ? (
                <Image
                  className={styles.unlikedHeart}
                  src={"/products/unlikedheart.png"}
                  alt="unlicked heart"
                  width={35}
                  height={35}
                />
              ) : (
                <Image
                  className={styles.likedHeart}
                  src={"/products/likedheart.png"}
                  alt="licked heart"
                  width={35}
                  height={35}
                />
              )}
            </button>
            <button className={styles.addToCart}>GET</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPickProduct;

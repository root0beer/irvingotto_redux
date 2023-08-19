import React from "react";
import styles from "./TopPickProduct.module.scss";
import Image from "next/image";

const TopPickProduct = ({likeToggler, liked, topProduct}) => {
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
            src={topProduct.productImage.url}
            alt={topProduct.productImage.id}
            width={640}
            height={640}
            placeholder="blur"
            blurDataURL={topProduct.imageBlur.url}
          />
        </div>
        <div className={styles.productTable}>
          <div className={styles.productTableColumn}>
            <div className={styles.productTableElement}>
              <h4>ORIGIN:</h4>
              <p>{topProduct.origin}</p>
            </div>
            <div className={styles.productTableElement}>
              <h4>AGE:</h4>
              <p>{topProduct.age}</p>
            </div>
          </div>
          <div className={styles.productTableColumn}>
            <div className={styles.productTableElement}>
              <h4>MATERIAL:</h4>
              <p>{topProduct.material}</p>
            </div>
            <div className={styles.productTableElement}>
              <h4>DIMENSIONS:</h4>
              <p>{topProduct.dimensions}</p>
            </div>
          </div>
        </div>
        <h2 className={styles.productTitle}>{topProduct.title}</h2>
        <div className={styles.barcodeBlock}>
          <div className={styles.barcodeCircle}>
            <p className={styles.barcodeTitle}>BC:</p>
          </div>
          <p className={styles.barcode}>{topProduct.barcode}</p>
        </div>
        <div className={styles.lineBreak}> </div>
        <div className={styles.productFooterBlock}>
          <p className={styles.price}>$ {topProduct.price}</p>
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

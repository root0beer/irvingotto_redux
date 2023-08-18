import React, { useState } from "react";
import styles from "./Products.module.scss";
import Image from "next/image";

const Products = () => {
  const [heartIsLiked, setHeartIsLiked] = useState(false);

  const onLikeHeart = () => {
    setHeartIsLiked((heartIsLiked) => !heartIsLiked);
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles.newCollection}>
        <p className={styles.subTitle}>NEW</p>
        <div className={styles.titleBlock}>
          <p className={styles.titleHashtag}>#</p>
          <h2 className={styles.title}>Collection</h2>
        </div>
      </div>
      <div className={styles.topPicksContainer}>
        <div className={styles.topPickCard}>
          <Image
            className={styles.woodOverlay}
            src={"/products/woodBg.png"}
            alt="woodBackground"
            width={640}
            height={640}
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
          {/* <table className={styles.productTable}>
            <tr>
              <td>
                <h4>ORIGIN:</h4>
                <p>Tenerif</p>
              </td>
              <td>
                <h4>AGE:</h4>
                <p>87 years</p>
              </td>
            </tr>
            <tr>
              <td>
                <h4>MATERIAL:</h4>
                <p>Clay</p>
              </td>
              <td>
                <h4>DIMENSIONS:</h4>
                <p>7" x 7" x 10"</p>
              </td>
            </tr>
          </table> */}
          <h2 className={styles.productTitle}>
            9th century style Tenerif Vase
          </h2>
          <div className={styles.barcodeBlock}>
            <div className={styles.barcodeCircle}>
              <p className={styles.barcodeTitle}>BC:</p>
            </div>
            <p className={styles.barcode}>UIwys3221-2ewse32</p>
          </div>
          <br className={styles.lineBreak} />
          <div className={styles.productFooterBlock}>
            <p className={styles.price}>$ 1005</p>
            <button className={styles.favorites} onClick={onLikeHeart}>
              {heartIsLiked ? (
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
    </div>
  );
};

export default Products;

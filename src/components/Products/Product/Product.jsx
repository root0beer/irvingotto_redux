import React, { useState } from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import { submitFavourites } from "../../../../lib/getFavourites";

const Product = ({ product, productkey, onFavourite, slug }) => {
  const [heartIsLiked, setHeartIsLiked] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const onClickIsFavourite = (obj) => {
    //onFavourite(itemObj);
    setHeartIsLiked((heartIsLiked) => !heartIsLiked);

    const favObj = {
      favTitle,
      slug
    };

    try {
      submitFavourites(favObj);
    } catch (error) {
      console.log(error, "FAVOURITES DONT WORK!");
    };
  };

  return (
    <div className={styles.productCard} id={productkey}>
      <div className={styles.woodOverlay}></div>
      <Image
        className={styles.woodOverlay}
        src={"/products/woodBg.png"}
        alt="woodBackground"
        fill
        quality={100}
        placeholder="blur"
        blurDataURL={"/products/woodBgBlur.png"}
      />
      <div className={styles.productImageBlock}>
        <Image
          className={styles.productImage}
          src={product.productImage.url}
          alt={product.productImage.id}
          width={640}
          height={640}
          placeholder="blur"
          blurDataURL={product.imageBlur.url}
        />
      </div>
      <div className={styles.cardContentsMobile}>
        <div className={styles.productTable}>
          <div className={styles.productTableColumn}>
            <div className={styles.productTableElement}>
              <h4>ORIGIN:</h4>
              <p>{product.origin}</p>
            </div>
            <div className={styles.productTableElement}>
              <h4>AGE:</h4>
              <p>{product.age}</p>
            </div>
          </div>
          <div className={styles.productTableColumn}>
            <div className={styles.productTableElement}>
              <h4>MATERIAL:</h4>
              <p>{product.material}</p>
            </div>
            <div className={styles.productTableElement}>
              <h4>DIMENSIONS:</h4>
              <p>{product.dimensions}</p>
            </div>
          </div>
        </div>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.barcodeBlock}>
          <div className={styles.barcodeCircle}>
            <p className={styles.barcodeTitle}>BC:</p>
          </div>
          <p className={styles.barcode}>{product.barcode}</p>
        </div>
        <div className={styles.lineBreak}> </div>
        <div className={styles.productFooterBlock}>
          <p className={styles.price}>$ {product.price}</p>
          <div className={styles.favandGet}>
            <button className={styles.favorites} onClick={onClickIsFavourite}>
              {heartIsLiked ? (
                <Image
                  className={styles.likedHeart}
                  src={"/products/likedheart.png"}
                  alt="licked heart"
                  width={35}
                  height={35}
                />
              ) : (
                <Image
                  className={styles.unlikedHeart}
                  src={"/products/unlikedheart.png"}
                  alt="unlicked heart"
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

export default Product;

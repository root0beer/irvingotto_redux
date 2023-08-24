import React, { useState } from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import { favouritesActions } from "@/store/favourites-slice";

const Product = ({ product, productkey }) => {
  //const [heartIsLiked, setHeartIsLiked] = useState(false);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        price: product.price,
        title: product.title,
        productImage: product.productImage.url,
        productImageId: product.productImage.id,
        imageBlur: product.imageBlur.url,
      })
    );
  };

  const onClickIsFavourite = () => {
    //setHeartIsLiked((heartIsLiked) => !heartIsLiked);

    dispatch(
      favouritesActions.addFavsToFavourites({
        id: product.id,
        productImage: product.productImage.url,
        productImageId: product.productImage.id,
        imageBlur: product.imageBlur.url,
        title: product.title,
        price: product.price,
      })
    );
  };

  const heartIsLiked = useSelector((state) => state.favourites.favClicked);

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
            <button className={styles.addToCart} onClick={addToCartHandler}>
              GET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

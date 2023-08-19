import React, { useState } from "react";
import styles from "./Products.module.scss";
import Image from "next/image";
import TopPickProduct from "./TopPickProduct/TopPickProduct";
import Product from "./Product/Product";

const Products = ({products}) => {
  const [heartIsLiked, setHeartIsLiked] = useState(false);
  console.log(products, "products");

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
        <TopPickProduct likeToggler={onLikeHeart} liked={heartIsLiked}/>
      </div>
      <div className={styles.productsContainer}>
        <Product likeToggler={onLikeHeart} liked={heartIsLiked}/>
      </div>
    </div>
  );
};

export default Products;

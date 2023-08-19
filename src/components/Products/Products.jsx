import React, { useState } from "react";
import styles from "./Products.module.scss";
import Image from "next/image";
import TopPickProduct from "./TopPickProduct/TopPickProduct";
import Product from "./Product/Product";

const Products = ({ products }) => {
  const [heartIsLiked, setHeartIsLiked] = useState(false);
  console.log(products, "products");
  const topProducts = products.filter((prod) => prod.topPick === true);
  console.log(topProducts, "top products");

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
        {topProducts.map((topProduct) => {
          return (
            <TopPickProduct
              topProduct={topProduct}
              likeToggler={onLikeHeart}
              liked={heartIsLiked}
            />
          );
        })}
      </div>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <Product
              product={product}
              likeToggler={onLikeHeart}
              liked={heartIsLiked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;

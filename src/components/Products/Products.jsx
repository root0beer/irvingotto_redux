import React, { useState } from "react";
import styles from "./Products.module.scss";
import Image from "next/image";
import TopPickProduct from "./TopPickProduct/TopPickProduct";
import Product from "./Product/Product";

const Products = ({ products, onAddToFavourite }) => {
  console.log(products, "products");
  const topProducts = products.filter((prod) => prod.topPick === true);
  console.log(topProducts, "top products");
  products = products.filter((prod) => prod.topPick === false);

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
        {topProducts.map((topProduct, index) => {
          return (
            <div className={styles.wrappingProdDivforKey} key={topProduct.id}>
              <TopPickProduct
                topkey={index}
                topProduct={topProduct}
                onFavourite={onAddToFavourite}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.productsContainer}>
        {products.map((product, index) => {
          return (
            <div className={styles.wrappingProdDivforKey} key={product.id}>
              <Product
                productkey={index}
                product={product}
                onFavourite={onAddToFavourite}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

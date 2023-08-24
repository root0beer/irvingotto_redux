import React, { useState } from "react";
import styles from "./Products.module.scss";
import Image from "next/image";
import TopPickProduct from "./TopPickProduct/TopPickProduct";
import Product from "./Product/Product";

const Products = ({ products }) => {
  const topProducts = products.filter((prod) => prod.topPick === true);
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
        {topProducts.map((topProduct) => {
          return (
            <div className={styles.wrappingProdDivforKey} key={topProduct.id}>
              <TopPickProduct
                topkey={topProduct.id}
                topProduct={topProduct}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <div className={styles.wrappingProdDivforKey} key={product.id}>
              <Product
                favourite={product.favourite}
                productkey={product.id}
                product={product}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

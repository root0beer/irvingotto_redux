import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.posFixed}>
      <div className={styles.navWrapper}>
        <Image
          className={styles.logoNav}
          src={"/content/logo.png"}
          alt={"logoNavbar"}
          width={19}
          height={37}
          quality={100}
        />

        <Link href={"/"}>
          <h1 className={styles.navHeader}>Irving & Otto</h1>
        </Link>
        <Link className={styles.mobileLinkCartFav} href={"/"}>
          <div className={styles.mobileNavLine}></div>
          <div className={styles.mobileNavLine}></div>
          <div className={styles.mobileNavLine}></div>
        </Link>
        <div className={styles.favouritesandCart}>
          <Link href={"/favorites"}>
            <Image
              className={styles.favoritesImage}
              src={"/content/favorites.png"}
              alt={"favorites"}
              width={28}
              height={29}
              quality={100}
            />
          </Link>
          <Link href={"/cart"}>
            <div className={styles.cart}>
              <Image
                className={styles.basketImage}
                src={"/content/basket.png"}
                alt={"basket"}
                width={32}
                height={38}
                quality={100}
              />
              <div className={styles.cartAmount}>
                <p className={styles.cartDollarSign}>$</p>
                <p className={styles.cartPrice}>1830</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

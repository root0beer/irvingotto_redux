import React, { use } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { uiActions } from "@/store/ui-slice";
import { useDispatch } from "react-redux";

const Navbar = ({onClickFav}) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle("cartOpened"));
  };

  return (
    <div className={styles.posFixed}>
      <div className={styles.navWrapper}>
        <Image
          className={styles.logoNav}
          src={"/content/logo.png"}
          alt={"logoNavbar"}
          width={27}
          height={28}
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
          <button className={styles.cartButton} href={"/favorites"} onClick={onClickFav}>
            <Image
              className={styles.favoritesImage}
              src={"/content/favorites.png"}
              alt={"favorites"}
              width={28}
              height={29}
              quality={100}
            />
          </button>
          <button href={"/cart"} onClick={toggleCartHandler} className={styles.cartButton}>
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

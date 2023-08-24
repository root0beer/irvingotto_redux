import React, { use } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { uiActions } from "@/store/ui-slice";
//useSelector is for reading from the state, useDispatch is for writing to the state
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartTotalPrice = useSelector(state => state.cart.cartItems);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle("cartOpened"));
  };

  const toggleFavouritesHandler = () => {
    dispatch(uiActions.toggle("favOpened"));
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
          <button className={styles.cartButton} href={"/favorites"} onClick={toggleFavouritesHandler}>
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
                <p className={styles.cartPrice}>{cartTotalPrice.totalCartPrice}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

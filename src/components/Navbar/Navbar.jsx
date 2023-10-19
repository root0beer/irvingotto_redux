import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { uiActions } from "@/store/ui-slice";
//useSelector is for reading from the state, useDispatch is for writing to the state
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@react-hook/media-query";

const Navbar = () => {
  const [cart, setCart] = useState([]);
  const isMobile = useMediaQuery("(max-width: 991.98px)");
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();
  // const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("/api/prodfinalrt");

        if (!res.ok) {
          throw new Error("Failed to fetch cart");
        }
        const data = await res.json();

        const cartproducts = await data.cart;
        setCart(cartproducts);
      } catch (err) {
        console.log("error loading topics", err);
      }
    };
    fetchCart();
  }, []);
  console.log(cart, "cart in Cart.jsx");

  //if user matches === user cart && orderSent === false
  let userCart = [];
  userCart = cart.filter((item) => {
    return item.orderSent === false && item.userId === userId;
  });
  console.log(userCart[0]?.products, "products filtered");
  const priceAll = userCart[0]?.priceAll;

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle("cartOpened"));
  };

  const toggleFavouritesHandler = () => {
    dispatch(uiActions.toggle("favOpened"));
  };

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        const heroHeight = document.querySelector(
          ".Hero_wrapperHero__eLUuM"
        ).offsetHeight;
        if (window.scrollY > heroHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.posFixed}>
      <div className={isSticky ? styles.navSpace : ""}></div>
      <div
        className={`${isSticky ? styles.navWrapperFixed : styles.navWrapper}`}
      >
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
        {/* <Link className={styles.mobileLinkCartFav} href={"/mobileNav"}>
          <div className={styles.mobileNavLine}></div>
          <div className={styles.mobileNavLine}></div>
          <div className={styles.mobileNavLine}></div>
        </Link> */}
        <div className={styles.favouritesandCart}>
          <button
            className={styles.cartButton}
            href={"/favorites"}
            onClick={toggleFavouritesHandler}
          >
            <Image
              className={styles.favoritesImage}
              src={"/content/favorites.png"}
              alt={"favorites"}
              width={28}
              height={29}
              quality={100}
            />
          </button>
          <button
            href={"/cart"}
            onClick={toggleCartHandler}
            className={styles.cartButton}
          >
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
                <p className={styles.cartPrice}>{priceAll || 0}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import styles from "./Favourites.module.scss";
import Image from "next/image";
import { uiActions } from "@/store/ui-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import { favouritesActions } from "@/store/favourites-slice";

const Favourites = () => {
  const dispatch = useDispatch();
  //we need to get a true/false value, for this we use useSelector
  const openFav = useSelector((state) => state.ui.favOpened);

  const onCloseFavouritesHandler = () => {
    dispatch(uiActions.toggle("favOpened"));
  };

  //const favItems = useSelector((state) => state.favourites.favItems);

  return (
    <>
      {openFav && (
        <div
          className={`${styles.overlay} ${
            openFav ? styles.overlayVisible : ""
          }`}
          onClick={onCloseFavouritesHandler}
        >
          <div
            className={styles.favWrapper}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.favPaddings}>
              <div className={styles.navBarFav}>
                <div className={styles.favTitleBlock}>
                  <h2 className={styles.favTitle}>Favourites</h2>
                  <Image
                    className={styles.favouritesIcon}
                    src={"/products/likedheart.png"}
                    alt="heart"
                    width={40}
                    height={42}
                  />
                </div>
                <p
                  className={styles.favClose}
                  onClick={onCloseFavouritesHandler}
                >
                  Close
                </p>
              </div>
              <div className={styles.favouritesItemList}>
                {favItems.map((favourite) => {
                  const addToCartHandler = () => {
                    dispatch(
                      cartActions.addItemToCart({
                        id: favourite.favItemId,
                        price: favourite.favItemPrice,
                        title: favourite.favItemTitle,
                        productImage: favourite.favItemImage,
                        productImageId: favourite.favItemImageId,
                        imageBlur: favourite.favItemImageBlur,
                      })
                    );
                  };
                  const removeFromFavourites = () => {
                    const id = favourite.favItemId;
                    dispatch(
                      favouritesActions.removeFavsFromFavouritesCart(id)
                    );
                  };
                  return (
                    <div className={styles.favItemBlock}>
                      <div className={styles.favItemImageBlock}>
                        <Image
                          className={styles.favItemImage}
                          src={favourite.favItemImage}
                          alt={favourite.favItemImageId}
                          width={274}
                          height={183}
                          placeholder="blur"
                          blurDataURL={favourite.favItemImageBlur}
                        />
                      </div>
                      <h3 className={styles.favTitleItem}>
                        {favourite.favItemTitle}
                      </h3>
                      <div className={styles.buttonsFavBlock}>
                        <button
                          className={styles.addtoCartBtn}
                          onClick={addToCartHandler}
                        >
                          Add to cart
                        </button>
                        <button
                          className={styles.removeFavBtn}
                          onClick={removeFromFavourites}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favourites;

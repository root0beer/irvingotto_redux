import React, { useState, useEffect } from "react";
import styles from "./Favourites.module.scss";
import Image from "next/image";
import { uiActions } from "@/store/ui-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import { favouritesActions } from "@/store/favourites-slice";

const Favourites = ({ favourites }) => {
  const [favs, setFavs] = useState([]);
  const dispatch = useDispatch();
  //we need to get a true/false value, for this we use useSelector
  const openFav = useSelector((state) => state.ui.favOpened);

  const userId = useSelector((state) => state.user.userId);

  const onCloseFavouritesHandler = () => {
    dispatch(uiActions.toggle("favOpened"));
  };

  // const favItems = useSelector((state) => state.favourites.favItems);
  const likedItems = useSelector((state) => state.ui.likedItems);

  useEffect(() => {
    const fetchFavs = async () => {
      try {
        const res = await fetch("/api/favourites");
        if (res.status !== 200) {
          throw new Error(`Failed to fetch fav items from mongo: ${res.status}`);
        };

        if (!res.ok) {
          throw new Error("Failed to fetch favourites");
        }
        const data = await res.json();

        const favproducts = await data.favourites;
        setFavs(favproducts);
      } catch (err) {
        console.log("error loading favourites", err);
      }
    };
    fetchFavs();
  }, []);
  console.log(favs, "favourites in Favourites.jsx");

  let userFavs = [];
  userFavs = favs.filter((item) => {
    return item.userId === userId;
  });

  const updatedFavItems = userFavs.map((favourite) => {
    const likedFavourite = likedItems.find(
      (liked) => liked.likedId === favourite.favItemId
    );

    if (likedFavourite) {
      return { ...favourite, isLiked: likedFavourite.isLiked };
    } else {
      return { ...favourite, isLiked: false };
    }
  });
  console.log(updatedFavItems, "final fav items");

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
                {updatedFavItems.map((favourite) => {
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
                    dispatch(
                      uiActions.heartLikeStatusToggle({
                        id: id,
                        isLiked: favourite.isLiked,
                      })
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

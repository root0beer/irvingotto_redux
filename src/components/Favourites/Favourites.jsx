import React from "react";
import styles from "./Favourites.module.scss";
import Image from "next/image";
import { uiActions } from "@/store/ui-slice";
import { useSelector } from "react-redux";

const Favourites = ({ opened, onClose }) => {
  //we need to get a true/false value, for this we use useSelector
  const openFav = useSelector((state) => state.ui.favOpened);
  return (
    <>
      {openFav && (
        <div
          className={`${styles.overlay} ${openFav ? styles.overlayVisible : ""}`}
        >
          <div className={styles.favWrapper} onClick={(event) => event.stopPropagation()}>
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
                <p className={styles.favClose} onClick={onClose}>
                  Close
                </p>
              </div>
              <div className={styles.favouritesItemList}>
                <div className={styles.favItemBlock}>
                  <div className={styles.favItemImageBlock}>
                    <Image
                      className={styles.favItemImage}
                      src={"/content/product3.png"}
                      alt="heart"
                      width={274}
                      height={183}
                      placeholder="blur"
                      blurDataURL="/content/product3Blur.png"
                    />
                  </div>
                  <h3 className={styles.favTitleItem}>
                    9th century style Tenerif Vase{" "}
                  </h3>
                  <div className={styles.buttonsFavBlock}>
                    <button className={styles.addtoCartBtn}>Add to cart</button>
                    <button className={styles.removeFavBtn}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Favourites;

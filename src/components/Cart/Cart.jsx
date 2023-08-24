import React from "react";
import styles from "./Cart.module.scss";
import Image from "next/image";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "@/store/ui-slice";

const Cart = ({ onClose }) => {

  const dispatch = useDispatch();
  const openCart = useSelector((state) => state.ui.cartOpened);

  const onCloseCartHandler = () => {
    dispatch(uiActions.toggle("cartOpened"));
  };

    return (
    <>
      {openCart && (
        <div
          className={`${styles.overlay} ${openCart ? styles.overlayVisible : ""}`}
        onClick={onCloseCartHandler}>
          {/* stop propagation stops effect of onClick on children/ancestors of the block */}
          <div className={styles.cartWrapper} onClick={(event) => event.stopPropagation()}>
            <div className={styles.cartPaddings}>
              <div className={styles.navBarCart}>
                <h2 className={styles.cartTitle}>Cart</h2>
                <p className={styles.cartClose} onClick={onCloseCartHandler}>
                  Close
                </p>
              </div>
              <div className={styles.cartItemsList}>
                <div className={styles.cartItemBlock}>
                  <div className={styles.cartItemImageDescrBlock}>
                    <div className={styles.itemImageBlock}>
                      <Image
                        className={styles.itemImage}
                        src={"/content/product2.png"}
                        width={274}
                        height={183}
                        placeholder="blur"
                        blurDataURL="/content/product2Blur.png"
                      />
                    </div>
                    <div className={styles.descriptionBlock}>
                      <h4 className={styles.productTitle}>
                        9th century style Tenerif Vase{" "}
                      </h4>
                      <p className={styles.price}>$ 1150</p>
                      <p className={styles.remove}>Remove</p>
                    </div>
                  </div>
                  <div className={styles.quantityBlock}>
                    <p className={styles.quantityTitle}>Quantity</p>
                    <div className={styles.plusMinusBlock}>
                      <p className={styles.minusSign}>-</p>
                      <p className={styles.quantityNumber}>1</p>
                      <p className={styles.plusSign}>+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.checkoutBlock}>
                <div className={styles.checkoutPriceBlock}>
                  <p className={styles.total}>Total:</p>
                  <p className={styles.totalPrice}>$8266</p>
                </div>
              </div>
              <button className={styles.checkoutBtn}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "@/store/ui-slice";
import { cartActions } from "@/store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const openCart = useSelector((state) => state.ui.cartOpened);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [user, setUser] = useState("default");
 
  let newUserId = Cookies.get("userId");
  if (!newUserId) {
    newUserId = uuidv4();
    Cookies.set("userId", newUserId, { expires: 1 / 24 });
  }
  const retrievedUserId = Cookies.get("userId");

  const onCloseCartHandler = () => {
    dispatch(uiActions.toggle("cartOpened"));
  };

  const onSubmitCartData = async () => {

    dispatch(cartActions.removeAllItemsFromCartTemporary());

    const priceAll = await totalPrice;

    const products = cartItems.map((item) => {
      return {
        product: { title: item.cartItemTitle, price: item.cartItemPrice },
        quantity: item.cartItemQuantity,
      };
    });

    console.log(products, "products");
    const res = await fetch("/api/prodtesttwo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderSent: true,
        userId: newUserId,
        priceAll,
        products,
      }),
    });
  };

  return (
    <>
      {openCart && (
        <div
          className={`${styles.overlay} ${
            openCart ? styles.overlayVisible : ""
          }`}
          onClick={onCloseCartHandler}
        >
          {/* stop propagation stops effect of onClick on children/ancestors of the block */}
          <div
            className={styles.cartWrapper}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.cartPaddings}>
              <div className={styles.navBarCart}>
                <h2 className={styles.cartTitle}>Cart</h2>
                <p className={styles.cartClose} onClick={onCloseCartHandler}>
                  Close
                </p>
              </div>
              <div className={styles.cartItemsList}>
                {cartItems.map((cartitem) => {
                  const addToCartHandler = () => {
                    dispatch(
                      cartActions.addItemToCart({
                        id: cartitem.cartItemId,
                        price: cartitem.cartItemPrice,
                        title: cartitem.cartItemTitle,
                        productImage: cartitem.cartItemImage,
                        productImageId: cartitem.cartItemImageId,
                        imageBlur: cartitem.cartItemImageBlur,
                      })
                    );
                  };
                  const removeFromCartHandler = () => {
                    //to avoid the bug you need to either pass id like this:
                    //declaring it in advance. Or changing reducer logic
                    const id = cartitem.cartItemId;
                    dispatch(cartActions.removeItemFromCart(id));
                  };
                  const removeFromCartTotallyHandler = () => {
                    const id = cartitem.cartItemId;
                    dispatch(cartActions.removeFromCartTotally(id));
                  };

                  return (
                    <div
                      className={styles.cartItemBlock}
                      key={cartitem.cartItemId}
                    >
                      <div className={styles.cartItemImageDescrBlock}>
                        <div className={styles.itemImageBlock}>
                          <Image
                            className={styles.itemImage}
                            src={cartitem.cartItemImage}
                            alt={cartitem.cartItemImageId}
                            width={274}
                            height={183}
                            placeholder="blur"
                            blurDataURL={cartitem.cartItemImageBlur}
                          />
                        </div>
                        <div className={styles.descriptionBlock}>
                          <h4 className={styles.productTitle}>
                            {cartitem.cartItemTitle}
                          </h4>
                          <p className={styles.price}>
                            $ {cartitem.cartItemPrice}
                          </p>
                          <p
                            className={styles.remove}
                            onClick={removeFromCartTotallyHandler}
                          >
                            Remove
                          </p>
                        </div>
                      </div>
                      <div className={styles.quantityBlock}>
                        <p className={styles.quantityTitle}>Quantity</p>
                        <div className={styles.plusMinusBlock}>
                          <p
                            className={styles.minusSign}
                            onClick={removeFromCartHandler}
                          >
                            -
                          </p>
                          <p className={styles.quantityNumber}>
                            {cartitem.cartItemQuantity}
                          </p>
                          <p
                            className={styles.plusSign}
                            onClick={addToCartHandler}
                          >
                            +
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className={styles.checkoutBlock}>
                <div className={styles.checkoutPriceBlock}>
                  <p className={styles.total}>Total:</p>
                  <p className={styles.totalPrice}>${totalPrice}</p>
                </div>
              </div>
              <button className={styles.checkoutBtn} onClick={onSubmitCartData}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

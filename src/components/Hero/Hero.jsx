import React, { useState } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import { useSelector } from "react-redux";

const Hero = ({ products }) => {
  let heroProducts = products.filter((prod) => prod.topPick === true);
  const dispatch = useDispatch();
  const [productIndex, setProductIndex] = useState(1);

  const userId = useSelector((state) => state.user.userId);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const priceAll = totalPrice;
  const orderSent = false;

  const sliderClickHandler = (index) => {
    setProductIndex(index);
  };

  const index = productIndex;
  if (index !== -1) {
    const beforeSelection = heroProducts.slice(0, index);
    const afterSelection = heroProducts.slice(index + 1);
    heroProducts = [...afterSelection, ...beforeSelection, heroProducts[index]];
  }

  return (
    <div className={styles.wrapperHero}>
      <div className={styles.heroTextSection}>
        <Image
          className={styles.decorTop}
          src={"/hero/decortop.svg"}
          alt={"decortop"}
          width={118}
          height={45}
        />
        <Image
          className={styles.decorsnake1}
          src={"/hero/decor1.svg"}
          alt={"decorsnake1"}
          width={461}
          height={34}
        />
        <h1 className={styles.titleHero}>
          Eclectic Haven of <br />
          Home Decor
        </h1>
        <Image
          className={styles.decorsnake2}
          src={"/hero/decor2.svg"}
          alt={"decorsnake2"}
          width={461}
          height={34}
        />
        <div className={styles.newspaper}>
          <Image
            className={styles.decorStar}
            src={"/hero/decorstar.svg"}
            alt={"decorstar"}
            width={127}
            height={127}
          />
          <div className={styles.newspaperPart}>
            <div className={styles.newsImageBg}>
              <Image
                className={styles.newsImage}
                src={"/hero/news1.png"}
                alt={"news1"}
                width={183}
                height={115}
                quality={100}
              />
            </div>
            <h3 className={styles.newsTitle}>EXQUISITEEXQ</h3>
          </div>
          <div className={styles.newspaperPart}>
            <div className={styles.newsImageBg}>
              <Image
                className={styles.newsImage}
                src={"/hero/news2.png"}
                alt={"news2"}
                width={112}
                height={115}
                quality={100}
              />
            </div>
            <h3 className={styles.newsTitle}>ELOQUENTELO</h3>
          </div>
          <div className={styles.newspaperPart}>
            <div className={styles.newsImageBg}>
              <Image
                className={styles.newsImage}
                src={"/hero/news3.png"}
                alt={"news3"}
                width={81}
                height={115}
                quality={100}
              />
            </div>
            <h3 className={styles.newsTitle}>EDDIEWHOSED</h3>
          </div>
          <div className={styles.newspaperPart}>
            <div className={styles.newsImageBg}>
              <Image
                className={styles.newsImage}
                src={"/hero/news4.png"}
                alt={"news4"}
                width={47}
                height={115}
                quality={100}
              />
            </div>
            <h3 className={styles.newsTitle}>EDDIEWHOSED</h3>
          </div>
        </div>
        <div className={styles.newspaperMobile}>
          <div className={styles.newsImageBg}>
            <Image
              className={styles.newsImage}
              src={"/hero/news1.png"}
              alt={"news1"}
              width={183}
              height={115}
              quality={100}
            />
          </div>
          <h3 className={styles.newsTitle}>EXQUISITEEXQ</h3>
        </div>
      </div>
      <div className={styles.sliderHero}>
        <button
          onClick={() =>
            sliderClickHandler((productIndex + 1) % heroProducts.length)
          }
          className={styles.circleButton}
        >
          <Image
            className={styles.arrowHero}
            alt={"arrowHero"}
            src={"/hero/arrow.svg"}
            width={44}
            height={31}
          />
        </button>
        {heroProducts.map((product) => {
          const addToCartHandler = async () => {
            dispatch(
              cartActions.addItemToCart({
                id: product.id,
                price: product.price,
                title: product.title,
                productImage: product.productImage.url,
                productImageId: product.productImage.id,
                imageBlur: product.imageBlur.url,
              })
            );

              const products = await cartItems.map((item) => {
                return {
                  product: {
                    title: item.cartItemTitle,
                    price: item.cartItemPrice,
                  },
                  quantity: item.cartItemQuantity,
                };
              });

              await addToOrder({
                orderSent,
                userId,
                priceAll,
                products,
              });
          };

          return (
            <div className={styles.heroSlideMain} key={product.id}>
              <Image
                className={styles.woodOverlay}
                src={"/hero/woodBg.png"}
                alt="woodBackgroundHero"
                fill
                quality={100}
                placeholder="blur"
                blurDataURL={"/products/woodBgBlur.png"}
              />
              <div className={styles.sliderImageContainer}>
                <Image
                  className={styles.sliderImage}
                  src={product.heroImage.url}
                  alt={product.heroImage.id}
                  width={275}
                  height={245}
                  placeholder="blur"
                  blurDataURL={product.heroImageBlur.url}
                />
              </div>
              <h3 className={styles.sliderTitle}>{product.title}</h3>
              <div className={styles.barcodeBlock}>
                <div className={styles.barcodeCircle}>
                  <p className={styles.barcodeTitle}>BC:</p>
                </div>
                <p className={styles.barcode}>{product.barcode}</p>
              </div>
              <div className={styles.lineBreak}> </div>
              <div className={styles.productFooterBlock}>
                <p className={styles.price}>$ {product.price}</p>
                <button className={styles.addToCart} onClick={addToCartHandler}>
                  GET
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

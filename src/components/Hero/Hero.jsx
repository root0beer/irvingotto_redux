import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
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
      </div>
      <div className={styles.sliderHero}>
        <div className={styles.circleButton}>
          <Image
            className={styles.arrowHero}
            alt={"arrowHero"}
            src={"/hero/arrow.svg"}
            width={44}
            height={31}
          />
        </div>
        <div className={styles.heroSlideMain}>
          <Image
            className={styles.woodOverlay}
            src={"/hero/woodBg.png"}
            alt="woodBackgroundHero"
            fill
            quality={100}
            placeholder="blur"
            blurDataURL={"/products/woodBgBlur.png"}
          />
          <Image
            className={styles.sliderImage}
            src={"/hero/heroDecor1.png"}
            alt={"sliderImage"}
            width={275}
            height={245}
            placeholder="blur"
            blurDataURL="/hero/heroDecor1Blur.png"
          />
          <h3 className={styles.sliderTitle}>9th century style Tenerif Vase</h3>
          <div className={styles.barcodeBlock}>
            <div className={styles.barcodeCircle}>
              <p className={styles.barcodeTitle}>BC:</p>
            </div>
            <p className={styles.barcode}>UIwys3221-2ewse32</p>
          </div>
          <div className={styles.lineBreak}> </div>
          <div className={styles.productFooterBlock}>
            <p className={styles.price}>$ 1005</p>
            <button className={styles.addToCart}>GET</button>
          </div>
        </div>

        {/* second slider element styles are the same*/}
        <div className={styles.heroSlideMain}>
          <Image
            className={styles.sliderImage}
            src={"/hero/heroDecor2.png"}
            alt={"sliderImage2"}
            width={259}
            height={323}
            placeholder="blur"
            blurDataURL="/hero/heroDecor2Blur.png"
          />
          <h3 className={styles.sliderTitle}>9th century style Tenerif Vase</h3>
          <div className={styles.barcodeBlock}>
            <div className={styles.barcodeCircle}>
              <p className={styles.barcodeTitle}>BC:</p>
            </div>
            <p className={styles.barcode}>UIwys3221-2ewse32</p>
          </div>
          <div className={styles.lineBreak}> </div>
          <div className={styles.productFooterBlock}>
            <p className={styles.price}>$ 1005</p>
            <div className={styles.favandGet}>
              <button className={styles.addToCart}>GET</button>
            </div>
          </div>
        </div>
        {/* second slider element */}
      </div>
    </div>
  );
};

export default Hero;

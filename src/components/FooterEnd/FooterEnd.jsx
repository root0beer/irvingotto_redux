import React from "react";
import styles from "./FooterEnd.module.scss";
import Link from "next/link";
import Image from "next/image";

const FooterEnd = () => {
  return (
    <div className={styles.wrapperCredit}>
      <div className={styles.barLineLeft}></div>
      <div className={styles.footerSection}>
        <div className={styles.logoSection}>
          <div className={styles.logoBlock}>
            <Image
              className={styles.logoHeader}
              src={"/content/logo.png"}
              alt={"logoHeader"}
              width={27}
              height={28}
              quality={100}
            />
          </div>

          <h1 className={styles.footerHeader}>Irving & Otto</h1>
        </div>
        <div className={styles.linksBar}>
          <Link className={styles.link} href={"/#hero"}>
            MAIN
          </Link>
          <Link className={styles.link} href={"/#topproduct"}>
            TOP PRODUCTS
          </Link>
          <Link className={styles.link} href={"/#products"}>
            PRODUCTS
          </Link>
        </div>
      </div>
      <div className={styles.barLineRight}></div>
      <div className={styles.creditsBlock}>
        <div className={styles.tanyaBlock}>
          <p className={styles.footerText}>
            Designed and developed by Tatiana Halka
          </p>
          <p className={styles.footerText}>&copy; 2023</p>
        </div>
        <div className={styles.authorsBlock}>
          <p className={styles.footerCreditText}>Credit:</p>
          <p className={styles.footerTextAuthors}>
            House sketch - Anton Pieck, Street Light sketch - Larissa Lukaneva{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterEnd;

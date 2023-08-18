import React from 'react';
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
        <div className={styles.logoContainer}>
            <Image
                className={styles.logoNav}
                src={"/content/logo.png"}
                alt={"logoNavbar"}
                width={19}
                height={37}
                quality={100}
            />
        </div>
    </div>
  )
};

export default Navbar;
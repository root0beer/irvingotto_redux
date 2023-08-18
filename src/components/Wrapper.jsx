import React from "react";
import styles from "./Wrapper.module.scss";
import Image from "next/image";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapperGlobal}>
      {/* <Image
        className={styles.bgImage}
        src={"/content/backgroundnoise.png"}
        alt={"backgroundNoise"}
        // width={1023}
        // height={682}
        quality={50}
        placeholder="blur"
        blurDataURL="/content/backgroundnoiseBlured.png"
        layout="fill"
        objectFit="repeat"
      /> */}
      <div className={styles.backgroundNoise}></div>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Wrapper;

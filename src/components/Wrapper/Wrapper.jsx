import React from "react";
import styles from "./Wrapper.module.scss";
import Image from "next/image";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapperGlobal}>
      <div className={styles.backgroundNoise}></div>
      {children}
    </div>
  );
};

export default Wrapper;

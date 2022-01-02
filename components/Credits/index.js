import React from "react";
import styles from "./styles.module.css";

const Credits = () => {
  return (
    <div className={styles.creditContainer}>
      <small className={styles.small}>
        Icons made by <a href="#">Freepik</a> from{" "}
        <a href="#">www.flaticon.com</a>
      </small>
      <small>
        Avocado images taken from <a href="#">Avocado 101</a> at{" "}
        <a href="#">California Avocado</a>
      </small>
    </div>
  );
};

export default Credits;

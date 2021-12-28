import Navbar from "@components/Navbar";
import React, { memo } from "react";
import styles from "@components/Layout/style.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </div>
  );
};

export default Layout;

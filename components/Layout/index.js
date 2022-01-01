import Navbar from "@components/Navbar";
import styles from "@components/Layout/style.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {children}
        <footer className={styles.footer}>
          <h3>This is the footer</h3>
        </footer>
      </div>
    </>
  );
};

export default Layout;

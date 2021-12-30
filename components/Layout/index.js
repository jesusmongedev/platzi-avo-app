import Navbar from "@components/Navbar";
import styles from "@components/Layout/style.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* Footer Component  */}
      <footer className={styles.footer}>
        <h3>This is the footer</h3>
      </footer>
    </>
  );
};

export default Layout;

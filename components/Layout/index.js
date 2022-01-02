import Navbar from "@components/Navbar";
import styles from "@components/Layout/style.module.css";
import Footer from "@components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

import Link from "next/link";
import styles from "@components/Navbar/style.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <div className={styles.home}>
            <a>🥑 Avo Store</a>
          </div>
        </Link>

        <Link href="/about">
          <div className={styles.basket}>
            <a>🧺 Canasta (0) </a>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

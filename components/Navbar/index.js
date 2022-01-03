import Link from "next/link";
import styles from "@components/Navbar/style.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.home}>
          <Link href="/">
            <a>🥑 Avo Store</a>
          </Link>
        </div>

        <div className={styles.basket}>
          <Link href="/about">
            <a>🧺 Canasta (0) </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

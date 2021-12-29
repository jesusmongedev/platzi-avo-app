import Link from "next/link";
import styles from "@components/Navbar/style.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href="/" prefetch={false}>
            <a>🥑 Avo Store</a>
          </Link>
        </div>

        <div>
          <Link href="/about" prefetch={false}>
            <a>🧺 Canasta (0) </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

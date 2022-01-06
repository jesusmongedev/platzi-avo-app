import Link from "next/link";
import styles from "@components/Navbar/style.module.css";
import { useCart } from "@store/Cart";

const Navbar = () => {
  const { count: cartCount } = useCart();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <div className={styles.home}>
            <a>🥑 Avo Store</a>
          </div>
        </Link>

        <Link href="/cart">
          <div className={styles.basket}>
            <a>🧺 Canasta ({cartCount}) </a>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

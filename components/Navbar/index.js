import Link from "next/link";
import styles from "@components/Navbar/style.module.css";
import { useCart } from "@store/Cart";
import ShoppingCartIcon from "@components/ShoppingCartIcon";
import { Menu, Container } from "semantic-ui-react";
import { useRouter } from "next/router";
import { Avocado } from "@components/SVGIcons";

const Navbar = () => {
  const { count: cartCount } = useCart();
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <div className={styles.home}>
            <Avocado />
            <a> Avo Store</a>
          </div>
        </Link>

        <Link href="/cart" passHref>
          <Menu.Item active={pathname === "/cart"}>
            <ShoppingCartIcon
              cartCount={cartCount}
              name="Canasta"
              styles={styles.basket}
            />
          </Menu.Item>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

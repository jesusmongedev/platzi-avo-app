import Link from "next/link";
import styles from "@components/Navbar/style.module.css";
import ShoppingCartIcon from "@components/ShoppingCartIcon";
import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";
import { Avocado } from "@components/SVGIcons";
import { useCart } from "@store/Cart";
import { useState } from "react";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const { count: cartCount } = useCart();
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <div className={styles.home} title="Inicio | Todos los productos">
            <Avocado />
            <a> Avo Store</a>
          </div>
        </Link>

        <Link href="/cart" passHref>
          <Menu.Item active={pathname === "/cart"}>
            <ShoppingCartIcon
              navBg={navBg}
              setNavBg={setNavBg}
              cartCount={cartCount}
              name="Canasta"
              bgStyles={styles.basketActive}
              styles={styles.basket}
            />
          </Menu.Item>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, Container } from "semantic-ui-react";

import styles from "@components/Navbar/style.module.css";
import ShoppingCartIcon from "@components/ShoppingCartIcon";
import { Avocado } from "@components/SVGIcons";
import { useCart } from "@store/Cart";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const { count: cartCount } = useCart();
  const { pathname } = useRouter();

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === "/"}
            title="Inicio | Todos los productos"
          >
            <Avocado />
            Avo Store
          </Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Link href="/cart" passHref>
            <Menu.Item active={pathname === "/cart"}>
              <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;

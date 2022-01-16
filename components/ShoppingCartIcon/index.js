import { Basket } from "@components/SVGIcons";
import styles from "@components/ShoppingCartIcon/styles.module.css";

const ShoppingCartIcon = ({ cartCount, name }) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`;
    }
    if (cartCount > 9) {
      return (
        <span>
          9<sup>+</sup>
        </span>
      );
    }
    return `(${cartCount})`;
  };

  return (
    <div className={styles.container} title="Carrito | checkout">
      <Basket />
      <div className={styles.text}>
        {` ${name} `}
        {showCartCount()}
      </div>
      <style jsx>{`
        .text {
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default ShoppingCartIcon;

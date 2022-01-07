import { Basket } from "@components/SVGIcons";

const ShoppingCartIcon = ({ cartCount, name, styles }) => {
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
    <div className={styles}>
      <Basket />
      <div className="text">
        {` ${name} `}
        {showCartCount()}
      </div>
      <style jsx>{`
        .text {
          margin-left: 0.5rem;
        }
        .text span {
          font-size: smaller;
        }
      `}</style>
    </div>
  );
};

export default ShoppingCartIcon;

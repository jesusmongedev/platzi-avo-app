import styles from "@components/Header/style.module.css";
import { Avocado } from "@components/SVGIcons";
// import { PosMeMuero } from "@components/SVGIcons";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        Platzi
        <Avocado size="58px" />
        Avo
      </h1>
      <a href="#">¿Debería comer un avo hoy?</a>
    </div>
  );
};

export default Header;

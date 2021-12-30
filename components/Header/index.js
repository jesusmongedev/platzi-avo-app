import styles from "@components/Header/style.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Platzi🥑Avo</h1>
      <a href="#">¿Debería comer un avo hoy?</a>
    </div>
  );
};

export default Header;

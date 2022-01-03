import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.css";

const AvoDetails = ({ avos }) => {
  const [numberAvos, setNumberAvos] = useState(1);

  // Handle Number of Avos
  const handleNumberChange = (e) => {
    setNumberAvos(e.target.value);
  };
  // Handle the Avocados added to the cart
  const handleAddAvo = (e) => {
    e.preventDefault();
    alert(`${numberAvos} Avocados Added`);
    setNumberAvos(1);
  };

  return (
    <div className={styles.avoDetailContainer}>
      <Image src={avos?.image} width={288} height={288} />
      <h2>{avos?.name}</h2>
      <p className={styles.avoPrice}>$ {avos?.price}</p>
      <span className={styles.avoBarCode}>SKU: {avos?.sku}</span>
      <form className={styles.avoAddCart}>
        {/* Use a form to submit the number of avocados whe the user press enter */}
        {/* useState to keep track of the users selection */}
        <input
          type="number"
          value={numberAvos}
          min={1}
          onChange={handleNumberChange}
          placeholder="Quantity"
        />
        <button type="submit" onClick={handleAddAvo}>
          Add to Cart
        </button>
      </form>
      <div>
        <h3>About this avocado</h3>
        <p>{avos?.attributes.description}</p>
      </div>
    </div>
  );
};

export default AvoDetails;

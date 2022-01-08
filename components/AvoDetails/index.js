import AvoAttribute from "@components/AvoAttributes";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.css";
import { useCartMutations } from "@store/Cart";
import { Input, Icon, Transition } from "semantic-ui-react";

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600);
  });

const validate = (quantity) => {
  let error = "";
  if (quantity < 1) error = "Can't be blank";

  return error;
};

const AvoDetails = ({ avos }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const { addToCart } = useCartMutations();

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  // Handle Number of Avos
  // const handleNumberChange = (e) => {
  //   setQuantity(e.target.value);
  // };
  const handleChange = ({ target }) => setQuantity(parseInt(target.value, 10));
  // Handle the Avocados added to the cart
  const handleAddAvo = (e) => {
    e.preventDefault();
    // setQuantity(quantity);
    // setVisible(true);
    // toggleMessage();
    const error = validate(quantity);
    setError(error);

    if (!error) {
      setLoading(true);
      addToCartRequest()
        .then(() => {
          addToCart(avos, quantity);
          setLoading(false);
          setQuantity(quantity);
          setVisible(true);
          toggleMessage();
        })
        .catch((err) => {
          setError(`Error: ${err}` || "Something went wrong");
          setLoading(false);
        });
    }
  };

  return (
    <main className={styles.avoDetailContainer}>
      <Image src={avos?.image} width={288} height={288} />
      <h2>{avos?.name}</h2>
      <p className={styles.avoPrice}>$ {avos?.price}</p>
      <span className={styles.avoBarCode}>SKU: {avos?.sku}</span>
      <form>
        <Input
          type="number"
          placeholder="Quantity"
          value={quantity}
          min={1}
          step={1}
          error={!!error}
          onChange={handleChange}
          action={{
            color: "green",
            content: "Add to Cart",
            Icon: "plus cart",
            onClick: handleAddAvo,
            loading,
            disabled: loading,
          }}
        />
      </form>
      {error && (
        <div style={{ color: "red", position: "absolute" }}>{error}</div>
      )}
      <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
        <div style={{ color: "green", position: "absolute" }}>
          <Icon name="check" />
          Added to cart
        </div>
      </Transition>
      <div>
        <h3>About this avocado</h3>
        <p className={styles.borderBottom}>{avos?.attributes.description}</p>
      </div>
      <AvoAttribute avoAttributes={avos} />
    </main>
  );
};

export default AvoDetails;

import Image from "next/image";
import styles from "@components/AvoCard/style.module.css";

const AvoCard = ({ avos }) => {
  return (
    <main className={styles.avosContainer}>
      {avos.map((product) => (
        <div key={product.id} className={styles.avoCard}>
          <Image src={product?.image} width={288} height={288} />
          <div className={styles.avoInfo}>
            <h2>{product?.name}</h2>
            <p>$ {product?.price}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default AvoCard;

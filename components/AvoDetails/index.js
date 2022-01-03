import Image from "next/image";

const AvoDetails = ({ avos }) => {
  return (
    <div>
      <Image src={avos?.image} width={288} height={288} />
      <h2>{avos?.name}</h2>
      <p>$ {avos?.price}</p>
      <span>SKU: {avos?.sku}</span>
      <div>
        <input type="text" placeholder="Quantity" />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default AvoDetails;

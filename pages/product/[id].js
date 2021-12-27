import { useState, useEffect } from "react/cjs/react.development";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const ProductPage = () => {
  const [product, setProduct] = useState();

  // console.log(product)

  const {
    query: { id },
  } = useRouter([]);

  useEffect(() => {
    id &&
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then(({ data }) => {
          setProduct(data);
        })
        .catch((err) => console.log(err.message));
  }, [id]);


  return (
    <>
      <h2>{product?.name}</h2>
      <p>{product?.attributes.description}</p>
      <span>{product?.image}</span>
    </>
  );
};

export default ProductPage;

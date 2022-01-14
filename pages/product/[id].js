import { useState, useEffect } from "react/cjs/react.development";
import { useRouter } from "next/router";
import AvoDetails from "@components/AvoDetails";

const ProductPage = () => {
  const [product, setProduct] = useState();

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

  return <>{product && <AvoDetails product={product} />}</>;
};

export default ProductPage;

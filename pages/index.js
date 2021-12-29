import Head from "next/head";
import { useEffect, useState } from "react";
// Challenge PRODUCT_DATA filled by users
const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProductList(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Platzi-Avo 🥑</title>
      </Head>
      <h1>Hello World!</h1>
      {productList.map((product) => (
        <>
          <p key={product.id}>{product?.name}</p>
        </>
      ))}
    </>
  );
};

export default Home;

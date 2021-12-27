import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
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
    <div>
      <Head>
        <title>Platzi-Avo 🥑</title>
      </Head>
      <Navbar />
      <h1>Hello World!</h1>
      {productList.map((product) => (
        <>
          <div key={product.id}>{product.name}</div>
        </>
      ))}
    </div>
  );
};

export default Home;

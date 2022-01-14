import AvoCard from "@components/AvoCard";
import Header from "@components/Header";
import Layout from "@components/Layout";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProductList(data);
        // console.log(data);
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Platzi-Avo 🥑</title>
      </Head>
      <Header />
      <AvoCard avos={productList} />
    </Layout>
  );
};

export default Home;

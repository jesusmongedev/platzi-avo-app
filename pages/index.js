import AvoCard from "@components/AvoCard";
// import Header from "@components/Header";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import Layout from "@components/Layout";
import Head from "next/head";
import Link from "next/link";
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
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a> Debería comer un avo hoy? </a>
        </Link>
      </section>
      <AvoCard avos={productList} />
      <style jsx>
        {`
          section {
            text-align: center;
            margin-bottom: 2rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;

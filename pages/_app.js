// import App from "next/app";
import Layout from "@components/Layout";
import "../css/normalize.css";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  //.Casos de uso
  //.Providers - Context/Providers, Theme, data
  //.Layout
  //.props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

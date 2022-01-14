import "../css/normalize.css";
import "semantic-ui-css/semantic.min.css";
import CartProvider from "@store/Cart";

function MyApp({ Component, pageProps }) {
  //.Casos de uso
  //.Providers - Context/Providers, Theme, data
  //.Layout
  //.props adicionales
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

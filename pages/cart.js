import Head from "next/head";
import { useCart, useCartMutations } from "@store/Cart";
import CartSummary from "@components/CartSummary";

const CartPage = () => {
  const { items, count } = useCart();
  const { removeFromCart } = useCartMutations();

  console.log(items);

  return (
    <div>
      <Head>
        <title>Cart page</title>
      </Head>
      <CartSummary totalAmount={count} />
    </div>
  );
};

export default CartPage;

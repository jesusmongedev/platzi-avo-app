import Head from 'next/head'
import { Divider } from 'semantic-ui-react'
import Layout from '@components/Layout'
import CartSummary from '@components/CartSummary'
import CartItemList from '@components/CartItemList'
import { useCart, useCartMutations } from '@store/Cart'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <Layout>
      <Head>
        <title>Cart page</title>
      </Head>
      <main>
        <CartItemList items={items} removeFromCart={removeFromCart} />
        <Divider />
        <CartSummary totalAmount={count} />
      </main>
      <style jsx>{`
        main {
          margin: 2rem auto;
          padding: 0 14px;
        }
      `}</style>
    </Layout>
  )
}

export default CartPage

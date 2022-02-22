import AvoDetails from '@components/AvoDetails'
import { server } from 'config'
import Layout from '@components/Layout'
import Head from 'next/head'

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/avo`)
  const { data: productList } = await res.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }))

  return {
    paths,
    // Incremental static generation
    // 404 for everything else
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${server}/api/avo/${params.id}`)
  const { data: product } = await res.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }) => {
  return (
    <>
      {' '}
      <Head>
        <title>Avo Details</title>
      </Head>
      {product && <AvoDetails product={product} />}
    </>
  )
}

export default ProductPage

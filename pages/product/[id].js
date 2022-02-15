import AvoDetails from '@components/AvoDetails'
import { server } from 'config'

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
  const res = await fetch(
    `https://platzi-avocados.vercel.app/api/avo/${params.id}`
  )
  const product = await res.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }) => {
  return <>{product && <AvoDetails product={product} />}</>
}

export default ProductPage

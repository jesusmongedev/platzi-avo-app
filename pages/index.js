import AvoCard from '@components/AvoCard'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import Layout from '@components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { server } from '../config'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/avo`)
  const { data: productList } = await res.json()

  return {
    props: {
      productList,
    },
  }
}

const Home = ({ productList }) => {
  return (
    <Layout>
      <Head>
        <title>Platzi Avo</title>
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
  )
}

export default Home

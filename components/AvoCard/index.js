import Image from 'next/image'
import styles from '@components/AvoCard/style.module.css'
import Link from 'next/link'

const AvoCard = ({ avos }) => {
  return (
    <main className={styles.avosContainer}>
      {avos?.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} passHref>
          <div className={styles.avoCard}>
            <Image
              src={product?.image}
              width={288}
              height={288}
              alt={product?.name}
            />
            <div className={styles.avoInfo}>
              <h2>{product?.name}</h2>
              <p>$ {product?.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}

export default AvoCard

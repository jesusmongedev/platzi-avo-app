import React from 'react'
import styles from './styles.module.css'

const Credits = () => {
  return (
    <div className={styles.creditContainer}>
      <small className={styles.small}>
        Icons made by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.flaticon.com/authors/freepik"
        >
          Freepik
        </a>{' '}
        from{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.flaticon.com/"
        >
          www.flaticon.com
        </a>
      </small>
      <small>
        Avocado images taken from{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://californiaavocado.com/avocado101/avocado-varieties/"
        >
          Avocado 101
        </a>{' '}
        at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://californiaavocado.com/"
        >
          California Avocado
        </a>
      </small>
    </div>
  )
}

export default Credits

import Credits from '@components/Credits'
import React from 'react'
import { List } from 'semantic-ui-react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <h4>Nosotros</h4>
          <a href="#">Conoce más</a>
        </div>
        <div className={styles.links}>
          <h4>Servicios</h4>
          <a href="#">Todos los productos</a>
        </div>
        <div className={styles.links}>
          <h4>Hecho con 💚</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jesusandresmonge/?locale=en_US"
          >
            @JMongeDev
          </a>

          <p>
            Platzi y su curso de{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://platzi.com/cursos/next/"
            >
              Next.JS
            </a>{' '}
            de Platzi dictado por{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/jonalvarezz"
            >
              @jonalvarezz
            </a>
          </p>
          <div className={styles.social}>
            <List.Item
              icon="twitter"
              className={styles.icons}
              content={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/jmongedev"
                >
                  Twitter
                </a>
              }
            />
            <List.Item
              icon="github"
              className={styles.icons}
              content={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/jesusmongedev"
                >
                  Github
                </a>
              }
            />
          </div>
        </div>
      </footer>
      <Credits />
    </>
  )
}

export default Footer

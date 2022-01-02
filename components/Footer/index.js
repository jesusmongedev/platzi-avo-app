import Credits from "@components/Credits";
import React from "react";
import stlyes from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={stlyes.footer}>
      <div className={stlyes.links}>
        <h4>Nosotros</h4>
        <a href="">Conoce más</a>
      </div>
      <div className={stlyes.links}>
        <h4>Servicios</h4>
        <a href="">Todos los productos</a>
      </div>
      <div className={stlyes.links}>
        <h4>Hecho con 💚</h4>
        <a href="#">@JMongeDev</a>

        <p>
          Platzi y su curso de <a href="#">Next.JS</a> de Platzi dictado por{" "}
          <a href="#">@jonalvarezz</a>
        </p>
        <div>
          <p className={stlyes.social}>🕊️ Twitter</p>
          <p className={stlyes.social}>🐈‍⬛ GitHub</p>
        </div>
      </div>

      <Credits />
    </footer>
  );
};

export default Footer;

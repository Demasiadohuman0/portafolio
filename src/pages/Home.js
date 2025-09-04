import React from 'react';
import { Link } from 'react-router-dom';
import HomeSlider from "./HomeSlider";
import "../Reactbits/Aurora.css";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hola, Soy Bruce Elizalde</h1>
          <h3>Software Developer + IA Specialist</h3>
          <div className="btn-box">
            <a href="/contact">Contacto</a>
            <a href="/projects">Proyectos</a>
            <a href="https://wa.me/5216391280627" target="_blank">WhatsApp</a>
          </div>
        </div>

        <HomeSlider />

        </section>
        <div className="home-sci">
          <a href="https://www.facebook.com/share/1Ee3z6aEMG/" target="_blank"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/brusybby?igsh=MXh1d3dycjFhMndnMg==" target="_blank"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/demasiadohumanoofficial" target="_blank"><i className="bx bxl-linkedin"></i></a>
        </div>
    </div>
  );
};

export default Home;
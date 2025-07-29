import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">bruS.</a>
        <nav className="navbar">
          <Link to="/" className="active">Inicio</Link>
          <Link to="/about">Acerca de..</Link>
          <a href="#">Servicios</a>
          <a href="#">Proyectos</a>
          <Link to="/contact">Contacto</Link>
        </nav>
      </header>

      <section className="home">
        <div className="home-content">
          <h1>Hola, soy Bruce Elizalde</h1>
          <h3>Arquitecto de soluciones + IA</h3>
          <p>10 años de experiencia</p>
          <div className="btn-box">
            <a href="#">Escribeme</a>
            <a href="#">Cuentame de tus proyectos</a>
          </div>
        </div>

        <div className="home-sci">
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-twitter"></i></a>
          <a href="#"><i className="bx bxl-linkedin"></i></a>
        </div>

        <span className=""></span>
      </section>
    </div>
  );
};

export default Home;
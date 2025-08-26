import React from 'react';
import { Link } from 'react-router-dom';
import HomeSlider from "./HomeSlider";
import "../Reactbits/Aurora.css";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hello, im Bruce Elizalde</h1>
          <h3>Software Developer + IA Specialist</h3>
          <div className="btn-box">
            <a href="/contact">Contact</a>
            <a href="/projects">Projects</a>
            <a href='/about'>WhatsApp</a>
          </div>
        </div>

        <HomeSlider />

        </section>
        <div className="home-sci">
          <a href="https://www.facebook.com" target="_blank"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com" target="_blank"><i className="bx bxl-linkedin"></i></a>
        </div>
    </div>
  );
};

export default Home;
import React from 'react';
import ShinyText from '../Reactbits/ShinyText';
import SpotlightCard from '../Reactbits/SpotlightCard';
import './About.css';

const About = () => {
  return (
    <div class="home">
      <div className="about-container">
        <ShinyText text="
Me llamo Bruce Elizalde, soy software developer, mi carrera también incluye la exploración de entornos creativos y técnicos como el desarrollo de mods para videojuegos en Java y C++, lo que me permitió fortalecer mi capacidad de resolución de problemas en sistemas complejos. De igual manera, he trabajado en proyectos de diseño digital y multimedia, aplicando herramientas como Photoshop, Blender y FL Studio para branding, producción musical y creación de contenido.

En el ámbito académico, actualmente curso la Licenciatura en Psicología con especialidad en IT/AI en la Universidad Vizcaya de las Américas (2023-2027) y previamente estudié Ingeniería en Mecatrónica en la Universidad Tecnológica de Camargo (2019-2020). Mi formación se complementa con certificaciones de Meta en Ingeniería de Bases de Datos, Google en Ciencia de Datos (en proceso) y diversos programas de programación y cloud computing.

Me caracterizo por mi adaptabilidad a entornos tecnológicos cambiantes, capacidad de trabajo en equipo y liderazgo colaborativo. Mi enfoque es entregar resultados medibles mediante soluciones tecnológicas que aporten valor real a empresas y proyectos, siempre con un estándar profesional y creativo." disabled={false} speed={2} className='about-custom-class' />
      </div>
    </div>
  );
};

export default About;

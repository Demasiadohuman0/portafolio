import React from 'react';
import ShinyText from '../Reactbits/ShinyText';
import SpotlightCard from '../Reactbits/SpotlightCard';
import './Contact.css';

const Contact = () => {
  return (
    <div class="home">
      <div className="contact-container">
        <ShinyText text="En Itzun Labs dedicamos esfuerzo y pasion para cada uno de nuestros proyectos, tenemos nuestras metas claras, autenticidad, innovacion y cooperacion, deseamos ser tu primer opcion a la hora de requerir todo tipo de asesorias digital " disabled={false} speed={2} className='custom-class' />
        <SpotlightCard className="custom-spotlight-card" spotlightColor="#79e9ff44">
          <h1>Hablemos</h1> 
          <p>Si tienes alguna propuesta para un proyecto, escribeme, a continuacion tienes los links a mis redes sociales</p>
          <p>Email:</p>
          <p>Demasiadohumanoofficial@gmail.com</p>
                  <div className="contact-sci">
                    <a href="https://www.facebook.com"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.linkedin.com"><i className="bx bxl-linkedin"></i></a>
        </div>
        </SpotlightCard>
    </div>
  </div>
  );
};

export default Contact;

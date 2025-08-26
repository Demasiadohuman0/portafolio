import React, { useState, useEffect, useRef } from 'react';
import './ServicesSlider.css';

// (Mantenemos los mismos datos de servicios que ya tienes)
const servicesData = [
    { id: 1, name: 'Service 1', description: 'Description for service one.', image: 'url/de/tu/imagen1.jpg' },
    { id: 2, name: 'Service 2', description: 'Description for service two.', image: 'url/de/tu/imagen2.jpg' },
    { id: 3, name: 'Service 3', description: 'Description for service three.', image: 'url/de/tu/imagen3.jpg' },
    { id: 4, name: 'Service 4', description: 'Description for service four.', image: 'url/de/tu/imagen4.jpg' },
    { id: 5, name: 'Service 5', description: 'Description for service five.', image: 'url/de/tu/imagen5.jpg' },
    { id: 6, name: 'Service 6', description: 'Description for service six.', image: 'url/de/tu/imagen6.jpg' },
];

const ServicesSlider = () => {
  // Estado para saber cuál es el índice de la celda activa (la del centro)
  const [activeIndex, setActiveIndex] = useState(0);
  // Referencias para acceder a los elementos del DOM directamente
  const sliderRef = useRef(null);
  const cellRefs = useRef([]); // Un array para guardar la referencia de cada celda

  // -- CORRECCIÓN 1: Lógica para sincronizar el scroll con los puntos --
  // Este script observa las celdas y actualiza el punto activo automáticamente.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cuando una celda se vuelve visible, actualizamos el índice activo
            const index = cellRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      {
        root: sliderRef.current, // Observa dentro del contenedor del carrusel
        threshold: 0.7, // La celda debe estar 70% visible para considerarse activa
      }
    );

    // Le decimos al observador que vigile cada una de las celdas
    cellRefs.current.forEach((cell) => {
      if (cell) observer.observe(cell);
    });

    // Limpiamos el observador al desmontar el componente
    return () => {
      cellRefs.current.forEach((cell) => {
        if (cell) observer.unobserve(cell);
      });
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  // Función para hacer scroll a una celda específica al hacer clic en un punto
  const scrollToCell = (index) => {
    cellRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'center'
    });
  };
  
  // Script para el auto-avance del carrusel (no necesita cambios)
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % servicesData.length;
      scrollToCell(nextIndex);
    }, 20000); // 💡 Sigue siendo el lugar para ajustar el tiempo

    return () => clearInterval(interval);
  }, [activeIndex]);


  return (
    <div className="slider-wrapper">
      <div className="slider-container" ref={sliderRef}>
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            // -- CORRECCIÓN 2: Se agrega la clase 'active' dinámicamente --
            className={`slider-cell ${activeIndex === index ? 'active' : ''}`}
            ref={(el) => (cellRefs.current[index] = el)} // Guardamos la referencia de esta celda
          >
            <img src={service.image} alt={`Imagen de ${service.name}`} />
            <div className="text-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a>"Ver más"</a>
            </div>
          </div>
        ))}
      </div>

      <div className="dots-navigation">
        {servicesData.map((_, index) => (
          <button
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => scrollToCell(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlider;
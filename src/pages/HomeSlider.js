import React, { useState, useEffect, useRef } from 'react';
import "../Reactbits/Aurora.css";
import Lottieanimacion from './LottieAnimation';
import './HomeSlider.css';

// ✅ CORRECCIÓN 1: Importar todas las imágenes correctamente
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg"; // Añadir más imágenes según necesites
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/21.png";
import image5 from "../assets/images/22.png";
import image6 from "../assets/images/23.png";
import image7 from "../assets/images/24.png";

// ✅ CORRECCIÓN 2: Importar animaciones JSON directamente
import animation1 from "../assets/animations/animation1.json";

const homeData = [
    {
        id: 1,
        title: 'Desarrollo Web',
        description: 'Creación de aplicaciones web modernas y responsivas con React, Node.js y más.',
        type: "image",
        source: image4 // ✅ Usar la variable importada, no string
    },
    {
        id: 2,
        title: 'Inteligencia Artificial',
        description: 'Implementación de soluciones de IA para automatizar y optimizar procesos.',
        type: "image",
        source: image5 // ✅ Usar la variable importada, no string
    },
    {
        id: 3,
        title: 'Consultoría Tech',
        description: 'Asesoramiento técnico para llevar tus ideas a la realidad digital.',
        type: "image",
        source: image6 // ✅ Usar imagen importada
    },
    {
        id: 4,
        title: 'Proyectos Personalizados',
        description: 'Desarrollo de soluciones a medida según tus necesidades específicas.',
        type: "image",
        source: image7 // ✅ Usar imagen importada
    }
];

const HomeSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);
    const cellRefs = useRef([]);

    // ✅ CORRECCIÓN 3: Mejorar la función de renderizado con manejo de errores
    const renderVisualContent = (item) => {
        try {
            switch (item.type) {
                case "lottie":
                    if (!item.source) {
                        console.warn(`Animación Lottie no encontrada para item ${item.id}`);
                        return (
                            <div className="lottie-placeholder">
                                <p>Animación no disponible</p>
                            </div>
                        );
                    }
                    return (
                        <div className="home-lottie-container">
                            <Lottieanimacion
                                animacion={item.source}
                                ancho={item.lottieWidth || "250px"}
                                alto={item.lottieHeight || "200px"}
                            />
                        </div>
                    );
                
                case "image":
                default:
                    if (!item.source) {
                        console.warn(`Imagen no encontrada para item ${item.id}`);
                        return (
                            <div className="image-placeholder">
                                <p>Imagen no disponible</p>
                            </div>
                        );
                    }
                    return (
                        <div className="home-image-container">
                            <img 
                                src={item.source} 
                                alt={item.title}
                                onError={(e) => {
                                    console.error(`Error cargando imagen: ${item.title}`);
                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
                                }}
                                onLoad={() => {
                                    console.log(`Imagen cargada correctamente: ${item.title}`);
                                }}
                            />
                        </div>
                    );
            }
        } catch (error) {
            console.error(`Error renderizando contenido visual para ${item.title}:`, error);
            return (
                <div className="content-error">
                    <p>Error cargando contenido</p>
                </div>
            );
        }
    };

    // Sincronización del scroll con los puntos
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cellRefs.current.indexOf(entry.target);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                root: sliderRef.current,
                threshold: 0.7,
            }
        );

        cellRefs.current.forEach((cell) => {
            if (cell) observer.observe(cell);
        });

        return () => {
            cellRefs.current.forEach((cell) => {
                if (cell) observer.unobserve(cell);
            });
        };
    }, []);

    const scrollToCell = (index) => {
        cellRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'center'
        });
    };

    // Auto-avance del carrusel
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % homeData.length;
            scrollToCell(nextIndex);
        }, 4000); // Aumentamos a 4 segundos para mejor UX

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="home-slider-wrapper">
            <div className="home-slider-container" ref={sliderRef}>
                {homeData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`home-slider-cell ${activeIndex === index ? 'active' : ''}`}
                        ref={(el) => (cellRefs.current[index] = el)}
                    >
                        <div className="home-visual-content">
                            {renderVisualContent(item)}
                        </div>
                        <div className="home-text-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="home-dots-navigation">
                {homeData.map((_, index) => (
                    <button
                        key={index}
                        className={`home-dot ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => scrollToCell(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HomeSlider;
"use client"

import { useEffect, useRef } from "react"
import "./Services.css"

import image31 from "../assets/images/31.png";
import image32 from "../assets/images/32.png";
import image33 from "../assets/images/33.png";
import image34 from "../assets/images/34.png";
import image35 from "../assets/images/35.png";
import image36 from "../assets/images/36.png";
import image37 from "../assets/images/37.png";
import image38 from "../assets/images/38.png";
import image39 from "../assets/images/39.png";
import image40 from "../assets/images/40.png";
import image41 from "../assets/images/41.png";
import image42 from "../assets/images/42.png";

const Services = () => {
  const servicesRef = useRef(null)

  useEffect(() => {
    const serviceItems = document.querySelectorAll(".service-item")

    serviceItems.forEach((item, index) => {
      // Animación de entrada escalonada
      item.style.opacity = "0"
      item.style.transform = "translateY(20px)"

      setTimeout(() => {
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        item.style.opacity = "1"
        item.style.transform = "translateY(0)"
      }, index * 100)
    })

    // Efecto de hover mejorado para las áreas de texto
    const textAreas = document.querySelectorAll(".text-area")
    const imagePlaceholders = document.querySelectorAll(".image-placeholder")

    const handleTextAreaEnter = function () {
      this.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }

    const handleTextAreaLeave = function () {
      this.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }

    const handleImageEnter = function () {
      this.style.backgroundColor = "transparent"
    }

    const handleImageLeave = function () {
      this.style.backgroundColor = "transparent"
    }

    textAreas.forEach((textArea) => {
      textArea.addEventListener("mouseenter", handleTextAreaEnter)
      textArea.addEventListener("mouseleave", handleTextAreaLeave)
    })

    imagePlaceholders.forEach((placeholder) => {
      placeholder.addEventListener("mouseenter", handleImageEnter)
      placeholder.addEventListener("mouseleave", handleImageLeave)
    })

    // Cleanup function
    return () => {
      textAreas.forEach((textArea) => {
        textArea.removeEventListener("mouseenter", handleTextAreaEnter)
        textArea.removeEventListener("mouseleave", handleTextAreaLeave)
      })

      imagePlaceholders.forEach((placeholder) => {
        placeholder.removeEventListener("mouseenter", handleImageEnter)
        placeholder.removeEventListener("mouseleave", handleImageLeave)
      })
    }
  }, [])

  const handleFixedButtonClick = () => {
    alert("¡Botón fijo clickeado!")
    // Aquí puedes agregar la funcionalidad que necesites
  }

  const services = [
    {
      title: "Java",
      description:
        "Lenguaje robusto y multiplataforma, ideal para aplicaciones empresariales y sistemas complejos. Lo utilicé en proyectos académicos para implementar lógica estructurada y soluciones escalables. Su portabilidad y gran comunidad lo hacen una base sólida en el desarrollo de software.",   
      image: image35
      },    
        {
      title: "Javascript",
      description:
        "El estándar para aplicaciones web interactivas. Lo usé para desarrollar CRUDs, integrar APIs y mejorar la experiencia del usuario en interfaces dinámicas. Su versatilidad en frontend y backend lo convierte en una herramienta clave para proyectos modernos.",
      image: image36
      },
    {
      title: "Typescript",
      description:
        "Extiende JavaScript con tipado fuerte, lo que facilita la detección de errores y mejora la escalabilidad. Lo apliqué en proyectos como el Spotify Clone, optimizando módulos y garantizando un código más limpio y mantenible. Es esencial en proyectos de mediana y gran escala.",
      image: image41    
      },
    {
      title: "Node.js",
      description:
        "Permite usar JavaScript en el backend con gran eficiencia. Lo utilicé para crear servidores, manejar rutas y conectar bases de datos. Su modelo asincrónico es ideal para aplicaciones rápidas y escalables.",
      image: image38
      },
    {
      title: "C#",
      description:
        "Lenguaje orientado a objetos ampliamente usado en entornos Microsoft. Lo utilicé en proyectos académicos y pruebas de software para fortalecer la lógica de programación estructurada. Su integración con .NET lo hace valioso en aplicaciones empresariales.",
      image: image31
      },
    {
      title: "C++",
      description:
        "Lenguaje de alto rendimiento usado en sistemas, videojuegos y aplicaciones donde la eficiencia es crítica. Lo empleé en mis estudios de mecatrónica para programación de bajo nivel y control de hardware. Su potencia lo convierte en un pilar de la programación avanzada.",
      image: image33
      },
    {
      title: "Pyhton",
      description:
        "Lenguaje versátil y claro, muy usado en ciencia de datos e inteligencia artificial. Lo trabajé con Jupyter Notebook, aplicándolo en análisis de datos y automatización. Su simpleza lo hace perfecto para prototipos rápidos y soluciones de IA.",
      image: image39
      },
    {
      title: "HTML",
      description:
        "El esqueleto de cualquier página web. Lo utilicé para estructurar proyectos web, garantizando compatibilidad y una base sólida para integrar CSS y JavaScript. Esencial para todo desarrollo frontend.",
      image: image34
      },
    {
      title: "CSS",
      description:
        "Lenguaje para diseño y presentación web. Lo apliqué para dar estilo y coherencia visual a interfaces, logrando un aspecto profesional y responsive en distintos dispositivos.",
      image: image32
      },
    {
      title: "TailwindCSS",
      description:
        "Framework moderno de CSS que acelera el diseño con utilidades predefinidas. Lo usé en el Spotify Clone y en sitios para clientes, logrando interfaces limpias y consistentes en menos tiempo de desarrollo.",
      image: image42
      },
    {
      title: "React",
      description:
        "Biblioteca de JavaScript para crear interfaces dinámicas y modulares. Lo utilicé en proyectos como Spotify Clone, estructurando componentes reutilizables y mejorando la experiencia de usuario. Su eficiencia lo hace indispensable en el desarrollo web actual.",
      image: image40
      },
    {
      title: "NextJS",
      description:
        "Framework sobre React que añade renderizado del lado del servidor y optimización SEO. Lo he usado en prototipos para mejorar rendimiento y escalabilidad. Ideal para aplicaciones modernas con gran tráfico.",
      image: image31
      },
    {
      title: "JupyterNotebook",
      description:
        "Entorno interactivo usado en ciencia de datos. Lo utilicé en prácticas de análisis y visualización, documentando procesos paso a paso. Es útil para investigación, pruebas de IA y reportes técnicos claros.",
      image: image37
      },
]

  return (
    <>
      {/* Botón rojo fijo en la parte superior */}
      <button className="fixed-button" onClick={handleFixedButtonClick}>
        My CV
      </button>

      {/* Área principal de la página */}
      <div className="page-container">
        {/* Área morada con scroll para los servicios */}
        <div className="services-container" ref={servicesRef}>
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="text-area">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="image-placeholder">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services;

"use client"
import { useState } from "react"
import "./ProjectsGallery.css"

const ProjectsGallery = ({ projects = [] }) => {
  // Estado para manejar la imagen actual de cada proyecto
  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.reduce((acc, _, index) => {
      acc[index] = 0
      return acc
    }, {}),
  )

  // Estado para el modal de imagen - AGREGADO para funcionalidad de vista principal
  const [modalImage, setModalImage] = useState(null)

  // Función para cambiar imagen anterior
  const previousImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: prev[projectIndex] > 0 ? prev[projectIndex] - 1 : projects[projectIndex].images.length - 1,
    }))
  }

  // Función para cambiar imagen siguiente
  const nextImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: prev[projectIndex] < projects[projectIndex].images.length - 1 ? prev[projectIndex] + 1 : 0,
    }))
  }

  // Función para abrir imagen en modal - AGREGADO para vista principal
  const openImageModal = (imageSrc, projectTitle, imageIndex) => {
    setModalImage({
      src: imageSrc,
      alt: `${projectTitle} - Imagen ${imageIndex + 1}`,
    })
  }

  // Función para cerrar modal - AGREGADO para cerrar vista principal
  const closeImageModal = () => {
    setModalImage(null)
  }

  // Datos por defecto si no se proporcionan proyectos
  const defaultProjects = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    title: `Proyecto ${index + 1}`,
    description: `Descripción del proyecto ${index + 1}. Este es un ejemplo de texto que describe las características principales del proyecto.`,
    images: ["/abstract-geometric-shapes.png", "/abstract-geometric-shapes.png", "/abstract-geometric-sculpture.png"],
    link: `#proyecto-${index + 1}`,
  }))

  const projectsToRender = projects.length > 0 ? projects : defaultProjects

  return (
    <div className="projects-gallery">
      <div className="projects-container">
        {projectsToRender.map((project, index) => (
          <div key={project.id} className="project-card">
            <div className="image-container">
              <div className="image-wrapper">
                <img
                  src={project.images[currentImageIndex[index] || 0]}
                  alt={`${project.title} - Imagen ${(currentImageIndex[index] || 0) + 1}`}
                  className="project-image"
                  onClick={() =>
                    openImageModal(
                      project.images[currentImageIndex[index] || 0],
                      project.title,
                      currentImageIndex[index] || 0,
                    )
                  }
                />
              </div>
              {/* Botones de navegación de imágenes */}
              <button
                className="tav-button prev-button"
                onClick={() => previousImage(index)}
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              <button className="tav-button next-button" onClick={() => nextImage(index)} aria-label="Imagen siguiente">
                ›
              </button>
              {/* Indicadores de imagen */}
              <div className="image-indicators">
                {project.images.map((_, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`indicator ${(currentImageIndex[index] || 0) === imgIndex ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
            <div className="content-area">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para vista principal de imagen - AGREGADO componente modal completo */}
      {modalImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.src || "/placeholder.svg"} alt={modalImage.alt} className="modal-image" />
            <button className="close-modal-button" onClick={closeImageModal} aria-label="Cerrar imagen">
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsGallery

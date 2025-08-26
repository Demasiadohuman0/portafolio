"use client"
import { useState } from "react"
import { Link, Router, useNavigate } from "react-router-dom";
import "./Navbar.css"

/**
 * Componente Navbar global reutilizable
 * Incluye menú desplegable con animación desde la izquierda
 * Ahora contiene 3 botones: Menú, Inicio/Logo, y Pendiente
 */
const Navbar = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para alternar el estado del menú (abrir/cerrar)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para manejar el botón de inicio - navega a home
  const handleHomeClick = () => {
    // Aquí puedes agregar lógica adicional si es necesario
    console.log("Navegando a inicio")
  }

  // Función para manejar el tercer botón - funcionalidad pendiente
  const handlePendingClick = () => {
    // Funcionalidad pendiente por definir
    console.log("Botón pendiente - funcionalidad por definir")
  }

  // Array con los elementos del menú y sus rutas correspondientes
  const menuItems = [
    { name: "- Home", route: "/Home" },
    { name: "- Projects", route: "/Projects" },
    { name: "- Services", route: "/Services" },
    { name: "- Contact", route: "/Contact" },
    { name: "- About", route: "/About" },
  ]

  return (
    <>
      {/* Contenedor principal del navbar */}
      <nav className="navbar">
        {/* Botón 1: Menú - círculo azul con ícono de menú */}
        <button className="nav-button menu-button" onClick={toggleMenu} aria-label="Abrir/Cerrar menú">
          <i className="bx bx-menu"></i>
        </button>

        {/* Botón 2: Inicio/Logo - círculo azul con ícono de home */}
        <Link to="/Home" className="nav-button home-button" onClick={handleHomeClick} aria-label="Ir a inicio">
          <i className="bx bx-home"></i>
        </Link>

        {/* Botón 3: Pendiente - círculo azul con ícono temporal */}
        <button className="nav-button pending-button" onClick={handlePendingClick} aria-label="Funcionalidad pendiente">
          <i className="bx bx-dots-horizontal-rounded"></i>
        </button>

        {/* Elementos decorativos - círculos turquesa */}
        <div className="decorative-circles">
          <div className="circle turquoise"></div>
          <div className="circle turquoise"></div>
        </div>
      </nav>

      {/* Overlay oscuro que aparece cuando el menú está abierto */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      {/* Menú desplegable - panel gris */}
      <div className={`dropdown-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Título del menú */}
        <h2 className="menu-title">Menu</h2>

        {/* Lista de elementos de navegación */}
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <Link
                to={item.route}
                className="menu-link"
                onClick={toggleMenu} // Cerrar menú al hacer click en un enlace
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar;
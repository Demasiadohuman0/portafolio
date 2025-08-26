
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="logo">bruS.</a>
      <nav className="navbar">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/about">Acerca de..</NavLink>
        <NavLink to="/services">Servicios</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </nav>
    </header>
  );
};

export default Header;

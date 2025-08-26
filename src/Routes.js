import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundWrapper from './components/BackgroundWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={
          <BackgroundWrapper><Home />
          </BackgroundWrapper>
        } 
      />
        <Route path="/about" element={
          <BackgroundWrapper><About />
          </BackgroundWrapper>
        } 
      />
        <Route path="/contact" element={
          <BackgroundWrapper>
            <Contact />
            </BackgroundWrapper>
        } 
      />
        <Route path="/services" element={
          <BackgroundWrapper>
          <Services />
          </BackgroundWrapper>
        }
      />
        <Route path="/projects" element={
          <BackgroundWrapper>
            <Projects />
            </BackgroundWrapper>
        }
      />
      </Routes>
  );
};

export default AppRoutes;

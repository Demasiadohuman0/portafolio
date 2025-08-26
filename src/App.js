import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./Routes";
import "./App.css";
import './components/BackgroundWrapper.css';
import './Reactbits/Aurora.css';
import Aurora from './Reactbits/Aurora';

function App() {
  return (
    <Router>
      <Aurora />
      <div className="App">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
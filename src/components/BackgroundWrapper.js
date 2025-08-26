import React from 'react';
import { useLocation } from 'react-router-dom';
//importaciones de react-bites
import './BackgroundWrapper.css'; 
import Aurora from '../Reactbits/Aurora';

const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  //Funcion para determinar la clase CSS del plugin
  const getBackgroundClass = () => {
    switch (location.pathname) {
      case '/':
        return 'bg-home';
      case '/about':
        return 'bg-about';
      case '/contact':
        return 'bg-contact';
      case '/services':
        return 'bg-services';
      case '/projects':
        return 'bg-projects';
      default:
        return 'bg-default';
    }
  };

  //Funcion para background
  const renderReactbitsBackground = () => {
    switch (location.pathname) {
      case '/':
        return (
            <div className="react-bits-bg home-bg">
                <Aurora />
            </div>
        );
        case '/about':
        return (
            <div className="react-bits-bg about-bg">
                <Aurora />
            </div>
        );
        case '/contact':
        return (
            <div className="react-bits-bg contact-bg">
                <Aurora />
            </div>
        );
        case '/services':
        return (
            <div className="react-bits-bg services-bg">
                <Aurora />
            </div>
        );
        case '/projects':
        return (
            <div className="react-bits-bg projects-bg">
                <Aurora />
            </div>
        );
        default:
        return (
            <div className="react-bits-bg default-bg">
                <Aurora />
              </div>
        );
    }
  };
//
  return (
    <div className={"background-wrapper ${getPageClass()}"}>
    {renderReactbitsBackground}
        <div className="page-content-wrapper">
            {children}
        </div>
    </div>
    );
};

export default BackgroundWrapper;

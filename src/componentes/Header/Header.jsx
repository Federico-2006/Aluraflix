import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <img src="/img/Header.png" alt="Header" className="imagen-header" />
      </header>

      <div className="banner">
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/ra5ojn-Ax7U?modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          <div className="texto-container">
            <img src="/img/Titulo.png" alt="imagen titulo" />
            <div className="titulo">
              <h1>Challenge React</h1>
            </div>
            <div className="texto">
              <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
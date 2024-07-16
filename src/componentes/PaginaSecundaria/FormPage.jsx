import React, { useState, useContext } from 'react';
import { VideoContext } from '../../componentes/Video/VideoContext';
import { Link } from 'react-router-dom';
import './FormPage.css';

const FormPage = () => {
  const { addVideo } = useContext(VideoContext);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    console.log('Form data:', formData);
  };

  const handleReset = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: ''
    });
  };

  return (
    <div className='fondo'>
      <header className="header">
        <img src="/img/Header.png" alt="Header" className="imagen-header" />
        <div className='button-container'>
          <Link to='/'>
            <button className='header-button button-image3'></button>
          </Link>
          <Link to='/form'>
            <button className='header-button button-image4'></button>
          </Link>
        </div>
      </header>
      <div className='titulo-parte-superior'>
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Título</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ingrese el título"
            required
          />
        </label>
        <label>
          <p>Categoría</p>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>Seleccione una categoría</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Innovación">Innovación y Gestión</option>
          </select>
        </label>
        <label>
          <p>Imagen</p>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Ingrese el enlace de la imagen"
            required
          />
        </label>
        <label>
          <p>Video</p>
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="Ingrese el enlace del video"
            required
          />
        </label>
        
        <div className='button-container2'>
          <button className='header-button button-image5' type="submit"></button>
          <button className='header-button button-image6' type="button" onClick={handleReset}></button>
        </div>
      </form>
      <footer className="footer">
        <img src="/img/Footer.png" alt="Footer" className="imagen-footer" />
      </footer>
    </div>
  );
};

export default FormPage;



import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from "./componentes/Header/Header";
import HomePage from './componentes/HomePage';
import FormPage from './componentes/PaginaSecundaria/FormPage';
import { VideoProvider } from './componentes/Video/VideoContext.jsx';

const App = () => {
  return (
    <VideoProvider>
      <Router>
        <MainContent />
      </Router>
    </VideoProvider>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isFormPage = location.pathname === '/form';

  return (
    <div className='app'>
      {!isFormPage && (
        <div className='button-container'>
          <button className='header-button button-image1'></button>
          <ButtonWithNavigate className='header-button button-image2' path='/form' />
        </div>
      )}
      {!isFormPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
};

const ButtonWithNavigate = ({ className, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button className={className} onClick={handleClick}></button>
    
  );
};

export default App;


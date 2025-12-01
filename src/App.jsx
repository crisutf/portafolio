import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Socials from './components/Socials';
import ErrorPage from './components/ErrorPage';

function MainContent() {
  const location = useLocation();

  // Reset scroll when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <div className="snap-section">
        <Hero />
        <Socials />
        <ProjectList />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/403" element={<ErrorPage code={403} title="Acceso Prohibido" message="No tienes permiso para acceder a esta página." />} />
        <Route path="/401" element={<ErrorPage code={401} title="No Autorizado" message="Necesitas iniciar sesión para ver este contenido." />} />
        <Route path="*" element={<ErrorPage code={404} title="Página No Encontrada" message="Lo sentimos, la página que buscas no existe." />} />
      </Routes>
    </Router>
  );
}

export default App;

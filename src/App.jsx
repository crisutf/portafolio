import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import ProjectfSection from './components/ProjectfSection';
import Socials from './components/Socials';
import ErrorPage from './components/ErrorPage';

function MainContent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const projectfRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (projectfRef.current) {
        const rect = projectfRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          setIsDarkMode(true);
        } else {
          setIsDarkMode(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

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
      <div ref={projectfRef} className="snap-section">
        <ProjectfSection />
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

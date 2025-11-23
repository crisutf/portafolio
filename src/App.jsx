import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import ProjectfSection from './components/ProjectfSection';
import Socials from './components/Socials';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const projectfRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (projectfRef.current) {
        const rect = projectfRef.current.getBoundingClientRect();
        // If the top of the Projectf section is within the viewport (or close to it)
        // Switch to dark mode.
        // Let's trigger it when the section is halfway up the screen or just entering.
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

  return (
    <div className="app">
      <Hero />
      <Socials />
      <ProjectList />
      <div ref={projectfRef}>
        <ProjectfSection />
      </div>
    </div>
  );
}

export default App;

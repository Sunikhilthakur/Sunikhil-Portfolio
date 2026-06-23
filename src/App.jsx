import React, { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import StyleSwitcher from './components/StyleSwitcher';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="main-container">
      {/* Sidebar Navigation */}
      <Aside 
        activeSection={activeSection} 
        isAsideOpen={isAsideOpen} 
        setIsAsideOpen={setIsAsideOpen} 
      />

      {/* Main Sections */}
      <div className="main-content">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>

      {/* Theme Switcher Widget */}
      <StyleSwitcher />
    </div>
  );
}

export default App;

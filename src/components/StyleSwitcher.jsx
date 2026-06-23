import React, { useState, useEffect } from 'react';

const StyleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check local storage or system preferences
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return document.body.classList.contains('dark');
  });

  const [activeSkin, setActiveSkin] = useState(() => {
    return localStorage.getItem('skin-color') || '#ec1839'; // Default is color-1
  });

  const colors = [
    { name: 'color-1', hex: '#ec1839' },
    { name: 'color-2', hex: '#5ae2ae' },
    { name: 'color-3', hex: '#8779e1' },
    { name: 'color-4', hex: '#4A90A0' },
    { name: 'color-5', hex: '#E36495' }
  ];

  // Apply dark mode class
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Apply skin color property
  useEffect(() => {
    document.documentElement.style.setProperty('--skin-color', activeSkin);
    localStorage.setItem('skin-color', activeSkin);
  }, [activeSkin]);

  // Close switcher on click outside / scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const handleColorChange = (hex) => {
    setActiveSkin(hex);
  };

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div 
        className="style-switcher-toggler s-icon" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div 
        className="day-night s-icon" 
        onClick={() => setIsDark(!isDark)}
      >
        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {colors.map((color) => (
          <span 
            key={color.name}
            className={color.name} 
            onClick={() => handleColorChange(color.hex)}
            style={{ cursor: 'pointer', border: activeSkin === color.hex ? '2px solid var(--text-black-900)' : 'none' }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;

import React from 'react';

const Aside = ({ activeSection, isAsideOpen, setIsAsideOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'services', label: 'Services', icon: 'fa-list' },
    { id: 'portfolio', label: 'Projects', icon: 'fa-briefcase' },
    { id: 'contact', label: 'Contact', icon: 'fa-comments' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsAsideOpen(false); // Close sidebar on mobile select
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`aside ${isAsideOpen ? 'open' : ''}`}>
      <div className="logo">
        <a href="#home"><span>Sunikhil</span></a>
      </div>

      <div 
        className={`nav-toggler ${isAsideOpen ? 'open' : ''}`}
        onClick={() => setIsAsideOpen(!isAsideOpen)}
      >
        <span></span>
      </div>

      <ul className="nav">
        {navItems.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <i className={`fa ${item.icon}`}></i>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;

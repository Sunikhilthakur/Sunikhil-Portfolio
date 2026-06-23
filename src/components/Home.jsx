import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "AI & NLP Engineer",
        "Full-Stack Developer",
        "Aspiring Researcher",
        "ML Systems Builder",
        "Problem Solver"
      ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleHireMeClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">Hey there! I'm <span className="name">Sunikhil Thakur</span></h3>
            <h3 className="my-profission">
              I'm a <span ref={el} className="typing"></span>
            </h3>
            <br />
            <p>
              Computer Science graduate (CGPA 8.91/10, Chitkara University, 2025) with industry experience 
              building AI-powered applications, NLP pipelines, and full-stack systems. My research interests span 
              cross-lingual natural language processing, multilingual information retrieval, retrieval-augmented 
              generation, and machine learning for time-series data.
              <br /><br />
              I am aspiring to pursue advanced research in these areas, contributing work that is technically 
              rigorous and practically meaningful. Let's make something impactful together!
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '10px' }}>
              <a href="#contact" className="btn hire-me" onClick={handleHireMeClick}>Contact Me</a>
              <a 
                href="https://github.com/Sunikhilthakur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn outlined-btn"
                style={{ marginTop: '20px', marginBottom: '20px' }}
              >
                <i className="fab fa-github" style={{ marginRight: '8px' }}></i>GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sunikhil-thakur-022813227/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn outlined-btn"
                style={{ marginTop: '20px', marginBottom: '20px' }}
              >
                <i className="fab fa-linkedin" style={{ marginRight: '8px' }}></i>LinkedIn
              </a>
            </div>
          </div>
          <div className="home-img padd-15">
            <div className="half-circle"></div>
            <img src="images/my_professional.png" alt="Sunikhil Thakur" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
